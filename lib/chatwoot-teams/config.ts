export type GraphBridgeConfig = {
  chatwootBaseUrl: string;
  chatwootAccountId: string;
  chatwootApiToken: string;
  tenantId: string;
  clientId: string;
  clientSecret: string;
  teamId: string;
  channelId: string;
  /** Public site origin, e.g. https://thegeekonomy.com */
  appBaseUrl: string;
};

function isHttpUrl(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

/**
 * Prefer a real https origin. Ignores invalid APP_BASE_URL values
 * (e.g. accidentally pasting the page title).
 */
export function resolveAppBaseUrl(): string {
  const candidates = [
    process.env.APP_BASE_URL,
    process.env.NEXT_PUBLIC_APP_URL,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "",
  ];

  for (const raw of candidates) {
    const value = (raw || "").trim().replace(/\/$/, "");
    if (value && isHttpUrl(value)) {
      return value;
    }
  }

  return "";
}

export function getGraphBridgeConfig(): GraphBridgeConfig | null {
  const chatwootBaseUrl = (
    process.env.CHATWOOT_BASE_URL ||
    process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL ||
    "https://app.chatwoot.com"
  ).replace(/\/$/, "");

  const chatwootAccountId = process.env.CHATWOOT_ACCOUNT_ID || "";
  const chatwootApiToken = process.env.CHATWOOT_API_TOKEN || "";
  const tenantId = (process.env.MICROSOFT_TENANT_ID || "").trim();
  const clientId = (process.env.MICROSOFT_CLIENT_ID || "").trim();
  const clientSecret = (process.env.MICROSOFT_CLIENT_SECRET || "").trim();
  const teamId = (process.env.TEAMS_TEAM_ID || "").trim();
  const channelId = decodeURIComponent(
    (process.env.TEAMS_CHANNEL_ID || "").trim()
  );
  const appBaseUrl = resolveAppBaseUrl();

  if (
    !chatwootAccountId ||
    !chatwootApiToken ||
    !tenantId ||
    !clientId ||
    !clientSecret ||
    !teamId ||
    !channelId ||
    !appBaseUrl
  ) {
    return null;
  }

  return {
    chatwootBaseUrl,
    chatwootAccountId,
    chatwootApiToken,
    tenantId,
    clientId,
    clientSecret,
    teamId,
    channelId,
    appBaseUrl,
  };
}

export function getOAuthRedirectUri(appBaseUrl: string): string {
  return `${appBaseUrl.replace(/\/$/, "")}/api/teams/oauth/callback`;
}

export const GRAPH_SCOPES = [
  "openid",
  "profile",
  "offline_access",
  "ChannelMessage.Send",
  "ChannelMessage.Read.All",
  "Channel.ReadBasic.All",
  "Group.Read.All",
  "User.Read",
].join(" ");
