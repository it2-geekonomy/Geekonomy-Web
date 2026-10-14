import type { Metadata } from "next";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import OurProcess from "./components/Ourprocess";
import SeoServices from "./components/Seoservices";
import Hero from "./components/Herosection";
import SeoResults from "./components/Seoresults";
import SeoMatters from "./components/Seomatters";
import WhatHolding from "./components/Whatsholding";

const PUBLISHED_DATE = "2026-09-24T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company in Fredericksburg Virginia | Get Free Audit",
  description:
    "Grow your business with an SEO company in Fredericksburg Virginia. Get local SEO, technical SEO, content, and lead-focused strategies from Geekonomy.",
  alternates: {
    canonical: "/seo-company-in-fredericksburg-virginia",
  },
  openGraph: {
    type: "article",
    title: "SEO Company in Fredericksburg Virginia | Get Free Audit",
    description:
      "Grow your business with an SEO company in Fredericksburg Virginia. Get local SEO, technical SEO, content, and lead-focused strategies from Geekonomy.",
    url: "https://thegeekonomy.com/seo-company-in-fredericksburg-virginia",
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
            headline: "SEO Company in Fredericksburg Virginia | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <SeoResults/>
      <SeoMatters/>
      <Industries/>
      <SeoServices/>
      <OurProcess/>
      <WhyGeekonomy/>
      <CTA/>
      <WhatHolding/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-in-fredericksburg-virginia" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25049.49773702502!2d-77.51050559825998!3d38.298329928916104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6c1ebbaeae025%3A0x7fa6450a21a691a1!2sFredericksburg%2C%20VA%2022401%2C%20USA!5e0!3m2!1sen!2sin!4v1790221520364!5m2!1sen!2sin" />
      </main>
  );
}