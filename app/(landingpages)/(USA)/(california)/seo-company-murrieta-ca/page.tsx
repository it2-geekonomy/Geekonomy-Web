import type { Metadata } from "next";
import Hero from "./components/Herosection";
import SeoServices from "./components/Seoservices";
import OurProcess from "./components/Ourprocess";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import ServingNearby from "./components/Nearby";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import LocalSeoService from "./components/Localseo";
import WeMesure from "./components/Mesure";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-09-08T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Murrieta CA | Local SEO | Get Free SEO Audit",
  description:
    "Choose an SEO Company Murrieta CA businesses trust for local visibility, qualified traffic, leads, and sustainable organic growth.",
  alternates: {
    canonical: "/seo-company-murrieta-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Murrieta CA | Local SEO | Get Free SEO Audit",
    description:
      "Choose an SEO Company Murrieta CA businesses trust for local visibility, qualified traffic, leads, and sustainable organic growth.",
    url: "https://thegeekonomy.com/seo-company-murrieta-ca",
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
            headline: "SEO Company Murrieta CA | Local SEO | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <SeoServices />
      <LocalSeoService/>
      <ServingNearby/>
      <OurProcess/>
      <Industries/>
      <WhyGeekonomy/>
      <CTA/>
      <WeMesure/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-murrieta-ca" />
      <LandingPageMap location="murrieta" />
      <LocationList region="california" HidecurrentSlug="seo-company-murrieta-ca"/>
      </main>
  );
}