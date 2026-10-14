import type { Metadata } from "next";
import Hero from "./components/Herosection";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import SeoStrategy from "./components/Seostrategy";
import LocalSeoService from "./components/Localseo";
import SeoServices from "./components/Seoservices";
import OurProcess from "./components/Ourprocess";
import Metrics from "./components/Metrics";

const PUBLISHED_DATE = "2026-09-10T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company League City TX | Local SEO | Free SEO Audit",
  description:
    "Expert SEO services from a trusted SEO company in League City Texas. Improve local visibility, attract qualified leads, and grow your business.",
  alternates: {
    canonical: "/seo-company-league-city-tx",
  },
  openGraph: {
    type: "article",
    title: "SEO Company League City TX | Local SEO | Free SEO Audit",
    description:
      "Expert SEO services from a trusted SEO company in League City Texas. Improve local visibility, attract qualified leads, and grow your business.",
    url: "https://thegeekonomy.com/seo-company-league-city-tx",
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
            headline: "SEO Company League City TX | Local SEO | Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <SeoServices/>
      <SeoStrategy/>
      <LocalSeoService/>
      <Industries/>
      <WhyGeekonomy/>
      <Metrics/>
      <CTA/>
      <OurProcess/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-league-city-tx" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55564.46037702913!2d-95.15295653168639!3d29.493651411769406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86408323cd6cb1b3%3A0x14dec35f5a4064d6!2sLeague%20City%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1789031199532!5m2!1sen!2sin" />
      </main>
  );
}