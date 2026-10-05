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
import LocalSearch from "./components/Localsearch";
import Difference from "./components/Difference";
import OurProcess from "./components/Ourprocess";
import SeoResults from "./components/Seoresults";
import HelpsBusiness from "./components/Helpbusiness";
import FloridaLocationSection from "@/components/landingpagelocations/Floridalocationsection";

const PUBLISHED_DATE = "2026-09-29T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Boynton Beach, FL | Get Free SEO Audit",
  description:
    "Grow your Boynton Beach business with local SEO. Geekonomy helps improve rankings, Google Maps visibility, qualified traffic, and leads.",
  alternates: {
    canonical: "/seo-company-boynton-beach-fl",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Boynton Beach, FL | Get Free SEO Audit",
    description:
      "Grow your Boynton Beach business with local SEO. Geekonomy helps improve rankings, Google Maps visibility, qualified traffic, and leads.",
    url: "https://thegeekonomy.com/seo-company-boynton-beach-fl",
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
            headline: "SEO Company Boynton Beach, FL | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <GrowBusiness/> 
      <LocalSearch/>
      <SeoServices/>
      <HelpsBusiness/>
      <SeoStrategy/> 
      <Difference/> 
      <Industries/>
      <OurProcess/>
      <WhyGeekonomy/>
      <CTA/>
      <SeoResults/> 
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-boynton-beach-fl" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57116.044928197836!2d-80.12332550082184!3d26.528073426282518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8df208877e343%3A0xeeeca5b1b3279236!2sBoynton%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1790659479731!5m2!1sen!2sin" />
      <FloridaLocationSection HidecurrentSlug="seo-company-boynton-beach-fl"/>
      </main>
  );
}