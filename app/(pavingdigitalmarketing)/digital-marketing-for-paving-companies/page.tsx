import type { Metadata } from "next";
import Hero from "./components/Herosection";
import WhatWeDo from "./components/Whatwedo";
import WhyGeekonomy from "./components/Whygeekonomy";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import MoreJobs from "./components/Morejobs";
import WhatMatters from "./components/Whatmatters";
import WhySpecialized from "./components/Whyspecialized";
import OurApproach from "./components/Ourapproach";
import LocalSearch from "./components/Localsearch";

const PUBLISHED_DATE = "2026-09-01T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Digital Marketing for Paving Companies | Get Free Audit",
  description:
    "Get more paving leads with digital marketing for paving companies. Attract local customers, increase estimate requests, and grow your paving business.",
  alternates: {
    canonical: "/digital-marketing-for-paving-companies",
  },
  openGraph: {
    type: "article",
    title: "Digital Marketing for Paving Companies | Get Free Audit",
    description:
      "Get more paving leads with digital marketing for paving companies. Attract local customers, increase estimate requests, and grow your paving business.",
    url: "https://thegeekonomy.com/digital-marketing-for-paving-companies",
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
            headline: "Digital Marketing for Paving Companies | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <MoreJobs/>
      <WhatWeDo/>
      <LocalSearch/>
      <WhySpecialized/>
      <CTA/>
      <OurApproach/>
      <WhatMatters/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="digital-marketing-for-paving-companies" />
      </main>
  );
}
