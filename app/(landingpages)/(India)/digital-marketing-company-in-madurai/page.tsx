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
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";

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
      <LandingPageMap mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125768.86964487802!2d78.03643923538925!3d9.910857510791079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1788842042396!5m2!1sen!2sin" />
      </main>
  );
}
