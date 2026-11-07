import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import ImageContent from "@/components/Landingpage/Imagecontent";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import CTA from "@/components/Landingpage/CTA";
import CTAButton from "@/components/Landingpage/CTAbutton";
import FAQ from "@/components/Landingpage/FAQ";
import { heroContent } from "./const/Herosection";
import { builtAroundContent } from "./const/Builtaround";
import { localSeoContent } from "./const/Localseo";
import { seoServicesContent } from "./const/Seoservices";
import { industriesContent } from "./const/Industries";
import { mattersContent } from "./const/Matters";
import { ourProcessContent } from "./const/Ourprocess";
import { ctaContent } from "./const/cta";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { faqContent } from "./const/FAQ";

const PUBLISHED_DATE = "2026-09-11T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Orange Beach AL | Local SEO | Free SEO Audit",
  description:
    "Looking for an SEO company in Orange Beach Alabama? Geekonomy helps local businesses improve Google rankings, Maps visibility, traffic, and leads.",
  alternates: {
    canonical: "/seo-company-orange-beach-al",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Orange Beach AL | Local SEO | Free SEO Audit",
    description:
      "Looking for an SEO company in Orange Beach Alabama? Geekonomy helps local businesses improve Google rankings, Maps visibility, traffic, and leads.",
    url: "https://thegeekonomy.com/seo-company-orange-beach-al",
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
            headline: "SEO Company Orange Beach AL | Local SEO | Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero content={heroContent} />
      <ImageContent content={builtAroundContent} />
      <CardSection content={localSeoContent} />
      <CardSection content={seoServicesContent} />
      <ImageCardSection content={industriesContent} />
      <ImageCardSection content={mattersContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <StepSection content={ourProcessContent} />
      <CTA content={ctaContent} />
      <CardSection content={whyGeekonomyContent} />
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-orange-beach-al" />
      <LandingPageMap location="orange_beach" />
      </main>
  );
}