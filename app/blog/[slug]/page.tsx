"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { BLOGS } from "@/components/Blogs/blogs";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Typography } from "@/components/ui/Typography";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = BLOGS.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <main className="bg-black min-h-screen py-[clamp(2.5rem,2.5rem+2vw,8rem)] flex items-center justify-center">
        <div className="text-center">
          <Typography
            as="h1"
            variant="2xl"
            className="text-white font-bold mb-4"
          >
            Blog Not Found
          </Typography>
          <Typography
            as="p"
            variant="lg"
            className="text-white/70 mb-6"
          >
            The blog you're looking for doesn't exist.
          </Typography>
          <Link
            href="/blogs"
            className="text-[#6FAF4E] hover:underline font-medium"
          >
            ← Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen py-[clamp(2.5rem,2.5rem+2vw,8rem)]">
      <StickyScroll content={blog.sections} />
    </main>
  );
}
