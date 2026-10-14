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
import SeoStrategy from "./components/Seostrategy";
import SeoResults from "./components/Seoresults";
import LocationList from "@/components/landingpagelocations/Locationlist";
import OurApproach from "./components/Approach";
import LocalSeo from "./components/Localseo";
import WhySeoMatter from "./components/Whyseomatter";
import LocalLead from "./components/Locallead";

const PUBLISHED_DATE = "2026-10-09T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Miramar FL | Local SEO | Get Free SEO Audit",
  description:
    "Grow your Miramar business with expert SEO services. Geekonomy helps improve local visibility, rankings, traffic, and qualified leads with proven SEO strategies.",
  alternates: {
    canonical: "/seo-company-miramar-florida",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Miramar FL | Local SEO | Get Free SEO Audit",
    description:
      "Grow your Miramar business with expert SEO services. Geekonomy helps improve local visibility, rankings, traffic, and qualified leads with proven SEO strategies.",
    url: "https://thegeekonomy.com/seo-company-miramar-florida",
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
            headline: "SEO Company Miramar FL | Local SEO | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <LocalSeo/>  
      <ServingNearby/> 
      <WhySeoMatter/>
      <SeoServices /> 
      <LocalLead/>
      <Industries/> 
      <OurApproach/>
      <WhyGeekonomy/> 
      <SeoResults/>
      <CTA/>
      <SeoStrategy /> 
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-miramar-florida" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114775.9977825209!2d-80.40575526177416!3d25.976240494820807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a698bf50e1f7%3A0x3ba9f9e721e3bcfa!2sMiramar%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1791536254633!5m2!1sen!2sin" />
      <LocationList region="florida" HidecurrentSlug="seo-company-miramar-florida"/>
      </main>
  );
}