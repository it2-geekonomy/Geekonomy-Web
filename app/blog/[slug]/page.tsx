import Link from "next/link";
import { Metadata } from "next";
import { Suspense } from "react";
import { allBlogsData } from "@/lib/blog";
import { getDynamicSEODataFromHeaders } from "@/seoData";
import BlogDetailClient from "@/app/blog/[slug]/BlogDetailClient";
import { getAuthorForBlog, getPublishedDateISO, getUpdatedDateISO } from "@/lib/blog/authorMapping";

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
  const seoKey = `blog/${slug}`;
  const seoData = await getDynamicSEODataFromHeaders(seoKey);
  
  // Get author and date info for structured data
  const authorInfo = getAuthorForBlog(slug);
  const publishedDateISO = getPublishedDateISO(slug);
  const updatedDateISO = getUpdatedDateISO(slug);
  
  // Use updated date if available, otherwise published date
  const articlePublishedTime = publishedDateISO || (updatedDateISO ? null : new Date("2026-03-03").toISOString());
  const articleModifiedTime = updatedDateISO || publishedDateISO || new Date("2026-03-03").toISOString();

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
      publishedTime: articlePublishedTime || undefined,
      modifiedTime: articleModifiedTime || undefined,
      authors: authorInfo ? [authorInfo.name] : undefined,
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
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  // Get SEO data and dates for structured data
  const seoKey = `blog/${slug}`;
  const seoData = await getDynamicSEODataFromHeaders(seoKey);
  const authorInfo = getAuthorForBlog(slug);
  const publishedDateISO = getPublishedDateISO(slug);
  const updatedDateISO = getUpdatedDateISO(slug);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://thegeekonomy.com";
  const blogUrl = `${baseUrl}/blog/${slug}`;
  
  // Article structured data for Google
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.heading,
    description: seoData.description,
    image: seoData.image ? [seoData.image] : [],
    datePublished: publishedDateISO || (updatedDateISO ? null : new Date("2026-03-03").toISOString()),
    dateModified: updatedDateISO || publishedDateISO || new Date("2026-03-03").toISOString(),
    author: {
      "@type": "Person",
      name: authorInfo.name,
      jobTitle: authorInfo.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Geekonomy Technology",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/Logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": blogUrl,
    },
    url: blogUrl,
  };

  return (
    <>
      {/* Article Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <Suspense fallback={
        <main className="bg-black min-h-screen py-[clamp(2.5rem,2.5rem+2vw,8rem)] flex items-center justify-center">
          <p className="text-white text-xl">Loading...</p>
        </main>
      }>
        <BlogDetailClient blogSlug={slug} />
      </Suspense>
    </>
  );
}
