import type { GraphBridgeConfig } from "./config";

export async function sendChatwootOutgoingMessage(
  config: GraphBridgeConfig,
  conversationId: string,
  content: string
): Promise<void> {
  const url = `${config.chatwootBaseUrl}/api/v1/accounts/${config.chatwootAccountId}/conversations/${conversationId}/messages`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      api_access_token: config.chatwootApiToken,
    },
    body: JSON.stringify({
      content,
      message_type: "outgoing",
      private: false,
      content_attributes: {
        source: "microsoft_teams",
      },
    }),
  });

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
  return false;
}
