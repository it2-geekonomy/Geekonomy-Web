import type { GraphBridgeConfig } from "@/lib/chatwoot-teams/config";
import { getGraphBridgeConfig } from "@/lib/chatwoot-teams/config";
import {
  listMessageReplies,
  postChannelMessage,
  replyToChannelMessage,
  stripHtml,
} from "@/lib/chatwoot-teams/graph";
import { ensureChannelSubscription } from "@/lib/chatwoot-teams/subscriptions";
import {
  addAgentMessageFromTeams,
  getConversation,
  listConversations,
  updateConversationTeamsLink,
  type ChatConversation,
} from "@/lib/chat/store";

export function getTeamsConfig(): GraphBridgeConfig | null {
  return getGraphBridgeConfig();
}

function shouldSkipTeamsText(text: string): boolean {
  return (
    text.includes("Conversation ID:") && text.includes("New website chat")
  );
}

/** Serialize sync per conversation inside one server instance */
const syncLocks = new Map<string, Promise<unknown>>();

async function withConversationLock<T>(
  conversationId: string,
  fn: () => Promise<T>
): Promise<T> {
  const previous = syncLocks.get(conversationId) || Promise.resolve();
  let release!: () => void;
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  const next = previous.then(() => gate);
  syncLocks.set(conversationId, next);

  await previous;
  try {
    return await fn();
  } finally {
    release();
    if (syncLocks.get(conversationId) === next) {
      syncLocks.delete(conversationId);
    }
  }
}

/** Push a new / follow-up visitor message into the Teams channel thread. */
export async function pushVisitorMessageToTeams(
  conversation: ChatConversation,
  visitorText: string
): Promise<ChatConversation> {
  const config = getTeamsConfig();
  if (!config) {
    console.warn("Teams bridge not configured — skipping Teams push");
    return conversation;
  }

  try {
    if (!conversation.teamsMessageId) {
      const teamsText = [
        `New website chat #${conversation.id.slice(0, 8)}`,
        `From: ${conversation.visitorName}`,
        conversation.pageUrl ? `Page: ${conversation.pageUrl}` : "",
        "",
        visitorText,
        "",
        `Reply in this thread to answer on the website.`,
        `Conversation ID: ${conversation.id}`,
      ]
        .filter(Boolean)
        .join("\n");

      const teamsMessageId = await postChannelMessage(config, teamsText);
      const updated = await updateConversationTeamsLink(conversation.id, {
        teamsMessageId,
        syncedTeamsReplyIds: [],
      });

      void ensureChannelSubscription(config).catch((err) =>
        console.warn("Subscription ensure failed:", err)
      );

      return updated || conversation;
    }

    const replyId = await replyToChannelMessage(
      config,
      conversation.teamsMessageId,
      `**${conversation.visitorName}:**\n${visitorText}`
    );

    const synced = new Set(conversation.syncedTeamsReplyIds || []);
    synced.add(replyId);
    const updated = await updateConversationTeamsLink(conversation.id, {
      teamsMessageId: conversation.teamsMessageId,
      syncedTeamsReplyIds: [...synced],
    });

    void ensureChannelSubscription(config).catch((err) =>
      console.warn("Subscription ensure failed:", err)
    );

    return updated || conversation;
  } catch (error) {
    console.error("pushVisitorMessageToTeams failed:", error);
    return conversation;
  }
}

/** When agent replies from /admin/chat, mirror into Teams. */
export async function pushAgentMessageToTeams(
  conversation: ChatConversation,
  agentText: string,
  agentName?: string
): Promise<void> {
  const config = getTeamsConfig();
  if (!config || !conversation.teamsMessageId) return;

  try {
    const replyId = await replyToChannelMessage(
      config,
      conversation.teamsMessageId,
      `**${agentName || "Geekonomy"}:**\n${agentText}`
    );
    const synced = new Set(conversation.syncedTeamsReplyIds || []);
    synced.add(replyId);
    await updateConversationTeamsLink(conversation.id, {
      teamsMessageId: conversation.teamsMessageId,
      syncedTeamsReplyIds: [...synced],
    });
  } catch (error) {
    console.error("pushAgentMessageToTeams failed:", error);
  }
}

