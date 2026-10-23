import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import CTA from "@/components/Landingpage/CTA";
import CTAButton from "@/components/Landingpage/CTAbutton";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import FAQ from "@/components/Landingpage/FAQ";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import { heroContent } from "./const/Herosection";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { SeoServices } from "./const/Seoservices";
import { WhyNeedSEO } from "./const/Whyneedseo";
import { ctaContent } from "./const/cta";
import { faqContent } from "./const/FAQ";
import { ourProcessContent } from "./const/Ourprocess";
import { industriesContent } from "./const/Industries";
import { Difference } from "./const/Difference";
import { Results } from "./const/Results";
import { LocalSeo } from "./const/Localseo";
import LocationList from "@/components/landingpagelocations/Locationlist";
import { Nearby } from "./const/Nearby";

const PUBLISHED_DATE = "2026-10-23T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Moreno Valley, CA | Get Free SEO Audit",
  description:
    "Looking for an SEO company in Moreno Valley, California? Geekonomy helps local businesses improve Google visibility, attract leads, and grow online.",
  alternates: {
    canonical: "/seo-company-moreno-valley-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Moreno Valley, CA | Get Free SEO Audit",
    description:
      "Looking for an SEO company in Moreno Valley, California? Geekonomy helps local businesses improve Google visibility, attract leads, and grow online.",
    url: "https://thegeekonomy.com/seo-company-moreno-valley-ca",
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
            headline: "SEO Company Moreno Valley, CA | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />

      <Hero content={heroContent} />
      <ImageCardSection content={LocalSeo} />
      <CardSection content={WhyNeedSEO} />
      <CardSection content={SeoServices} />
      <CTAButton text="Get Your Free SEO Strategy"/>
      <CardSection content={Results} /> 
      <ImageCardSection content={industriesContent} />
      <CardSection content={whyGeekonomyContent} />
      <CardSection content={Nearby} />
      <StepSection content={ourProcessContent} /> 
      <CTA content={ctaContent} />
      <CardSection content={Difference} /> 
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-moreno-valley-ca" />
      <LandingPageMap location="moreno_valley" />
      <LocationList region="california" HidecurrentSlug="seo-company-moreno-valley-ca"/>
      </main>
  );
}