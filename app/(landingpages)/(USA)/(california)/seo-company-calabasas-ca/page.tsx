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
import WhyNeedSeo from "./components/Whyneedseo";
import OurProcess from "./components/Ourprocess";
import SeoMetrics from "./components/Seometrics";
import SeoEffective from "./components/Seoeffective";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-09-29T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Calabasas CA | Local SEO | Get Free Audit",
  description:
    "Grow your business with a Calabasas SEO company focused on local rankings, qualified traffic, leads, and sustainable organic growth.",
  alternates: {
    canonical: "/seo-company-calabasas-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Calabasas CA | Local SEO | Get Free Audit",
    description:
      "Grow your business with a Calabasas SEO company focused on local rankings, qualified traffic, leads, and sustainable organic growth.",
    url: "https://thegeekonomy.com/seo-company-calabasas-ca",
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
            headline: "SEO Company Calabasas CA | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <WhyNeedSeo/> 
      <SeoServices/>
      <OurProcess/>
      <SeoStrategy/> 
      <Industries/>
      <WhyGeekonomy/>
      <SeoEffective/>
      <CTA/>
      <SeoMetrics/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-calabasas-ca" />
      <LandingPageMap location="calabasas" />
      <LocationList region="california" HidecurrentSlug="seo-company-calabasas-ca"/>
      </main>
  );
}