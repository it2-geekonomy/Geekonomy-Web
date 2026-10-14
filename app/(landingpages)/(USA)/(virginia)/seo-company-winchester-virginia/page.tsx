import type { Metadata } from "next";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import SeoStrategy from "./components/Seostrategy";
import OurProcess from "./components/Ourprocess";
import SeoServices from "./components/Seoservices";
import Hero from "./components/Herosection";
import SEOResults from "./components/Seoresults";
import LocalSeo from "./components/Localseo";

const PUBLISHED_DATE = "2026-09-18T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Winchester VA | Local SEO | Get Free Audit",
  description:
    "Get expert SEO services in Winchester, Virginia to improve local visibility, attract qualified traffic, and generate more leads from Google.",
  alternates: {
    canonical: "/seo-company-winchester-virginia",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Winchester VA | Local SEO | Get Free Audit",
    description:
      "Get expert SEO services in Winchester, Virginia to improve local visibility, attract qualified traffic, and generate more leads from Google.",
    url: "https://thegeekonomy.com/seo-company-winchester-virginia",
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
            headline: "SEO Company Winchester VA | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <SeoStrategy/>
      <SeoServices/>
      <LocalSeo/>
      <OurProcess/>
      <Industries/>
      <WhyGeekonomy/>
      <CTA/>
      <SEOResults/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-winchester-virginia" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49492.724259841256!2d-78.20981845448613!3d39.16800779212803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b5eef740674ac1%3A0x91b50a0f9c168184!2sWinchester%2C%20VA%2022601%2C%20USA!5e0!3m2!1sen!2sin!4v1789723616465!5m2!1sen!2sin" />
      </main>
  );
}