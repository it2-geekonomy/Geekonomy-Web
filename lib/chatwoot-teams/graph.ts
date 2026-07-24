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

export type ParsedMessageResource = {
  messageId: string;
  /** Present when the notification is for a thread reply */
  rootMessageId?: string;
};

/**
 * Parse Graph notification `resource` paths (slash or OData style).
 * Replies: .../messages/{root}/replies/{reply}
 * Roots:   .../messages/{id}
 */
export function parseChannelMessageResource(
  resource: string
): ParsedMessageResource | null {
  const raw = (resource || "").trim();
  if (!raw) return null;

  const slashReply = raw.match(/\/messages\/([^/]+)\/replies\/([^/?]+)/i);
  if (slashReply) {
    return { rootMessageId: slashReply[1], messageId: slashReply[2] };
  }

  const odataReply = raw.match(
    /messages\('([^']+)'\)\/replies\('([^']+)'\)/i
  );
  if (odataReply) {
    return { rootMessageId: odataReply[1], messageId: odataReply[2] };
  }

  const slashMsg = raw.match(/\/messages\/([^/?]+)/i);
  if (slashMsg) {
    return { messageId: slashMsg[1] };
  }

  const odataMsg = raw.match(/messages\('([^']+)'\)/i);
  if (odataMsg) {
    return { messageId: odataMsg[1] };
  }

  return null;
}

/** Fetch a channel message or reply using ids parsed from a notification. */
export async function fetchChannelMessageOrReply(
  config: GraphBridgeConfig,
  ids: ParsedMessageResource
): Promise<GraphMessage | null> {
  if (ids.rootMessageId) {
    try {
      return await graphFetch<GraphMessage>(
        config,
        `/teams/${config.teamId}/channels/${config.channelId}/messages/${ids.rootMessageId}/replies/${ids.messageId}`
      );
    } catch (error) {
      console.warn("fetch reply failed, trying message endpoint:", error);
    }
  }

  return getChannelMessage(config, ids.messageId);
}

export function channelMessagesResource(config: GraphBridgeConfig): string {
  return `/teams/${config.teamId}/channels/${config.channelId}/messages`;
}

export async function deleteGraphSubscription(
  config: GraphBridgeConfig,
  subscriptionId: string
): Promise<void> {
  try {
    await graphFetch(config, `/subscriptions/${subscriptionId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.warn("Delete Graph subscription failed:", error);
  }
}

/**
 * Create a channel-message subscription for the *current* team/channel.
 * Never PATCH an old subscription when the channel changed — Graph keeps the
 * old resource, so Teams→site replies would never arrive live.
 */
export async function createOrRenewChannelSubscription(
  config: GraphBridgeConfig,
  existingSubscriptionId?: string | null,
  options?: { forceRecreate?: boolean; canPatch?: boolean }
): Promise<{
  id: string;
  expirationDateTime: string;
  resource: string;
  notificationUrl: string;
}> {
  const notificationUrl = `${config.appBaseUrl}/api/teams/graph-notifications`;
  const resource = channelMessagesResource(config);
  const clientState =
    process.env.GRAPH_NOTIFICATION_CLIENT_STATE || "geekonomy-teams-bridge";
  // Teams chatMessage max = 4320 min (3 days). Stay under max; lifecycle URL
  // is required whenever expiry is > 1 hour (we always send it).
  const expirationDateTime = new Date(
    Date.now() + 4200 * 60 * 1000
  ).toISOString();

  const body = {
    changeType: "created",
    notificationUrl,
    lifecycleNotificationUrl: notificationUrl,
    resource,
    expirationDateTime,
    clientState,
  };

  // PATCH only renews expiry — it cannot retarget team/channel.
  if (existingSubscriptionId && options?.canPatch && !options.forceRecreate) {
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
        resource,
        notificationUrl,
      };
    } catch (error) {
      console.warn("Subscription renew failed, recreating:", error);
    }
  }

  if (existingSubscriptionId) {
    await deleteGraphSubscription(config, existingSubscriptionId);
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
    resource,
    notificationUrl,
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
