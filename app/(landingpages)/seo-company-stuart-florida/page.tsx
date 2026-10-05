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
import Difference from "./components/Difference";
import SeoResults from "./components/Seoresults";
import WhyLocalSeo from "./components/Whylocalseo";
import LocalSeo from "./components/Localseo";

const PUBLISHED_DATE = "2026-10-05T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Stuart FL | Local SEO | Get Free Audit",
  description:
    "Grow your business with Geekonomy, a trusted SEO company in Stuart Florida. Get local SEO, technical SEO, content, and strategies that drive leads.",
  alternates: {
    canonical: "/seo-company-stuart-florida",
  },
  keywords: [
    "seo company stuart fl",
    "stuart seo company",
    "seo company in stuart florida",
  ],
  openGraph: {
    type: "article",
    title: "SEO Company Stuart FL | Local SEO | Get Free Audit",
    description:
      "Grow your business with Geekonomy, a trusted SEO company in Stuart Florida. Get local SEO, technical SEO, content, and strategies that drive leads.",
    url: "https://thegeekonomy.com/seo-company-stuart-florida",
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
            headline: "SEO Company Stuart FL | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltAround/>  
      <SeoServices /> 
      <ServingNearby/> 
      <WhyGeekonomy/>
      <LocalSeo/>
      <SeoStrategy /> 
      <OurProcess/>
      <Industries/> 
      <WhyLocalSeo/>  
      <Difference/>
      <CTA/>
      <SeoResults/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-stuart-florida" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56779.884034064715!2d-80.28190804670568!3d27.195820922149267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dedc3582d450af%3A0xe7653cad7577bc83!2sStuart%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1791173044517!5m2!1sen!2sin" />
      </main>
  );
}