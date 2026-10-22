import type { Metadata } from "next";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import SeoStrategy from "./components/Seostrategy";
import OurProcess from "./components/Ourprocess";
import SeoServices from "./components/Seoservices";
import Hero from "./components/Herosection";
import LocalSeo from "./components/Localseo";
import SeoBusiness from "./components/Seobusiness";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-09-22T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Kyle Texas | Local SEO | Get Free SEO Audit",
  description:
    "Looking for an SEO company Kyle Texas? Geekonomy provides local SEO services to help Kyle businesses improve visibility, traffic, and leads.",
  alternates: {
    canonical: "/seo-company-kyle-texas",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Kyle Texas | Local SEO | Get Free SEO Audit",
    description:
      "Looking for an SEO company Kyle Texas? Geekonomy provides local SEO services to help Kyle businesses improve visibility, traffic, and leads.",
    url: "https://thegeekonomy.com/seo-company-kyle-texas",
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
            headline: "SEO Company Kyle Texas | Local SEO | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <SeoBusiness/>
      <LocalSeo/>
      <SeoServices/>
      <SeoStrategy/>
      <OurProcess/>
      <WhyGeekonomy/>
      <CTA/>
      <Industries/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-kyle-texas" />
      <LandingPageMap location="kyle" />
      <LocationList region="texas" HidecurrentSlug="seo-company-kyle-texas"/>
      </main>
  );
}