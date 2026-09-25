import type { Metadata } from "next";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import SeoServices from "./components/Seoservices";
import Hero from "./components/Herosection";
import SeoStrategy from "./components/Seostrategy";
import LocalSearch from "./components/Localsearch";
import OurProcess from "./components/Ourprocess";
import NearByArea from "./components/Nearby";
import LocalBusiness from "./components/Localbusiness";

const PUBLISHED_DATE = "2026-09-25T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Rocky River Ohio | Get Free SEO Audit",
  description:
    "Grow local visibility and generate more leads with a local SEO company in Rocky River Ohio. Get a customized SEO strategy from Geekonomy.",
  alternates: {
    canonical: "/seo-company-rocky-river-ohio",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Rocky River Ohio | Get Free SEO Audit",
    description:
      "Grow local visibility and generate more leads with a local SEO company in Rocky River Ohio. Get a customized SEO strategy from Geekonomy.",
    url: "https://thegeekonomy.com/seo-company-rocky-river-ohio",
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
            headline: "SEO Company Rocky River Ohio | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />

      <Hero />
      <SeoServices/>
      <LocalSearch/>
      <NearByArea/>    
      <SeoStrategy/> 
      <Industries/>
      <LocalBusiness/>
      <OurProcess/>
      <CTA/>
      <WhyGeekonomy/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-rocky-river-ohio" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23915.835404272875!2d-81.86880514098962!3d41.472204818242226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830ed5f126b77e9%3A0xcdcd3aecbbf3c4ad!2sRocky%20River%2C%20OH%2044116%2C%20USA!5e0!3m2!1sen!2sin!4v1790313283115!5m2!1sen!2sin" />
      </main>
  );
}