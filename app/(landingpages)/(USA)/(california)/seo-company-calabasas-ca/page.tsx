import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import CTA from "@/components/Landingpage/CTA";
import CTAButton from "@/components/Landingpage/CTAbutton";
import FAQ from "@/components/Landingpage/FAQ";
import LocationList from "@/components/landingpagelocations/Locationlist";
import { heroContent } from "./const/Herosection";
import { whyNeedSeoContent } from "./const/Whyneedseo";
import { seoServicesContent } from "./const/Seoservices";
import { ourProcessContent } from "./const/Ourprocess";
import { seoStrategyContent } from "./const/Seostrategy";
import { industriesContent } from "./const/Industries";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { seoEffectiveContent } from "./const/Seoeffective";
import { ctaContent } from "./const/cta";
import { seoMetricsContent } from "./const/Seometrics";
import { faqContent } from "./const/FAQ";

const PUBLISHED_DATE = "2026-09-29T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Calabasas CA | Local SEO | Get Free Audit",
  description:
    "Grow your business with a Calabasas SEO company focused on local rankings, qualified traffic, leads, and sustainable organic growth.",
  alternates: {
    canonical: "/seo-company-calabasas-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Calabasas CA | Local SEO | Get Free Audit",
    description:
      "Grow your business with a Calabasas SEO company focused on local rankings, qualified traffic, leads, and sustainable organic growth.",
    url: "https://thegeekonomy.com/seo-company-calabasas-ca",
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
            headline: "SEO Company Calabasas CA | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero content={heroContent} />
      <CardSection content={whyNeedSeoContent} />
      <CardSection content={seoServicesContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <StepSection content={ourProcessContent} />
      <CardSection content={seoStrategyContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <ImageCardSection content={industriesContent} />
      <CardSection content={whyGeekonomyContent} />
      <CardSection content={seoEffectiveContent} />
      <CTA content={ctaContent} />
      <CardSection content={seoMetricsContent} />
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-calabasas-ca" />
      <LandingPageMap location="calabasas" />
      <LocationList region="california" HidecurrentSlug="seo-company-calabasas-ca"/>
      </main>
  );
}