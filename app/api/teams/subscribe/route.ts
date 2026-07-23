import { NextResponse } from "next/server";
import { getGraphBridgeConfig } from "@/lib/chatwoot-teams/config";
import {
  ensureChannelSubscription,
  loadSubscription,
} from "@/lib/chatwoot-teams/subscriptions";

/** Manually create/renew Graph change notification subscription. */
export async function POST() {
  const config = getGraphBridgeConfig();
  if (!config) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  try {
    const sub = await ensureChannelSubscription(config);
    return NextResponse.json({ ok: true, subscription: sub });
  } catch (error) {
    console.error("subscribe failed:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Subscribe failed" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const config = getGraphBridgeConfig();
  const existing = await loadSubscription();
  return NextResponse.json({
    configured: Boolean(config),
    subscription: existing,
    notificationUrl: config
      ? `${config.appBaseUrl}/api/teams/graph-notifications`
      : null,
    hint: "POST here to create/renew the Graph subscription for live Teams replies.",
  });
}
