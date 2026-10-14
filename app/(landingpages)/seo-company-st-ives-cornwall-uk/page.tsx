import type { Metadata } from "next";
import Hero from "./components/Herosection";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import SeoStrategy from "./components/Seostrategy";
import OurProcess from "./components/Ourprocess";
import BuiltAround from "./components/Buildaround";
import Searching from "./components/Searching";
import SeoServices from "./components/Seoservices";
import LocalSearch from "./components/Localsearch";
import Approach from "./components/Approach";

const PUBLISHED_DATE = "2026-09-17T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company St Ives, Cornwall UK | Get Free SEO Audit",
  description:
    "Looking for an SEO Company St Ives, Cornwall UK? Get tailored SEO services to improve search visibility, attract qualified traffic, and generate more leads.",
  alternates: {
    canonical: "/seo-company-st-ives-cornwall-uk",
  },
  openGraph: {
    type: "article",
    title: "SEO Company St Ives, Cornwall UK | Get Free SEO Audit",
    description:
      "Looking for an SEO Company St Ives, Cornwall UK? Get tailored SEO services to improve search visibility, attract qualified traffic, and generate more leads.",
    url: "https://thegeekonomy.com/seo-company-st-ives-cornwall-uk",
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
            headline: "SEO Company St Ives, Cornwall UK | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltAround/>
      <SeoServices/>
      <LocalSearch/>
      <Searching/>
      <OurProcess/>
      <SeoStrategy/>
      <Industries/>
      <Approach/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-st-ives-cornwall-uk" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10213.404050359311!2d-5.498132220914773!3d50.21066077700321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486ac1883d3d7aed%3A0x90fba57b84271131!2sSt%20Ives%2C%20UK!5e0!3m2!1sen!2sin!4v1789617713224!5m2!1sen!2sin" />
      </main>
  );
}