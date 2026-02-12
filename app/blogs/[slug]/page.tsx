"use client";

import { useParams } from "next/navigation";
import { BLOGS } from "@/components/Blogs/blogs";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = BLOGS.find((b) => b.slug === slug);

  if (!blog) return null;

  return (
    <main className="bg-black min-h-screen pt-24">
      <StickyScroll content={blog.sections} />
    </main>
  );
}
