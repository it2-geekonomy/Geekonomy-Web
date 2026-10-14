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
import LocalSeo from "./components/Localseo";
import SeoBusiness from "./components/Seobusiness";

const PUBLISHED_DATE = "2026-09-22T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Kyle Texas | Local SEO | Get Free SEO Audit",
  description:
    "Looking for an SEO company Kyle Texas? Geekonomy provides local SEO services to help Kyle businesses improve visibility, traffic, and leads.",
  alternates: {
    canonical: "/seo-company-kyle-texas",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Kyle Texas | Local SEO | Get Free SEO Audit",
    description:
      "Looking for an SEO company Kyle Texas? Geekonomy provides local SEO services to help Kyle businesses improve visibility, traffic, and leads.",
    url: "https://thegeekonomy.com/seo-company-kyle-texas",
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
            headline: "SEO Company Kyle Texas | Local SEO | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <SeoBusiness/>
      <LocalSeo/>
      <SeoServices/>
      <SeoStrategy/>
      <OurProcess/>
      <WhyGeekonomy/>
      <CTA/>
      <Industries/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-kyle-texas" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55287.12261926051!2d-97.93026002823257!3d29.99537152301577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b507c4a9e12fd%3A0x48f508e9716fb676!2sKyle%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1790053903351!5m2!1sen!2sin" />
      </main>
  );
}