import type { Metadata } from "next";
import Hero from "./components/Herosection";

import WhySpecialized from "./components/Whyspecialized";
import WhatWeDo from "./components/Whatwedo";
import LogisticsType from "./components/Logisticstype";
import LeadGeneration from "./components/Leadgeneration";
import SeoStrategy from "./components/Seostrategy";
import Conversion from "./components/Conversion";
import WhyGeekonomy from "./components/Whygeekonomy";
import OurProcess from "./components/Ourprocess";
import MeasurableGrowth from "./components/Measurablegrowth";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import LandingPageForm from "@/components/forms/LandingPageForm";


const PUBLISHED_DATE = "2026-08-26T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Digital Marketing for Logistics Companies | Free Audit",
  description:
    "Grow your logistics business with digital marketing for logistics companies strategies that generate qualified leads, and turn searches into customers.",
  alternates: {
    canonical: "/digital-marketing-for-logistics-companies",
  },
  openGraph: {
    type: "article",
    title: "Digital Marketing for Logistics Companies | Free Audit",
    description:
      "Grow your logistics business with digital marketing for logistics companies strategies that generate qualified leads, and turn searches into customers.",
    url: "https://thegeekonomy.com/digital-marketing-for-logistics-companies",
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
            headline: "Digital Marketing for Logistics Companies | Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

     <Hero />
     <WhySpecialized/>
     <WhatWeDo />
     <LogisticsType/>
     <LeadGeneration/>
     <SeoStrategy/>
     <Conversion />
     <WhyGeekonomy/> 
     <CTA />
     <OurProcess/>
     <MeasurableGrowth/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="digital-marketing-for-logistics-companies" />
      </main>
  );
}
