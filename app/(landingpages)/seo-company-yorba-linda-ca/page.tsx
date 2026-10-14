import type { Metadata } from "next";
import Hero from "./components/Herosection";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import SeoStrategy from "./components/Seostrategy";
import SeoServices from "./components/Seoservices";
import OurProcess from "./components/Ourprocess";
import ServingNearby from "./components/Nearby";
import QualifiedCustomers from "./components/Qualified";
import LocalSeoService from "./components/Localseo";

const PUBLISHED_DATE = "2026-09-15T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Yorba Linda CA | Local SEO | Get Free Audit",
  description:
    "Choose an SEO Company Yorba Linda California businesses trust to improve local rankings, attract qualified traffic, and generate more leads.",
  alternates: {
    canonical: "/seo-company-yorba-linda-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Yorba Linda CA | Local SEO | Get Free Audit",
    description:
      "Choose an SEO Company Yorba Linda California businesses trust to improve local rankings, attract qualified traffic, and generate more leads.",
    url: "https://thegeekonomy.com/seo-company-yorba-linda-ca",
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
            headline: "SEO Company Yorba Linda CA | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <ServingNearby/>
      <SeoServices/>
      <LocalSeoService/>
      <OurProcess/>
      <SeoStrategy/>
      <Industries/>
      <QualifiedCustomers/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-yorba-linda-ca" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52991.15035628306!2d-117.8059058993305!3d33.89102144296483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c3282ad158a97b%3A0xf46fd555d6035049!2sYorba%20Linda%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1789449617884!5m2!1sen!2sin" />
      </main>
  );
}