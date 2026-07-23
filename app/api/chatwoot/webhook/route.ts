import { NextRequest, NextResponse } from "next/server";
import { getGraphBridgeConfig } from "@/lib/chatwoot-teams/config";
import {
  getConversationDisplayId,
  isIncomingCustomerMessage,
} from "@/lib/chatwoot-teams/chatwoot";
import {
  getByChatwootId,
  upsertThreadMap,
} from "@/lib/chatwoot-teams/mapping";
import {
  postChannelMessage,
  replyToChannelMessage,
} from "@/lib/chatwoot-teams/graph";
import { ensureChannelSubscription } from "@/lib/chatwoot-teams/subscriptions";

type ChatwootWebhookBody = {
  event?: string;
  id?: number | string;
  content?: string;
  message_type?: number | string;
  private?: boolean;
  content_attributes?: { source?: string };
  sender?: { type?: string; name?: string };
  conversation?: {
    id?: number | string;
    display_id?: number | string;
    meta?: { sender?: { name?: string; email?: string } };
  };
};

/**
 * Chatwoot → Microsoft Graph → Teams channel thread
 * Webhook URL: https://YOUR_DOMAIN/api/chatwoot/webhook
 */
export async function POST(request: NextRequest) {
  const config = getGraphBridgeConfig();
  if (!config) {
    return NextResponse.json(
      {
        error:
          "Not configured. Set CHATWOOT_*, MICROSOFT_*, TEAMS_*, and APP_BASE_URL.",
      },
      { status: 503 }
    );
  }

  let body: ChatwootWebhookBody;
  try {
    body = (await request.json()) as ChatwootWebhookBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const event = body.event || "";
  if (event && event !== "message_created") {
    return NextResponse.json({ ok: true, skipped: event });
  }

  const conversationId = getConversationDisplayId(body);
  if (!conversationId || !body.content?.trim()) {
    return NextResponse.json({ ok: true, skipped: "empty" });
  }

  if (!isIncomingCustomerMessage(body)) {
    return NextResponse.json({ ok: true, skipped: "not_incoming" });
  }

  const contactName =
    body.sender?.name ||
    body.conversation?.meta?.sender?.name ||
    "Website visitor";
  const contactEmail = body.conversation?.meta?.sender?.email || "n/a";
  const text = body.content.trim();
  const existing = await getByChatwootId(conversationId);

  try {
    if (existing?.teamsMessageId) {
      const replyId = await replyToChannelMessage(
        config,
        existing.teamsMessageId,
        `**${contactName}:**\n${text}`
      );
      const synced = new Set(existing.syncedReplyIds || []);
      synced.add(replyId);
      await upsertThreadMap({
        ...existing,
        syncedReplyIds: [...synced],
      });
      void ensureChannelSubscription(config).catch((err) =>
        console.warn("Subscription ensure failed:", err)
      );
      return NextResponse.json({ ok: true, mode: "reply", replyId });
    }

    const teamsText = [
      `New website chat #${conversationId}`,
      `From: ${contactName} · ${contactEmail}`,
      "",
      text,
      "",
      `Reply in this thread to answer on the website. Conversation ID: ${conversationId}`,
    ].join("\n");

    const teamsMessageId = await postChannelMessage(config, teamsText);
    await upsertThreadMap({
      chatwootConversationId: conversationId,
      teamsMessageId,
      contactName,
      syncedReplyIds: [],
    });
    void ensureChannelSubscription(config).catch((err) =>
      console.warn("Subscription ensure failed:", err)
    );

    return NextResponse.json({ ok: true, mode: "create", teamsMessageId });
  } catch (error) {
    console.error("Chatwoot→Teams Graph error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Graph failed" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    service: "chatwoot-webhook",
    configured: Boolean(getGraphBridgeConfig()),
    next: "Connect Microsoft once at /api/teams/oauth/start, then point Chatwoot webhook here.",
  });
}
