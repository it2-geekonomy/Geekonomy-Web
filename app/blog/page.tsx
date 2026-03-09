import { Suspense } from "react";
import BlogsPageClient from "./BlogsPageClient";

function BlogsPageLoading() {
  return (
    <main className="bg-black min-h-screen py-[clamp(2.5rem,2.5rem+2vw,8rem)] flex items-center justify-center">
      <p className="text-white text-xl">Loading...</p>
    </main>
  );
}

export default function BlogsPage() {
  return (
    <Suspense fallback={<BlogsPageLoading />}>
      <BlogsPageClient />
    </Suspense>
  );
}
