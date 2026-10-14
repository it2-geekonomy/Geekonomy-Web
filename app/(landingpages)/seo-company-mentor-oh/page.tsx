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
import LocalSearch from "./components/Localsearch";
import BusinessGoals from "./components/Businessgoals";

const PUBLISHED_DATE = "2026-09-18T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Mentor OH | Local SEO Services | Get Free Audit",
  description:
    "Get expert SEO services in Mentor, OH to improve local visibility, attract qualified traffic, and generate more leads for your business.",
  alternates: {
    canonical: "/seo-company-mentor-oh",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Mentor OH | Local SEO Services | Get Free Audit",
    description:
      "Get expert SEO services in Mentor, OH to improve local visibility, attract qualified traffic, and generate more leads for your business.",
    url: "https://thegeekonomy.com/seo-company-mentor-oh",
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
            headline: "SEO Company Mentor OH | Local SEO Services | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <SeoServices/>
      <LocalSearch/>
      <SeoStrategy/>
      <BusinessGoals/>
      <WhyGeekonomy/>
      <CTA/>
      <Industries/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-mentor-oh" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47666.0452514855!2d-81.3806694299295!3d41.69617610886654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8831a0d5e2fa2b01%3A0x93ec392068bcba6a!2sMentor%2C%20OH%2044060%2C%20USA!5e0!3m2!1sen!2sin!4v1789711341815!5m2!1sen!2sin" />
      </main>
  );
}