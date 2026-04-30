import type { Metadata } from "next";
import { Suspense } from "react";
import { getDynamicSEODataFromHeaders } from "@/seoData";
import BlogsPageClient from "./BlogsPageClient";
import BlogsPageLoading from "./BlogsPageLoading";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getDynamicSEODataFromHeaders("blog");

  return {
    title: seoData.title,
    description: seoData.description,
    robots: { index: true, follow: true },
    alternates: { canonical: seoData.canonical },
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: seoData.url,
      siteName: "Geekonomy",
      type: "website",
      images: seoData.image ? [{ url: seoData.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
      images: seoData.image ? [{ url: seoData.image }] : [],
      creator: seoData.twitterHandle,
    },
  };
}

export default function BlogsPage() {
  return (
    <Suspense fallback={<BlogsPageLoading />}>
      <BlogsPageClient />
    </Suspense>
  );
} 
