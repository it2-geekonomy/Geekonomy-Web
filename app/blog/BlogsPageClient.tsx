"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOGS } from "@/components/Blogs/blogs";
import { Typography } from "@/components/ui/Typography";

const BLOGS_PER_PAGE = 6;

export default function BlogsPageClient() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(BLOGS.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const endIndex = startIndex + BLOGS_PER_PAGE;
  const currentBlogs = BLOGS.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
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
        <p className="text-white text-xl">No blogs available</p>
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen py-[clamp(2.5rem,2.5rem+2vw,8rem)]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Page Header */}
        <div className="mb-12 md:mb-16 text-center">
          <Typography
            as="h1"
            variant="3xl"
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
              className="group block"
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
                    as="h2"
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-4 mt-12">
            {/* Page Info */}
            <Typography
              as="p"
              variant="sm"
              className="text-white/60"
            >
              Showing {startIndex + 1}-{Math.min(endIndex, BLOGS.length)} of{" "}
              {BLOGS.length} blogs
            </Typography>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-[#0f0f0f] text-white border border-gray-800 hover:border-[#6FAF4E] hover:text-[#6FAF4E] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-800 disabled:hover:text-white"
              >
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {getPageNumbers().map((page, index) => {
                  if (page === "...") {
                    return (
                      <span
                        key={`ellipsis-${index}`}
                        className="px-2 text-white/40"
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
                      className={`px-4 py-2 rounded-lg min-w-[40px] transition-all duration-300 ${
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
                className="px-4 py-2 rounded-lg bg-[#0f0f0f] text-white border border-gray-800 hover:border-[#6FAF4E] hover:text-[#6FAF4E] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-800 disabled:hover:text-white"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
