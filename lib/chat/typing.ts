type TypingState = {
  visitorUntil: number;
  agentUntil: number;
};

const typingByConversation = new Map<string, TypingState>();
const TYPING_TTL_MS = 3500;

export function setConversationTyping(
  conversationId: string,
  role: "visitor" | "agent"
): void {
  const now = Date.now();
  const current = typingByConversation.get(conversationId) || {
    visitorUntil: 0,
    agentUntil: 0,
  };
  if (role === "visitor") {
    current.visitorUntil = now + TYPING_TTL_MS;
  } else {
    current.agentUntil = now + TYPING_TTL_MS;
  }
  typingByConversation.set(conversationId, current);
}

export function getConversationTyping(conversationId: string): {
  visitorTyping: boolean;
  agentTyping: boolean;
} {
  const now = Date.now();
  const current = typingByConversation.get(conversationId);
  if (!current) {
    return { visitorTyping: false, agentTyping: false };
  }
  return {
    visitorTyping: current.visitorUntil > now,
    agentTyping: current.agentUntil > now,
  };
}
