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
import Metrics from "./components/Metrics";
import ServingNearby from "./components/Nearby";

const PUBLISHED_DATE = "2026-09-11T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Columbia MO | Local SEO | Free SEO Audit",
  description:
    "Looking for an SEO company Columbia Missouri? Geekonomy delivers local SEO strategies to improve rankings, visibility, traffic, and qualified leads.",
  alternates: {
    canonical: "/seo-company-columbia-mo",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Columbia MO | Local SEO | Free SEO Audit",
    description:
      "Looking for an SEO company Columbia Missouri? Geekonomy delivers local SEO strategies to improve rankings, visibility, traffic, and qualified leads.",
    url: "https://thegeekonomy.com/seo-company-columbia-mo",
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
            headline: "SEO Company Columbia MO | Local SEO | Free SEO Audit",
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
      <Metrics/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-columbia-mo" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99296.56943708322!2d-92.48994741772516!3d38.946421848908024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87dcabf3bb8182c9%3A0xa011692dbabd6f20!2sColumbia%2C%20MO%2C%20USA!5e0!3m2!1sen!2sin!4v1789111019548!5m2!1sen!2sin" />
      </main>
  );
}