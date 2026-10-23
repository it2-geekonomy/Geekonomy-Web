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
import ServingNearby from "./components/Nearby";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import SeoCampaign from "./components/Seocampaign";
import SeoStrategy from "./components/Seostrategy";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-10-01T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Tomball Texas | Local SEO | Get Free Audit",
  description:
    "Grow your local visibility with a Tomball SEO company Texas offering local SEO, technical SEO, content, and strategies to generate qualified leads.",
  alternates: {
    canonical: "/seo-company-tomball-texas",
  },
  keywords: ["seo company tomball tx",
    "tomball seo company",
  ],
  openGraph: {
    type: "article",
    title: "SEO Company Tomball Texas | Local SEO | Get Free Audit",
    description:
      "Grow your local visibility with a Tomball SEO company Texas offering local SEO, technical SEO, content, and strategies to generate qualified leads.",
    url: "https://thegeekonomy.com/seo-company-tomball-texas",
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
            headline: "SEO Company Tomball Texas | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />


      <Hero /> 
      <BuiltAround/>  
      <ServingNearby/>
      <SeoServices /> 
      <SeoStrategy /> 
      <SeoCampaign/>
      <OurProcess/>
      <CTA/>
      <WhyGeekonomy/>
      <Industries/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-tomball-texas" />
      <LandingPageMap location="tomball" />
      <LocationList region="texas" HidecurrentSlug="seo-company-tomball-texas"/>
      </main>
  );
}