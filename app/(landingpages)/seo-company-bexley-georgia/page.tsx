import type { Metadata } from "next";
import Hero from "./components/Herosection";
import BuiltAround from "./components/Builtaround";
import SeoServices from "./components/Seoservices";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import ServingNearby from "./components/Nearby";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import SeoStrategy from "./components/Seostrategy";
import SeoResults from "./components/Seoresults";
import WhyLocalSeo from "./components/Whylocalseo";

const PUBLISHED_DATE = "2026-10-05T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Bexley GA | Local SEO | Get Free Audit",
  description:
    "Grow your local visibility, attract more qualified traffic, and generate leads with a Bexley Georgia SEO company focused on measurable results.",
  alternates: {
    canonical: "/seo-company-bexley-georgia",
  },
  keywords: [
    "seo company bexley ga",
    "bexley seo company",
    "seo company in bexley georgia",
  ],
  openGraph: {
    type: "article",
    title: "SEO Company Bexley GA | Local SEO | Get Free Audit",
    description:
      "Grow your local visibility, attract more qualified traffic, and generate leads with a Bexley Georgia SEO company focused on measurable results.",
    url: "https://thegeekonomy.com/seo-company-bexley-georgia",
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
            headline: "SEO Company Bexley GA | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltAround/>  
      <ServingNearby/> 
      <WhyLocalSeo/>  
      <WhyGeekonomy/>
      <SeoServices /> 
      <SeoStrategy /> 
      <Industries/> 
      <CTA/>
      <SeoResults/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-bexley-georgia" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54277.95231028469!2d-82.39565596559238!3d31.76033785021475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f072d6b3107457%3A0x709010719d231b0!2sBaxley%2C%20GA%2031513%2C%20USA!5e0!3m2!1sen!2sin!4v1791195727749!5m2!1sen!2sin" />
      </main>
  );
}