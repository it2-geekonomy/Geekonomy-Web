import type { Metadata } from "next";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import OurProcess from "./components/Ourprocess";
import SeoServices from "./components/Seoservices";
import Hero from "./components/Herosection";
import LocalSeo from "./components/Localseo";
import SeoMeasure from "./components/Seomeasure";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-09-22T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Bee Cave Tx | Local SEO | Get Free SEO Audit",
  description:
    "Grow your local visibility with a Bee Cave Texas SEO company focused on qualified traffic, stronger rankings, and more leads for your business.",
  alternates: {
    canonical: "/seo-company-bee-cave-texas",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Bee Cave Tx | Local SEO | Get Free SEO Audit",
    description:
      "Grow your local visibility with a Bee Cave Texas SEO company focused on qualified traffic, stronger rankings, and more leads for your business.",
    url: "https://thegeekonomy.com/seo-company-bee-cave-texas",
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
            headline: "SEO Company Bee Cave Tx | Local SEO | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <SeoServices/>
      <LocalSeo/>
      <OurProcess/>
      <Industries/>
      <WhyGeekonomy/>
      <CTA/>
      <SeoMeasure/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-bee-cave-texas" />
      <LandingPageMap location="bee_cave" />
      <LocationList region="texas" HidecurrentSlug="seo-company-bee-cave-texas"/>
      </main>
  );
}