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
let loadedAt = 0;
/** Warm serverless instances must not keep a stale map forever. */
const CACHE_TTL_MS = 5_000;

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

async function loadMap(options?: { force?: boolean }): Promise<MapFile> {
  const fresh = Date.now() - loadedAt < CACHE_TTL_MS;
  if (!options?.force && loadedAt && fresh) {
    return memoryCache;
  }

  const bucket = process.env.R2_BUCKET;
  if (!bucket) {
    loadedAt = Date.now();
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

  loadedAt = Date.now();
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
  loadedAt = Date.now();
}

export async function listThreadMaps(): Promise<ThreadMapEntry[]> {
  const map = await loadMap({ force: true });
  return Object.values(map.byChatwoot);
}

export async function getByChatwootId(
  chatwootConversationId: string
): Promise<ThreadMapEntry | null> {
  const map = await loadMap({ force: true });
  return map.byChatwoot[String(chatwootConversationId)] || null;
}

export async function getByTeamsMessageId(
  teamsMessageId: string
): Promise<ThreadMapEntry | null> {
  const map = await loadMap({ force: true });
  return map.byTeamsMessage[String(teamsMessageId)] || null;
}

export async function upsertThreadMap(
  entry: Omit<ThreadMapEntry, "updatedAt"> & { updatedAt?: string }
): Promise<ThreadMapEntry> {
  const map = await loadMap({ force: true });
  const key = String(entry.chatwootConversationId);
  const existing = map.byChatwoot[key];

  // MERGE reply ids — concurrent poll/notification workers must not clobber each other
  const mergedIds = [
    ...new Set([
      ...(existing?.syncedReplyIds || []),
      ...(entry.syncedReplyIds || []),
    ]),
  ];

  const saved: ThreadMapEntry = {
    ...existing,
    ...entry,
    chatwootConversationId: key,
    teamsMessageId: String(entry.teamsMessageId || existing?.teamsMessageId || ""),
    contactName: entry.contactName || existing?.contactName,
    syncedReplyIds: mergedIds,
    updatedAt: new Date().toISOString(),
  };

  if (!saved.teamsMessageId) {
    throw new Error("upsertThreadMap: teamsMessageId required");
  }

  map.byChatwoot[saved.chatwootConversationId] = saved;
  map.byTeamsMessage[saved.teamsMessageId] = saved;
  await saveMap(map);
  return saved;
}
