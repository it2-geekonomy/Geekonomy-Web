import { NextResponse } from "next/server";
import { getGraphBridgeConfig, resolveAppBaseUrl } from "@/lib/chatwoot-teams/config";
import { hasPersistedMsTokens } from "@/lib/chatwoot-teams/tokens";
import { loadSubscription } from "@/lib/chatwoot-teams/subscriptions";

/**
 * Ops health for the Chatwoot ↔ Teams bridge.
 * Green only when R2 + Microsoft token are both present.
 */
export async function GET() {
  const r2 = {
    R2_ENDPOINT: Boolean(process.env.R2_ENDPOINT?.trim()),
    R2_ACCESS_KEY: Boolean(process.env.R2_ACCESS_KEY?.trim()),
    R2_SECRET_KEY: Boolean(process.env.R2_SECRET_KEY?.trim()),
    R2_BUCKET: Boolean(process.env.R2_BUCKET?.trim()),
  };
  const r2Ready = Object.values(r2).every(Boolean);
  const config = getGraphBridgeConfig();
  const microsoftConnected = r2Ready ? await hasPersistedMsTokens() : false;
  const subscription = r2Ready ? await loadSubscription() : null;
  const expectedResource = config
    ? `/teams/${config.teamId}/channels/${config.channelId}/messages`
    : null;
  const subscriptionTargetsCurrentChannel = Boolean(
    subscription?.resource &&
      expectedResource &&
      subscription.resource === expectedResource
  );

  const ready = Boolean(config && r2Ready && microsoftConnected);

  const missingR2 = Object.entries(r2)
    .filter(([, ok]) => !ok)
    .map(([name]) => name);

  return NextResponse.json({
    ready,
    checks: {
      envConfigured: Boolean(config),
      r2Ready,
      r2VarsPresent: r2,
      r2MissingNames: missingR2,
      microsoftConnected,
      graphSubscription: Boolean(subscription?.id),
      subscriptionTargetsCurrentChannel,
      subscriptionResource: subscription?.resource || null,
      expectedResource,
      appBaseUrl: resolveAppBaseUrl() || null,
      teamsTeamId: config?.teamId || null,
      teamsChannelId: config?.channelId || null,
      chatwootWebhookShouldBe: config
        ? `${config.appBaseUrl}/api/chatwoot/webhook`
        : null,
    },
    next: ready
      ? subscriptionTargetsCurrentChannel
        ? "Bridge is live. Reply in the Teams thread — Graph notifications sync near real-time; /api/teams/poll is backup every 6h."
        : "Open /api/teams/subscribe?force=1 so Graph watches the CURRENT channel (needed after changing TEAMS_CHANNEL_ID)."
      : missingR2.length
        ? `Vercel Preview is missing: ${missingR2.join(", ")}. Add those exact names, enable Preview, redeploy.`
        : !microsoftConnected
          ? "Open /api/teams/oauth/start and finish Microsoft login."
          : "Fix missing Chatwoot/Microsoft/Teams env vars.",
    subscriptionExpiresAt: subscription?.expirationDateTime || null,
  });
}
