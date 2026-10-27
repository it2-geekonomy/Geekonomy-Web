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
import { LocalSeo } from "./const/Localseo";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import { ourProcessContent } from "./const/Ourprocess";
import { WhyNeedSeo } from "./const/Whyneedseo";

const PUBLISHED_DATE = "2026-10-27T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company in Hervey Bay QLD | Expert SEO Services",
  description:
    "Looking for a reliable SEO company in Hervey Bay, Queensland, Australia? Improve your Google rankings, increase website traffic, and generate leads.",
  alternates: {
    canonical: "/seo-company-hervey-bay-queensland-australia",
  },
  openGraph: {
    type: "article",
    title: "SEO Company in Hervey Bay QLD | Expert SEO Services",
    description:
      "Looking for a reliable SEO company in Hervey Bay, Queensland, Australia? Improve your Google rankings, increase website traffic, and generate leads.",
    url: "https://thegeekonomy.com/seo-company-hervey-bay-queensland-australia",
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
            headline: "SEO Company in Hervey Bay QLD | Expert SEO Services",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />

      <Hero content={heroContent} />
      <ImageCardSection content={WhyNeedSeo} />
      <CardSection content={LocalSeo} />
      <CardSection content={SeoServices} />
      <CTAButton text="Get Your Free SEO Strategy"/>
      <ImageCardSection content={industriesContent} />
      <StepSection content={ourProcessContent} /> 
      <CardSection content={whyGeekonomyContent} />
      <CTA content={ctaContent} />
      <CardSection content={SeoResult} /> 
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-hervey-bay-queensland-australia" />
      <LandingPageMap location="hervey_bay" />
      </main>
  );
} 