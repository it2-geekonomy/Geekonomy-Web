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
import GrowBusiness from "./components/Growbusiness";
import LocalSeo from "./components/Localseo";
import SeoStrategy from "./components/Seostrategy";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-09-24T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Brentwood, California | Get Free SEO Audit",
  description:
    "Grow your Brentwood business with an expert seo company brentwood california. Geekonomy boosts local visibility, rankings, traffic, and qualified leads.",
  alternates: {
    canonical: "/seo-company-brentwood-california",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Brentwood, California | Get Free SEO Audit",
    description:
      "Grow your Brentwood business with an expert seo company brentwood california. Geekonomy boosts local visibility, rankings, traffic, and qualified leads.",
    url: "https://thegeekonomy.com/seo-company-brentwood-california",
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
            headline: "SEO Company Brentwood, California | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <GrowBusiness/> 
      <LocalSeo/>
      <SeoServices/>
      <SeoStrategy/>
      <Industries/>
      <WhyGeekonomy/>
      <CTA/>
      <OurProcess/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-brentwood-california" />
      <LandingPageMap location="brentwood" />
      <LocationList region="california" HidecurrentSlug="seo-company-brentwood-california"/>
      </main>
  );
}