import type { Metadata } from "next";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import SeoServices from "./components/Seoservices";
import Hero from "./components/Herosection";
import SeoStrategy from "./components/Seostrategy";
import GrowBusiness from "./components/Growbusiness";
import LocalSearch from "./components/Localsearch";
import WhatHolding from "./components/Whatholding";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-09-23T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Downey CA | Local SEO | Get Free SEO Audit",
  description:
    "Grow your Downey business with expert SEO services. Geekonomy helps improve local visibility, organic traffic, and qualified leads.",
  alternates: {
    canonical: "/seo-company-downey-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Downey CA | Local SEO | Get Free SEO Audit",
    description:
      "Grow your Downey business with expert SEO services. Geekonomy helps improve local visibility, organic traffic, and qualified leads.",
    url: "https://thegeekonomy.com/seo-company-downey-ca",
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
            headline: "SEO Company Downey CA | Local SEO | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <GrowBusiness/> 
      <SeoServices/>
      <LocalSearch/>
      <SeoStrategy/> 
      <Industries/>
      <WhyGeekonomy/>
      <CTA/>
      <WhatHolding/> 
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-downey-ca" />
      <LandingPageMap location="downey" />
      <LocationList region="california" HidecurrentSlug="seo-company-downey-ca"/>
      </main>
  );
}