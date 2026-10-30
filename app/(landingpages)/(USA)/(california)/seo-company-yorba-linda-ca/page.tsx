import type { Metadata } from "next";
import Hero from "./components/Herosection";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import SeoStrategy from "./components/Seostrategy";
import SeoServices from "./components/Seoservices";
import OurProcess from "./components/Ourprocess";
import ServingNearby from "./components/Nearby";
import QualifiedCustomers from "./components/Qualified";
import LocalSeoService from "./components/Localseo";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-09-15T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Yorba Linda CA | Local SEO | Get Free Audit",
  description:
    "Choose an SEO Company Yorba Linda California businesses trust to improve local rankings, attract qualified traffic, and generate more leads.",
  alternates: {
    canonical: "/seo-company-yorba-linda-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Yorba Linda CA | Local SEO | Get Free Audit",
    description:
      "Choose an SEO Company Yorba Linda California businesses trust to improve local rankings, attract qualified traffic, and generate more leads.",
    url: "https://thegeekonomy.com/seo-company-yorba-linda-ca",
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
            headline: "SEO Company Yorba Linda CA | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <ServingNearby/>
      <SeoServices/>
      <LocalSeoService/>
      <OurProcess/>
      <SeoStrategy/>
      <Industries/>
      <QualifiedCustomers/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-yorba-linda-ca" />
      <LandingPageMap location="yorba_linda" />
      <LocationList region="california" HidecurrentSlug="seo-company-yorba-linda-ca"/>
      </main>
  );
}