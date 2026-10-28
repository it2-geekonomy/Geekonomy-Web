import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import CTA from "@/components/Landingpage/CTA";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import FAQ from "@/components/Landingpage/FAQ";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import { heroContent } from "./const/Herosection";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { SeoServices } from "./const/Seoservices";
import { ctaContent } from "./const/cta";
import { faqContent } from "./const/FAQ";
import { industriesContent } from "./const/Industries";
import { SeoResult } from "./const/Seoresult";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import { ourProcessContent } from "./const/Ourprocess";
import { LocalSeo } from "./const/Localseo";

const PUBLISHED_DATE = "2026-10-28T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company in Lichfield UK | Local SEO Services",
  description:
    "Looking for an SEO company in Lichfield, UK? Improve Google rankings, attract local customers, and grow your business.",
  alternates: {
    canonical: "/seo-company-lichfield-uk",
  },
  openGraph: {
    type: "article",
    title: "SEO Company in Lichfield UK | Local SEO Services",
    description:
      "Looking for an SEO company in Lichfield, UK? Improve Google rankings, attract local customers, and grow your business.",
    url: "https://thegeekonomy.com/seo-company-lichfield-uk",
    publishedTime: PUBLISHED_DATE,
  },
  other: {
    "article:published_time": PUBLISHED_DATE,
  },
};

export default function Home() {
  return (
    <main className="bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            headline: "SEO Company in Lichfield UK | Local SEO Services",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />

      <Hero content={heroContent} />
      <CardSection content={SeoServices} />
      <CardSection content={whyGeekonomyContent} />
      <StepSection content={ourProcessContent} /> 
      <ImageCardSection content={LocalSeo} />
      <ImageCardSection content={industriesContent} />
      <CTA content={ctaContent} />
      <CardSection content={SeoResult} /> 
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-lichfield-uk" />
      <LandingPageMap location="lichfield" />
      </main>
  );
} 