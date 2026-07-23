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

export async function loadMsTokens(): Promise<MsTokenStore | null> {
  if (memoryTokens) return memoryTokens;

  const bucket = process.env.R2_BUCKET;
  if (!bucket) return memoryTokens;

  try {
    const result = await r2.send(
      new GetObjectCommand({ Bucket: bucket, Key: TOKEN_KEY })
    );
    const text = await readBody(result.Body);
    if (text) {
      memoryTokens = JSON.parse(text) as MsTokenStore;
    }
  } catch {
    // not connected yet
  }

  return memoryTokens;
}

export async function saveMsTokens(tokens: MsTokenStore): Promise<void> {
  memoryTokens = tokens;
  const bucket = process.env.R2_BUCKET;
  if (!bucket) return;

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
