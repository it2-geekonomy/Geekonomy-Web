import { NextRequest, NextResponse } from "next/server";
import {
  adminAuthConfigured,
  CHAT_ADMIN_COOKIE,
  createAdminSessionToken,
  isChatAdminAuthenticated,
} from "@/lib/chat/auth";

export async function GET() {
  return NextResponse.json({
    configured: adminAuthConfigured(),
    authenticated: await isChatAdminAuthenticated(),
  });
}

export async function POST(request: NextRequest) {
  if (!adminAuthConfigured()) {
    return NextResponse.json(
      {
        error:
          "Set CHAT_ADMIN_PASSWORD in env, then redeploy.",
      },
      { status: 503 }
    );
  }

  let body: { password?: string };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const token = createAdminSessionToken();
  const password = (body.password || "").trim();
  const expected = process.env.CHAT_ADMIN_PASSWORD?.trim();

  if (!token || !expected || password !== expected) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(CHAT_ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(CHAT_ADMIN_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return response;
}
