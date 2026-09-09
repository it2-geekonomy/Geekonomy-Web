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
import SeoStrategy from "./components/Seostrategy";
import LocalSeoService from "./components/Localseo";
import Metrics from "./components/Metrics";

const PUBLISHED_DATE = "2026-09-09T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company in Coral Springs FL | Get Free SEO Audit",
  description:
    "Grow your visibility and generate more qualified leads with a results-driven SEO company in Coral Springs Florida. Get a customized SEO strategy today.",
  alternates: {
    canonical: "/seo-company-in-coral-springs-fl",
  },
  openGraph: {
    type: "article",
    title: "SEO Company in Coral Springs FL | Get Free SEO Audit",
    description:
      "Grow your visibility and generate more qualified leads with a results-driven SEO company in Coral Springs Florida. Get a customized SEO strategy today.",
    url: "https://thegeekonomy.com/seo-company-in-coral-springs-fl",
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
            headline: "SEO Company in Coral Springs FL | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltAround/> 
      <SeoServices /> 
      <LocalSeoService/>
      <SeoStrategy/>
      <OurProcess/>
      <Industries/>
      <Metrics/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-in-coral-springs-fl" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57243.72703010103!2d-80.29084250238047!3d26.270329588248917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d905341976e065%3A0x8907b0b59129202b!2sCoral%20Springs%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1788948399434!5m2!1sen!2sin" />
      </main>
  );
}