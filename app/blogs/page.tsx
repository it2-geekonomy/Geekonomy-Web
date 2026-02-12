"use client";

import Link from "next/link";
import Image from "next/image";
import { BLOGS } from "@/components/Blogs/blogs";
import { Typography } from "@/components/ui/Typography";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20">
      <Typography as="h1" variant="4xl" className="text-white font-bold mb-10">
        Blogs
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOGS.map((blog) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
            <div className="group cursor-pointer rounded-xl overflow-hidden border border-gray-700 hover:border-gray-400 transition">
              <div className="relative w-full h-[220px]">
                <Image
                  src={blog.coverImage}
                  alt={blog.heading}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-4">
                <h2 className="text-white font-semibold text-lg line-clamp-2">
                  {blog.heading}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
