import { NextRequest, NextResponse } from "next/server";
import {
  getGraphBridgeConfig,
  getOAuthRedirectUri,
  resolveAppBaseUrl,
} from "@/lib/chatwoot-teams/config";
import { buildAuthorizeUrl } from "@/lib/chatwoot-teams/graph";
import { hasPersistedMsTokens } from "@/lib/chatwoot-teams/tokens";

function r2Ready(): boolean {
  return Boolean(
    process.env.R2_BUCKET?.trim() &&
      process.env.R2_ENDPOINT?.trim() &&
      process.env.R2_ACCESS_KEY?.trim() &&
      process.env.R2_SECRET_KEY?.trim()
  );
}

/** Open this once in the browser to connect a Microsoft account for Teams posting. */
export async function GET(request: NextRequest) {
  const config = getGraphBridgeConfig();

  if (request.nextUrl.searchParams.get("debug") === "1") {
    const secret = (process.env.MICROSOFT_CLIENT_SECRET || "").trim();
    const microsoftConnected = await hasPersistedMsTokens();
    return NextResponse.json({
      appBaseUrl: resolveAppBaseUrl() || null,
      redirectUri: config
        ? getOAuthRedirectUri(config.appBaseUrl)
        : null,
      tenantId: process.env.MICROSOFT_TENANT_ID || null,
      clientId: process.env.MICROSOFT_CLIENT_ID || null,
      clientSecretLooksLikeGuid:
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
          secret
        ),
      clientSecretHasTilde: secret.includes("~"),
      clientSecretLength: secret.length,
      r2BucketSet: r2Ready(),
      microsoftConnected,
      configured: Boolean(config),
      hint: !r2Ready()
        ? "BLOCKED: Add R2_ENDPOINT, R2_ACCESS_KEY, R2_SECRET_KEY, R2_BUCKET on Vercel Preview, redeploy, then reconnect OAuth."
        : microsoftConnected
          ? "OK: Microsoft token persisted. Website chats should post to Teams."
          : "R2 OK but Microsoft not connected. Open /api/teams/oauth/start (no debug) and finish login.",
    });
  }

  if (!r2Ready()) {
    return new NextResponse(
      `<!doctype html><html><body style="font-family:sans-serif;padding:2rem;max-width:640px">
        <h1>Cannot connect Microsoft yet</h1>
        <p><strong>R2 storage is missing on this deployment.</strong></p>
        <p>Without R2, the Teams login cannot persist on Vercel (serverless). Messages will stop working after a few minutes.</p>
        <ol>
          <li>Vercel → Settings → Environment Variables (Preview)</li>
          <li>Add <code>R2_ENDPOINT</code>, <code>R2_ACCESS_KEY</code>, <code>R2_SECRET_KEY</code>, <code>R2_BUCKET</code></li>
          <li>Redeploy <code>kishan2</code></li>
          <li>Open this URL again</li>
        </ol>
      </body></html>`,
      {
        status: 503,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  }

  if (!config) {
    return NextResponse.json(
      {
        error:
          "Missing env (Chatwoot / Microsoft / Teams / APP_BASE_URL / R2). Check Vercel Preview env and redeploy.",
      },
      { status: 503 }
    );
  }

  return NextResponse.redirect(buildAuthorizeUrl(config));
}
