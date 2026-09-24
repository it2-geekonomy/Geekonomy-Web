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
import GrowBusiness from "./components/Growbusiness";
import LocalSeo from "./components/Localseo";
import SeoStrategy from "./components/Seostrategy";

const PUBLISHED_DATE = "2026-09-24T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Brentwood, California | Get Free SEO Audit",
  description:
    "Grow your Brentwood business with an expert seo company brentwood california. Geekonomy boosts local visibility, rankings, traffic, and qualified leads.",
  alternates: {
    canonical: "/seo-company-brentwood-california",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Brentwood, California | Get Free SEO Audit",
    description:
      "Grow your Brentwood business with an expert seo company brentwood california. Geekonomy boosts local visibility, rankings, traffic, and qualified leads.",
    url: "https://thegeekonomy.com/seo-company-brentwood-california",
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
            headline: "SEO Company Brentwood, California | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <GrowBusiness/> 
      <LocalSeo/>
      <SeoServices/>
      <SeoStrategy/>
      <Industries/>
      <WhyGeekonomy/>
      <CTA/>
      <OurProcess/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-brentwood-california" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50352.226236518436!2d-121.7601789655766!3d37.93010011923896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808ff999f087c8cd%3A0x7e19835b56d29a02!2sBrentwood%2C%20CA%2094513%2C%20USA!5e0!3m2!1sen!2sin!4v1790226048733!5m2!1sen!2sin" />
      </main>
  );
}