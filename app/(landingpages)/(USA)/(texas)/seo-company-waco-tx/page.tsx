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
import SeoApproach from "./components/Seoapproach";
import SeoServices from "./components/Seoservices";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-09-10T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Waco TX | Local SEO | Get Free SEO Audit",
  description:
    "Get expert SEO services in Waco, Texas to improve search visibility, attract qualified traffic, and generate more leads for your business.",
  alternates: {
    canonical: "/seo-company-waco-tx",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Waco TX | Local SEO | Get Free SEO Audit",
    description:
      "Get expert SEO services in Waco, Texas to improve search visibility, attract qualified traffic, and generate more leads for your business.",
    url: "https://thegeekonomy.com/seo-company-waco-tx",
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
            headline: "SEO Company Waco TX | Local SEO | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <LocalSeoService/>
      <SeoServices/>
      <SeoStrategy/>
      <Industries/>
      <SeoApproach /> 
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-waco-tx" />
      <LandingPageMap location="waco" />
      <LocationList region="texas" HidecurrentSlug="seo-company-waco-tx"/>
      </main>
  );
}