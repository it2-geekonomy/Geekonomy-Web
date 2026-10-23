import type { Metadata } from "next";
import Hero from "./components/Herosection";
import BussinessGoal from "./components/Bussinessgoal";
import WhatWeDo from "./components/Whatwedo";
import WhyJaipur from "./components/Whyjaipur";
import ServiceAreas from "./components/Acrossjaipur";
import StrategyWork from "./components/Strategywork";
import StrategyBussiness from "./components/Strategybussiness";
import WhatWorks from "./components/Whatworks";
import WhyGeekonomy from "./components/Whygeekonomy";
import CTA from "./components/CTA";
import Comparison from "./components/Clearcomparison";
import Collaborate from "./components/Collaborate";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";

const PUBLISHED_DATE = "2026-08-29T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Digital Marketing Company in Jaipur | Get Free Strategy",
  description:
    "Grow your business with a leading Digital Marketing Company in Jaipur. Get a custom strategy using SEO, PPC, social media, and content marketing.",
  alternates: {
    canonical: "/digital-marketing-company-in-jaipur",
  },
  openGraph: {
    type: "article",
    title: "Digital Marketing Company in Jaipur | Get Free Strategy",
    description:
      "Grow your business with a leading Digital Marketing Company in Jaipur. Get a custom strategy using SEO, PPC, social media, and content marketing.",
    url: "https://thegeekonomy.com/digital-marketing-company-in-jaipur",
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
            headline: "Digital Marketing Company in Jaipur | Get Free Strategy",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BussinessGoal/>
      <WhatWeDo/>
      <WhyJaipur/>
      <ServiceAreas/>
      <StrategyWork/>
      <StrategyBussiness/>
      <WhatWorks/>
      <WhyGeekonomy/>
      <CTA/>
      <Comparison/>
      <Collaborate/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="digital-marketing-company-in-jaipur" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113874.30006233433!2d75.70815711078538!3d26.88533996479717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1788842640687!5m2!1sen!2sin" />
      </main>
  );
}
