import { cookies } from "next/headers";
import { createHash, timingSafeEqual } from "crypto";

export const CHAT_ADMIN_COOKIE = "geekonomy_chat_admin";

function expectedToken(): string | null {
  const password = process.env.CHAT_ADMIN_PASSWORD?.trim();
  if (!password) return null;
  return createHash("sha256")
    .update(`geekonomy-chat:${password}`)
    .digest("hex");
}

export function createAdminSessionToken(): string | null {
  return expectedToken();
}

export async function isChatAdminAuthenticated(): Promise<boolean> {
  const expected = expectedToken();
  if (!expected) return false;

  const jar = await cookies();
  const got = jar.get(CHAT_ADMIN_COOKIE)?.value;
  if (!got || got.length !== expected.length) return false;

  try {
    return timingSafeEqual(Buffer.from(got), Buffer.from(expected));
  } catch {
    return false;
  }
}

export function adminAuthConfigured(): boolean {
  return Boolean(process.env.CHAT_ADMIN_PASSWORD?.trim());
}