/**
 * Pull Teams replies for one conversation into Geekonomy chat.
 */
export async function syncTeamsRepliesForConversation(
  conversationId: string
): Promise<{ synced: number; error?: string }> {
  const config = getTeamsConfig();
  if (!config) return { synced: 0, error: "Teams not configured" };

  return withConversationLock(conversationId, async () => {
    const conversation = await getConversation(conversationId);
    if (!conversation?.teamsMessageId) return { synced: 0 };

    try {
      const replies = await listMessageReplies(
        config,
        conversation.teamsMessageId
      );
      // Fresh read inside lock — concurrent workers may have claimed ids already
      const fresh = (await getConversation(conversationId)) || conversation;
      const seen = new Set(fresh.syncedTeamsReplyIds || []);
      let synced = 0;

      for (const reply of replies) {
        if (!reply.id || seen.has(reply.id)) continue;

        const text = stripHtml(reply.body?.content || "");
        if (!text || shouldSkipTeamsText(text)) {
          seen.add(reply.id);
          await updateConversationTeamsLink(conversation.id, {
            teamsMessageId: conversation.teamsMessageId,
            syncedTeamsReplyIds: [...seen],
          });
          continue;
        }

        // Skip our mirrored visitor posts
        if (
          text.includes(`**${conversation.visitorName}:**`) ||
          text.startsWith(`${conversation.visitorName}:`)
        ) {
          seen.add(reply.id);
          await updateConversationTeamsLink(conversation.id, {
            teamsMessageId: conversation.teamsMessageId,
            syncedTeamsReplyIds: [...seen],
          });
          continue;
        }

        const fromName = reply.from?.user?.displayName || "Agent";
        const content =
          text.replace(/^\*\*[^*]+\*\*:\s*/m, "").trim() || text;

        const result = await addAgentMessageFromTeams({
          conversationId: conversation.id,
          teamsReplyId: reply.id,
          content,
          senderName: fromName,
        });

        seen.add(reply.id);
        if (!result.skipped) synced += 1;
      }

      return { synced };
    } catch (error) {
      return {
        synced: 0,
        error: error instanceof Error ? error.message : "sync failed",
      };
    }
  });
}

/**
 * Pull Teams thread replies into our chatbot as agent messages.
 * Used by Graph notifications + /api/teams/poll.
 */
export async function syncTeamsRepliesIntoChat(): Promise<{
  threads: number;
  synced: number;
  errors: string[];
}> {
  const config = getTeamsConfig();
  if (!config) {
    return { threads: 0, synced: 0, errors: ["Teams not configured"] };
  }

  const summaries = await listConversations();
  let synced = 0;
  const errors: string[] = [];
  let threads = 0;

  for (const summary of summaries) {
    if (!summary.teamsMessageId) continue;
    threads += 1;
    const result = await syncTeamsRepliesForConversation(summary.id);
    synced += result.synced;
    if (result.error) errors.push(`${summary.id}: ${result.error}`);
  }

  return { threads, synced, errors };
}

/** Fast path: sync only the conversation whose Teams root message matches. */
export async function syncTeamsRepliesByRootMessageId(
  teamsMessageId: string
): Promise<{ synced: number; conversationId?: string; error?: string }> {
  const summaries = await listConversations();
  const match = summaries.find((c) => c.teamsMessageId === teamsMessageId);
  if (!match) return { synced: 0, error: "thread_not_mapped" };

  const result = await syncTeamsRepliesForConversation(match.id);
  return {
    synced: result.synced,
    conversationId: match.id,
    error: result.error,
  };
}
