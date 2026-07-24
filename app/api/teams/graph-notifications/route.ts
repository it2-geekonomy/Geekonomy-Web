import { NextRequest, NextResponse } from "next/server";
import { getGraphBridgeConfig } from "@/lib/chatwoot-teams/config";
import { parseChannelMessageResource } from "@/lib/chatwoot-teams/graph";
import { ensureChannelSubscription } from "@/lib/chatwoot-teams/subscriptions";
import {
  syncTeamsRepliesByRootMessageId,
  syncTeamsRepliesIntoChat,
} from "@/lib/chat/teams-bridge";

export const maxDuration = 60;

type GraphNotificationItem = {
  subscriptionId?: string;
  clientState?: string;
  changeType?: string;
  resource?: string;
  lifecycleEvent?: string;
  resourceData?: { id?: string };
};

function expectedClientState(): string {
  return (
    process.env.GRAPH_NOTIFICATION_CLIENT_STATE || "geekonomy-teams-bridge"
  );
}

function validationResponse(token: string) {
  return new NextResponse(token, {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

/**
 * Graph → Geekonomy chat (custom widget), not Chatwoot.
 */
export async function POST(request: NextRequest) {
  const validationToken = request.nextUrl.searchParams.get("validationToken");
  if (validationToken) {
    return validationResponse(validationToken);
  }

  const config = getGraphBridgeConfig();
  if (!config) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  let payload: { value?: GraphNotificationItem[] };
  try {
    payload = (await request.json()) as { value?: GraphNotificationItem[] };
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const items = payload.value || [];
  if (items.length === 0) {
    return new NextResponse(null, { status: 202 });
  }

  const expected = expectedClientState();
  let sawCreate = false;
  const targetedRoots = new Set<string>();

  for (const item of items) {
    if (item.clientState !== expected) {
      console.warn("Graph notification rejected: clientState mismatch");
      continue;
    }
    if (item.lifecycleEvent) {
      console.info("Graph lifecycle:", item.lifecycleEvent);
      try {
        await ensureChannelSubscription(config);
      } catch (error) {
        console.error("Lifecycle renew failed:", error);
      }
      continue;
    }
    if (item.changeType === "created") {
      sawCreate = true;
      const parsed =
        parseChannelMessageResource(item.resource || "") ||
        (item.resourceData?.id
          ? { messageId: item.resourceData.id }
          : null);
      if (parsed?.rootMessageId) {
        targetedRoots.add(parsed.rootMessageId);
      } else if (parsed?.messageId) {
        // Might be a root message id or a bare reply id — try as root first
        targetedRoots.add(parsed.messageId);
      }
    }
  }

  if (sawCreate) {
    try {
      if (targetedRoots.size > 0) {
        let synced = 0;
        let anyMapped = false;
        for (const rootId of targetedRoots) {
          const result = await syncTeamsRepliesByRootMessageId(rootId);
          if (result.error !== "thread_not_mapped") anyMapped = true;
          synced += result.synced;
          console.info("Teams→chat targeted sync:", { rootId, ...result });
        }
        // Fallback sweep only when we couldn't map the notified thread
        if (!anyMapped) {
          const result = await syncTeamsRepliesIntoChat();
          console.info("Teams→chat full sync fallback:", result);
        } else {
          console.info("Teams→chat targeted total synced:", synced);
        }
      } else {
        const result = await syncTeamsRepliesIntoChat();
        console.info("Teams→chat sync:", result);
      }
    } catch (error) {
      console.error("Teams→chat sync failed:", error);
    }
  }

  return new NextResponse(null, { status: 202 });
}

export async function GET(request: NextRequest) {
  const validationToken = request.nextUrl.searchParams.get("validationToken");
  if (validationToken) {
    return validationResponse(validationToken);
  }

  return NextResponse.json({
    service: "graph-notifications",
    hint: "Microsoft Graph posts change notifications here → Geekonomy chat.",
  });
}
