import Link from "next/link";
import { Metadata } from "next";
import { allBlogsData } from "@/lib/blog";
import { getDynamicSEODataFromHeaders } from "@/seoData";
import BlogDetailClient from "@/app/blog/[slug]/BlogDetailClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = allBlogsData.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found - Geekonomy",
      description: "The requested blog could not be found.",
    };
  }

  // Get SEO data from seoData.ts
  const seoKey = `blogs/${slug}`;
  const seoData = await getDynamicSEODataFromHeaders(seoKey);

  return {
    title: seoData.title,
    description: seoData.description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: seoData.canonical,
    },
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: seoData.url,
      siteName: "Geekonomy Technology",
      type: "article",
      images: seoData.image ? [{ url: seoData.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
      images: seoData.image ? [seoData.image] : [],
      creator: seoData.twitterHandle,
    },
  };
}

export async function generateStaticParams() {
  return allBlogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = allBlogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <main className="bg-black min-h-screen py-[clamp(2.5rem,2.5rem+2vw,8rem)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white font-bold mb-4 text-[clamp(1.5rem,2vw,2rem)]">
            Blog Not Found
          </h1>
          <p className="text-white/70 mb-6 text-[clamp(1rem,1vw,1.5rem)]">
            The blog you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="text-[#6FAF4E] hover:underline font-medium"
          >
            ← Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  return <BlogDetailClient blogSlug={slug} />;
}
