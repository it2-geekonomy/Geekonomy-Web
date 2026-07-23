import { NextRequest, NextResponse } from "next/server";
import {
  getGraphBridgeConfig,
  getOAuthRedirectUri,
  resolveAppBaseUrl,
} from "@/lib/chatwoot-teams/config";
import { buildAuthorizeUrl } from "@/lib/chatwoot-teams/graph";

/** Open this once in the browser to connect a Microsoft account for Teams posting. */
export async function GET(request: NextRequest) {
  const config = getGraphBridgeConfig();

  // ?debug=1 shows what redirect URI will be used (no secrets)
  if (request.nextUrl.searchParams.get("debug") === "1") {
    const secret = (process.env.MICROSOFT_CLIENT_SECRET || "").trim();
    return NextResponse.json({
      appBaseUrl: resolveAppBaseUrl() || null,
      redirectUri: config
        ? getOAuthRedirectUri(config.appBaseUrl)
        : null,
      tenantId: process.env.MICROSOFT_TENANT_ID || null,
      clientId: process.env.MICROSOFT_CLIENT_ID || null,
      // Safe checks only — never return the full secret
      clientSecretLooksLikeGuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
        secret
      ),
      clientSecretHasTilde: secret.includes("~"),
      clientSecretLength: secret.length,
      configured: Boolean(config),
      hint: "clientSecretLooksLikeGuid must be false; clientSecretHasTilde is usually true for Azure secret Values",
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
