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
import SeoMatters from "./components/Seomatters";
import LocalSeo from "./components/Localseo";
import SeoStrategy from "./components/Seostrategy";

const PUBLISHED_DATE = "2026-09-22T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Enfield, Connecticut | Get Free SEO Audit",
  description:
    "Grow your online visibility and attract more local customers with Geekonomy, a results-focused SEO company in Enfield, Connecticut.",
  alternates: {
    canonical: "/seo-company-enfield-connecticut",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Enfield, Connecticut | Get Free SEO Audit",
    description:
      "Grow your online visibility and attract more local customers with Geekonomy, a results-focused SEO company in Enfield, Connecticut.",
    url: "https://thegeekonomy.com/seo-company-enfield-connecticut",
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
            headline: "SEO Company Enfield, Connecticut | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <SeoMatters/>
      <LocalSeo/>
      <SeoServices/>
      <SeoStrategy/>
      <Industries/>
      <OurProcess/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-enfield-connecticut" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47451.76382815575!2d-72.59928087799419!3d41.98449393597454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6fa8aedc1219f%3A0xdf969d153b030806!2sEnfield%2C%20CT%2006082%2C%20USA!5e0!3m2!1sen!2sin!4v1790135172704!5m2!1sen!2sin" />
      </main>
  );
}