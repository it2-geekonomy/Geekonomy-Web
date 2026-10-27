import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import CTA from "@/components/Landingpage/CTA";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import FAQ from "@/components/Landingpage/FAQ";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import ImageContent from "@/components/Landingpage/Imagecontent";
import { heroContent } from "./const/Herosection";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { SeoServices } from "./const/Seoservices";
import { ctaContent } from "./const/cta";
import { faqContent } from "./const/FAQ";
import { industriesContent } from "./const/Industries";
import { SeoStrategy } from "./const/Seostrategy";
import { BusinessGoal } from "./const/Businessgoal";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import { ourProcessContent } from "./const/Ourprocess";
import { GrowBusiness } from "./const/Growbusiness";

const PUBLISHED_DATE = "2026-10-27T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Downingtown PA | Get Free SEO Audit",
  description:
    "Grow your business with Geekonomy, a trusted Downingtown SEO company. Improve Google rankings, attract local customers, and generate more leads.",
  alternates: {
    canonical: "/seo-company-downingtown-pennsylvania",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Downingtown PA | Get Free SEO Audit",
    description:
      "Grow your business with Geekonomy, a trusted Downingtown SEO company. Improve Google rankings, attract local customers, and generate more leads.",
    url: "https://thegeekonomy.com/seo-company-downingtown-pennsylvania",
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
            headline: "SEO Company Downingtown PA | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />

      <Hero content={heroContent} />
      <ImageContent content={GrowBusiness} /> 
      <CardSection content={SeoServices} />
      <CardSection content={SeoStrategy} /> 
      <CardSection content={whyGeekonomyContent} />
      <CardSection content={BusinessGoal} />
      <ImageCardSection content={industriesContent} />
      <CTA content={ctaContent} />
      <StepSection content={ourProcessContent} /> 
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-downingtown-pennsylvania" />
      <LandingPageMap location="downingtown" />
      </main>
  );
} 