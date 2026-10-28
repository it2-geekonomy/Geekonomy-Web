import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import CTA from "@/components/Landingpage/CTA";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import FAQ from "@/components/Landingpage/FAQ";
import ImageContent from "@/components/Landingpage/Imagecontent";
import { heroContent } from "./const/Herosection";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { SeoServices } from "./const/Seoservices";
import { ctaContent } from "./const/cta";
import { faqContent } from "./const/FAQ";
import { LocalSeo } from "./const/Localseo";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import { ourProcessContent } from "./const/Ourprocess";
import { GrowBusiness } from "./const/Growbusiness";

const PUBLISHED_DATE = "2026-10-28T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Chesterfield UK | Local SEO Services",
  description:
    "Looking for a Chesterfield SEO Company UK? Geekonomy helps businesses improve search visibility, attract relevant traffic and generate qualified leads.",
  alternates: {
    canonical: "/seo-company-chesterfield-uk",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Chesterfield UK | Local SEO Services",
    description:
      "Looking for a Chesterfield SEO Company UK? Geekonomy helps businesses improve search visibility, attract relevant traffic and generate qualified leads.",
    url: "https://thegeekonomy.com/seo-company-chesterfield-uk",
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
            headline: "SEO Company Chesterfield UK | Local SEO Services",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />
      
      <Hero content={heroContent} />
      <ImageContent content={GrowBusiness} /> 
      <CardSection content={SeoServices} />
      <CardSection content={whyGeekonomyContent} />
      <StepSection content={ourProcessContent} /> 
      <CTA content={ctaContent} />
      <CardSection content={LocalSeo} />
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-chesterfield-uk" />
      <LandingPageMap location="chesterfield" />
      </main>
  );
} 