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
import { growBusinessContent } from "./const/Growbusiness";
import { localSeoContent } from "./const/Localseo";
import { seoServicesContent } from "./const/Seoservices";
import { seoStrategyContent } from "./const/Seostrategy";
import { industriesContent } from "./const/Industries";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { ctaContent } from "./const/cta";
import { ourProcessContent } from "./const/Ourprocess";
import { faqContent } from "./const/FAQ";

const PUBLISHED_DATE = "2026-09-24T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Brentwood, California | Get Free SEO Audit",
  description:
    "Grow your Brentwood business with an expert seo company brentwood california. Geekonomy boosts local visibility, rankings, traffic, and qualified leads.",
  alternates: {
    canonical: "/seo-company-brentwood-california",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Brentwood, California | Get Free SEO Audit",
    description:
      "Grow your Brentwood business with an expert seo company brentwood california. Geekonomy boosts local visibility, rankings, traffic, and qualified leads.",
    url: "https://thegeekonomy.com/seo-company-brentwood-california",
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
            headline: "SEO Company Brentwood, California | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero content={heroContent} />
      <CardSection content={growBusinessContent} />
      <ImageCardSection content={localSeoContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <CardSection content={seoServicesContent} />
      <CardSection content={seoStrategyContent} />
      <ImageCardSection content={industriesContent} />
      <CardSection content={whyGeekonomyContent} />
      <CTA content={ctaContent} />
      <StepSection content={ourProcessContent} />
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-brentwood-california" />
      <LandingPageMap location="brentwood" />
      <LocationList region="california" HidecurrentSlug="seo-company-brentwood-california"/>
      </main>
  );
}