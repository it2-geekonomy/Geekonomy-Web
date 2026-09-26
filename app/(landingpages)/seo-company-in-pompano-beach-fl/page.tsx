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
import SeoResults from "./components/Seoresults";

const PUBLISHED_DATE = "2026-09-26T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company in Pompano Beach, Florida | Free SEO Audit",
  description:
    "Looking for a local SEO company in Pompano Beach, Florida? Geekonomy is a Pompano SEO company helping businesses grow with local SEO.",
  alternates: {
    canonical: "/seo-company-in-pompano-beach-fl",
  },
  openGraph: {
    type: "article",
    title: "SEO Company in Pompano Beach, Florida | Free SEO Audit",
    description:
      "Looking for a local SEO company in Pompano Beach, Florida? Geekonomy is a Pompano SEO company helping businesses grow with local SEO.",
    url: "https://thegeekonomy.com/seo-company-in-pompano-beach-fl",
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
            headline: "SEO Company in Pompano Beach, Florida | Free SEO Audit",
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
      <WhyGeekonomy/>
      <Difference/> 
      <OurProcess/>
      <CTA/>
      <SeoResults/> 
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-in-pompano-beach-fl" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57252.81607231365!2d-80.17964605249132!3d26.251892553370006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d902d941884489%3A0x3b611c5e76ae74f3!2sPompano%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1790394577632!5m2!1sen!2sin" />
      </main>
  );
}