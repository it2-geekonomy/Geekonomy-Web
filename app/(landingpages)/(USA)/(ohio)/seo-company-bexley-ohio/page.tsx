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
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import SeoStrategy from "./components/Seostrategy";
import SeoResults from "./components/Seoresults";
import WhyLocalSeo from "./components/Whylocalseo";

const PUBLISHED_DATE = "2026-10-05T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Bexley OH | Local SEO | Get Free Audit",
  description:
    "Grow your local visibility, attract more qualified traffic, and generate leads with a Bexley SEO Company Ohio focused on measurable results.",
  alternates: {
    canonical: "/seo-company-bexley-ohio",
  },
  keywords: [
    "seo company bexley ga",
    "bexley seo company",
    "seo company in bexley georgia",
  ],
  openGraph: {
    type: "article",
    title: "SEO Company Bexley OH | Local SEO | Get Free Audit",
    description:
      "Grow your local visibility, attract more qualified traffic, and generate leads with a Bexley SEO Company Ohio focused on measurable results.",
    url: "https://thegeekonomy.com/seo-company-bexley-ohio",
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
            headline: "SEO Company Bexley OH | Local SEO | Get Free Audit",
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
      <LandingPageForm landingPageSlug="seo-company-bexley-ohio" />
      <LandingPageMap location="bexley" />
      </main>
  );
}