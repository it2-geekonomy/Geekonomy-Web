import { Suspense } from "react";
import BlogsPageClient from "./BlogsPageClient";

export default function BlogsPage() {
  return (
    <Suspense
      fallback={
        <main className="bg-black min-h-screen py-[clamp(2.5rem,2.5rem+2vw,8rem)] flex items-center justify-center">
          <p className="text-white/70">Loading...</p>
        </main>
      }
    >
      <BlogsPageClient />
    </Suspense>
  );
}
