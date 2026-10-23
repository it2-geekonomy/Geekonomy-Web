import type { Metadata } from "next";
import Hero from "./components/Herosection";
import BuiltAround from "./components/Builtaround";
import SeoServices from "./components/Seoservices";
import OurProcess from "./components/Ourprocess";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import ServingNearby from "./components/Nearby";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import SeoStrategy from "./components/Seostrategy";
import MeasureSeo from "./components/Measureseo";

const PUBLISHED_DATE = "2026-09-09T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Frederick Maryland | Get Free SEO Audit",
  description:
    "Get expert SEO services from a trusted SEO company in Frederick Maryland. Improve rankings, local visibility, traffic, and qualified leads.",
  alternates: {
    canonical: "/seo-company-frederick-maryland",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Frederick Maryland | Get Free SEO Audit",
    description:
      "Get expert SEO services from a trusted SEO company in Frederick Maryland. Improve rankings, local visibility, traffic, and qualified leads.",
    url: "https://thegeekonomy.com/seo-company-frederick-maryland",
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
            headline: "SEO Company Frederick Maryland | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltAround/> 
      <SeoServices /> 
      <SeoStrategy/>
      <ServingNearby/>
      <OurProcess/>
      <WhyGeekonomy/>
      <CTA/>
      <MeasureSeo/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-frederick-maryland" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49300.37128971336!2d-77.45288840199848!3d39.440556569579655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9c50c8cbdaee3%3A0xda6247bdbd111c99!2sFrederick%2C%20MD%2C%20USA!5e0!3m2!1sen!2sin!4v1788933162476!5m2!1sen!2sin" />
      </main>
  );
}