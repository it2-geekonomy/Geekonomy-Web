import { NextResponse } from "next/server";
import { getGraphBridgeConfig, resolveAppBaseUrl } from "@/lib/chatwoot-teams/config";
import { hasPersistedMsTokens } from "@/lib/chatwoot-teams/tokens";
import { loadSubscription } from "@/lib/chatwoot-teams/subscriptions";

/**
 * Ops health for the Chatwoot ↔ Teams bridge.
 * Green only when R2 + Microsoft token are both present.
 */
export async function GET() {
  const r2Ready = Boolean(
    process.env.R2_BUCKET?.trim() &&
      process.env.R2_ENDPOINT?.trim() &&
      process.env.R2_ACCESS_KEY?.trim() &&
      process.env.R2_SECRET_KEY?.trim()
  );
  const config = getGraphBridgeConfig();
  const microsoftConnected = r2Ready ? await hasPersistedMsTokens() : false;
  const subscription = r2Ready ? await loadSubscription() : null;

  const ready = Boolean(config && r2Ready && microsoftConnected);

  return NextResponse.json({
    ready,
    checks: {
      envConfigured: Boolean(config),
      r2Ready,
      microsoftConnected,
      graphSubscription: Boolean(subscription?.id),
      appBaseUrl: resolveAppBaseUrl() || null,
      chatwootWebhookShouldBe: config
        ? `${config.appBaseUrl}/api/chatwoot/webhook`
        : null,
    },
    next: ready
      ? "Bridge is live. Send a website chat and check Teams."
      : !r2Ready
        ? "Add R2_* env vars on Vercel Preview and redeploy."
        : !microsoftConnected
          ? "Open /api/teams/oauth/start and finish Microsoft login."
          : "Fix missing Chatwoot/Microsoft/Teams env vars.",
  });
}
