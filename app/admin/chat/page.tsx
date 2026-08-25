import type { Metadata } from "next";
import AdminChatClient from "@/components/chatbot/AdminChatClient";

export const metadata: Metadata = {
  title: "Chat Inbox | Geekonomy",
  robots: { index: false, follow: false },
};

export default function AdminChatPage() {
  return (
    <main className="min-h-screen bg-[#080808] px-4 py-8 md:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-white">Chat Inbox</h1>
        <p className="mt-1 text-sm text-white/45">
          Live website conversations — reply here, visitors see it in the widget.
        </p>
      </div>
      <AdminChatClient />
    </main>
  );
}
