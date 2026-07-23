import { NextRequest, NextResponse } from "next/server";
import { getGraphBridgeConfig } from "@/lib/chatwoot-teams/config";
import { ensureChannelSubscription } from "@/lib/chatwoot-teams/subscriptions";
import {
  syncAllThreadReplies,
} from "@/lib/chatwoot-teams/sync";

type GraphNotification = {
  subscriptionId?: string;
  clientState?: string;
  changeType?: string;
  resource?: string;
  lifecycleEvent?: string;
  resourceData?: { id?: string };
};

function expectedClientState(): string {
  return (
    process.env.GRAPH_NOTIFICATION_CLIENT_STATE || "geekonomy-teams-bridge"
  );
}

function extractMessageId(notification: GraphNotification): string | null {
  if (notification.resourceData?.id) return String(notification.resourceData.id);
  const resource = notification.resource || "";
  // teams('x')/channels('y')/messages('z') or .../messages('z')/replies('r')
  const replyMatch = resource.match(/messages\('([^']+)'\)\/replies\('([^']+)'\)/i);
  if (replyMatch?.[2]) return replyMatch[2];
  const msgMatch = resource.match(/messages\('([^']+)'\)/i);
  return msgMatch?.[1] || null;
}

/**
 * Microsoft Graph change + lifecycle notifications.
 * Must answer validationToken within seconds as text/plain.
 */
export async function POST(request: NextRequest) {
  const validationToken = request.nextUrl.searchParams.get("validationToken");
  if (validationToken) {
    return new NextResponse(validationToken, {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const config = getGraphBridgeConfig();
  if (!config) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  let payload: { value?: GraphNotification[] };
  try {
    payload = (await request.json()) as { value?: GraphNotification[] };
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const expected = expectedClientState();
  const items = payload.value || [];

  // Acknowledge quickly; process sync inline (serverless has no background)
  for (const item of items) {
    if (item.clientState && item.clientState !== expected) {
      console.warn("Graph notification clientState mismatch");
      continue;
    }

    // Lifecycle: renew subscription
    if (item.lifecycleEvent) {
      console.info("Graph lifecycle:", item.lifecycleEvent);
      try {
        await ensureChannelSubscription(config);
      } catch (error) {
        console.error("Lifecycle renew failed:", error);
      }
      continue;
    }

    if (item.changeType !== "created") continue;

    try {
      // Always sync all mapped threads on any channel activity.
      // Single-message lookup is unreliable for reply IDs vs root IDs.
      const result = await syncAllThreadReplies(config);
      console.info("Graph notification sync:", result);
    } catch (error) {
      console.error("Graph notification sync failed:", error);
    }
  }

  return NextResponse.json({ ok: true }, { status: 202 });
}

export async function GET(request: NextRequest) {
  // Some validators use GET with validationToken
  const validationToken = request.nextUrl.searchParams.get("validationToken");
  if (validationToken) {
    return new NextResponse(validationToken, {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
  return NextResponse.json({
    service: "graph-notifications",
    hint: "Microsoft Graph posts change notifications here.",
  });
}
