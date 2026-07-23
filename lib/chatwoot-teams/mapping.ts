import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "@/lib/r2";

export type ThreadMapEntry = {
  chatwootConversationId: string;
  /** Root Teams channel message id (thread starter) */
  teamsMessageId: string;
  contactName?: string;
  /** Teams reply ids already synced to Chatwoot */
  syncedReplyIds?: string[];
  updatedAt: string;
};

type MapFile = {
  byChatwoot: Record<string, ThreadMapEntry>;
  byTeamsMessage: Record<string, ThreadMapEntry>;
};

const MAP_KEY = "chatwoot-teams/conversation-map.json";
const memoryCache: MapFile = { byChatwoot: {}, byTeamsMessage: {} };
let loaded = false;

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

async function loadMap(): Promise<MapFile> {
  if (loaded) return memoryCache;

  const bucket = process.env.R2_BUCKET;
  if (!bucket) {
    loaded = true;
    return memoryCache;
  }

  try {
    const result = await r2.send(
      new GetObjectCommand({ Bucket: bucket, Key: MAP_KEY })
    );
    const text = await readBody(result.Body);
    if (text) {
      const parsed = JSON.parse(text) as MapFile;
      memoryCache.byChatwoot = parsed.byChatwoot || {};
      memoryCache.byTeamsMessage = parsed.byTeamsMessage || {};
    }
  } catch {
    // First run — empty map
  }

  loaded = true;
  return memoryCache;
}

async function saveMap(map: MapFile): Promise<void> {
  const bucket = process.env.R2_BUCKET;
  if (!bucket) return;

  await r2.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: MAP_KEY,
      Body: JSON.stringify(map),
      ContentType: "application/json",
    })
  );
}

export async function listThreadMaps(): Promise<ThreadMapEntry[]> {
  const map = await loadMap();
  return Object.values(map.byChatwoot);
}

export async function getByChatwootId(
  chatwootConversationId: string
): Promise<ThreadMapEntry | null> {
  const map = await loadMap();
  return map.byChatwoot[String(chatwootConversationId)] || null;
}

export async function getByTeamsMessageId(
  teamsMessageId: string
): Promise<ThreadMapEntry | null> {
  const map = await loadMap();
  return map.byTeamsMessage[String(teamsMessageId)] || null;
}

export async function upsertThreadMap(
  entry: Omit<ThreadMapEntry, "updatedAt"> & { updatedAt?: string }
): Promise<ThreadMapEntry> {
  const map = await loadMap();
  const saved: ThreadMapEntry = {
    ...entry,
    chatwootConversationId: String(entry.chatwootConversationId),
    teamsMessageId: String(entry.teamsMessageId),
    syncedReplyIds: entry.syncedReplyIds || [],
    updatedAt: new Date().toISOString(),
  };

  map.byChatwoot[saved.chatwootConversationId] = saved;
  map.byTeamsMessage[saved.teamsMessageId] = saved;
  await saveMap(map);
  return saved;
}
