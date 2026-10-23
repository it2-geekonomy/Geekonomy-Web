import type { Metadata } from "next";
import Hero from "./components/Herosection";
import BuiltAround from "./components/Builtaround";
import SeoServices from "./components/Seoservices";
import OurProcess from "./components/Ourprocess";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import LocalSeoService from "./components/Localseo";
import Matters from "./components/Matters";

const PUBLISHED_DATE = "2026-09-11T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Orange Beach AL | Local SEO | Free SEO Audit",
  description:
    "Looking for an SEO company in Orange Beach Alabama? Geekonomy helps local businesses improve Google rankings, Maps visibility, traffic, and leads.",
  alternates: {
    canonical: "/seo-company-orange-beach-al",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Orange Beach AL | Local SEO | Free SEO Audit",
    description:
      "Looking for an SEO company in Orange Beach Alabama? Geekonomy helps local businesses improve Google rankings, Maps visibility, traffic, and leads.",
    url: "https://thegeekonomy.com/seo-company-orange-beach-al",
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
            headline: "SEO Company Orange Beach AL | Local SEO | Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltAround/> 
      <LocalSeoService/>
      <SeoServices /> 
      <Industries/>
      <Matters/>
      <OurProcess/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-orange-beach-al" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55118.1291212418!2d-87.62523862545203!3d30.297390257171003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889a0653ba3f0f09%3A0xea3bcac5eb6a8dbb!2sOrange%20Beach%2C%20AL%2C%20USA!5e0!3m2!1sen!2sin!4v1789099045008!5m2!1sen!2sin" />
      </main>
  );
}