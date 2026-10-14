import type { Metadata } from "next";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import SeoServices from "./components/Seoservices";
import Hero from "./components/Herosection";
import SeoStrategy from "./components/Seostrategy";
import GrowBusiness from "./components/Growbusiness";
import LocalSearch from "./components/Localsearch";
import WhatHolding from "./components/Whatholding";

const PUBLISHED_DATE = "2026-09-23T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Downey CA | Local SEO | Get Free SEO Audit",
  description:
    "Grow your Downey business with expert SEO services. Geekonomy helps improve local visibility, organic traffic, and qualified leads.",
  alternates: {
    canonical: "/seo-company-downey-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Downey CA | Local SEO | Get Free SEO Audit",
    description:
      "Grow your Downey business with expert SEO services. Geekonomy helps improve local visibility, organic traffic, and qualified leads.",
    url: "https://thegeekonomy.com/seo-company-downey-ca",
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
            headline: "SEO Company Downey CA | Local SEO | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <GrowBusiness/> 
      <SeoServices/>
      <LocalSearch/>
      <SeoStrategy/> 
      <Industries/>
      <WhyGeekonomy/>
      <CTA/>
      <WhatHolding/> 
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-downey-ca" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52962.0853323801!2d-118.17157649896153!3d33.937775799323404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cc4c1e082291%3A0x9140a72616789d0a!2sDowney%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1790143230202!5m2!1sen!2sin" />
      </main>
  );
}