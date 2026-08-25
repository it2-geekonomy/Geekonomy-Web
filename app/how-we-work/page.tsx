import type { Metadata } from "next";
import { getDynamicSEODataFromHeaders } from "@/seoData";
import HowWeWorkContent from "@/app/how-we-work/HowWeWorkContent";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getDynamicSEODataFromHeaders("how-we-work");

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.url,
      images: seo.image ? [{ url: seo.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: seo.image ? [seo.image] : [],
    },
  };
}

export default function HowWeWorkPage() {
  return <HowWeWorkContent />;
}