import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "@/lib/r2";
import type { GraphBridgeConfig } from "./config";
import {
  channelMessagesResource,
  createOrRenewChannelSubscription,
} from "./graph";

export type SubscriptionStore = {
  id: string;
  expirationDateTime: string;
  updatedAt: string;
  /** Graph resource path — must match current TEAMS_* ids */
  resource?: string;
  notificationUrl?: string;
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
  sub: Omit<SubscriptionStore, "updatedAt"> & { updatedAt?: string }
): Promise<void> {
  memorySub = {
    ...sub,
    updatedAt: sub.updatedAt || new Date().toISOString(),
  };
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

/** Create or renew if missing, wrong channel, or expiring within 36 hours. */
export async function ensureChannelSubscription(
  config: GraphBridgeConfig,
  options?: { forceRecreate?: boolean }
): Promise<SubscriptionStore> {
  const existing = await loadSubscription();
  const expectedResource = channelMessagesResource(config);
  const expectedNotificationUrl = `${config.appBaseUrl}/api/teams/graph-notifications`;
  const expiresAt = existing ? Date.parse(existing.expirationDateTime) : 0;

  // chatMessage max ~3 days — renew a day+ early so daily/6h cron never misses
  const RENEW_WITHIN_MS = 36 * 60 * 60 * 1000;

  const resourceMismatch =
    !existing?.resource || existing.resource !== expectedResource;
  const urlMismatch =
    !existing?.notificationUrl ||
    existing.notificationUrl !== expectedNotificationUrl;
  const needsRenew =
    !existing?.id ||
    !Number.isFinite(expiresAt) ||
    expiresAt < Date.now() + RENEW_WITHIN_MS;

  if (
    !options?.forceRecreate &&
    !resourceMismatch &&
    !urlMismatch &&
    !needsRenew &&
    existing
  ) {
    return existing;
  }

  // Only PATCH expiry when team/channel/notification URL are unchanged.
  const canPatch =
    Boolean(existing?.id) &&
    !options?.forceRecreate &&
    !resourceMismatch &&
    !urlMismatch;

  const renewed = await createOrRenewChannelSubscription(
    config,
    existing?.id,
    { forceRecreate: options?.forceRecreate, canPatch }
  );
  await saveSubscription(renewed);
  return {
    ...renewed,
    updatedAt: new Date().toISOString(),
  };
}
