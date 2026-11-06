import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import TextSection from "@/components/Landingpage/Textsection";
import ServingNearby from "@/components/Landingpage/NearbyArea";
import CTA from "@/components/Landingpage/CTA";
import CTAButton from "@/components/Landingpage/CTAbutton";
import FAQ from "@/components/Landingpage/FAQ";
import { heroContent } from "./const/Herosection";
import { businessServicesContent } from "./const/BusinessService";
import { whySeoMatterContent } from "./const/Whyseomatter";
import { seoServicesContent } from "./const/Seoservices";
import { localSeoContent } from "./const/Localseo";
import { industriesContent } from "./const/Industries";
import { seoResultsContent } from "./const/Seoresults";
import { approachContent } from "./const/Approach";
import { rankingContent } from "./const/Ranking";
import { relyOnContent } from "./const/Relyon";
import { nearbyContent } from "./const/Nearby";
import { ctaContent } from "./const/cta";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { faqContent } from "./const/FAQ";

const PUBLISHED_DATE = "2026-10-09T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Auburn AL | Local SEO | Get Free Audit",
  description:
    "Looking for an SEO company in Auburn Alabama? Geekonomy helps Auburn businesses improve rankings, attract local customers, and generate more leads.",
  alternates: {
    canonical: "/seo-company-auburn-alabama",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Auburn AL | Local SEO | Get Free Audit",
    description:
      "Looking for an SEO company in Auburn Alabama? Geekonomy helps Auburn businesses improve rankings, attract local customers, and generate more leads.",
    url: "https://thegeekonomy.com/seo-company-auburn-alabama",
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
            headline: "SEO Company Auburn AL | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero content={heroContent} />
      <CardSection content={businessServicesContent} />
      <CardSection content={whySeoMatterContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <CardSection content={seoServicesContent} />
      <ImageCardSection content={localSeoContent} />
      <ImageCardSection content={industriesContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <CardSection content={seoResultsContent} />
      <StepSection content={approachContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <CardSection content={rankingContent} />
      <TextSection content={relyOnContent} />
      <ServingNearby content={nearbyContent} />
      <CTA content={ctaContent} />
      <CardSection content={whyGeekonomyContent} />
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-auburn-alabama" />
      <LandingPageMap location="auburn" />
      </main>
  );
}