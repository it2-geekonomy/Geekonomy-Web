import type { Metadata } from "next";
import Hero from "./components/Herosection";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import SeoStrategy from "./components/Seostrategy";
import OurProcess from "./components/Ourprocess";
import BuiltAround from "./components/Buildaround";
import Metrics from "./components/Metrics";
import Searching from "./components/Searching";

const PUBLISHED_DATE = "2026-09-16T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Henderson NV | Local SEO | Get Free SEO Audit",
  description:
    "Looking for an SEO Company Henderson Nevada? Geekonomy helps businesses improve search visibility, attract qualified traffic, and generate more leads.",
  alternates: {
    canonical: "/seo-company-henderson-nv",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Henderson NV | Local SEO | Get Free SEO Audit",
    description:
      "Looking for an SEO Company Henderson Nevada? Geekonomy helps businesses improve search visibility, attract qualified traffic, and generate more leads.",
    url: "https://thegeekonomy.com/seo-company-henderson-nv",
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
            headline: "SEO Company Henderson NV | Local SEO | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltAround/>
      <SeoStrategy/>
      <Industries/>
      <OurProcess/>
      <WhyGeekonomy/>
      <CTA/>
      <Searching/>
      <Metrics/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-henderson-nv" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103272.54750137824!2d-115.13982501688656!3d36.01377017717694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c9ae1f5f4291%3A0xef1b2a38ca2061b5!2sHenderson%2C%20NV%2C%20USA!5e0!3m2!1sen!2sin!4v1789537908672!5m2!1sen!2sin" />
      </main>
  );
}