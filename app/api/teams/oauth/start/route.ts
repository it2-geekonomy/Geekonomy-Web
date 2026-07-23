import { NextResponse } from "next/server";
import { getGraphBridgeConfig } from "@/lib/chatwoot-teams/config";
import { buildAuthorizeUrl } from "@/lib/chatwoot-teams/graph";

/** Open this once in the browser to connect a Microsoft account for Teams posting. */
export async function GET() {
  const config = getGraphBridgeConfig();
  if (!config) {
    return NextResponse.json(
      {
        error:
          "Missing env. Set MICROSOFT_TENANT_ID, MICROSOFT_CLIENT_ID, MICROSOFT_CLIENT_SECRET, TEAMS_TEAM_ID, TEAMS_CHANNEL_ID, APP_BASE_URL, CHATWOOT_ACCOUNT_ID, CHATWOOT_API_TOKEN.",
      },
      { status: 503 }
    );
  }

  return NextResponse.redirect(buildAuthorizeUrl(config));
}
