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
import Difference from "./components/Difference";
import SeoResults from "./components/Seoresults";
import LocalSeo from "./components/Localseo";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-10-06T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Winter Springs FL | Get Free SEO Audit",
  description:
    "Grow your business with Geekonomy, a trusted SEO company in Winter Springs. Get local SEO, technical SEO, content, and lead-focused strategies.",
  alternates: {
    canonical: "/seo-company-winter-springs-fl",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Winter Springs FL | Get Free SEO Audit",
    description:
      "Grow your business with Geekonomy, a trusted SEO company in Winter Springs. Get local SEO, technical SEO, content, and lead-focused strategies.",
    url: "https://thegeekonomy.com/seo-company-winter-springs-fl",
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
            headline: "SEO Company Winter Springs FL | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <SeoServices /> 
      <BuiltAround/> 
      <OurProcess/>
      <WhyGeekonomy/>
      <Industries/> 
      <LocalSeo/> 
      <SeoStrategy /> 
      <Difference/>
      <CTA/>
      <SeoResults/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-winter-springs-fl" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55997.92298848654!2d-81.30896048706563!3d28.693529553630444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e76c22bd12c755%3A0x17f5edd5ef3578f5!2sWinter%20Springs%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1791267695524!5m2!1sen!2sin" />
      <LocationList region="florida" HidecurrentSlug="seo-company-winter-springs-fl"/>
      </main>
  );
}