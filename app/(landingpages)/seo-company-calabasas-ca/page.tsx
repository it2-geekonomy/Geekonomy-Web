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
import WhyNeedSeo from "./components/Whyneedseo";
import OurProcess from "./components/Ourprocess";
import SeoMetrics from "./components/Seometrics";
import SeoEffective from "./components/Seoeffective";

const PUBLISHED_DATE = "2026-09-29T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Calabasas CA | Local SEO | Get Free Audit",
  description:
    "Grow your business with a Calabasas SEO company focused on local rankings, qualified traffic, leads, and sustainable organic growth.",
  alternates: {
    canonical: "/seo-company-calabasas-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Calabasas CA | Local SEO | Get Free Audit",
    description:
      "Grow your business with a Calabasas SEO company focused on local rankings, qualified traffic, leads, and sustainable organic growth.",
    url: "https://thegeekonomy.com/seo-company-calabasas-ca",
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
            headline: "SEO Company Calabasas CA | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <WhyNeedSeo/> 
      <SeoServices/>
      <OurProcess/>
      <SeoStrategy/> 
      <Industries/>
      <WhyGeekonomy/>
      <SeoEffective/>
      <CTA/>
      <SeoMetrics/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-calabasas-ca" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26419.139926492757!2d-118.68360560693645!3d34.13629935157678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29e2317efd3c1%3A0x61a2e2c26fe615ae!2sCalabasas%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1790654096820!5m2!1sen!2sin" />
      </main>
  );
}