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
import SeoApproach from "./components/Seoapproach";
import SeoServices from "./components/Seoservices";

const PUBLISHED_DATE = "2026-09-10T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Waco TX | Local SEO | Get Free SEO Audit",
  description:
    "Get expert SEO services in Waco, Texas to improve search visibility, attract qualified traffic, and generate more leads for your business.",
  alternates: {
    canonical: "/seo-company-waco-tx",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Waco TX | Local SEO | Get Free SEO Audit",
    description:
      "Get expert SEO services in Waco, Texas to improve search visibility, attract qualified traffic, and generate more leads for your business.",
    url: "https://thegeekonomy.com/seo-company-waco-tx",
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
            headline: "SEO Company Waco TX | Local SEO | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <LocalSeoService/>
      <SeoServices/>
      <SeoStrategy/>
      <Industries/>
      <SeoApproach /> 
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-waco-tx" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108798.09322941226!2d-97.27536911017444!3d31.553249865366144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864f82f1230151d3%3A0xfbd74b03d6d1aa10!2sWaco%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1789014561801!5m2!1sen!2sin" />
      </main>
  );
}