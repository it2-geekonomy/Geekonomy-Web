import { NextResponse } from "next/server";
import { getGraphBridgeConfig } from "@/lib/chatwoot-teams/config";
import { ensureChannelSubscription } from "@/lib/chatwoot-teams/subscriptions";
import { syncTeamsRepliesIntoChat } from "@/lib/chat/teams-bridge";

export const maxDuration = 60;

/**
 * Backup: renew Graph subscription + sync Teams replies into Geekonomy chat.
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
  } catch (error) {
    subscriptionError =
      error instanceof Error ? error.message : "ensure failed";
    console.error("ensureChannelSubscription FAILED:", error);
  }

  const sync = await syncTeamsRepliesIntoChat();
  if (sync.errors.length) {
    console.warn("Teams→chat sync errors:", sync.errors);
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
