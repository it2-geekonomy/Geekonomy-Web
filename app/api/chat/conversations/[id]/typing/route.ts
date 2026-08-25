import { NextRequest, NextResponse } from "next/server";
import { isChatAdminAuthenticated } from "@/lib/chat/auth";
import { getConversation } from "@/lib/chat/store";
import {
  getConversationTyping,
  setConversationTyping,
} from "@/lib/chat/typing";

type Ctx = { params: Promise<{ id: string }> };

export async function POST(request: NextRequest, context: Ctx) {
  const { id } = await context.params;
  let body: { role?: "visitor" | "agent"; visitorId?: string };

  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const role = body.role === "agent" ? "agent" : "visitor";
  const isAdmin = await isChatAdminAuthenticated();

  try {
    const conversation = await getConversation(id);
    if (!conversation) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    if (role === "visitor") {
      const visitorId = (body.visitorId || "").trim();
      if (!visitorId || visitorId !== conversation.visitorId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    } else if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    setConversationTyping(id, role);
    return NextResponse.json({ ok: true, typing: getConversationTyping(id) });
  } catch (error) {
    console.error("typing post:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest, context: Ctx) {
  const { id } = await context.params;
  const visitorId = request.nextUrl.searchParams.get("visitorId")?.trim();
  const isAdmin = await isChatAdminAuthenticated();

  try {
    const conversation = await getConversation(id);
    if (!conversation) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    if (!isAdmin) {
      if (!visitorId || visitorId !== conversation.visitorId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    return NextResponse.json({ typing: getConversationTyping(id) });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed" },
      { status: 500 }
    );
  }
}
