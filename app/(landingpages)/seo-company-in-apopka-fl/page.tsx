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
import WhyNeedSeo from "./components/Whyneedseo";
import OurProcess from "./components/Ourprocess";
import SeoMetrics from "./components/Seometrics";

const PUBLISHED_DATE = "2026-09-26T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company in Apopka FL | Local SEO | Get Free Audit",
  description:
    "Grow your Apopka business with a trusted SEO company in Apopka Florida. Improve local visibility, organic traffic, rankings, and qualified leads.",
  alternates: {
    canonical: "/seo-company-in-apopka-fl",
  },
  openGraph: {
    type: "article",
    title: "SEO Company in Apopka FL | Local SEO | Get Free Audit",
    description:
      "Grow your Apopka business with a trusted SEO company in Apopka Florida. Improve local visibility, organic traffic, rankings, and qualified leads.",
    url: "https://thegeekonomy.com/seo-company-in-apopka-fl",
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
            headline: "SEO Company in Apopka FL | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <GrowBusiness/> 
      <WhyGeekonomy/>
      <SeoServices/>
      <Industries/>
      <OurProcess/>
      <SeoStrategy/> 
      <WhyNeedSeo/> 
      <CTA/>
      <SeoMetrics/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-in-apopka-fl" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111984.62428182022!2d-81.61102819154547!3d28.70401656121335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77739cc157c19%3A0xd71d0f8ffc80e888!2sApopka%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1790399564949!5m2!1sen!2sin" />
      </main>
  );
}