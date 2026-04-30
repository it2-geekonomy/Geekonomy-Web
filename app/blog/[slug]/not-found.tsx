import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Not Found | Geekonomy",
  robots: { index: false, follow: true },
};

export default function BlogPostNotFound() {
  return (
    <main className="bg-black min-h-dvh py-[clamp(2.5rem,2.5rem+2vw,8rem)] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-white font-bold text-[clamp(1.5rem,2vw,2rem)] mb-4">
          Blog Not Found
        </h1>
        <p className="text-white/70 mb-6">
          This URL is not a published article.
        </p>
        <Link href="/blog" className="text-[#6FAF4E] hover:underline font-medium">
          ← Back to Blog
        </Link>
      </div>
    </main>
  );
}
