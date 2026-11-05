import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import ImageContent from "@/components/Landingpage/Imagecontent";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import TextSection from "@/components/Landingpage/Textsection";
import CTA from "@/components/Landingpage/CTA";
import CTAButton from "@/components/Landingpage/CTAbutton";
import FAQ from "@/components/Landingpage/FAQ";
import { heroContent } from "./const/Herosection";
import { whyNeedSeoContent } from "./const/Whyneedseo";
import { seoServicesContent } from "./const/Seoservices";
import { seoResultContent } from "./const/Seoresult";
import { ourProcessContent } from "./const/Ourprocess";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { industriesContent } from "./const/Industries";
import { seoStrategyContent } from "./const/Seostrategy";
import { geoOptimizeContent } from "./const/GEOoptimize";
import { ctaContent } from "./const/cta";
import { differenceContent } from "./const/Difference";
import { faqContent } from "./const/FAQ";

const PUBLISHED_DATE = "2026-09-30T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company in JP Nagar Bangalore | Get Free SEO Audit",
  description:
    "Grow your online visibility with Geekonomy, a results-driven SEO company in JP Nagar Bangalore offering SEO, Local SEO, and AI/GEO strategies.",
  alternates: {
    canonical: "/seo-company-in-jp-nagar-bangalore",
  },
  openGraph: {
    type: "article",
    title: "SEO Company in JP Nagar Bangalore | Get Free SEO Audit",
    description:
      "Grow your online visibility with Geekonomy, a results-driven SEO company in JP Nagar Bangalore offering SEO, Local SEO, and AI/GEO strategies.",
    url: "https://thegeekonomy.com/seo-company-in-jp-nagar-bangalore",
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
            headline: "SEO Company in JP Nagar Bangalore | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />

      <Hero content={heroContent} />
      <ImageContent content={whyNeedSeoContent} />
      <CardSection content={seoServicesContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <TextSection content={seoResultContent} />
      <StepSection content={ourProcessContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <CardSection content={whyGeekonomyContent} />
      <ImageCardSection content={industriesContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <CardSection content={seoStrategyContent} />
      <CardSection content={geoOptimizeContent} />
      <CTA content={ctaContent} />
      <CardSection content={differenceContent} />
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-in-jp-nagar-bangalore" />
      <LandingPageMap location="Jp_Nagar" />
      </main>
  );
}