import { Metadata } from "next";
import { getDynamicSEODataFromHeaders } from "@/seoData";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getDynamicSEODataFromHeaders("about");

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
      type: "website",
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
