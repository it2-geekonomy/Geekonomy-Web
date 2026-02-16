"use client";

import Link from "next/link";
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

  // Find current blog index and get previous/next blogs
  const currentIndex = BLOGS.findIndex((b) => b.slug === blogSlug);
  const previousBlog = currentIndex > 0 ? BLOGS[currentIndex - 1] : null;
  const nextBlog = currentIndex >= 0 && currentIndex < BLOGS.length - 1 
    ? BLOGS[currentIndex + 1] 
    : null;

  // Only show navigation if there's at least one adjacent blog
  const showNavigation = previousBlog || nextBlog;

  return (
    <main className="bg-black min-h-screen py-[clamp(2.5rem,2.5rem+2vw,8rem)]">
      <StickyScroll content={blog.sections} />
      
      {/* Previous and Next Blog Buttons */}
      {showNavigation && (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-16 mb-8">
          <div className="flex justify-center items-center gap-2 md:gap-4">
            {previousBlog ? (
              <Link
                href={`/blog/${previousBlog.slug}`}
                className="px-4 py-2 md:px-8 md:py-4 rounded-lg bg-[#0f0f0f] text-white border border-gray-800 hover:border-[#6FAF4E] hover:text-[#6FAF4E] transition-all duration-300 font-semibold text-sm md:text-lg"
              >
                ← Previous
              </Link>
            ) : (
              <div className="px-4 py-2 md:px-8 md:py-4 opacity-0 pointer-events-none">
                {/* Spacer to keep Next button centered when Previous doesn't exist */}
              </div>
            )}
            
            {nextBlog ? (
              <Link
                href={`/blog/${nextBlog.slug}`}
                className="px-4 py-2 md:px-8 md:py-4 rounded-lg bg-[#6FAF4E] text-white font-semibold hover:bg-[#5a9a3e] transition-all duration-300 text-sm md:text-lg"
              >
                Next →
              </Link>
            ) : (
              <div className="px-4 py-2 md:px-8 md:py-4 opacity-0 pointer-events-none">
                {/* Spacer to keep Previous button centered when Next doesn't exist */}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
