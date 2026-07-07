import type { Metadata } from "next";
import { getDynamicSEODataFromHeaders } from "@/seoData";
import ContactPageContent from "@/app/contact-us/ContactPageContent";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getDynamicSEODataFromHeaders("contact-us");

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

export default function ContactPage() {
  return <ContactPageContent />;
}