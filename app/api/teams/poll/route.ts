import { NextResponse } from "next/server";
import { getGraphBridgeConfig } from "@/lib/chatwoot-teams/config";
import { ensureChannelSubscription } from "@/lib/chatwoot-teams/subscriptions";
import { syncAllThreadReplies } from "@/lib/chatwoot-teams/sync";

/**
 * Safety net: renew Graph subscription + sweep any missed Teams replies.
 * Primary delivery is /api/teams/graph-notifications (near real-time).
 *
 * Vercel Hobby: cron max once/day — keep schedule daily (vercel.json).
 * Live renewals do NOT depend on this cron:
 * - Graph lifecycle notifications → ensureChannelSubscription
 * - Each Chatwoot→Teams webhook → ensureChannelSubscription
 * - chatMessage subscriptions last up to ~3 days
 */
async function run() {
  const config = getGraphBridgeConfig();
  if (!config) {
    return {
      status: 503 as const,
      body: { error: "Not configured" },
    };
  }

  let subscription = null;
  let subscriptionError: string | null = null;
  try {
    subscription = await ensureChannelSubscription(config);
    console.info("Subscription renew/ensure ok:", {
      id: subscription.id,
      expirationDateTime: subscription.expirationDateTime,
      resource: subscription.resource,
    });
  } catch (error) {
    subscriptionError =
      error instanceof Error ? error.message : "ensure failed";
    console.error("ensureChannelSubscription FAILED:", error);
  }

  const sync = await syncAllThreadReplies(config);
  if (sync.errors.length) {
    console.warn("Backup sync errors:", sync.errors);
  }

  return {
    status: 200 as const,
    body: {
      ok: true,
      subscription,
      subscriptionError,
      ...sync,
    },
  };
}

export async function GET() {
  const result = await run();
  return NextResponse.json(result.body, { status: result.status });
}

export async function POST() {
  const result = await run();
  return NextResponse.json(result.body, { status: result.status });
}
