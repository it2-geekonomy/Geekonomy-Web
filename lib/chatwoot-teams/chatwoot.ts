import type { GraphBridgeConfig } from "./config";

async function chatwootFetch(
  config: GraphBridgeConfig,
  path: string,
  init?: RequestInit
): Promise<Response> {
  return fetch(
    `${config.chatwootBaseUrl}/api/v1/accounts/${config.chatwootAccountId}${path}`,
    {
      ...init,
      headers: {
        "Content-Type": "application/json",
        api_access_token: config.chatwootApiToken,
        ...(init?.headers || {}),
      },
    }
  );
}

/** Website widget ignores new agent messages on resolved chats — reopen first. */
export async function ensureConversationOpen(
  config: GraphBridgeConfig,
  conversationId: string
): Promise<void> {
  const show = await chatwootFetch(config, `/conversations/${conversationId}`);
  if (!show.ok) {
    const text = await show.text();
    throw new Error(
      `Chatwoot conversation ${conversationId} not found (${show.status}): ${text}`
    );
  }

  const data = (await show.json()) as {
    status?: string;
    payload?: { status?: string; current_status?: string };
  };
  const status =
    data.status || data.payload?.status || data.payload?.current_status;
  if (status === "open") return;

  const toggle = await chatwootFetch(
    config,
    `/conversations/${conversationId}/toggle_status`,
    {
      method: "POST",
      body: JSON.stringify({ status: "open" }),
    }
  );

  if (!toggle.ok) {
    const text = await toggle.text();
    console.warn(
      `Failed to reopen conversation ${conversationId} (${toggle.status}): ${text}`
    );
  }
}

export async function sendChatwootOutgoingMessage(
  config: GraphBridgeConfig,
  conversationId: string,
  content: string
): Promise<void> {
  await ensureConversationOpen(config, conversationId);

  const response = await chatwootFetch(
    config,
    `/conversations/${conversationId}/messages`,
    {
      method: "POST",
      body: JSON.stringify({
        content,
        message_type: "outgoing",
        private: false,
        content_attributes: {
          source: "microsoft_teams",
        },
      }),
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Chatwoot message failed (${response.status}): ${text}`);
  }
}

export function getConversationDisplayId(payload: {
  conversation?: { id?: number | string; display_id?: number | string };
  id?: number | string;
}): string | null {
  const conversation = payload.conversation;
  // Chatwoot Application API looks up by display_id
  const id =
    conversation?.display_id ?? conversation?.id ?? payload.id ?? null;
  return id == null ? null : String(id);
}

export function isIncomingCustomerMessage(event: {
  event?: string;
  message_type?: number | string;
  private?: boolean;
  content_attributes?: { source?: string };
  sender?: { type?: string };
}): boolean {
  if (event.private) return false;
  if (event.content_attributes?.source === "microsoft_teams") return false;

  const type = event.message_type;
  if (type === 0 || type === "incoming" || type === "0") return true;
  if (event.sender?.type === "contact") return true;
  // Outgoing / activity from Chatwoot must never be relayed back to Teams
  if (type === 1 || type === "outgoing" || type === "1") return false;
  if (type === 2 || type === "activity" || type === "2") return false;
  return false;
}
