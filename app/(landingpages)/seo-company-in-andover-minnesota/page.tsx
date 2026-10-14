import type { Metadata } from "next";
import Hero from "./components/Herosection";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import OurProcess from "./components/Ourprocess";
import BuiltAround from "./components/Buildaround";
import SeoServices from "./components/Seoservices";
import LocalSearch from "./components/Localsearch";
import SeoResults from "./components/Seoresults";
import BusinessGrowth from "./components/Businessgrowth";

const PUBLISHED_DATE = "2026-09-17T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company in Andover Minnesota | Get Free SEO Audit",
  description:
    "Looking for an SEO company in Andover Minnesota? Geekonomy provides local SEO, technical SEO, content, and strategies built to grow your visibility.",
  alternates: {
    canonical: "/seo-company-in-andover-minnesota",
  },
  openGraph: {
    type: "article",
    title: "SEO Company in Andover Minnesota | Get Free SEO Audit",
    description:
      "Looking for an SEO company in Andover Minnesota? Geekonomy provides local SEO, technical SEO, content, and strategies built to grow your visibility.",
    url: "https://thegeekonomy.com/seo-company-in-andover-minnesota",
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
            headline: "SEO Company in Andover Minnesota | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltAround/>
      <LocalSearch/>
      <SeoServices/>
      <Industries/>
      <BusinessGrowth/>
      <OurProcess/>
      <CTA/>
      <WhyGeekonomy/>
      <SeoResults/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-in-andover-minnesota" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44938.152241430944!2d-93.37730144510962!3d45.25518296556296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b3162b7c8ec5f1%3A0x7133c5f5ac63120!2sAndover%2C%20MN%2055304%2C%20USA!5e0!3m2!1sen!2sin!4v1789638389158!5m2!1sen!2sin" />
      </main>
  );
}