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
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";

const PUBLISHED_DATE = "2026-09-04T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company in Carmel, Indiana | Get Free SEO Audit",
  description:
    "Grow your visibility with a SEO company Carmel Indiana focused on local rankings, qualified traffic, leads, and measurable business growth.",
  alternates: {
    canonical: "/seo-company-carmel-indiana",
  },
  openGraph: {
    type: "article",
    title: "SEO Company in Carmel, Indiana | Get Free SEO Audit",
    description:
      "Grow your visibility with a SEO company Carmel Indiana focused on local rankings, qualified traffic, leads, and measurable business growth.",
    url: "https://thegeekonomy.com/seo-company-carmel-indiana",
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
            headline: "SEO Company in Carmel, Indiana | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltAround/> 
      <SeoServices /> 
      <OurProcess/>
      <Industries/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-carmel-indiana" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48927.35321472479!2d-86.1735834471686!3d39.964656493119925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814ad973033fa1d%3A0x43b9095f5f7b38fc!2sCarmel%2C%20IN%2C%20USA!5e0!3m2!1sen!2sin!4v1788842738789!5m2!1sen!2sin" />
      </main>
  );
}