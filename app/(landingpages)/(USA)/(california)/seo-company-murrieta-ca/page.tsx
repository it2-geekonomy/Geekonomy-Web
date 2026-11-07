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
import { seoServicesContent } from "./const/Seoservices";
import { localSeoContent } from "./const/Localseo";
import { nearbyContent } from "./const/Nearby";
import { ourProcessContent } from "./const/Ourprocess";
import { industriesContent } from "./const/Industries";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { ctaContent } from "./const/cta";
import { measureContent } from "./const/Mesure";
import { faqContent } from "./const/FAQ";

const PUBLISHED_DATE = "2026-09-08T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Murrieta CA | Local SEO | Get Free SEO Audit",
  description:
    "Choose an SEO Company Murrieta CA businesses trust for local visibility, qualified traffic, leads, and sustainable organic growth.",
  alternates: {
    canonical: "/seo-company-murrieta-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Murrieta CA | Local SEO | Get Free SEO Audit",
    description:
      "Choose an SEO Company Murrieta CA businesses trust for local visibility, qualified traffic, leads, and sustainable organic growth.",
    url: "https://thegeekonomy.com/seo-company-murrieta-ca",
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
            headline: "SEO Company Murrieta CA | Local SEO | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero content={heroContent} />
      <CardSection content={seoServicesContent} />
      <ImageCardSection content={localSeoContent} />
      <ServingNearby content={nearbyContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <StepSection content={ourProcessContent} />
      <ImageCardSection content={industriesContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <CardSection content={whyGeekonomyContent} />
      <CTA content={ctaContent} />
      <CardSection content={measureContent} />
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-murrieta-ca" />
      <LandingPageMap location="murrieta" />
      <LocationList region="california" HidecurrentSlug="seo-company-murrieta-ca"/>
      </main>
  );
}