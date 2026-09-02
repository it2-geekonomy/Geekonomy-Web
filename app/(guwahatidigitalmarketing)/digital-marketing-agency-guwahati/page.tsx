import type { Metadata } from "next";
import Hero from "./components/Herosection";
import WhatWeDo from "./components/Whatwedo";
import WhyGeekonomy from "./components/Whygeekonomy";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import RightStrategy from "./components/Rightstrategy";
import Industries from "./components/Industries";
import BussinessStrategy from "./components/Bussinessstrategy";
import ServiceAreas from "./components/Acrossguwahati";
import SearchOpportunity from "./components/Searchopportunity";

const PUBLISHED_DATE = "2026-09-02T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Guwahati | Get Free Plan",
  description:
    "Grow your business with a results-driven digital marketing agency in Guwahati offering SEO, PPC, social media and lead generation services.",
  alternates: {
    canonical: "/digital-marketing-agency-guwahati",
  },
  openGraph: {
    type: "article",
    title: "Digital Marketing Agency in Guwahati | Get Free Plan",
    description:
      "Grow your business with a results-driven digital marketing agency in Guwahati offering SEO, PPC, social media and lead generation services.",
    url: "https://thegeekonomy.com/digital-marketing-agency-guwahati",
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
            headline: "Digital Marketing Agency in Guwahati | Get Free Plan",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BussinessStrategy/>
      <ServiceAreas/>
      <WhatWeDo/>
      <RightStrategy/>
      <SearchOpportunity/>
      <Industries/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="digital-marketing-agency-guwahati" />
      </main>
  );
}
