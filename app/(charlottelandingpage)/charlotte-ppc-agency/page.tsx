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
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";


const PUBLISHED_DATE = "2026-08-25T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Charlotte PPC Agency | Best Charlotte PPC Company",
  description:
    "Partner with the best Charlotte PPC agency that drives qualified leads, maximizes ad spend, and turns Google Ads into measurable business growth.",
  alternates: {
    canonical: "/charlotte-ppc-agency",
  },
  openGraph: {
    type: "article",
    title: "Charlotte PPC Agency | Best Charlotte PPC Company",
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
            headline: "Charlotte PPC Agency | Best Charlotte PPC Company",
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
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208642.48358318326!2d-80.98696795635306!3d35.20550234178583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0x884650e6bf43d164!2sCharlotte%2C%20NC%2C%20USA!5e0!3m2!1sen!2sin!4v1788843336005!5m2!1sen!2sin" />
      </main>
  );
}