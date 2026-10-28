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
import SEOResults from "./components/Seoresults";
import LocalSeo from "./components/Localseo";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-09-18T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Winchester VA | Local SEO | Get Free Audit",
  description:
    "Get expert SEO services in Winchester, Virginia to improve local visibility, attract qualified traffic, and generate more leads from Google.",
  alternates: {
    canonical: "/seo-company-winchester-virginia",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Winchester VA | Local SEO | Get Free Audit",
    description:
      "Get expert SEO services in Winchester, Virginia to improve local visibility, attract qualified traffic, and generate more leads from Google.",
    url: "https://thegeekonomy.com/seo-company-winchester-virginia",
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
            headline: "SEO Company Winchester VA | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <SeoStrategy/>
      <SeoServices/>
      <LocalSeo/>
      <OurProcess/>
      <Industries/>
      <WhyGeekonomy/>
      <CTA/>
      <SEOResults/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-winchester-virginia" />
      <LandingPageMap location="winchester" />
      <LocationList region="virginia" HidecurrentSlug="seo-company-winchester-virginia"/>
      </main>
  );
}