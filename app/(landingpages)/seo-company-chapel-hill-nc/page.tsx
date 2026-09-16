import type { Metadata } from "next";
import Hero from "./components/Herosection";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import SeoStrategy from "./components/Seostrategy";
import SeoServices from "./components/Seoservices";
import OurProcess from "./components/Ourprocess";
import ServingNearby from "./components/Nearby";
import ResultMatters from "./components/Resultmatters";
import Differents from "./components/Differents";

const PUBLISHED_DATE = "2026-09-16T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Chapel Hill NC | Local SEO | Get Free Audit",
  description:
    "Grow your local visibility with a SEO Company Chapel Hill North Carolina focused on qualified traffic, stronger rankings, and more leads for your business.",
  alternates: {
    canonical: "/seo-company-chapel-hill-nc",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Chapel Hill NC | Local SEO | Get Free Audit",
    description:
      "Grow your local visibility with a SEO Company Chapel Hill North Carolina focused on qualified traffic, stronger rankings, and more leads for your business.",
    url: "https://thegeekonomy.com/seo-company-chapel-hill-nc",
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
            headline: "SEO Company Chapel Hill NC | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <SeoServices/>
      <ServingNearby/>
      <SeoStrategy/>/
      <Industries/>/
      <OurProcess/>
      <Differents/>
      <ResultMatters/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-chapel-hill-nc" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51696.04053154969!2d-79.08049057909145!3d35.922438020471944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acc31c216e7ea7%3A0x7f03bae00443e4cb!2sChapel%20Hill%2C%20NC%2C%20USA!5e0!3m2!1sen!2sin!4v1789530809023!5m2!1sen!2sin" />
      </main>
  );
}