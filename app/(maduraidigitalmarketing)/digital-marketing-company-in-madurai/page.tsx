import type { Metadata } from "next";
import Hero from "./components/Herosection";
import WhatWeDo from "./components/Whatwedo";
import WhyGeekonomy from "./components/Whygeekonomy";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import RightStrategy from "./components/Rightstrategy";
import Industries from "./components/Industries";
import BussinessGrowth from "./components/Bussinessgrowth";
import BusinessGoal from "./components/Businessgoal";
import BussinessStrategy from "./components/Bussinessstrategy";

const PUBLISHED_DATE = "2026-09-02T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Digital Marketing Company in Madurai | Get Free Plan",
  description:
    "Grow your business with a digital marketing company in Madurai offering SEO, local SEO, Google Ads, social media and lead generation.",
  alternates: {
    canonical: "/digital-marketing-company-in-madurai",
  },
  openGraph: {
    type: "article",
    title: "Digital Marketing Company in Madurai | Get Free Plan",
    description:
      "Grow your business with a digital marketing company in Madurai offering SEO, local SEO, Google Ads, social media and lead generation.",
    url: "https://thegeekonomy.com/digital-marketing-company-in-madurai",
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
            headline: "Digital Marketing Company in Madurai | Get Free Plan",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BussinessStrategy/>
      <WhatWeDo/>
      <Industries/>
      <BusinessGoal/>
      <RightStrategy/>
      <BussinessGrowth/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="digital-marketing-company-in-madurai" />
      </main>
  );
}
