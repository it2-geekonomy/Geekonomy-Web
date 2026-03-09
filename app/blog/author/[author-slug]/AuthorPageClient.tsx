"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AuthorInfo } from "@/lib/blog/authorMapping";
import { BlogData } from "@/lib/blog";
import { Typography } from "@/components/ui/Typography";

interface AuthorPageClientProps {
  authorInfo: AuthorInfo;
  blogs: BlogData[];
}

export default function AuthorPageClient({ authorInfo, blogs }: AuthorPageClientProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = 400;
    const newScrollLeft = direction === "left" 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  useEffect(() => {
    handleScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }
  }, [blogs.length]);

  return (
    <main className="bg-black min-h-screen py-[clamp(2.5rem,2.5rem+2vw,8rem)]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Author Section - CTA Button Design */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] border-2 border-[#69AE44] rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-10 mb-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-start">
            {/* Author Image */}
            <div className="w-full md:w-[25%] flex justify-center md:justify-start">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden">
                {authorInfo.mainImage && (
                  <Image
                    src={authorInfo.mainImage}
                    alt={authorInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>
            </div>

            {/* Author Content */}
            <div className="w-full md:w-[75%] flex flex-col">
              <div className="text-center md:text-left">
                <Typography
                  as="h1"
                  variant="3xl"
                  className="text-[#6FAF4E] font-bold mb-2"
                >
                  {authorInfo.name}
                </Typography>
                <Typography
                  as="p"
                  variant="lg"
                  className="text-white mb-4"
                >
                  {authorInfo.role}
                </Typography>
              </div>
              {authorInfo.biography && (
                <div className="text-white/80 text-lg leading-relaxed space-y-4">
                  {authorInfo.biography.split('<br/><br/>').map((para, i) => (
                    <Typography key={i} variant="base" className="text-white/80">
                      {para}
                    </Typography>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Author's Blogs */}
        {blogs.length > 0 && (
          <div className="mt-12">
            <Typography
              as="h2"
              variant="2xl"
              className="text-white font-bold mb-8"
            >
              Blogs by {authorInfo.name}
            </Typography>
            
            {/* Horizontal Scrollable Container with Arrows */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Left Arrow - Hidden on mobile, shown on desktop */}
              {showLeftArrow && (
                <button
                  onClick={() => scroll("left")}
                  className="hidden md:flex flex-shrink-0 bg-black/80 hover:bg-black text-white p-3 rounded-full border border-gray-800 hover:border-[#6FAF4E] transition-all duration-300"
                  aria-label="Scroll left"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
              )}

              {/* Scrollable Blog Cards Container - Relative for mobile arrows */}
              <div className="relative flex-1 min-w-0 overflow-hidden">
                {/* Mobile Left Arrow - Inside container */}
                {showLeftArrow && (
                  <button
                    onClick={() => scroll("left")}
                    className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/90 hover:bg-black text-white p-2 rounded-full border border-gray-800 hover:border-[#6FAF4E] transition-all duration-300"
                    aria-label="Scroll left"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                )}

                {/* Scrollable Blog Cards */}
                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide pb-4 scroll-smooth -mx-4 px-4 md:mx-0 md:px-0"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {blogs.map((blog) => (
                    <Link
                      key={blog.slug}
                      href={`/blog/${blog.slug}`}
                      className="group block flex-shrink-0 w-[280px] md:w-96"
                    >
                      <article className="bg-[#0f0f0f] rounded-xl overflow-hidden hover:bg-[#1a1a1a] transition-all duration-300 h-full flex flex-col">
                        {/* Blog Image */}
                        <div className="relative w-full h-48 md:h-56 overflow-hidden">
                          <Image
                            src={blog.coverImage}
                            alt={blog.heading}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Blog Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <Typography
                            as="h3"
                            variant="xl"
                            className="text-white font-bold mb-3 group-hover:text-[#6FAF4E] transition-colors duration-300 line-clamp-2"
                          >
                            {blog.heading}
                          </Typography>

                          <div className="mt-auto pt-4">
                            <span className="text-[#6FAF4E] text-sm font-medium group-hover:underline">
                              Read More →
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

                {/* Mobile Right Arrow - Inside container */}
                {showRightArrow && (
                  <button
                    onClick={() => scroll("right")}
                    className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/90 hover:bg-black text-white p-2 rounded-full border border-gray-800 hover:border-[#6FAF4E] transition-all duration-300"
                    aria-label="Scroll right"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Right Arrow - Hidden on mobile, shown on desktop */}
              {showRightArrow && (
                <button
                  onClick={() => scroll("right")}
                  className="hidden md:flex flex-shrink-0 bg-black/80 hover:bg-black text-white p-3 rounded-full border border-gray-800 hover:border-[#6FAF4E] transition-all duration-300"
                  aria-label="Scroll right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
