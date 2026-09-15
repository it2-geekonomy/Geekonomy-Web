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
import Measure from "./components/Measure";

const PUBLISHED_DATE = "2026-09-15T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company St. Joseph, MO | Local SEO | Get Free Audit",
  description:
    "Get expert SEO services in St. Joseph, Missouri to improve Google rankings, local visibility, website traffic, and qualified leads for your business.",
  alternates: {
    canonical: "/seo-company-st-joseph-mo",
  },
  openGraph: {
    type: "article",
    title: "SEO Company St. Joseph, MO | Local SEO | Get Free Audit",
    description:
      "Get expert SEO services in St. Joseph, Missouri to improve Google rankings, local visibility, website traffic, and qualified leads for your business.",
    url: "https://thegeekonomy.com/seo-company-st-joseph-mo",
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
            headline: "SEO Company St. Joseph, MO | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <SeoServices/>
      <SeoStrategy/>
      <Industries/>
      <ServingNearby/>
      <OurProcess/>
      <CTA/>
      <WhyGeekonomy/>
      <Measure/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-st-joseph-mo" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98147.9043762702!2d-94.90432528220467!3d39.75936888529064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c01a4e932e2571%3A0xe67596795bd371a8!2sSt%20Joseph%2C%20MO%2C%20USA!5e0!3m2!1sen!2sin!4v1789446546040!5m2!1sen!2sin" />
      </main>
  );
}