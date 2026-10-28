import type { Metadata } from "next";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import OurProcess from "./components/Ourprocess";
import SeoServices from "./components/Seoservices";
import Hero from "./components/Herosection";
import SeoResults from "./components/Seoresults";
import SeoMatters from "./components/Seomatters";
import WhatHolding from "./components/Whatsholding";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-09-24T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company in Fredericksburg Virginia | Get Free Audit",
  description:
    "Grow your business with an SEO company in Fredericksburg Virginia. Get local SEO, technical SEO, content, and lead-focused strategies from Geekonomy.",
  alternates: {
    canonical: "/seo-company-in-fredericksburg-virginia",
  },
  openGraph: {
    type: "article",
    title: "SEO Company in Fredericksburg Virginia | Get Free Audit",
    description:
      "Grow your business with an SEO company in Fredericksburg Virginia. Get local SEO, technical SEO, content, and lead-focused strategies from Geekonomy.",
    url: "https://thegeekonomy.com/seo-company-in-fredericksburg-virginia",
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
            headline: "SEO Company in Fredericksburg Virginia | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <SeoResults/>
      <SeoMatters/>
      <Industries/>
      <SeoServices/>
      <OurProcess/>
      <WhyGeekonomy/>
      <CTA/>
      <WhatHolding/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-in-fredericksburg-virginia" />
      <LandingPageMap location="fredericksburg" />
      <LocationList region="virginia" HidecurrentSlug="seo-company-in-fredericksburg-virginia"/>
      </main>
  );
}