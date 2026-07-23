import { NextResponse } from "next/server";
import { getGraphBridgeConfig } from "@/lib/chatwoot-teams/config";
import { sendChatwootOutgoingMessage } from "@/lib/chatwoot-teams/chatwoot";
import {
  listMessageReplies,
  stripHtml,
} from "@/lib/chatwoot-teams/graph";
import { listThreadMaps, upsertThreadMap } from "@/lib/chatwoot-teams/mapping";

/**
 * Polls Teams threads for agent replies and pushes them into Chatwoot.
 * Call on a schedule (e.g. every 1 min) or manually:
 *   GET/POST https://YOUR_DOMAIN/api/teams/poll
 */
async function syncReplies() {
  const config = getGraphBridgeConfig();
  if (!config) {
    return {
      status: 503 as const,
      body: { error: "Not configured" },
    };
  }

  const threads = await listThreadMaps();
  let synced = 0;
  const errors: string[] = [];

  for (const thread of threads) {
    try {
      const replies = await listMessageReplies(config, thread.teamsMessageId);
      const seen = new Set(thread.syncedReplyIds || []);

      for (const reply of replies) {
        if (!reply.id || seen.has(reply.id)) continue;

        // Skip empty / system
        const raw = reply.body?.content || "";
        const text = stripHtml(raw);
        if (!text) {
          seen.add(reply.id);
          continue;
        }

        // Skip our own mirrored customer lines if we marked them somehow —
        // agent replies usually have from.user
        const fromName = reply.from?.user?.displayName || "Agent";

        // Don't echo messages that look like our bridge starter footer alone
        if (text.includes("Conversation ID:") && text.includes("New website chat")) {
          seen.add(reply.id);
          continue;
        }

        await sendChatwootOutgoingMessage(
          config,
          thread.chatwootConversationId,
          `${fromName}: ${text}`
        );
        seen.add(reply.id);
        synced += 1;
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

  return {
    status: 200 as const,
    body: { ok: true, threads: threads.length, synced, errors },
  };
}

export async function GET() {
  const result = await syncReplies();
  return NextResponse.json(result.body, { status: result.status });
}

export async function POST() {
  const result = await syncReplies();
  return NextResponse.json(result.body, { status: result.status });
}
