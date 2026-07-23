import type { GraphBridgeConfig } from "./config";
import { getOAuthRedirectUri, GRAPH_SCOPES } from "./config";
import { loadMsTokens, saveMsTokens, type MsTokenStore } from "./tokens";

type TokenResponse = {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  token_type?: string;
  scope?: string;
};

function authBase(tenantId: string) {
  return `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0`;
}

export function buildAuthorizeUrl(config: GraphBridgeConfig): string {
  const params = new URLSearchParams({
    client_id: config.clientId,
    response_type: "code",
    redirect_uri: getOAuthRedirectUri(config.appBaseUrl),
    response_mode: "query",
    scope: GRAPH_SCOPES,
    prompt: "select_account",
  });
  return `${authBase(config.tenantId)}/authorize?${params.toString()}`;
}

async function exchangeToken(
  config: GraphBridgeConfig,
  body: URLSearchParams
): Promise<TokenResponse> {
  const response = await fetch(`${authBase(config.tenantId)}/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Microsoft token error (${response.status}): ${text}`);
  }
  return (await response.json()) as TokenResponse;
}

export async function exchangeCodeForTokens(
  config: GraphBridgeConfig,
  code: string
): Promise<MsTokenStore> {
  const token = await exchangeToken(
    config,
    new URLSearchParams({
      client_id: config.clientId,
      client_secret: config.clientSecret,
      grant_type: "authorization_code",
      code,
      redirect_uri: getOAuthRedirectUri(config.appBaseUrl),
      scope: GRAPH_SCOPES,
    })
  );

  if (!token.refresh_token) {
    throw new Error(
      "No refresh_token returned. Add offline_access permission and grant admin consent again."
    );
  }

  const stored: MsTokenStore = {
    accessToken: token.access_token,
    refreshToken: token.refresh_token,
    expiresAt: Date.now() + token.expires_in * 1000,
    updatedAt: new Date().toISOString(),
  };
  await saveMsTokens(stored);
  return stored;
}

async function refreshAccessToken(
  config: GraphBridgeConfig,
  refreshToken: string
): Promise<MsTokenStore> {
  const token = await exchangeToken(
    config,
    new URLSearchParams({
      client_id: config.clientId,
      client_secret: config.clientSecret,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      scope: GRAPH_SCOPES,
    })
  );

  const stored: MsTokenStore = {
    accessToken: token.access_token,
    refreshToken: token.refresh_token || refreshToken,
    expiresAt: Date.now() + token.expires_in * 1000,
    updatedAt: new Date().toISOString(),
  };
  await saveMsTokens(stored);
  return stored;
}

export async function getAccessToken(
  config: GraphBridgeConfig
): Promise<string> {
  const existing = await loadMsTokens();
  if (!existing?.refreshToken) {
    throw new Error(
      "Microsoft account not connected. Visit /api/teams/oauth/start once."
    );
  }

  if (existing.expiresAt > Date.now() + 60_000) {
    return existing.accessToken;
  }

  const refreshed = await refreshAccessToken(config, existing.refreshToken);
  return refreshed.accessToken;
}

export type GraphMessage = {
  id: string;
  replyToId?: string | null;
  body?: { content?: string; contentType?: string };
  from?: {
    user?: { displayName?: string; id?: string };
    application?: { displayName?: string };
  };
  createdDateTime?: string;
  messageType?: string;
};

async function graphFetch<T>(
  config: GraphBridgeConfig,
  path: string,
  init?: RequestInit
): Promise<T> {
  const accessToken = await getAccessToken(config);
  const response = await fetch(`https://graph.microsoft.com/v1.0${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Graph ${path} failed (${response.status}): ${text}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

function htmlEscape(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("\n", "<br/>");
}

export async function postChannelMessage(
  config: GraphBridgeConfig,
  text: string
): Promise<string> {
  const created = await graphFetch<GraphMessage>(
    config,
    `/teams/${config.teamId}/channels/${config.channelId}/messages`,
    {
      method: "POST",
      body: JSON.stringify({
        body: {
          contentType: "html",
          content: htmlEscape(text),
        },
      }),
    }
  );
  if (!created?.id) throw new Error("Graph did not return message id");
  return created.id;
}

export async function replyToChannelMessage(
  config: GraphBridgeConfig,
  rootMessageId: string,
  text: string
): Promise<string> {
  const created = await graphFetch<GraphMessage>(
    config,
    `/teams/${config.teamId}/channels/${config.channelId}/messages/${rootMessageId}/replies`,
    {
      method: "POST",
      body: JSON.stringify({
        body: {
          contentType: "html",
          content: htmlEscape(text),
        },
      }),
    }
  );
  if (!created?.id) throw new Error("Graph did not return reply id");
  return created.id;
}

export async function listMessageReplies(
  config: GraphBridgeConfig,
  rootMessageId: string
): Promise<GraphMessage[]> {
  const result = await graphFetch<{ value: GraphMessage[] }>(
    config,
    `/teams/${config.teamId}/channels/${config.channelId}/messages/${rootMessageId}/replies?$top=50`
  );
  return result?.value || [];
}

export async function getChannelMessage(
  config: GraphBridgeConfig,
  messageId: string
): Promise<GraphMessage | null> {
  try {
    return await graphFetch<GraphMessage>(
      config,
      `/teams/${config.teamId}/channels/${config.channelId}/messages/${messageId}`
    );
  } catch (error) {
    console.warn("getChannelMessage failed:", error);
    return null;
  }
}

export async function createOrRenewChannelSubscription(
  config: GraphBridgeConfig,
  existingSubscriptionId?: string | null
): Promise<{ id: string; expirationDateTime: string }> {
  const notificationUrl = `${config.appBaseUrl}/api/teams/graph-notifications`;
  const clientState =
    process.env.GRAPH_NOTIFICATION_CLIENT_STATE || "geekonomy-teams-bridge";
  // chatMessage max ~3 days; lifecycle URL required when > 1 hour
  const expirationDateTime = new Date(
    Date.now() + 2.5 * 24 * 60 * 60 * 1000
  ).toISOString();

  const body = {
    changeType: "created",
    notificationUrl,
    lifecycleNotificationUrl: notificationUrl,
    resource: `/teams/${config.teamId}/channels/${config.channelId}/messages`,
    expirationDateTime,
    clientState,
  };

  if (existingSubscriptionId) {
    try {
      const updated = await graphFetch<{
        id: string;
        expirationDateTime: string;
      }>(config, `/subscriptions/${existingSubscriptionId}`, {
        method: "PATCH",
        body: JSON.stringify({ expirationDateTime }),
      });
      return {
        id: updated.id || existingSubscriptionId,
        expirationDateTime: updated.expirationDateTime || expirationDateTime,
      };
    } catch (error) {
      console.warn("Subscription renew failed, recreating:", error);
    }
  }

  const created = await graphFetch<{
    id: string;
    expirationDateTime: string;
  }>(config, "/subscriptions", {
    method: "POST",
    body: JSON.stringify(body),
  });

  if (!created?.id) {
    throw new Error("Graph did not return subscription id");
  }

  return {
    id: created.id,
    expirationDateTime: created.expirationDateTime || expirationDateTime,
  };
}

export function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .trim();
}
