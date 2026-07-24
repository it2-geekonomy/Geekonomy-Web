import { randomUUID } from "crypto";
import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "@/lib/r2";

export type ChatRole = "visitor" | "agent" | "system";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: string;
  senderName?: string;
};

export type ChatConversation = {
  id: string;
  visitorId: string;
  visitorName: string;
  pageUrl?: string;
  status: "open" | "closed";
  createdAt: string;
  updatedAt: string;
  lastMessageAt: string;
  lastMessagePreview: string;
  unreadForAgent: number;
  messages: ChatMessage[];
  /** Root Teams channel message id for this chat thread */
  teamsMessageId?: string;
  /** Teams reply ids already ingested (or posted by us) */
  syncedTeamsReplyIds?: string[];
};

export type ChatConversationSummary = Omit<ChatConversation, "messages">;

type ChatIndex = {
  conversations: ChatConversationSummary[];
};

const INDEX_KEY = "geekonomy-chat/index.json";
const convKey = (id: string) => `geekonomy-chat/conversations/${id}.json`;

function bucket(): string {
  const b = process.env.R2_BUCKET?.trim();
  if (!b) throw new Error("R2_BUCKET is not configured");
  return b;
}

async function readBody(body: unknown): Promise<string> {
  if (!body) return "";
  if (typeof body === "string") return body;
  if (body instanceof Uint8Array) return Buffer.from(body).toString("utf8");
  const chunks: Buffer[] = [];
  for await (const chunk of body as AsyncIterable<Uint8Array>) {
    chunks.push(Buffer.from(chunk));
  }
  return Buffer.concat(chunks).toString("utf8");
}

async function getJson<T>(key: string): Promise<T | null> {
  try {
    const result = await r2.send(
      new GetObjectCommand({ Bucket: bucket(), Key: key })
    );
    const text = await readBody(result.Body);
    if (!text) return null;
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

async function putJson(key: string, value: unknown): Promise<void> {
  await r2.send(
    new PutObjectCommand({
      Bucket: bucket(),
      Key: key,
      Body: JSON.stringify(value),
      ContentType: "application/json",
    })
  );
}

function toSummary(c: ChatConversation): ChatConversationSummary {
  const { messages: _m, ...summary } = c;
  return summary;
}

async function loadIndex(): Promise<ChatIndex> {
  return (await getJson<ChatIndex>(INDEX_KEY)) || { conversations: [] };
}

async function saveIndex(index: ChatIndex): Promise<void> {
  // Newest first
  index.conversations.sort(
    (a, b) =>
      Date.parse(b.lastMessageAt) - Date.parse(a.lastMessageAt) ||
      Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
  );
  await putJson(INDEX_KEY, index);
}

export async function createConversation(input: {
  visitorId: string;
  visitorName?: string;
  pageUrl?: string;
  firstMessage: string;
}): Promise<ChatConversation> {
  const now = new Date().toISOString();
  const message: ChatMessage = {
    id: randomUUID(),
    role: "visitor",
    content: input.firstMessage.trim(),
    createdAt: now,
    senderName: input.visitorName?.trim() || "Visitor",
  };

  const conversation: ChatConversation = {
    id: randomUUID(),
    visitorId: input.visitorId,
    visitorName: input.visitorName?.trim() || "Website visitor",
    pageUrl: input.pageUrl,
    status: "open",
    createdAt: now,
    updatedAt: now,
    lastMessageAt: now,
    lastMessagePreview: message.content.slice(0, 140),
    unreadForAgent: 1,
    messages: [message],
  };

  await putJson(convKey(conversation.id), conversation);

  const index = await loadIndex();
  index.conversations = index.conversations.filter(
    (c) => c.id !== conversation.id
  );
  index.conversations.unshift(toSummary(conversation));
  await saveIndex(index);

  return conversation;
}

export async function getConversation(
  id: string
): Promise<ChatConversation | null> {
  return getJson<ChatConversation>(convKey(id));
}

export async function listConversations(): Promise<ChatConversationSummary[]> {
  const index = await loadIndex();
  return index.conversations;
}

export async function addMessage(input: {
  conversationId: string;
  role: ChatRole;
  content: string;
  senderName?: string;
  /** True when this agent message came from a Teams reply */
  fromTeams?: boolean;
}): Promise<{ conversation: ChatConversation; message: ChatMessage }> {
  const conversation = await getConversation(input.conversationId);
  if (!conversation) {
    throw new Error("Conversation not found");
  }

  const content = input.content.trim();
  if (!content) {
    throw new Error("Message is empty");
  }

  const now = new Date().toISOString();
  const message: ChatMessage = {
    id: randomUUID(),
    role: input.role,
    content,
    createdAt: now,
    senderName:
      input.senderName ||
      (input.role === "agent" ? "Geekonomy" : conversation.visitorName),
  };

  conversation.messages.push(message);
  conversation.updatedAt = now;
  conversation.lastMessageAt = now;
  conversation.lastMessagePreview = content.slice(0, 140);
  if (input.role === "visitor") {
    conversation.status = "open";
    conversation.unreadForAgent += 1;
  } else if (input.role === "agent") {
    if (input.fromTeams) {
      conversation.status = "open";
      conversation.unreadForAgent += 1;
    } else {
      conversation.unreadForAgent = 0;
    }
  }

  await putJson(convKey(conversation.id), conversation);

  const index = await loadIndex();
  const summary = toSummary(conversation);
  index.conversations = [
    summary,
    ...index.conversations.filter((c) => c.id !== conversation.id),
  ];
  await saveIndex(index);

  return { conversation, message };
}

export async function updateConversationTeamsLink(
  conversationId: string,
  link: {
    teamsMessageId: string;
    syncedTeamsReplyIds?: string[];
  }
): Promise<ChatConversation | null> {
  const conversation = await getConversation(conversationId);
  if (!conversation) return null;

  conversation.teamsMessageId = link.teamsMessageId;
  conversation.syncedTeamsReplyIds = [
    ...new Set([
      ...(conversation.syncedTeamsReplyIds || []),
      ...(link.syncedTeamsReplyIds || []),
    ]),
  ];
  conversation.updatedAt = new Date().toISOString();
  await putJson(convKey(conversation.id), conversation);

  const index = await loadIndex();
  index.conversations = index.conversations.map((c) =>
    c.id === conversation.id ? toSummary(conversation) : c
  );
  await saveIndex(index);
  return conversation;
}

export async function markConversationRead(
  conversationId: string
): Promise<ChatConversation | null> {
  const conversation = await getConversation(conversationId);
  if (!conversation) return null;
  conversation.unreadForAgent = 0;
  conversation.updatedAt = new Date().toISOString();
  await putJson(convKey(conversation.id), conversation);

  const index = await loadIndex();
  index.conversations = index.conversations.map((c) =>
    c.id === conversation.id ? toSummary(conversation) : c
  );
  await saveIndex(index);
  return conversation;
}

export async function setConversationStatus(
  conversationId: string,
  status: "open" | "closed"
): Promise<ChatConversation | null> {
  const conversation = await getConversation(conversationId);
  if (!conversation) return null;
  conversation.status = status;
  conversation.updatedAt = new Date().toISOString();
  await putJson(convKey(conversation.id), conversation);

  const index = await loadIndex();
  index.conversations = index.conversations.map((c) =>
    c.id === conversation.id ? toSummary(conversation) : c
  );
  await saveIndex(index);
  return conversation;
}
