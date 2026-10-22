import type { Metadata } from "next";
import Hero from "./components/Herosection";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import SeoStrategy from "./components/Seostrategy";
import LocalSeoService from "./components/Localseo";
import SeoServices from "./components/Seoservices";
import OurProcess from "./components/Ourprocess";
import Metrics from "./components/Metrics";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-09-10T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company League City TX | Local SEO | Free SEO Audit",
  description:
    "Expert SEO services from a trusted SEO company in League City Texas. Improve local visibility, attract qualified leads, and grow your business.",
  alternates: {
    canonical: "/seo-company-league-city-tx",
  },
  openGraph: {
    type: "article",
    title: "SEO Company League City TX | Local SEO | Free SEO Audit",
    description:
      "Expert SEO services from a trusted SEO company in League City Texas. Improve local visibility, attract qualified leads, and grow your business.",
    url: "https://thegeekonomy.com/seo-company-league-city-tx",
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
            headline: "SEO Company League City TX | Local SEO | Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <SeoServices/>
      <SeoStrategy/>
      <LocalSeoService/>
      <Industries/>
      <WhyGeekonomy/>
      <Metrics/>
      <CTA/>
      <OurProcess/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-league-city-tx" />
      <LandingPageMap location="league_city" />
      <LocationList region="texas" HidecurrentSlug="seo-company-league-city-tx"/>
      </main>
  );
}