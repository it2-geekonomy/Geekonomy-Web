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
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";

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
      <LandingPageMap mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114612.57740019081!2d91.62048214230462!3d26.143179269078516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9133ff%3A0x2bbd1332436bde32!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1788841888433!5m2!1sen!2sin" />
      </main>
  );
}
