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
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import SeoCampaign from "./components/Seocampaign";
import SeoStrategy from "./components/Seostrategy";

const PUBLISHED_DATE = "2026-10-01T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Tomball Texas | Local SEO | Get Free Audit",
  description:
    "Grow your local visibility with a Tomball SEO company Texas offering local SEO, technical SEO, content, and strategies to generate qualified leads.",
  alternates: {
    canonical: "/seo-company-tomball-texas/",
  },
  keywords: ["seo company tomball tx",
    "tomball seo company",
  ],
  openGraph: {
    type: "article",
    title: "SEO Company Tomball Texas | Local SEO | Get Free Audit",
    description:
      "Grow your local visibility with a Tomball SEO company Texas offering local SEO, technical SEO, content, and strategies to generate qualified leads.",
    url: "https://thegeekonomy.com/seo-company-tomball-texas/",
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
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55233.70774491673!2d-95.66649802756629!3d30.091129388849904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cd9b23065c93%3A0xef63d4775526b925!2sTomball%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1790826961211!5m2!1sen!2sin" />
      </main>
  );
}