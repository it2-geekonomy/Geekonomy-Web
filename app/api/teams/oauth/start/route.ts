import { NextRequest, NextResponse } from "next/server";
import {
  getGraphBridgeConfig,
  getOAuthRedirectUri,
  resolveAppBaseUrl,
} from "@/lib/chatwoot-teams/config";
import { buildAuthorizeUrl } from "@/lib/chatwoot-teams/graph";
import { hasPersistedMsTokens } from "@/lib/chatwoot-teams/tokens";

/** Open this once in the browser to connect a Microsoft account for Teams posting. */
export async function GET(request: NextRequest) {
  const config = getGraphBridgeConfig();

  // ?debug=1 shows what redirect URI will be used (no secrets)
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
      clientSecretLooksLikeGuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
        secret
      ),
      clientSecretHasTilde: secret.includes("~"),
      clientSecretLength: secret.length,
      r2BucketSet: Boolean(process.env.R2_BUCKET?.trim()),
      microsoftConnected,
      configured: Boolean(config),
      hint: microsoftConnected
        ? "Microsoft token is stored — chats should post to Teams."
        : "Microsoft NOT connected. Open /api/teams/oauth/start (without debug) and finish login. Ensure R2_* vars exist on Vercel.",
    });
  }

  if (!config) {
    return NextResponse.json(
      {
        error:
          "Missing or invalid env. APP_BASE_URL must be a full https URL (not the page title). Or rely on VERCEL_URL automatically.",
      },
      { status: 503 }
    );
  }

  return NextResponse.redirect(buildAuthorizeUrl(config));
}
