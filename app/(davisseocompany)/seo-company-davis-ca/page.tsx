import type { Metadata } from "next";
import Hero from "./components/Herosection";
import BuiltAround from "./components/Builtaround";
import SeoServices from "./components/Seoservices";
import OurProcess from "./components/Ourprocess";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import WhereSearch from "./components/Wheresearch";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";

const PUBLISHED_DATE = "2026-09-04T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Davis CA | Local SEO Services | Free Audit",
  description:
    "Looking for an SEO Company Davis CA? Get local SEO strategies designed to improve rankings, search visibility, traffic, and qualified leads.",
  alternates: {
    canonical: "/seo-company-davis-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Davis CA | Local SEO Services | Free Audit",
    description:
      "Looking for an SEO Company Davis CA? Get local SEO strategies designed to improve rankings, search visibility, traffic, and qualified leads.",
    url: "https://thegeekonomy.com/seo-company-davis-ca",
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
            headline: "SEO Company Davis CA | Local SEO Services | Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltAround/> 
      <SeoServices /> 
      <WhereSearch/>
      <Industries/>
      <OurProcess/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-davis-ca" />
      <LandingPageMap mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49921.07037516243!2d-121.77605801001853!3d38.55527245175075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808529999495543f%3A0xc3013f1b6ee28fff!2sDavis%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1788841599025!5m2!1sen!2sin" />
      </main>
  );
}