import type { GraphBridgeConfig } from "./config";
import { sendChatwootOutgoingMessage } from "./chatwoot";
import {
  fetchChannelMessageOrReply,
  listMessageReplies,
  parseChannelMessageResource,
  stripHtml,
  type GraphMessage,
  type ParsedMessageResource,
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
  if (reply.from?.application) return false;

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

/**
 * Claim reply id before Chatwoot POST so concurrent workers don't double-post.
 * On Chatwoot failure the claim is rolled back so poll can retry.
 */
async function claimAndPushReply(
  config: GraphBridgeConfig,
  thread: {
    chatwootConversationId: string;
    teamsMessageId: string;
    contactName?: string;
    syncedReplyIds?: string[];
  },
  reply: GraphMessage
): Promise<boolean> {
  if (!reply.id) return false;

  const seen = new Set(thread.syncedReplyIds || []);
  if (seen.has(reply.id)) return false;

  seen.add(reply.id);
  const claimed = await upsertThreadMap({
    ...thread,
    syncedReplyIds: [...seen],
  });

  try {
    return await pushReplyToChatwoot(
      config,
      claimed.chatwootConversationId,
      reply
    );
  } catch (error) {
    seen.delete(reply.id);
    await upsertThreadMap({
      ...claimed,
      syncedReplyIds: [...seen],
    });
    throw error;
  }
}

/** Backup sweep: all mapped threads → Chatwoot (poll / miss recovery). */
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
      const localIds = new Set(thread.syncedReplyIds || []);

      for (const reply of replies) {
        if (!reply.id || localIds.has(reply.id)) continue;

        const pushed = await claimAndPushReply(config, thread, reply);
        localIds.add(reply.id);
        thread.syncedReplyIds = [...localIds];
        if (pushed) synced += 1;
      }
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
 * Fast path for Graph change notifications: one message → one Chatwoot reply.
 */
export async function syncMessageFromNotification(
  config: GraphBridgeConfig,
  ids: ParsedMessageResource
): Promise<{ synced: boolean; reason?: string }> {
  const message = await fetchChannelMessageOrReply(config, ids);
  if (!message?.id) {
    return { synced: false, reason: "message_not_found" };
  }

  if (message.from?.application) {
    return { synced: false, reason: "application_message" };
  }

  const rootId = message.replyToId || ids.rootMessageId;
  if (!rootId) {
    return { synced: false, reason: "root_message" };
  }

  const mapped = await getByTeamsMessageId(rootId);
  if (!mapped) {
    return { synced: false, reason: "unmapped_thread" };
  }

  if ((mapped.syncedReplyIds || []).includes(message.id)) {
    return { synced: false, reason: "already_synced" };
  }

  const pushed = await claimAndPushReply(config, mapped, message);
  return { synced: pushed, reason: pushed ? "ok" : "skipped_content" };
}

export type GraphNotificationItem = {
  subscriptionId?: string;
  clientState?: string;
  changeType?: string;
  resource?: string;
  lifecycleEvent?: string;
  resourceData?: { id?: string };
};

/**
 * Process Graph change + lifecycle notifications (runs after 202 ack).
 */
export async function processGraphNotifications(
  config: GraphBridgeConfig,
  items: GraphNotificationItem[],
  options: {
    expectedClientState: string;
    renewSubscription: () => Promise<unknown>;
  }
): Promise<void> {
  let needsFullSweep = false;

  for (const item of items) {
    if (item.clientState !== options.expectedClientState) {
      console.warn("Graph notification rejected: clientState mismatch");
      continue;
    }

    if (item.lifecycleEvent) {
      console.info("Graph lifecycle:", item.lifecycleEvent);
      try {
        await options.renewSubscription();
      } catch (error) {
        console.error("Lifecycle renew failed:", error);
      }
      continue;
    }

    if (item.changeType !== "created") continue;

    const parsed =
      parseChannelMessageResource(item.resource || "") ||
      (item.resourceData?.id
        ? { messageId: item.resourceData.id }
        : null);

    if (!parsed) {
      console.warn("Graph notification missing message id", item.resource);
      needsFullSweep = true;
      continue;
    }

    try {
      const result = await syncMessageFromNotification(config, parsed);
      console.info("Graph notification sync:", { ...parsed, ...result });

      if (result.reason === "message_not_found") {
        needsFullSweep = true;
      }
    } catch (error) {
      console.error("Graph notification sync failed:", error);
      needsFullSweep = true;
    }
  }

  if (needsFullSweep) {
    try {
      const sweep = await syncAllThreadReplies(config);
      console.info("Graph notification fallback sweep:", sweep);
    } catch (error) {
      console.error("Graph notification fallback sweep failed:", error);
    }
  }
}
