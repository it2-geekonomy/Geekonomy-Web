import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "@/lib/r2";

export type MsTokenStore = {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  accountName?: string;
  updatedAt: string;
};

const TOKEN_KEY = "chatwoot-teams/ms-tokens.json";
let memoryTokens: MsTokenStore | null = null;

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

function requireBucket(): string {
  const bucket = process.env.R2_BUCKET?.trim();
  if (!bucket) {
    throw new Error(
      "R2_BUCKET is missing on Vercel. Microsoft tokens cannot persist without R2 — add R2_* env vars and redeploy."
    );
  }
  return bucket;
}

export async function loadMsTokens(): Promise<MsTokenStore | null> {
  if (memoryTokens?.refreshToken) return memoryTokens;

  const bucket = process.env.R2_BUCKET?.trim();
  if (!bucket) return null;

  try {
    const result = await r2.send(
      new GetObjectCommand({ Bucket: bucket, Key: TOKEN_KEY })
    );
    const text = await readBody(result.Body);
    if (text) {
      memoryTokens = JSON.parse(text) as MsTokenStore;
    }
  } catch {
    // not connected yet / object missing
  }

  return memoryTokens;
}

export async function saveMsTokens(tokens: MsTokenStore): Promise<void> {
  const bucket = requireBucket();
  memoryTokens = tokens;

  await r2.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: TOKEN_KEY,
      Body: JSON.stringify(tokens),
      ContentType: "application/json",
    })
  );
}

export async function clearMsTokens(): Promise<void> {
  memoryTokens = null;
}

export async function hasPersistedMsTokens(): Promise<boolean> {
  // Force read from R2, not only memory
  memoryTokens = null;
  const tokens = await loadMsTokens();
  return Boolean(tokens?.refreshToken);
}
