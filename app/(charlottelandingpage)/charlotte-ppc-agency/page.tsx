import type { Metadata } from "next";
import Hero from "./components/Herosection";
import WhatWeDo from "./components/Whatwedo";
import ServiceAreas from "./components/Serviceareas";
import Howitworks from "./components/Howitworks";
import YourGoal from "./components/Yourgoal";
import WhyGeekonomy from "./components/Whygeekonomy";
import GoogleAds from "./components/Googleads";
import Industry from "./components/Industry";
import Measures from "./components/Measurewhatmatters";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import PPCManagment from "./components/PPCmanagmentcost";
import CTA from "./components/CTA";


const PUBLISHED_DATE = "2026-08-25T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Charlotte PPC Agency | Get a Free Ad Account Audit",
  description:
    "Partner with the best Charlotte PPC agency that drives qualified leads, maximizes ad spend, and turns Google Ads into measurable business growth.",
  alternates: {
    canonical: "/charlotte-ppc-agency",
  },
  openGraph: {
    type: "article",
    title: "Charlotte PPC Agency | Get a Free Ad Account Audit",
    description:
      "Partner with the best Charlotte PPC agency that drives qualified leads, maximizes ad spend, and turns Google Ads into measurable business growth.",
    url: "https://thegeekonomy.com/charlotte-ppc-agency",
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
            headline: "Charlotte PPC Agency | Get a Free Ad Account Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
       <WhatWeDo />
       <ServiceAreas />
       <Howitworks />
       <YourGoal />
       <WhyGeekonomy />
       <GoogleAds />
       <Industry />
       <CTA />

       <Measures />
       <PPCManagment />

      <FAQ />
      <LandingPageForm landingPageSlug="charlotte-ppc-agency" />
      </main>
  );
}