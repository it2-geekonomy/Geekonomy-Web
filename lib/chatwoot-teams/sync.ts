import type { GraphBridgeConfig } from "./config";
import { sendChatwootOutgoingMessage } from "./chatwoot";
import {
  getChannelMessage,
  listMessageReplies,
  stripHtml,
  type GraphMessage,
} from "./graph";
import {
  getByTeamsMessageId,
  listThreadMaps,
  upsertThreadMap,
} from "./mapping";

function shouldSkipText(text: string): boolean {
  return (
    text.includes("Conversation ID:") && text.includes("New website chat")
  );
}

async function pushReplyToChatwoot(
  config: GraphBridgeConfig,
  chatwootConversationId: string,
  reply: GraphMessage
): Promise<boolean> {
  const text = stripHtml(reply.body?.content || "");
  if (!text || shouldSkipText(text)) return false;

  const fromName = reply.from?.user?.displayName || "Agent";
  await sendChatwootOutgoingMessage(
    config,
    chatwootConversationId,
    `${fromName}: ${text}`
  );
  return true;
}

/** Sync all known Teams threads → Chatwoot (used by poll + notifications). */
export async function syncAllThreadReplies(config: GraphBridgeConfig): Promise<{
  threads: number;
  synced: number;
  errors: string[];
}> {
  const threads = await listThreadMaps();
  let synced = 0;
  const errors: string[] = [];

  for (const thread of threads) {
    try {
      const replies = await listMessageReplies(config, thread.teamsMessageId);
      const seen = new Set(thread.syncedReplyIds || []);

      for (const reply of replies) {
        if (!reply.id || seen.has(reply.id)) continue;
        const pushed = await pushReplyToChatwoot(
          config,
          thread.chatwootConversationId,
          reply
        );
        seen.add(reply.id);
        if (pushed) synced += 1;
      }

      await upsertThreadMap({
        ...thread,
        syncedReplyIds: [...seen],
      });
    } catch (error) {
      errors.push(
        `${thread.chatwootConversationId}: ${
          error instanceof Error ? error.message : "failed"
        }`
      );
    }
  }

  return { threads: threads.length, synced, errors };
}

/**
 * Handle a single channel message id from Graph notifications.
 * Root messages are ignored; replies are pushed to Chatwoot.
 */
export async function syncMessageFromNotification(
  config: GraphBridgeConfig,
  messageId: string
): Promise<{ synced: boolean; reason?: string }> {
  const message = await getChannelMessage(config, messageId);
  if (!message?.id) {
    return { synced: false, reason: "message_not_found" };
  }

  const rootId = message.replyToId;
  if (!rootId) {
    // New root chat thread from website — already handled by Chatwoot webhook
    return { synced: false, reason: "root_message" };
  }

  const mapped = await getByTeamsMessageId(rootId);
  if (!mapped) {
    return { synced: false, reason: "unmapped_thread" };
  }

  const seen = new Set(mapped.syncedReplyIds || []);
  if (seen.has(message.id)) {
    return { synced: false, reason: "already_synced" };
  }

  const pushed = await pushReplyToChatwoot(
    config,
    mapped.chatwootConversationId,
    message
  );
  seen.add(message.id);
  await upsertThreadMap({
    ...mapped,
    syncedReplyIds: [...seen],
  });

  return { synced: pushed, reason: pushed ? "ok" : "skipped_content" };
}
