import { NextRequest, NextResponse } from "next/server";
import { isChatAdminAuthenticated } from "@/lib/chat/auth";
import {
  addMessage,
  getConversation,
  withDedupedMessages,
} from "@/lib/chat/store";
import {
  pushAgentMessageToTeams,
  pushVisitorMessageToTeams,
} from "@/lib/chat/teams-bridge";

export const maxDuration = 30;

type Ctx = { params: Promise<{ id: string }> };

export async function POST(request: NextRequest, context: Ctx) {
  const { id } = await context.params;
  let body: {
    visitorId?: string;
    role?: "visitor" | "agent";
    content?: string;
    senderName?: string;
  };

  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const content = (body.content || "").trim();
  if (!content) {
    return NextResponse.json({ error: "content required" }, { status: 400 });
  }

  const isAdmin = await isChatAdminAuthenticated();
  const role = body.role === "agent" ? "agent" : "visitor";

  if (role === "agent" && !isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const existing = await getConversation(id);
    if (!existing) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    if (role === "visitor") {
      const visitorId = (body.visitorId || "").trim();
      if (!visitorId || visitorId !== existing.visitorId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    const result = await addMessage({
      conversationId: id,
      role,
      content,
      senderName: body.senderName,
    });

    if (role === "visitor") {
      result.conversation = await pushVisitorMessageToTeams(
        result.conversation,
        content
      );
    } else {
      await pushAgentMessageToTeams(
        result.conversation,
        content,
        body.senderName
      );
    }

    return NextResponse.json(
      {
        ...result,
        conversation: withDedupedMessages(result.conversation),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("add message:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed" },
      { status: 500 }
    );
  }
}
