"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOGS } from "@/components/Blogs/blogs";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { BlogCTAModal } from "@/components/Blogs/BlogCTAModal";
import {
  getAuthorForBlog,
  getDateInfo,
  getAuthorSlug,
  type BlogDateDisplayLabel,
} from "@/lib/blog/authorMapping";

const BLOG_PAGE_STORAGE_KEY = "geekonomy_blog_current_page";

export type DateInfoProp = { date: string; label: BlogDateDisplayLabel };

interface BlogDetailClientProps {
  blogSlug: string;
  dateInfo?: DateInfoProp;
}

export default function BlogDetailClient({ blogSlug, dateInfo: dateInfoProp }: BlogDetailClientProps) {
  const blog = BLOGS.find((b) => b.slug === blogSlug);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [returnPage, setReturnPage] = useState<number | null>(null);
  const [showNavButtons, setShowNavButtons] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedPage = sessionStorage.getItem(BLOG_PAGE_STORAGE_KEY);
      if (storedPage) {
        const page = parseInt(storedPage, 10);
        if (page >= 1) {
          setReturnPage(page);
        }
      }
    }
  }, []);

  // Defer showing Prev/Next so they don’t appear during loading/refresh
  useEffect(() => {
    const id = setTimeout(() => setShowNavButtons(true), 150);
    return () => clearTimeout(id);
  }, []);

  if (!blog) {
    return null;
  }

  const authorInfo = getAuthorForBlog(blogSlug);
  const dateInfo = dateInfoProp ?? getDateInfo(blogSlug);

  // Add "About the author" section as the last content item
  const blogContentWithAuthor = [...blog.sections];
  if (authorInfo && authorInfo.mainImage && authorInfo.biography) {
    const authorSlug = getAuthorSlug(authorInfo.name);
    const authorSectionHTML = `
      <div class="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 md:p-8">
        <div class="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          <div class="w-full md:w-[20%] flex flex-col items-center md:items-start justify-center md:justify-start">
            <p class="text-white text-xl mb-2 text-center md:text-left">About the Author :</p>
            <div class="relative w-48 h-48 md:w-full md:h-full rounded-lg overflow-hidden">
              <img src="${authorInfo.mainImage}" alt="${authorInfo.name}" loading="lazy" decoding="async" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="w-full md:w-3/4 flex flex-col">
            <p class="text-2xl md:text-3xl font-bold mb-2 text-center md:text-left"><a href="/blog/author/${authorSlug}" class="text-[#6FAF4E] hover:underline transition-all cursor-pointer" style="color: #6FAF4E !important;">${authorInfo.name}</a></p>
            <p class="text-white text-base md:text-lg mb-4 text-center md:text-left">${authorInfo.role}</p>
            <div class="text-white text-sm md:text-base leading-relaxed space-y-4">${authorInfo.biography.split('<br/><br/>').map(para => `<p>${para}</p>`).join('')}</div>
          </div>
        </div>
      </div>
    `;
    blogContentWithAuthor.push({
      title: "",
      description: authorSectionHTML,
    });
  }

  // Handle in-blog CTA button clicks only (navbar Contact goes to /contact-us)
  useEffect(() => {
    const handleCTAClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const ctaLink = target.closest('a[data-blog-cta]');
      
      if (ctaLink) {
        e.preventDefault();
        e.stopPropagation();
        setIsModalOpen(true);
      }
    };

    document.addEventListener("click", handleCTAClick);

    return () => {
      document.removeEventListener("click", handleCTAClick);
    };
  }, []);

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
      <StickyScroll 
        content={blogContentWithAuthor} 
        authorInfo={authorInfo}
        dateInfo={dateInfo}
      />
      
      
      {/* CTA Modal */}
      <BlogCTAModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        blogName={blog.heading}
      />

      {/* Previous and Next Blog Buttons (shown after mount to avoid showing during loading) */}
      {showNavButtons && showNavigation && (
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
