import { NextRequest, NextResponse } from "next/server";
import { isChatAdminAuthenticated } from "@/lib/chat/auth";
import { createConversation, listConversations } from "@/lib/chat/store";
import { pushVisitorMessageToTeams } from "@/lib/chat/teams-bridge";

export const maxDuration = 30;

export async function GET() {
  if (!(await isChatAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const conversations = await listConversations();
    return NextResponse.json({ conversations });
  } catch (error) {
    console.error("list conversations:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  let body: {
    visitorId?: string;
    visitorName?: string;
    pageUrl?: string;
    message?: string;
  };

  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const visitorId = (body.visitorId || "").trim();
  const message = (body.message || "").trim();
  if (!visitorId || !message) {
    return NextResponse.json(
      { error: "visitorId and message are required" },
      { status: 400 }
    );
  }

  try {
    let conversation = await createConversation({
      visitorId,
      visitorName: body.visitorName,
      pageUrl: body.pageUrl,
      firstMessage: message,
    });

    conversation = await pushVisitorMessageToTeams(conversation, message);

    return NextResponse.json({ conversation }, { status: 201 });
  } catch (error) {
    console.error("create conversation:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed" },
      { status: 500 }
    );
  }
}
