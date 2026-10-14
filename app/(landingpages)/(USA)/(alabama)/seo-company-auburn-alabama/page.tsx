import type { Metadata } from "next";
import Hero from "./components/Herosection";
import SeoServices from "./components/Seoservices";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import ServingNearby from "./components/Nearby";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import Ranking from "./components/Ranking";
import SeoResults from "./components/Seoresults";
import OurApproach from "./components/Approach";
import LocalSeo from "./components/Localseo";
import WhySeoMatter from "./components/Whyseomatter";
import BusinessServices from "./components/BusinessService";
import RelyOn from "./components/Relyon";

const PUBLISHED_DATE = "2026-10-09T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Auburn AL | Local SEO | Get Free Audit",
  description:
    "Looking for an SEO company in Auburn Alabama? Geekonomy helps Auburn businesses improve rankings, attract local customers, and generate more leads.",
  alternates: {
    canonical: "/seo-company-auburn-alabama",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Auburn AL | Local SEO | Get Free Audit",
    description:
      "Looking for an SEO company in Auburn Alabama? Geekonomy helps Auburn businesses improve rankings, attract local customers, and generate more leads.",
    url: "https://thegeekonomy.com/seo-company-auburn-alabama",
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
            headline: "SEO Company Auburn AL | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <BusinessServices/>
      <WhySeoMatter/>
      <SeoServices /> 
      <LocalSeo/>  
      <Industries/> 
      <SeoResults/>
      <OurApproach/>
      <Ranking /> 
      <RelyOn/>
      <ServingNearby/> 
      <CTA/>
      <WhyGeekonomy/> 
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-auburn-alabama" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107525.85542031478!2d-85.57675757740058!3d32.62795027068503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888cf12fb39bf883%3A0xcb25919235d39358!2sAuburn%2C%20AL%2C%20USA!5e0!3m2!1sen!2sin!4v1791541800576!5m2!1sen!2sin" />
      </main>
  );
}