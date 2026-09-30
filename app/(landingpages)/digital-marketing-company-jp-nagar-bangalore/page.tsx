import type { Metadata } from "next";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import SeoServices from "./components/Seoservices";
import Hero from "./components/Herosection";
import WhyNeedDigi from "./components/Whyneeddigi";
import OurProcess from "./components/Ourprocess";
import Measure from "./components/Measure";
import GeoOptimize from "./components/GEOoptimize";
import DigiServices from "./components/Digiservice";
import DigiStrategy from "./components/Digistrategy";

const PUBLISHED_DATE = "2026-09-30T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Digital Marketing Company in JP Nagar | 100% Growth",
  description:
    "Grow your business with a digital marketing company in JP Nagar Bangalore offering SEO, PPC, social media, AI SEO, GEO, and lead generation.",
  alternates: {
    canonical: "/digital-marketing-company-jp-nagar-bangalore",
  },
  openGraph: {
    type: "article",
    title: "Digital Marketing Company in JP Nagar | 100% Growth",
    description:
      "Grow your business with a digital marketing company in JP Nagar Bangalore offering SEO, PPC, social media, AI SEO, GEO, and lead generation.",
    url: "https://thegeekonomy.com/digital-marketing-company-jp-nagar-bangalore",
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
            headline: "Digital Marketing Company in JP Nagar | 100% Growth",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />

      <Hero />
      <DigiServices/>
      <WhyNeedDigi/> 
      <DigiStrategy/>  
      <SeoServices/>
      <GeoOptimize/>  
      <Industries/>
      <WhyGeekonomy/>
      <OurProcess/>
      <CTA/>
      <Measure/>       
      <FAQ /> 
      <LandingPageForm landingPageSlug="digital-marketing-company-jp-nagar-bangalore" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31114.234590424596!2d77.55747526540114!3d12.889752079118638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150d7349a72b%3A0xf3d03ea1e1dd3d46!2sJ.%20P.%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1790748087257!5m2!1sen!2sin" />
      </main>
  );
}