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

const PUBLISHED_DATE = "2026-09-04T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Davis CA | Local SEO Services | Free Audit",
  description:
    "Looking for an SEO Company Davis CA? Get local SEO strategies designed to improve rankings, search visibility, traffic, and qualified leads.",
  alternates: {
    canonical: "/seo-company-davis-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Davis CA | Local SEO Services | Free Audit",
    description:
      "Looking for an SEO Company Davis CA? Get local SEO strategies designed to improve rankings, search visibility, traffic, and qualified leads.",
    url: "https://thegeekonomy.com/seo-company-davis-ca",
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
            headline: "SEO Company Davis CA | Local SEO Services | Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltAround/> 
      <SeoServices /> 
      <WhereSearch/>
      <Industries/>
      <OurProcess/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-davis-ca" />
      </main>
  );
}