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
import SeoMetrics from "./components/Seometrics";

const PUBLISHED_DATE = "2026-09-07T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Fort Walton Beach FL | Get Free SEO Audit",
  description:
    "Looking for an SEO company in Fort Walton Beach FL? Get local SEO, technical SEO, content, and strategies built to generate qualified leads.",
  alternates: {
    canonical: "/fort-walton-beach-seo-company",
  },
  keywords: ["seo company fort walton beach fl",
    "fort walton beach seo company",
  ],
  openGraph: {
    type: "article",
    title: "SEO Company Fort Walton Beach FL | Get Free SEO Audit",
    description:
      "Looking for an SEO company in Fort Walton Beach FL? Get local SEO, technical SEO, content, and strategies built to generate qualified leads.",
    url: "https://thegeekonomy.com/fort-walton-beach-seo-company",
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
            headline: "SEO Company Fort Walton Beach FL | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltAround/> 
      <ServingNearby/>
      <SeoServices /> 
      <Industries/>
      <OurProcess/>
      <SeoMetrics/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="fort-walton-beach-seo-company" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69013.76463058396!2d-86.64211038686514!3d30.4378474430818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889116d2aaa0387d%3A0xe3a6ad0f3c9e67c7!2sFort%20Walton%20Beach%2C%20FL%2C%20USA!5e1!3m2!1sen!2sin!4v1788782655320!5m2!1sen!2sin" />
      </main>
  );
}