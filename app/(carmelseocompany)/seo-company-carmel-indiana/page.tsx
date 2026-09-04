import type { Metadata } from "next";
import Hero from "./components/Herosection";
import BuiltAround from "./components/Builtaround";
import SeoServices from "./components/Seoservices";
import OurProcess from "./components/Ourprocess";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";

const PUBLISHED_DATE = "2026-09-04T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company in Carmel, Indiana | Get Free SEO Audit",
  description:
    "Grow your visibility with a SEO company Carmel Indiana focused on local rankings, qualified traffic, leads, and measurable business growth.",
  alternates: {
    canonical: "/seo-company-carmel-indiana",
  },
  openGraph: {
    type: "article",
    title: "SEO Company in Carmel, Indiana | Get Free SEO Audit",
    description:
      "Grow your visibility with a SEO company Carmel Indiana focused on local rankings, qualified traffic, leads, and measurable business growth.",
    url: "https://thegeekonomy.com/seo-company-carmel-indiana",
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
            headline: "SEO Company in Carmel, Indiana | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltAround/> 
      <SeoServices /> 
      <OurProcess/>
      <Industries/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-carmel-indiana" />
      </main>
  );
}