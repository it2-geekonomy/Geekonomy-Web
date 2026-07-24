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
  type ThreadMapEntry,
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
  thread: ThreadMapEntry,
  reply: GraphMessage
): Promise<boolean> {
  if (!reply.id) return false;

  // Re-read map so concurrent workers see each other's claimed ids
  const fresh =
    (await getByTeamsMessageId(thread.teamsMessageId)) || thread;
  const seen = new Set(fresh.syncedReplyIds || []);
  if (seen.has(reply.id)) return false;

  seen.add(reply.id);
  const claimed = await upsertThreadMap({
    ...fresh,
    syncedReplyIds: [...seen],
  });
  thread.syncedReplyIds = claimed.syncedReplyIds;

  try {
    return await pushReplyToChatwoot(
      config,
      claimed.chatwootConversationId,
      reply
    );
  } catch (error) {
    const rollback = (claimed.syncedReplyIds || []).filter(
      (id) => id !== reply.id
    );
    await upsertThreadMap({
      ...claimed,
      syncedReplyIds: rollback,
    });
    throw error;
  }
}

/** Find a reply by id across all mapped Teams threads (Graph often omits parent). */
async function findReplyInMappedThreads(
  config: GraphBridgeConfig,
  replyId: string
): Promise<{ thread: ThreadMapEntry; reply: GraphMessage } | null> {
  const threads = await listThreadMaps();
  for (const thread of threads) {
    try {
      const replies = await listMessageReplies(config, thread.teamsMessageId);
      const reply = replies.find((r) => r.id === replyId);
      if (reply) return { thread, reply };
    } catch (error) {
      console.warn(
        "listMessageReplies failed for",
        thread.teamsMessageId,
        error
      );
    }
  }
  return null;
}

/** Backup / primary sweep: all mapped threads → Chatwoot. */
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
  let message = await fetchChannelMessageOrReply(config, ids);

  // Graph often notifies with only the reply id (no /replies/ parent in resource).
  // /messages/{replyId} may 404 or omit replyToId — search mapped threads.
  if (!message?.id || !(message.replyToId || ids.rootMessageId)) {
    const found = await findReplyInMappedThreads(config, ids.messageId);
    if (found) {
      if ((found.thread.syncedReplyIds || []).includes(found.reply.id)) {
        return { synced: false, reason: "already_synced" };
      }
      const pushed = await claimAndPushReply(
        config,
        found.thread,
        found.reply
      );
      return { synced: pushed, reason: pushed ? "ok" : "skipped_content" };
    }
  }

  if (!message?.id) {
    return { synced: false, reason: "message_not_found" };
  }

  if (message.from?.application) {
    return { synced: false, reason: "application_message" };
  }

  const rootId = message.replyToId || ids.rootMessageId;
  if (!rootId) {
    // Root channel message (new website thread) — ignore
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
 * Process Graph change + lifecycle notifications.
 * Always ends with a full thread sweep so a flaky single-message fetch
 * cannot drop agent replies (the failure mode we kept hitting).
 */
export async function processGraphNotifications(
  config: GraphBridgeConfig,
  items: GraphNotificationItem[],
  options: {
    expectedClientState: string;
    renewSubscription: () => Promise<unknown>;
  }
): Promise<void> {
  let sawMessageCreate = false;

  for (const item of items) {
    if (item.clientState !== options.expectedClientState) {
      console.warn("Graph notification rejected: clientState mismatch", {
        got: item.clientState,
      });
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
    sawMessageCreate = true;

    const parsed =
      parseChannelMessageResource(item.resource || "") ||
      (item.resourceData?.id
        ? { messageId: item.resourceData.id }
        : null);

    if (!parsed) {
      console.warn("Graph notification missing message id", item.resource);
      continue;
    }

    try {
      const result = await syncMessageFromNotification(config, parsed);
      console.info("Graph notification sync:", { ...parsed, ...result });
    } catch (error) {
      console.error("Graph notification sync failed:", error);
    }
  }

  // Proven path: sweep all mapped threads on any channel activity.
  // Catches replies whose resource path/id Graph delivers oddly.
  if (sawMessageCreate) {
    try {
      const sweep = await syncAllThreadReplies(config);
      console.info("Graph notification sweep:", sweep);
    } catch (error) {
      console.error("Graph notification sweep failed:", error);
    }
  }
}
