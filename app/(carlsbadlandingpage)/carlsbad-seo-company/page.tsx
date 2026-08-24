import type { Metadata } from "next";
import Hero from "./components/Herosection";
import WhatWeDo from "./components/Whatwedo";
import Seoservices from "./components/Seoservices";
import Whyus from "./components/Whyus";
import CTA from "./components/CTA";
import Localsearch from "./components/localsearch";
import Tablesection from "./components/Tablesection";
import Ourapproach from "./components/Ourapproach";
import Growth from "./components/Growth";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";

const PUBLISHED_DATE = "2026-08-24T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Carlsbad SEO Company That Turns Searches Into Customer",
  description:
    "Grow your business with Carlsbad SEO company that drives qualified traffic, improves local rankings, and turns high-intent searches into customers.",
  alternates: {
    canonical: "/carlsbad-seo-company",
  },
  openGraph: {
    type: "article",
    title: "Carlsbad SEO Company That Turns Searches Into Customer",
    description:
      "Grow your business with Carlsbad SEO company that drives qualified traffic, improves local rankings, and turns high-intent searches into customers.",
    url: "https://thegeekonomy.com/carlsbad-seo-company",
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
            headline: "Carlsbad SEO Company That Turns Searches Into Customer",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <WhatWeDo />
      <Seoservices />
      <Whyus />
      <CTA />
      <Localsearch />
      <Tablesection />
      <Ourapproach />
      <Growth />
      <FAQ />
      <LandingPageForm landingPageSlug="carlsbad-seo-company" />
      </main>
  );
}