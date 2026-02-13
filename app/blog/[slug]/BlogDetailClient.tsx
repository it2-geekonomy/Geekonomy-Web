"use client";

import { BLOGS } from "@/components/Blogs/blogs";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

interface BlogDetailClientProps {
  blogSlug: string;
}

export default function BlogDetailClient({ blogSlug }: BlogDetailClientProps) {
  const blog = BLOGS.find((b) => b.slug === blogSlug);

  if (!blog) {
    return null; // Error case handled in parent
  }

  return (
    <main className="bg-black min-h-screen py-[clamp(2.5rem,2.5rem+2vw,8rem)]">
      <StickyScroll content={blog.sections} />
    </main>
  );
}
