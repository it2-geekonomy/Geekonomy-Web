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
import OurProcess from "./components/Ourprocess";
import WhyNeedSeo from "./components/Whyneedseo";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-10-01T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Fresno TX | Local SEO | Get Free SEO Audit",
  description:
    "Looking for an SEO company in Fresno Texas? Geekonomy helps local businesses grow Google visibility, attract qualified traffic, and generate leads.",
  alternates: {
    canonical: "/seo-company-fresno-texas",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Fresno TX | Local SEO | Get Free SEO Audit",
    description:
      "Looking for an SEO company in Fresno Texas? Geekonomy helps local businesses grow Google visibility, attract qualified traffic, and generate leads.",
    url: "https://thegeekonomy.com/seo-company-fresno-texas",
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
            headline: "SEO Company Fresno TX | Local SEO | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <GrowBusiness/> 
      <SeoServices/>
      <WhyNeedSeo/>
      <SeoStrategy/> 
      <OurProcess/>
      <Industries/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-fresno-texas" />
      <LandingPageMap location="fresno" />
      <LocationList region="texas" HidecurrentSlug="seo-company-fresno-texas"/>
      </main>
  );
}