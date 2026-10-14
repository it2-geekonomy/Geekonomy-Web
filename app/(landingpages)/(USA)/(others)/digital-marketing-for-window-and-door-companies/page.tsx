import type { Metadata } from "next";
import Hero from "./components/Herosection";
import WhatWeDo from "./components/Whatwedo";
import StrategyBussiness from "./components/Strategybussiness";
import RealGoal from "./components/Realgoal";
import HowItWorks from "./components/Howitworks";
import WhyGeekonomy from "./components/Whygeekonomy";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";

const PUBLISHED_DATE = "2026-08-31T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Digital Marketing for Window & Door Companies | Free Plan",
  description:
    "Get more qualified customers with digital marketing for window and door companies, including SEO, PPC, and local strategies that drive estimates and sales.",
  alternates: {
    canonical: "/digital-marketing-for-window-and-door-companies",
  },
  openGraph: {
    type: "article",
    title: "Digital Marketing for Window & Door Companies | Free Plan",
    description:
      "Get more qualified customers with digital marketing for window and door companies, including SEO, PPC, and local strategies that drive estimates and sales.",
    url: "https://thegeekonomy.com/digital-marketing-for-window-and-door-companies",
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
            headline: "Digital Marketing for Window & Door Companies | Free Plan",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <WhatWeDo/>
      <StrategyBussiness/>
      <RealGoal/>
      <HowItWorks/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="digital-marketing-for-window-and-door-companies" />
      </main>
  );
}
