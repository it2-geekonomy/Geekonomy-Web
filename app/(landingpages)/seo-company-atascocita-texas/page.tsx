import type { Metadata } from "next";
import Hero from "./components/Herosection";
import SeoServices from "./components/Seoservices";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import SeoStrategy from "./components/Seostrategy";
import SeoResults from "./components/Seoresults";
import WhyLocalSeo from "./components/Whylocalseo";
import OurProcess from "./components/Ourprocess";

const PUBLISHED_DATE = "2026-10-06T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Atascocita Texas | Local SEO Free Audit",
  description:
    "Get expert SEO services from a trusted SEO company in Atascocita Texas. Improve rankings, local visibility, traffic, and qualified leads.",
  alternates: {
    canonical: "/seo-company-atascocita-texas",
  },
  keywords: [
    "seo company atascocita texas",
    "atascocita seo company",
    "seo company in atascocita texas",
  ],
  openGraph: {
    type: "article",
    title: "SEO Company Atascocita Texas | Local SEO Free Audit",
    description:
      "Get expert SEO services from a trusted SEO company in Atascocita Texas. Improve rankings, local visibility, traffic, and qualified leads.",
    url: "https://thegeekonomy.com/seo-company-atascocita-texas",
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
            headline: "SEO Company Atascocita Texas | Local SEO Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <SeoServices /> 
      <WhyLocalSeo/>  
      <SeoStrategy /> 
      <Industries/> 
      <WhyGeekonomy/>
      <OurProcess/>
      <CTA/>
      <SeoResults/>
      <FAQ />  
      <LandingPageForm landingPageSlug="seo-company-atascocita-texas" />
      <LandingPageMap mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55295.073323002915!2d-95.23362997833169!3d29.981094435552897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640ac4fc609e075%3A0x96834aefd27812e0!2sAtascocita%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1791258484240!5m2!1sen!2sin" />
      </main>
  );
}