import { NextRequest, NextResponse } from "next/server";
import { getGraphBridgeConfig } from "@/lib/chatwoot-teams/config";
import { ensureChannelSubscription } from "@/lib/chatwoot-teams/subscriptions";
import {
  processGraphNotifications,
  type GraphNotificationItem,
} from "@/lib/chatwoot-teams/sync";

/** Allow full thread sweep after Graph notifies us. */
export const maxDuration = 60;

function expectedClientState(): string {
  return (
    process.env.GRAPH_NOTIFICATION_CLIENT_STATE || "geekonomy-teams-bridge"
  );
}

function validationResponse(token: string) {
  return new NextResponse(token, {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

/**
 * Microsoft Graph change + lifecycle notifications.
 *
 * Process INLINE (await) so work always finishes on Hobby/serverless.
 * Graph prefers a fast ack; a single-channel sweep is typically fine under 60s.
 * Returning 202 only after work was killing sync via after()/timeouts.
 */
export async function POST(request: NextRequest) {
  const validationToken = request.nextUrl.searchParams.get("validationToken");
  if (validationToken) {
    return validationResponse(validationToken);
  }

  const config = getGraphBridgeConfig();
  if (!config) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  let payload: { value?: GraphNotificationItem[] };
  try {
    payload = (await request.json()) as { value?: GraphNotificationItem[] };
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const items = payload.value || [];
  if (items.length === 0) {
    return new NextResponse(null, { status: 202 });
  }

  try {
    await processGraphNotifications(config, items, {
      expectedClientState: expectedClientState(),
      renewSubscription: () => ensureChannelSubscription(config),
    });
  } catch (error) {
    console.error("Graph notification processing failed:", error);
  }

  return new NextResponse(null, { status: 202 });
}

export async function GET(request: NextRequest) {
  const validationToken = request.nextUrl.searchParams.get("validationToken");
  if (validationToken) {
    return validationResponse(validationToken);
  }

  return NextResponse.json({
    service: "graph-notifications",
    hint: "Microsoft Graph posts change notifications here.",
  });
}
