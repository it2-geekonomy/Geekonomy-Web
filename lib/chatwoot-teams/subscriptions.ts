import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "@/lib/r2";
import type { GraphBridgeConfig } from "./config";
import { createOrRenewChannelSubscription } from "./graph";

export type SubscriptionStore = {
  id: string;
  expirationDateTime: string;
  updatedAt: string;
};

const SUB_KEY = "chatwoot-teams/graph-subscription.json";
let memorySub: SubscriptionStore | null = null;

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

export async function loadSubscription(): Promise<SubscriptionStore | null> {
  if (memorySub) return memorySub;
  const bucket = process.env.R2_BUCKET;
  if (!bucket) return memorySub;

  try {
    const result = await r2.send(
      new GetObjectCommand({ Bucket: bucket, Key: SUB_KEY })
    );
    const text = await readBody(result.Body);
    if (text) memorySub = JSON.parse(text) as SubscriptionStore;
  } catch {
    // none yet
  }
  return memorySub;
}

export async function saveSubscription(
  sub: Omit<SubscriptionStore, "updatedAt">
): Promise<void> {
  memorySub = { ...sub, updatedAt: new Date().toISOString() };
  const bucket = process.env.R2_BUCKET;
  if (!bucket) return;
  await r2.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: SUB_KEY,
      Body: JSON.stringify(memorySub),
      ContentType: "application/json",
    })
  );
}

/** Create or renew if missing / expiring within 12 hours. */
export async function ensureChannelSubscription(
  config: GraphBridgeConfig
): Promise<SubscriptionStore> {
  const existing = await loadSubscription();
  const expiresAt = existing
    ? Date.parse(existing.expirationDateTime)
    : 0;
  const needsRenew =
    !existing?.id ||
    !Number.isFinite(expiresAt) ||
    expiresAt < Date.now() + 12 * 60 * 60 * 1000;

  if (!needsRenew && existing) {
    return existing;
  }

  const renewed = await createOrRenewChannelSubscription(
    config,
    existing?.id
  );
  await saveSubscription(renewed);
  return {
    ...renewed,
    updatedAt: new Date().toISOString(),
  };
}
