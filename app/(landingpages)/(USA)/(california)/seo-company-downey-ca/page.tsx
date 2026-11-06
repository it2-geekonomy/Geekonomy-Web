import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import ImageContent from "@/components/Landingpage/Imagecontent";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import TextSection from "@/components/Landingpage/Textsection";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import CTA from "@/components/Landingpage/CTA";
import CTAButton from "@/components/Landingpage/CTAbutton";
import FAQ from "@/components/Landingpage/FAQ";
import LocationList from "@/components/landingpagelocations/Locationlist";
import { heroContent } from "./const/Herosection";
import { growBusinessContent } from "./const/Growbusiness";
import { seoServicesContent } from "./const/Seoservices";
import { localSearchContent } from "./const/Localsearch";
import { seoStrategyContent } from "./const/Seostrategy";
import { industriesContent } from "./const/Industries";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { ctaContent } from "./const/cta";
import { whatHoldingContent } from "./const/Whatholding";
import { faqContent } from "./const/FAQ";

const PUBLISHED_DATE = "2026-09-23T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Downey CA | Local SEO | Get Free SEO Audit",
  description:
    "Grow your Downey business with expert SEO services. Geekonomy helps improve local visibility, organic traffic, and qualified leads.",
  alternates: {
    canonical: "/seo-company-downey-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Downey CA | Local SEO | Get Free SEO Audit",
    description:
      "Grow your Downey business with expert SEO services. Geekonomy helps improve local visibility, organic traffic, and qualified leads.",
    url: "https://thegeekonomy.com/seo-company-downey-ca",
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
            headline: "SEO Company Downey CA | Local SEO | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero content={heroContent} />
      <ImageContent content={growBusinessContent} />
      <CardSection content={seoServicesContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <TextSection content={localSearchContent} />
      <CardSection content={seoStrategyContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <ImageCardSection content={industriesContent} />
      <CardSection content={whyGeekonomyContent} />
      <CTA content={ctaContent} />
      <CardSection content={whatHoldingContent} />
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-downey-ca" />
      <LandingPageMap location="downey" />
      <LocationList region="california" HidecurrentSlug="seo-company-downey-ca"/>
      </main>
  );
}