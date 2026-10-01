import type { Metadata } from "next";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import SeoServices from "./components/Seoservices";
import Hero from "./components/Herosection";
import SeoStrategy from "./components/Seostrategy";
import GrowBusiness from "./components/Growbusiness";
import OurProcess from "./components/Ourprocess";
import WhyNeedSeo from "./components/Whyneedseo";

const PUBLISHED_DATE = "2026-10-01T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Fresno TX | Local SEO | Get Free SEO Audit",
  description:
    "Looking for an SEO company in Fresno Texas? Geekonomy helps local businesses grow Google visibility, attract qualified traffic, and generate leads.",
  alternates: {
    canonical: "/seo-company-fresno-texas",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Fresno TX | Local SEO | Get Free SEO Audit",
    description:
      "Looking for an SEO company in Fresno Texas? Geekonomy helps local businesses grow Google visibility, attract qualified traffic, and generate leads.",
    url: "https://thegeekonomy.com/seo-company-fresno-texas",
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
            headline: "SEO Company Fresno TX | Local SEO | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <GrowBusiness/> 
      <SeoServices/>
      <WhyNeedSeo/>
      <SeoStrategy/> 
      <OurProcess/>
      <Industries/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-fresno-texas" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27770.164972458344!2d-95.49089206533974!3d29.537612299765673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e2462f42b22f%3A0x813c6457ef21fb55!2sFresno%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1790836251187!5m2!1sen!2sin" />
      </main>
  );
}