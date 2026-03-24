"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOGS } from "@/components/Blogs/blogs";
import { Typography } from "@/components/ui/Typography";

const BLOGS_PER_PAGE = 6;
const NARROW_PAGINATION_WIDTH = 420;
const BLOG_PAGE_STORAGE_KEY = "geekonomy_blog_current_page";

export default function BlogsPageClient() {
  const [isNarrow, setIsNarrow] = useState(false);

  // Initialize page from sessionStorage or default to 1
  const getInitialPage = () => {
    if (typeof window !== "undefined") {
      const storedPage = sessionStorage.getItem(BLOG_PAGE_STORAGE_KEY);
      if (storedPage) {
        const page = parseInt(storedPage, 10);
        const totalPages = Math.ceil(BLOGS.length / BLOGS_PER_PAGE);
        if (page >= 1 && page <= totalPages) {
          return page;
        }
      }
    }
    return 1;
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);

  // Load page from sessionStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedPage = sessionStorage.getItem(BLOG_PAGE_STORAGE_KEY);
      if (storedPage) {
        const page = parseInt(storedPage, 10);
        const totalPages = Math.ceil(BLOGS.length / BLOGS_PER_PAGE);
        if (page >= 1 && page <= totalPages && page !== currentPage) {
          setCurrentPage(page);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const check = () => setIsNarrow(typeof window !== "undefined" && window.innerWidth <= NARROW_PAGINATION_WIDTH);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const totalPages = Math.ceil(BLOGS.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const endIndex = startIndex + BLOGS_PER_PAGE;
  const currentBlogs = BLOGS.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      
      // Save to sessionStorage for back navigation
      if (typeof window !== "undefined") {
        sessionStorage.setItem(BLOG_PAGE_STORAGE_KEY, page.toString());
      }
      
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (isNarrow && totalPages > 1) {
      if (totalPages <= 3) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
      } else if (currentPage <= 2) {
        pages.push(1, 2, "...", totalPages);
      } else if (currentPage >= totalPages - 1) {
        pages.push(1, "...", totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
      return pages;
    }

    const maxVisible = 5;
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (!BLOGS || BLOGS.length === 0) {
    return (
      <main className="bg-black min-h-screen py-[clamp(2.5rem,2.5rem+2vw,8rem)] flex items-center justify-center">
        <Typography as="p" variant="body-xl" className="text-white">
          No blogs available
        </Typography>
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen py-[clamp(1.5rem,1.5rem+1vw,4rem)]">
      <div className="mx-4 sm:mx-6 lg:mx-12 xl:mx-[clamp(0.5rem,0.5rem+8vw,10rem)] 2xl:mx-[clamp(1rem,1rem+12vw,22rem)]">
        {/* Page Header */}
        <div className="mb-12 md:mb-16 text-center w-full px-4 sm:px-6 lg:px-10">
          <Typography
            as="h1"
            variant="display-xl"
            className="text-white font-bold mb-4"
          >
          Blog
          </Typography>
          
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
          {currentBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              onClick={() => {
                // Save current page to sessionStorage before navigating
                if (typeof window !== "undefined") {
                  sessionStorage.setItem(BLOG_PAGE_STORAGE_KEY, currentPage.toString());
                }
              }}
              className="group block"
            >
              <article className="bg-[#0f0f0f] rounded-xl overflow-hidden hover:bg-[#1a1a1a] transition-all duration-300 h-full flex flex-col">
                {/* Blog Image */}
                <div className="relative w-full h-48 md:h-56 overflow-hidden">
                  {blog.coverImage.startsWith("http://") || blog.coverImage.startsWith("https://") ? (
                    <img
                      src={blog.coverImage}
                      alt={blog.heading}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <Image
                      src={blog.coverImage}
                      alt={blog.heading}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>

                {/* Blog Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <Typography
                    as="h2"
                    variant="h2"
                    className="text-white font-bold mb-3 group-hover:text-[#6FAF4E] transition-colors duration-300 line-clamp-2"
                  >
                    {blog.heading}
                  </Typography>

                  <div className="mt-auto pt-4">
                    <Typography
                      as="span"
                      variant="body-lg"
                      className="text-[#6FAF4E] font-medium group-hover:underline"
                    >
                      Read More →
                    </Typography>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-4 mt-12">
            {/* Page Info */}
            <Typography
              as="p"
              variant="body-lg"
              className="text-white"
            >
              Showing {startIndex + 1}-{Math.min(endIndex, BLOGS.length)} of{" "}
              {BLOGS.length} blogs
            </Typography>

            {/* Pagination Controls - compact on narrow (≤420px), scrollable with hidden scrollbar on larger mobile */}
            <div className="w-full max-w-full overflow-x-auto overflow-y-hidden scrollbar-hide -mx-1 sm:mx-0 sm:px-0">
              <div className={`flex items-center justify-center min-w-max ${isNarrow ? "gap-1 flex-wrap" : "gap-1.5 sm:gap-2"}`}>
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`shrink-0 rounded-lg bg-[#0f0f0f] text-white border border-gray-800 hover:border-[#6FAF4E] hover:text-[#6FAF4E] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-800 disabled:hover:text-white ${
                    isNarrow ? "px-2 py-1 text-xs" : "px-2 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base"
                  }`}
                >
                  Previous
                </button>

                {/* Page Numbers */}
                <div className={`flex items-center ${isNarrow ? "gap-1" : "gap-1.5 sm:gap-2"}`}>
                  {getPageNumbers().map((page, index) => {
                    if (page === "...") {
                      return (
                        <span
                          key={`ellipsis-${index}`}
                          className={`text-white ${isNarrow ? "px-0.5 text-xs" : "px-1 sm:px-2 text-sm sm:text-base"}`}
                        >
                          ...
                        </span>
                      );
                    }

                    const pageNum = page as number;
                    const isActive = pageNum === currentPage;

                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`shrink-0 rounded-lg transition-all duration-300 ${
                          isNarrow ? "px-2 py-1 min-w-[28px] text-xs" : "px-2.5 py-1.5 sm:px-4 sm:py-2 min-w-[32px] sm:min-w-[40px] text-sm sm:text-base"
                        } ${
                          isActive
                            ? "bg-[#6FAF4E] text-white font-semibold"
                            : "bg-[#0f0f0f] text-white border border-gray-800 hover:border-[#6FAF4E] hover:text-[#6FAF4E]"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`shrink-0 rounded-lg bg-[#0f0f0f] text-white border border-gray-800 hover:border-[#6FAF4E] hover:text-[#6FAF4E] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-800 disabled:hover:text-white ${
                    isNarrow ? "px-2 py-1 text-xs" : "px-2 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
