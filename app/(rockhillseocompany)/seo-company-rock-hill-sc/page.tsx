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
import WhereSearch from "./components/Wheresearch";
import ServingNearby from "./components/Nearby";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";

const PUBLISHED_DATE = "2026-09-07T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Rock Hill SC | Local SEO | Get Free Audit",
  description:
    "Choose an SEO company Rock Hill SC businesses trust for local SEO, higher rankings, qualified traffic, leads, and sustainable growth.",
  alternates: {
    canonical: "/seo-company-rock-hill-sc",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Rock Hill SC | Local SEO | Get Free Audit",
    description:
      "Choose an SEO company Rock Hill SC businesses trust for local SEO, higher rankings, qualified traffic, leads, and sustainable growth.",
    url: "https://thegeekonomy.com/seo-company-rock-hill-sc",
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
            headline: "SEO Company Rock Hill SC | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltAround/> 
      <SeoServices /> 
      <ServingNearby/>
      <WhereSearch/>
      <Industries/>
      <OurProcess/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-rock-hill-sc" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88015.43017249773!2d-81.05535896298296!3d34.934220544928564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88568caa45cafb65%3A0xc77a8c45e50c89f0!2sRock%20Hill%2C%20SC!5e0!3m2!1sen!2sus!4v1788773324779!5m2!1sen!2sus" 
      />
      </main>
  );
}
