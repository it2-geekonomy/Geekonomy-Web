import type { Metadata } from "next";
import Hero from "./components/Herosection";
import SeoServices from "./components/Seoservices";
import OurProcess from "./components/Ourprocess";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import ServingNearby from "./components/Nearby";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import LocalSeoService from "./components/Localseo";
import WeMesure from "./components/Mesure";

const PUBLISHED_DATE = "2026-09-08T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Murrieta CA | Local SEO | Get Free SEO Audit",
  description:
    "Choose an SEO Company Murrieta CA businesses trust for local visibility, qualified traffic, leads, and sustainable organic growth.",
  alternates: {
    canonical: "/seo-company-murrieta-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Murrieta CA | Local SEO | Get Free SEO Audit",
    description:
      "Choose an SEO Company Murrieta CA businesses trust for local visibility, qualified traffic, leads, and sustainable organic growth.",
    url: "https://thegeekonomy.com/seo-company-murrieta-ca",
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
            headline: "SEO Company Murrieta CA | Local SEO | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <SeoServices />
      <LocalSeoService/>
      <ServingNearby/>
      <OurProcess/>
      <Industries/>
      <WhyGeekonomy/>
      <CTA/>
      <WeMesure/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-murrieta-ca" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53185.10767415099!2d-117.24045200179093!3d33.57755173480801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db7d3fc502f2f1%3A0x12d42ef99dd4ed8f!2sMurrieta%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1788860071409!5m2!1sen!2sin" />
      </main>
  );
}