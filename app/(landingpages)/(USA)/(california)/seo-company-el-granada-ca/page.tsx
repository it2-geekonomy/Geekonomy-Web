import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import CTA from "@/components/Landingpage/CTA";
import CTAButton from "@/components/Landingpage/CTAbutton";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import FAQ from "@/components/Landingpage/FAQ";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import { heroContent } from "./const/Herosection";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { SeoServices } from "./const/Seoservices";
import { ctaContent } from "./const/cta";
import { faqContent } from "./const/FAQ";
import { industriesContent } from "./const/Industries";
import { SeoResult } from "./const/Seoresult";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import { ourProcessContent } from "./const/Ourprocess";
import { WhyNeedSeo } from "./const/Whyneedseo";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-10-27T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company El Granada CA | Local SEO | Free Audit",
  description:
    "Looking for an el granada seo company california? Geekonomy helps local businesses improve search visibility, and qualified leads.",
  alternates: {
    canonical: "/seo-company-el-granada-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company El Granada CA | Local SEO | Free Audit",
    description:
      "Looking for an el granada seo company california? Geekonomy helps local businesses improve search visibility, and qualified leads.",
    url: "https://thegeekonomy.com/seo-company-el-granada-ca",
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
            headline: "SEO Company El Granada CA | Local SEO | Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />

      <Hero content={heroContent} />
      <ImageCardSection content={WhyNeedSeo} />
      <CardSection content={SeoServices} />
      <CardSection content={SeoResult} /> 
      <CTAButton text="Get Your Free SEO Strategy"/>
      <CardSection content={whyGeekonomyContent} />
      <StepSection content={ourProcessContent} /> 
      <CTA content={ctaContent} />
      <ImageCardSection content={industriesContent} />
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-el-granada-ca" />
      <LandingPageMap location="el_granada" />
      <LocationList region="california" HidecurrentSlug="seo-company-el-granada-ca"/>
      </main>
  );
} 