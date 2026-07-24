"use client";

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Send } from "lucide-react";

type ChatMessage = {
  id: string;
  role: "visitor" | "agent" | "system";
  content: string;
  createdAt: string;
  senderName?: string;
};

type ChatConversationSummary = {
  id: string;
  visitorName: string;
  status: "open" | "closed";
  lastMessageAt: string;
  lastMessagePreview: string;
  unreadForAgent: number;
  pageUrl?: string;
};

type ChatConversation = ChatConversationSummary & {
  messages: ChatMessage[];
  visitorId: string;
};

function formatTime(iso: string) {
  try {
    return new Date(iso).toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function AdminChatClient() {
  const [auth, setAuth] = useState<{
    configured: boolean;
    authenticated: boolean;
  } | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [conversations, setConversations] = useState<ChatConversationSummary[]>(
    []
  );
  const [activeId, setActiveId] = useState<string | null>(null);
  const [active, setActive] = useState<ChatConversation | null>(null);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const loadAuth = useCallback(async () => {
    const res = await fetch("/api/chat/admin/login");
    const data = await res.json();
    setAuth({
      configured: Boolean(data.configured),
      authenticated: Boolean(data.authenticated),
    });
  }, []);

  const loadList = useCallback(async () => {
    const res = await fetch("/api/chat/conversations");
    if (res.status === 401) {
      setAuth((a) => (a ? { ...a, authenticated: false } : a));
      return;
    }
    if (!res.ok) return;
    const data = await res.json();
    setConversations(data.conversations || []);
  }, []);

  const loadActive = useCallback(async (id: string) => {
    const res = await fetch(`/api/chat/conversations/${id}`);
    if (!res.ok) return;
    const data = await res.json();
    setActive(data.conversation);
  }, []);

  useEffect(() => {
    void loadAuth();
  }, [loadAuth]);

  useEffect(() => {
    if (!auth?.authenticated) return;
    void loadList();
    const t = setInterval(() => void loadList(), 3000);
    return () => clearInterval(t);
  }, [auth?.authenticated, loadList]);

  useEffect(() => {
    if (!auth?.authenticated || !activeId) return;
    void loadActive(activeId);
    const t = setInterval(() => void loadActive(activeId), 1200);
    return () => clearInterval(t);
  }, [auth?.authenticated, activeId, loadActive]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [active?.messages]);

  const unreadTotal = useMemo(
    () => conversations.reduce((n, c) => n + (c.unreadForAgent || 0), 0),
    [conversations]
  );

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setLoginError(null);
    const res = await fetch("/api/chat/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (!res.ok) {
      setLoginError(data.error || "Login failed");
      return;
    }
    setPassword("");
    await loadAuth();
  }

  async function handleLogout() {
    await fetch("/api/chat/admin/login", { method: "DELETE" });
    setActive(null);
    setActiveId(null);
    setConversations([]);
    await loadAuth();
  }

  async function sendReply() {
    if (!activeId || !draft.trim() || sending) return;
    setSending(true);
    const content = draft.trim();
    setDraft("");
    try {
      const res = await fetch(`/api/chat/conversations/${activeId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: "agent",
          content,
          senderName: "Geekonomy",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Send failed");
      setActive(data.conversation);
      void loadList();
    } catch (err) {
      setDraft(content);
      alert(err instanceof Error ? err.message : "Send failed");
    } finally {
      setSending(false);
    }
  }

  async function handleSend(e: FormEvent) {
    e.preventDefault();
    await sendReply();
  }

  async function toggleStatus() {
    if (!active) return;
    const next = active.status === "open" ? "closed" : "open";
    const res = await fetch(`/api/chat/conversations/${active.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next }),
    });
    if (!res.ok) return;
    const data = await res.json();
    setActive(data.conversation);
    void loadList();
  }

  if (!auth) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center text-white/60">
        Loading…
      </div>
    );
  }

  if (!auth.configured) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-white/10 bg-[#111] p-8 text-white">
        <h1 className="text-xl font-semibold">Chat inbox not configured</h1>
        <p className="mt-3 text-sm text-white/60">
          Add <code className="text-[#6FAF4E]">CHAT_ADMIN_PASSWORD</code> to
          your env (Vercel + local <code>.env</code>), redeploy, then refresh
          this page.
        </p>
      </div>
    );
  }

  if (!auth.authenticated) {
    return (
      <form
        onSubmit={handleLogin}
        className="mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-[#111] p-8 text-white"
      >
        <h1 className="text-xl font-semibold">Geekonomy Chat Inbox</h1>
        <p className="mt-2 text-sm text-white/50">
          Sign in to reply to website visitors.
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Admin password"
          className="mt-6 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-sm outline-none focus:border-[#6FAF4E]/60"
        />
        {loginError && (
          <p className="mt-2 text-sm text-red-400">{loginError}</p>
        )}
        <button
          type="submit"
          className="mt-4 w-full rounded-xl bg-[#6FAF4E] py-3 text-sm font-semibold text-black transition hover:brightness-110"
        >
          Sign in
        </button>
      </form>
    );
  }

  return (
    <div className="mx-auto flex h-[min(820px,calc(100vh-8rem))] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] text-white shadow-2xl">
      <aside className="flex w-full max-w-[320px] flex-col border-r border-white/10 bg-[#111]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div>
            <p className="font-semibold">Inbox</p>
            <p className="text-xs text-white/40">
              {unreadTotal > 0 ? `${unreadTotal} unread` : "All caught up"}
            </p>
          </div>
          <button
            type="button"
            onClick={() => void handleLogout()}
            className="text-xs text-white/50 hover:text-white"
          >
            Log out
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.length === 0 && (
            <p className="px-4 py-6 text-sm text-white/40">
              No conversations yet. Open the site widget and send a test
              message.
            </p>
          )}
          {conversations.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveId(c.id)}
              className={`block w-full border-b border-white/5 px-4 py-3 text-left transition hover:bg-white/5 ${
                activeId === c.id ? "bg-white/5" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-sm font-medium">{c.visitorName}</p>
                {c.unreadForAgent > 0 && (
                  <span className="rounded-full bg-[#6FAF4E] px-1.5 py-0.5 text-[10px] font-bold text-black">
                    {c.unreadForAgent}
                  </span>
                )}
              </div>
              <p className="mt-1 truncate text-xs text-white/45">
                {c.lastMessagePreview}
              </p>
              <p className="mt-1 text-[10px] text-white/30">
                {formatTime(c.lastMessageAt)} · {c.status}
              </p>
            </button>
          ))}
        </div>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col">
        {!active ? (
          <div className="flex flex-1 items-center justify-center text-sm text-white/40">
            Select a conversation
          </div>
        ) : (
          <>
            <header className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <div className="min-w-0">
                <p className="truncate font-semibold">{active.visitorName}</p>
                <p className="truncate text-xs text-white/40">
                  {active.pageUrl || "Website chat"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => void toggleStatus()}
                className="rounded-lg border border-white/15 px-3 py-1.5 text-xs text-white/70 hover:border-[#6FAF4E]/50 hover:text-[#6FAF4E]"
              >
                Mark {active.status === "open" ? "closed" : "open"}
              </button>
            </header>

            <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {active.messages.map((m) => {
                const agent = m.role === "agent";
                return (
                  <div
                    key={m.id}
                    className={`flex ${agent ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ${
                        agent
                          ? "rounded-br-md bg-[#6FAF4E] text-black"
                          : "rounded-bl-md bg-white/10 text-white"
                      }`}
                    >
                      <p className="mb-0.5 text-[10px] uppercase tracking-wide opacity-60">
                        {m.senderName || (agent ? "You" : "Visitor")}
                      </p>
                      <p className="whitespace-pre-wrap">{m.content}</p>
                      <p className="mt-1 text-[10px] opacity-50">
                        {formatTime(m.createdAt)}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div ref={bottomRef} />
            </div>

            <form
              onSubmit={handleSend}
              className="flex gap-2 border-t border-white/10 p-4"
            >
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                rows={2}
                placeholder="Reply to visitor…"
                className="min-h-[48px] flex-1 resize-none rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-[#6FAF4E]/60"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void sendReply();
                  }
                }}
              />
              <button
                type="submit"
                disabled={sending || !draft.trim()}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6FAF4E] text-black disabled:opacity-40"
              >
                <Send size={16} />
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
