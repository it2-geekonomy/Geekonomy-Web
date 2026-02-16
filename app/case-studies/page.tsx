import LastSection from "@/components/case-studies/LastSection";
import { getStaticSEOData } from "@/seoData";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const data = getStaticSEOData("case-studies");

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: data.canonical,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: data.url,
      siteName: "Geekonomy",
      images: data.image ? [{ url: data.image }] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: data.image ? [data.image] : [],
      creator: data.twitterHandle,
    },
  };
}

export default function CaseStudiesPage() {
  return (
    <div>
      <LastSection />
    </div>
  );
}