import { NextRequest, NextResponse } from "next/server";
import { getGraphBridgeConfig } from "@/lib/chatwoot-teams/config";
import {
  ensureChannelSubscription,
  loadSubscription,
} from "@/lib/chatwoot-teams/subscriptions";

/** Manually create/renew Graph change notification subscription. */
export async function POST(request: NextRequest) {
  const config = getGraphBridgeConfig();
  if (!config) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  const force =
    request.nextUrl.searchParams.get("force") === "1" ||
    request.nextUrl.searchParams.get("force") === "true";

  try {
    const sub = await ensureChannelSubscription(config, {
      forceRecreate: force,
    });
    return NextResponse.json({
      ok: true,
      forced: force,
      subscription: sub,
      hint: force
        ? "Recreated subscription for the current Teams channel."
        : "Subscription ensured for the current Teams channel.",
    });
  } catch (error) {
    console.error("subscribe failed:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Subscribe failed" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const config = getGraphBridgeConfig();
  const existing = await loadSubscription();
  const force = request.nextUrl.searchParams.get("force");

  // Allow browser GET ?force=1 to recreate (ops convenience)
  if (force === "1" || force === "true") {
    return POST(request);
  }

  return NextResponse.json({
    configured: Boolean(config),
    subscription: existing,
    notificationUrl: config
      ? `${config.appBaseUrl}/api/teams/graph-notifications`
      : null,
    expectedResource: config
      ? `/teams/${config.teamId}/channels/${config.channelId}/messages`
      : null,
    hint: "POST here (or GET ?force=1) to create/renew the Graph subscription for live Teams replies.",
  });
}
