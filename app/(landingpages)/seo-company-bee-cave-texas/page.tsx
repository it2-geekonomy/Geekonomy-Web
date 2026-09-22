import type { Metadata } from "next";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import OurProcess from "./components/Ourprocess";
import SeoServices from "./components/Seoservices";
import Hero from "./components/Herosection";
import LocalSeo from "./components/Localseo";
import SeoMeasure from "./components/Seomeasure";

const PUBLISHED_DATE = "2026-09-22T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Bee Cave Tx | Local SEO | Get Free SEO Audit",
  description:
    "Grow your local visibility with a Bee Cave Texas SEO company focused on qualified traffic, stronger rankings, and more leads for your business.",
  alternates: {
    canonical: "/seo-company-bee-cave-texas",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Bee Cave Tx | Local SEO | Get Free SEO Audit",
    description:
      "Grow your local visibility with a Bee Cave Texas SEO company focused on qualified traffic, stronger rankings, and more leads for your business.",
    url: "https://thegeekonomy.com/seo-company-bee-cave-texas",
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
            headline: "SEO Company Bee Cave Tx | Local SEO | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <SeoServices/>
      <LocalSeo/>
      <OurProcess/>
      <Industries/>
      <WhyGeekonomy/>
      <CTA/>
      <SeoMeasure/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-bee-cave-texas" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27556.054192961255!2d-97.97685501402079!3d30.308099986869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b37f4c74315e3%3A0x113488848db59d6d!2sBee%20Cave%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1790049406325!5m2!1sen!2sin" />
      </main>
  );
}