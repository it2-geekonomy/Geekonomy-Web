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
import Difference from "./components/Difference";
import OurProcess from "./components/Ourprocess";
import SeoMetrics from "./components/Seometrics";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-09-25T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Georgetown Tx | Local SEO | Get Free Audit",
  description:
    "Grow your business with a Georgetown Texas SEO company focused on local rankings, qualified traffic, leads, and sustainable organic growth.",
  alternates: {
    canonical: "/seo-company-georgetown-texas",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Georgetown Tx | Local SEO | Get Free Audit",
    description:
      "Grow your business with a Georgetown Texas SEO company focused on local rankings, qualified traffic, leads, and sustainable organic growth.",
    url: "https://thegeekonomy.com/seo-company-georgetown-texas",
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
            headline: "SEO Company Georgetown Tx | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <GrowBusiness/> 
      <LocalSearch/>
      <SeoServices/>
      <SeoStrategy/> 
      <Industries/>
      <OurProcess/>
      <WhyGeekonomy/>
      <Difference/> 
      <CTA/>
      <SeoMetrics/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-georgetown-texas" />
      <LandingPageMap location="georgetown" />
      <LocationList region="texas" HidecurrentSlug="seo-company-georgetown-texas"/>
      </main>
  );
}