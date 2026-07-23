import { NextRequest, NextResponse } from "next/server";
import { getGraphBridgeConfig } from "@/lib/chatwoot-teams/config";
import { exchangeCodeForTokens } from "@/lib/chatwoot-teams/graph";

export async function GET(request: NextRequest) {
  const config = getGraphBridgeConfig();
  if (!config) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  const code = request.nextUrl.searchParams.get("code");
  const error = request.nextUrl.searchParams.get("error");
  const errorDescription =
    request.nextUrl.searchParams.get("error_description") || "";

  if (error) {
    return NextResponse.json(
      { error, error_description: errorDescription },
      { status: 400 }
    );
  }

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  try {
    await exchangeCodeForTokens(config, code);
    return new NextResponse(
      `<!doctype html><html><body style="font-family:sans-serif;padding:2rem">
        <h1>Microsoft Teams connected</h1>
        <p>You can close this tab. Chatwoot messages will post to your Teams channel.</p>
        <p>Make sure Chatwoot webhook points to <code>/api/chatwoot/webhook</code>.</p>
      </body></html>`,
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  } catch (err) {
    console.error("OAuth callback failed:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "OAuth failed" },
      { status: 500 }
    );
  }
}
