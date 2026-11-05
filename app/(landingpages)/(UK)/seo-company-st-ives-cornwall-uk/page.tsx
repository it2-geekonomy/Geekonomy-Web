import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import CTA from "@/components/Landingpage/CTA";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import FAQ from "@/components/Landingpage/FAQ";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import ImageContent from "@/components/Landingpage/Imagecontent";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import TextSection from "@/components/Landingpage/Textsection";
import CTAButton from "@/components/Landingpage/CTAbutton";
import { heroContent } from "./const/Herosection";
import { builtAroundContent } from "./const/Buildaround";
import { seoServicesContent } from "./const/Seoservices";
import { localSearchContent } from "./const/Localsearch";
import { searchingContent } from "./const/Searching";
import { ourProcessContent } from "./const/Ourprocess";
import { seoStrategyContent } from "./const/Seostrategy";
import { industriesContent } from "./const/Industries";
import { approachContent } from "./const/Approach";
import { ctaContent } from "./const/cta";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { faqContent } from "./const/FAQ";

const PUBLISHED_DATE = "2026-09-17T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company St Ives, Cornwall UK | Get Free SEO Audit",
  description:
    "Looking for an SEO Company St Ives, Cornwall UK? Get tailored SEO services to improve search visibility, attract qualified traffic, and generate more leads.",
  alternates: {
    canonical: "/seo-company-st-ives-cornwall-uk",
  },
  openGraph: {
    type: "article",
    title: "SEO Company St Ives, Cornwall UK | Get Free SEO Audit",
    description:
      "Looking for an SEO Company St Ives, Cornwall UK? Get tailored SEO services to improve search visibility, attract qualified traffic, and generate more leads.",
    url: "https://thegeekonomy.com/seo-company-st-ives-cornwall-uk",
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
            headline: "SEO Company St Ives, Cornwall UK | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero content={heroContent} />
      <ImageContent content={builtAroundContent} />
      <CardSection content={seoServicesContent} />
      <CardSection content={localSearchContent} />
      <TextSection content={searchingContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <StepSection content={ourProcessContent} />
      <CardSection content={seoStrategyContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <ImageCardSection content={industriesContent} />
      <CardSection content={approachContent} />
      <CTA content={ctaContent} />
      <CardSection content={whyGeekonomyContent} />
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-st-ives-cornwall-uk" />
      <LandingPageMap location="st_ives" />
      </main>
  );
}