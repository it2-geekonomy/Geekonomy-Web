"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Send, X } from "lucide-react";

type ChatMessage = {
  id: string;
  role: "visitor" | "agent" | "system";
  content: string;
  createdAt: string;
  senderName?: string;
};

type ChatConversation = {
  id: string;
  visitorId: string;
  visitorName: string;
  messages: ChatMessage[];
};

const VISITOR_KEY = "geekonomy_chat_visitor_id";
const CONV_KEY = "geekonomy_chat_conversation_id";
const NAME_KEY = "geekonomy_chat_visitor_name";
const ACCENT = "#6FAF4E";
const AVATAR_SRC = "/geekonomy-avatar-branded%20(1).svg";
/** Same tier as the old Chatwoot bubble so nothing on the site covers it */
const Z = 2147483000;

function getOrCreateVisitorId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem(VISITOR_KEY);
  if (!id) {
    id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `v_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(VISITOR_KEY, id);
  }
  return id;
}

function TypingDots({ label }: { label: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          borderRadius: 16,
          borderBottomLeftRadius: 4,
          padding: "8px 12px",
          background: "rgba(255,255,255,0.1)",
          color: "#fff",
          fontSize: 14,
        }}
      >
        <p
          style={{
            margin: "0 0 4px",
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          {label}
        </p>
        <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.65)",
                animation: `geekonomy-typing 1.1s ease-in-out ${i * 0.15}s infinite`,
              }}
            />
          ))}
        </span>
      </div>
      <style>{`
        @keyframes geekonomy-typing {
          0%, 80%, 100% { opacity: 0.25; transform: translateY(0); }
          40% { opacity: 1; transform: translateY(-2px); }
        }
      `}</style>
    </div>
  );
}

export default function GeekonomyChatWidget() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [visitorId, setVisitorId] = useState("");
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [visitorName, setVisitorName] = useState("");
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasUnread, setHasUnread] = useState(false);
  const [agentTyping, setAgentTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const lastCountRef = useRef(0);
  const typingHeartbeatRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastTypingSentRef = useRef(0);

  useEffect(() => {
    setMounted(true);
    setVisitorId(getOrCreateVisitorId());
    setConversationId(localStorage.getItem(CONV_KEY));
    setVisitorName(localStorage.getItem(NAME_KEY) || "");
  }, []);

  const mergeServerMessages = useCallback((next: ChatMessage[]) => {
    setMessages((prev) => {
      const temps = prev.filter((m) => m.id.startsWith("temp_"));
      const pending = temps.filter(
        (temp) =>
          !next.some(
            (n) => n.role === "visitor" && n.content === temp.content
          )
      );
      const merged = [...next, ...pending];
      if (
        prev.length === merged.length &&
        prev.every(
          (m, i) =>
            m.id === merged[i]?.id && m.content === merged[i]?.content
        )
      ) {
        return prev;
      }
      return merged;
    });
  }, []);

  const refresh = useCallback(async () => {
    if (!conversationId || !visitorId) return;
    try {
      const res = await fetch(
        `/api/chat/conversations/${conversationId}?visitorId=${encodeURIComponent(visitorId)}`
      );
      if (!res.ok) {
        if (res.status === 404) {
          localStorage.removeItem(CONV_KEY);
          setConversationId(null);
          setMessages([]);
        }
        return;
      }
      const data = (await res.json()) as {
        conversation: ChatConversation;
        typing?: { agentTyping?: boolean };
      };
      const next = data.conversation.messages || [];
      mergeServerMessages(next);
      setAgentTyping(Boolean(data.typing?.agentTyping));
      if (
        !open &&
        next.length > lastCountRef.current &&
        next[next.length - 1]?.role === "agent"
      ) {
        setHasUnread(true);
      }
      lastCountRef.current = Math.max(lastCountRef.current, next.length);
    } catch {
      // ignore poll errors
    }
  }, [conversationId, visitorId, open, mergeServerMessages]);

  useEffect(() => {
    if (!conversationId || !visitorId) return;
    void refresh();
    const intervalMs = open ? 800 : 3000;
    const t = setInterval(() => void refresh(), intervalMs);
    return () => clearInterval(t);
  }, [conversationId, visitorId, refresh, open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, agentTyping]);

  useEffect(() => {
    if (open) setHasUnread(false);
  }, [open]);

  const pingTyping = useCallback(() => {
    if (!conversationId || !visitorId) return;
    const now = Date.now();
    if (now - lastTypingSentRef.current < 1200) return;
    lastTypingSentRef.current = now;
    void fetch(`/api/chat/conversations/${conversationId}/typing`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: "visitor", visitorId }),
    }).catch(() => undefined);
  }, [conversationId, visitorId]);

  const onDraftChange = (value: string) => {
    setDraft(value);
    if (!value.trim() || !conversationId) return;
    if (typingHeartbeatRef.current) clearTimeout(typingHeartbeatRef.current);
    typingHeartbeatRef.current = setTimeout(() => {
      pingTyping();
    }, 250);
  };

  const canSend = useMemo(
    () => draft.trim().length > 0 && !sending && Boolean(visitorId),
    [draft, sending, visitorId]
  );

  const endConversation = useCallback(async () => {
    const endingId = conversationId;
    const endingVisitorId = visitorId;

    // Clear stored chat session (localStorage — used instead of cookies)
    localStorage.removeItem(CONV_KEY);
    localStorage.removeItem(NAME_KEY);

    setConversationId(null);
    setVisitorName("");
    setMessages([]);
    setDraft("");
    setError(null);
    setHasUnread(false);
    setAgentTyping(false);
    setSending(false);
    lastCountRef.current = 0;

    // Best-effort: mark closed on server so inbox shows it ended
    if (endingId && endingVisitorId) {
      void fetch(`/api/chat/conversations/${endingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: "closed",
          visitorId: endingVisitorId,
        }),
      }).catch(() => undefined);
    }
  }, [conversationId, visitorId]);

  async function handleSend() {
    if (!canSend) return;
    const text = draft.trim();
    const tempId = `temp_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const optimistic: ChatMessage = {
      id: tempId,
      role: "visitor",
      content: text,
      createdAt: new Date().toISOString(),
      senderName: visitorName || "Visitor",
    };

    setSending(true);
    setError(null);
    setDraft("");
    // Show instantly — don't wait for Teams Graph
    setMessages((prev) => [...prev, optimistic]);
    lastCountRef.current += 1;

    try {
      if (!conversationId) {
        const res = await fetch("/api/chat/conversations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            visitorId,
            visitorName: visitorName || "Website visitor",
            pageUrl: window.location.href,
            message: text,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to start chat");
        const conv = data.conversation as ChatConversation;
        localStorage.setItem(CONV_KEY, conv.id);
        if (visitorName) localStorage.setItem(NAME_KEY, visitorName);
        setConversationId(conv.id);
        mergeServerMessages(conv.messages || []);
        lastCountRef.current = conv.messages?.length || 0;
      } else {
        const res = await fetch(
          `/api/chat/conversations/${conversationId}/messages`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              visitorId,
              role: "visitor",
              content: text,
              senderName: visitorName || undefined,
            }),
          }
        );
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to send");
        mergeServerMessages(data.conversation.messages || []);
        lastCountRef.current = data.conversation.messages?.length || 0;
      }
    } catch (err) {
      setMessages((prev) => prev.filter((m) => m.id !== tempId));
      setDraft(text);
      setError(err instanceof Error ? err.message : "Could not send");
    } finally {
      setSending(false);
    }
  }

  if (!mounted) return null;

  const ui = (
    <div
      id="geekonomy-chat-root"
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: Z,
        fontFamily: "var(--font-poppins), Poppins, system-ui, sans-serif",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 12,
          pointerEvents: "auto",
        }}
      >
        {open && (
          <div
            style={{
              width: "min(380px, calc(100vw - 2rem))",
              height: "min(560px, 70vh)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "#0c0c0c",
              boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
            }}
          >
            <header
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                background: "#111",
                padding: "12px 16px",
                gap: 8,
              }}
            >
              <div style={{ minWidth: 0, flex: 1 }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  Geekonomy
                </p>
                <p
                  style={{
                    margin: "2px 0 0",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  We typically reply in minutes
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {conversationId && (
                  <button
                    type="button"
                    onClick={() => void endConversation()}
                    style={{
                      border: "1px solid rgba(255,255,255,0.15)",
                      background: "transparent",
                      color: "rgba(255,255,255,0.7)",
                      cursor: "pointer",
                      padding: "6px 10px",
                      borderRadius: 999,
                      fontSize: 11,
                      whiteSpace: "nowrap",
                    }}
                  >
                    End chat
                  </button>
                )}
                <button
                  type="button"
                  aria-label="Close chat"
                  onClick={() => setOpen(false)}
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "rgba(255,255,255,0.6)",
                    cursor: "pointer",
                    padding: 6,
                    borderRadius: 999,
                  }}
                >
                  <X size={18} />
                </button>
              </div>
            </header>

            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "12px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {messages.length === 0 && (
                <div
                  style={{
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.05)",
                    padding: 12,
                    fontSize: 14,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  Hi — tell us what you need help with. Branding, marketing,
                  product, or something else.
                </div>
              )}
              {messages.map((m) => {
                const mine = m.role === "visitor";
                const pending = m.id.startsWith("temp_");
                return (
                  <div
                    key={m.id}
                    style={{
                      display: "flex",
                      justifyContent: mine ? "flex-end" : "flex-start",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "85%",
                        borderRadius: 16,
                        borderBottomRightRadius: mine ? 4 : 16,
                        borderBottomLeftRadius: mine ? 16 : 4,
                        padding: "8px 12px",
                        fontSize: 14,
                        lineHeight: 1.45,
                        whiteSpace: "pre-wrap",
                        background: mine ? ACCENT : "rgba(255,255,255,0.1)",
                        color: mine ? "#000" : "#fff",
                        opacity: pending ? 0.75 : 1,
                      }}
                    >
                      {!mine && (
                        <p
                          style={{
                            margin: "0 0 2px",
                            fontSize: 10,
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            color: "rgba(255,255,255,0.4)",
                          }}
                        >
                          {m.senderName || "Geekonomy"}
                        </p>
                      )}
                      {m.content}
                    </div>
                  </div>
                );
              })}
              {agentTyping && <TypingDots label="Geekonomy" />}
              <div ref={bottomRef} />
            </div>

            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
                background: "#111",
                padding: 12,
              }}
            >
              {!conversationId && (
                <input
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  placeholder="Your name (optional)"
                  style={{
                    width: "100%",
                    marginBottom: 8,
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(0,0,0,0.4)",
                    padding: "8px 12px",
                    fontSize: 14,
                    color: "#fff",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              )}
              {error && (
                <p style={{ margin: "0 0 8px", fontSize: 12, color: "#f87171" }}>
                  {error}
                </p>
              )}
              <form
                style={{ display: "flex", alignItems: "flex-end", gap: 8 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  void handleSend();
                }}
              >
                <textarea
                  value={draft}
                  onChange={(e) => onDraftChange(e.target.value)}
                  rows={1}
                  placeholder="Type a message…"
                  style={{
                    flex: 1,
                    minHeight: 42,
                    maxHeight: 112,
                    resize: "none",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(0,0,0,0.4)",
                    padding: "10px 12px",
                    fontSize: 14,
                    color: "#fff",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      void handleSend();
                    }
                  }}
                />
                <button
                  type="submit"
                  disabled={!canSend}
                  aria-label="Send"
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    border: "none",
                    background: ACCENT,
                    color: "#000",
                    cursor: canSend ? "pointer" : "default",
                    opacity: canSend ? 1 : 0.4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        )}

        <button
          type="button"
          aria-label={open ? "Close Geekonomy chat" : "Open Geekonomy chat"}
          onClick={() => setOpen((v) => !v)}
          style={{
            position: "relative",
            width: 64,
            height: 64,
            borderRadius: "50%",
            border: "none",
            padding: 0,
            background: "transparent",
            cursor: "pointer",
            overflow: "visible",
            boxShadow: `0 8px 28px ${ACCENT}66`,
          }}
        >
          <img
            src={AVATAR_SRC}
            alt=""
            width={64}
            height={64}
            style={{
              width: 64,
              height: 64,
              objectFit: "contain",
              display: "block",
              pointerEvents: "none",
            }}
          />
          {hasUnread && !open && (
            <span
              style={{
                position: "absolute",
                top: 2,
                right: 2,
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#ef4444",
                border: "2px solid #0c0c0c",
              }}
            />
          )}
        </button>
      </div>
    </div>
  );

  return createPortal(ui, document.body);
}
