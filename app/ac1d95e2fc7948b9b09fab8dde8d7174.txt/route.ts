import { NextResponse } from "next/server";

const INDEXNOW_KEY = "ac1d95e2fc7948b9b09fab8dde8d7174";

/** Bing IndexNow domain verification — must be served at /{key}.txt */
export async function GET() {
  return new NextResponse(INDEXNOW_KEY, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
