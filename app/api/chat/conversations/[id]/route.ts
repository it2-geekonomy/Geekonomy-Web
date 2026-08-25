import { NextRequest, NextResponse } from "next/server";
import { isChatAdminAuthenticated } from "@/lib/chat/auth";
import {
  getConversation,
  markConversationRead,
  setConversationStatus,
  withDedupedMessages,
} from "@/lib/chat/store";
import { syncTeamsRepliesForConversation } from "@/lib/chat/teams-bridge";
import { getConversationTyping } from "@/lib/chat/typing";

export const maxDuration = 30;

type Ctx = { params: Promise<{ id: string }> };

/** Keep Teams→site snappy without hammering Graph every tick */
const lastPullAt = new Map<string, number>();
const PULL_EVERY_MS = 800;

export async function GET(request: NextRequest, context: Ctx) {
  const { id } = await context.params;
  const visitorId = request.nextUrl.searchParams.get("visitorId")?.trim();
  const isAdmin = await isChatAdminAuthenticated();

  try {
    let conversation = await getConversation(id);
    if (!conversation) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    if (!isAdmin) {
      if (!visitorId || visitorId !== conversation.visitorId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    // Pull Teams replies while chatting (localhost has no Graph webhooks;
    // production also benefits when webhook delivery lags)
    if (conversation.teamsMessageId) {
      const last = lastPullAt.get(id) || 0;
      if (Date.now() - last >= PULL_EVERY_MS) {
        lastPullAt.set(id, Date.now());
        try {
          await syncTeamsRepliesForConversation(id);
          conversation = (await getConversation(id)) || conversation;
        } catch (error) {
          console.warn("Teams pull on conversation GET failed:", error);
        }
      }
    }

    if (isAdmin) {
      await markConversationRead(id);
      conversation = (await getConversation(id)) || conversation;
    }

    return NextResponse.json({
      conversation: withDedupedMessages(conversation),
      typing: getConversationTyping(id),
    });
  } catch (error) {
    console.error("get conversation:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest, context: Ctx) {
  const { id } = await context.params;
  let body: { status?: "open" | "closed"; visitorId?: string };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.status !== "open" && body.status !== "closed") {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const isAdmin = await isChatAdminAuthenticated();

  try {
    const existing = await getConversation(id);
    if (!existing) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Admin can always update; visitor can only close their own conversation
    if (!isAdmin) {
      const visitorId = (body.visitorId || "").trim();
      if (
        body.status !== "closed" ||
        !visitorId ||
        visitorId !== existing.visitorId
      ) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    const conversation = await setConversationStatus(id, body.status);
    if (!conversation) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ conversation });
  } catch (error) {
    console.error("patch conversation:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed" },
      { status: 500 }
    );
  }
}
