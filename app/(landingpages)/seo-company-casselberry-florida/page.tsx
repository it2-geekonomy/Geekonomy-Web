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
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import SeoMetrics from "./components/Seometrics";
import SeoStrategy from "./components/Seostrategy";
import WhyNeedSeo from "./components/Whyneedseo";
import FloridaLocationSection from "@/components/landingpagelocations/Floridalocationsection";

const PUBLISHED_DATE = "2026-10-01T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Casselberry FL | Local SEO | Get Free Audit",
  description:
    "Grow your local visibility with a Casselberry SEO company Florida offering local SEO, technical SEO, content, and lead-focused strategies.",
  alternates: {
    canonical: "/seo-company-casselberry-florida/",
  },
  keywords: ["seo company casselberry fl",
    "casselberry seo company",
  ],
  openGraph: {
    type: "article",
    title: "SEO Company Casselberry FL | Local SEO | Get Free Audit",
    description:
      "Grow your local visibility with a Casselberry SEO company Florida offering local SEO, technical SEO, content, and lead-focused strategies.",
    url: "https://thegeekonomy.com/seo-company-casselberry-florida/",
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
            headline: "SEO Company Casselberry FL | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BuiltAround/> 
      <WhyNeedSeo/>
      <SeoServices /> 
      <SeoStrategy/>
      <Industries/>
      <WhyGeekonomy/>
      <OurProcess/>
      <CTA/>
      <SeoMetrics/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-casselberry-florida" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56018.842367630146!2d-81.35926658732463!3d28.654399037216226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e76e0e0795bf05%3A0x21e5ed218cf34e84!2sCasselberry%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1790831335568!5m2!1sen!2sin" />
      <FloridaLocationSection HidecurrentSlug="seo-company-casselberry-florida"/>
      </main>
  );
}