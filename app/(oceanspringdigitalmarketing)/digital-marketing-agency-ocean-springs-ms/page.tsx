import type { Metadata } from "next";
import Hero from "./components/Herosection";
import WhyGeekonomy from "./components/Whygeekonomy";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import Industries from "./components/Industries";
import BuiltBusiness from "./components/Builtbusiness";
import WhatHolding from "./components/Whatholding";
import MarketingService from "./components/Marketingservice";
import BusinessGoal from "./components/Businessgoal";
import DigitalGrowth from "./components/Digitalgrowth";
import OurProcess from "./components/Ourprocess";
import BusinessGrowth from "./components/Businessgrowth";

const PUBLISHED_DATE = "2026-09-03T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Ocean Springs, MS | Free Plan",
  description:
    "Grow your Ocean Springs business with SEO, PPC, local search, social media and digital marketing ocean springs strategies built to generate customers.",
  alternates: {
    canonical: "/digital-marketing-agency-ocean-springs-ms",
  },
  openGraph: {
    type: "article",
    title: "Digital Marketing Agency in Ocean Springs, MS | Free Plan",
    description:
      "Grow your Ocean Springs business with SEO, PPC, local search, social media and digital marketing ocean springs strategies built to generate customers.",
    url: "https://thegeekonomy.com/digital-marketing-agency-ocean-springs-ms",
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
            headline: "Digital Marketing Agency in Ocean Springs, MS | Free Plan",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltBusiness/> 
      <WhatHolding/> 
      <MarketingService/>  
      <BusinessGoal/> 
      <DigitalGrowth/> 
      <Industries/>
      <WhyGeekonomy/>
      <OurProcess/>
      <CTA/>
      <BusinessGrowth/>  
      <FAQ />  
      <LandingPageForm landingPageSlug="digital-marketing-agency-ocean-springs-ms" />
      </main>
  );
}