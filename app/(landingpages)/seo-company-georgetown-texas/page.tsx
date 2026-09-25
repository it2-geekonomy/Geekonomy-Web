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
import Difference from "./components/Difference";
import OurProcess from "./components/Ourprocess";
import SeoMetrics from "./components/Seometrics";

const PUBLISHED_DATE = "2026-09-25T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Georgetown Tx | Local SEO | Get Free Audit",
  description:
    "Grow your business with a Georgetown Texas SEO company focused on local rankings, qualified traffic, leads, and sustainable organic growth.",
  alternates: {
    canonical: "/seo-company-georgetown-texas/",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Georgetown Tx | Local SEO | Get Free Audit",
    description:
      "Grow your business with a Georgetown Texas SEO company focused on local rankings, qualified traffic, leads, and sustainable organic growth.",
    url: "https://thegeekonomy.com/seo-company-georgetown-texas/",
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
            headline: "SEO Company Georgetown Tx | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <GrowBusiness/> 
      <LocalSearch/>
      <SeoServices/>
      <SeoStrategy/> 
      <Industries/>
      <OurProcess/>
      <WhyGeekonomy/>
      <Difference/> 
      <CTA/>
      <SeoMetrics/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-georgetown-texas" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109824.40725430025!2d-97.79135013650146!3d30.66177012510263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d5fd54dafbdf%3A0x61ec34de94c03a09!2sGeorgetown%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1790307948685!5m2!1sen!2sin" />
      </main>
  );
}