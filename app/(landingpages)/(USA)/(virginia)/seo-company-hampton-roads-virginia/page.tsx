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
import { SeoStrategy } from "./const/Seostrategy";
import { ctaContent } from "./const/cta";
import { faqContent } from "./const/FAQ";
import { industriesContent } from "./const/Industries";
import { SeoResult } from "./const/Seoresult";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import { ourProcessContent } from "./const/Ourprocess";
import { LocalSeo } from "./const/Localseo";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-10-28T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company in Hampton Roads, VA | Local SEO Services",
  description:
    "Improve your online visibility with Geekonomy, an SEO company in Hampton Roads, Virginia. Attract relevant traffic, generate qualified leads, and grow your business.",
  alternates: {
    canonical: "/seo-company-hampton-roads-virginia",
  },
  openGraph: {
    type: "article",
    title: "SEO Company in Hampton Roads, VA | Local SEO Services",
    description:
      "Improve your online visibility with Geekonomy, an SEO company in Hampton Roads, Virginia. Attract relevant traffic, generate qualified leads, and grow your business.",
    url: "https://thegeekonomy.com/seo-company-hampton-roads-virginia",
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
            headline: "SEO Company in Hampton Roads, VA | Local SEO Services",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />

      <Hero content={heroContent} />
      <ImageCardSection content={LocalSeo} />
      <CardSection content={SeoServices} />
      <CardSection content={SeoStrategy} />
      <ImageCardSection content={industriesContent} />
      <StepSection content={ourProcessContent} /> 
      <CardSection content={whyGeekonomyContent} />
      <CTA content={ctaContent} />
      <CardSection content={SeoResult} /> 
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-hampton-roads-virginia" />
      <LandingPageMap location="hampton" />
      <LocationList region="virginia" HidecurrentSlug="seo-company-hampton-roads-virginia"/>
      </main>
  );
} 