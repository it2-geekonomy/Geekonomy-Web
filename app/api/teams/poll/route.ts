import { NextResponse } from "next/server";
import { getGraphBridgeConfig } from "@/lib/chatwoot-teams/config";
import { ensureChannelSubscription } from "@/lib/chatwoot-teams/subscriptions";
import { syncAllThreadReplies } from "@/lib/chatwoot-teams/sync";

/**
 * Backup sync + subscription renew.
 * Prefer Graph notifications for speed; keep this for recovery.
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
  try {
    subscription = await ensureChannelSubscription(config);
  } catch (error) {
    console.error("ensureChannelSubscription:", error);
  }

  const sync = await syncAllThreadReplies(config);
  return {
    status: 200 as const,
    body: { ok: true, subscription, ...sync },
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
