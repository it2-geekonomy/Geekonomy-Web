import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import ServingNearby from "@/components/Landingpage/NearbyArea";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import CTA from "@/components/Landingpage/CTA";
import CTAButton from "@/components/Landingpage/CTAbutton";
import FAQ from "@/components/Landingpage/FAQ";
import LocationList from "@/components/landingpagelocations/Locationlist";
import { heroContent } from "./const/Herosection";
import { nearbyContent } from "./const/Nearby";
import { seoServicesContent } from "./const/Seoservices";
import { localSeoContent } from "./const/Localseo";
import { ourProcessContent } from "./const/Ourprocess";
import { seoStrategyContent } from "./const/Seostrategy";
import { industriesContent } from "./const/Industries";
import { qualifiedCustomersContent } from "./const/Qualified";
import { ctaContent } from "./const/cta";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { faqContent } from "./const/FAQ";

const PUBLISHED_DATE = "2026-09-15T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Yorba Linda CA | Local SEO | Get Free Audit",
  description:
    "Choose an SEO Company Yorba Linda California businesses trust to improve local rankings, attract qualified traffic, and generate more leads.",
  alternates: {
    canonical: "/seo-company-yorba-linda-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Yorba Linda CA | Local SEO | Get Free Audit",
    description:
      "Choose an SEO Company Yorba Linda California businesses trust to improve local rankings, attract qualified traffic, and generate more leads.",
    url: "https://thegeekonomy.com/seo-company-yorba-linda-ca",
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
            headline: "SEO Company Yorba Linda CA | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero content={heroContent} />
      <ServingNearby content={nearbyContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <CardSection content={seoServicesContent} />
      <ImageCardSection content={localSeoContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <StepSection content={ourProcessContent} />
      <CardSection content={seoStrategyContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <ImageCardSection content={industriesContent} />
      <CardSection content={qualifiedCustomersContent} />
      <CTA content={ctaContent} />
      <CardSection content={whyGeekonomyContent} />
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-yorba-linda-ca" />
      <LandingPageMap location="yorba_linda" />
      <LocationList region="california" HidecurrentSlug="seo-company-yorba-linda-ca"/>
      </main>
  );
}