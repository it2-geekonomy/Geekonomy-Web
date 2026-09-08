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
import SeoStrategy from "./components/Seostrategy";
import LocalSeoService from "./components/Localseo";

const PUBLISHED_DATE = "2026-09-08T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Palm Harbor FL | Get Free SEO Audit",
  description:
    "Choose an SEO Company Palm Harbor FL businesses trust to improve local rankings, search visibility, qualified traffic, and leads.",
  alternates: {
    canonical: "/seo-company-palm-harbor-fl",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Palm Harbor FL | Get Free SEO Audit",
    description:
      "Choose an SEO Company Palm Harbor FL businesses trust to improve local rankings, search visibility, qualified traffic, and leads.",
    url: "https://thegeekonomy.com/seo-company-palm-harbor-fl",
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
            headline: "SEO Company Palm Harbor FL | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltAround/> 
      <ServingNearby/>
      <LocalSeoService/>
      <SeoServices /> 
      <SeoStrategy/>
      <Industries/>
      <OurProcess/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-palm-harbor-fl" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56319.74315939135!2d-82.8195505410435!3d28.08603252238431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f1d307e6570d%3A0x40993b1f9b5af5fc!2sPalm%20Harbor%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1788846148636!5m2!1sen!2sin" />
      </main>
  );
}