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
  const withHttps = (hostOrUrl: string) => {
    const value = hostOrUrl.trim().replace(/\/$/, "");
    if (!value) return "";
    if (isHttpUrl(value)) return value;
    return `https://${value}`;
  };

  const candidates = [
    process.env.APP_BASE_URL,
    process.env.NEXT_PUBLIC_APP_URL,
    // Stable alias for the git branch preview (preferred over unique deploy URL)
    process.env.VERCEL_BRANCH_URL
      ? withHttps(process.env.VERCEL_BRANCH_URL)
      : "",
    process.env.VERCEL_URL ? withHttps(process.env.VERCEL_URL) : "",
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
  // Chatwoot optional — custom Geekonomy chat no longer requires it
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
  const r2Bucket = (process.env.R2_BUCKET || "").trim();
  const r2Ready = Boolean(
    r2Bucket &&
      process.env.R2_ENDPOINT?.trim() &&
      process.env.R2_ACCESS_KEY?.trim() &&
      process.env.R2_SECRET_KEY?.trim()
  );

  if (
    !tenantId ||
    !clientId ||
    !clientSecret ||
    !teamId ||
    !channelId ||
    !appBaseUrl ||
    !r2Ready
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
