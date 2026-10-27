import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import CTA from "@/components/Landingpage/CTA";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import FAQ from "@/components/Landingpage/FAQ";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import { heroContent } from "./const/Herosection";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { SeoServices } from "./const/Seoservices";
import { ctaContent } from "./const/cta";
import { faqContent } from "./const/FAQ";
import { industriesContent } from "./const/Industries";
import { SeoStrategy } from "./const/Seostrategy";
import { SeoMatters } from "./const/Seomatters";
import { GrowBusiness } from "./const/Growbusiness";

const PUBLISHED_DATE = "2026-10-27T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company in Woodstock, GA | Local SEO | Free Audit",
  description:
    "Get more local leads with SEO Company in Woodstock, Georgia. Improve Google rankings, increase website traffic, and attract more customers.",
  alternates: {
    canonical: "/seo-company-woodstock-georgia",
  },
  openGraph: {
    type: "article",
    title: "SEO Company in Woodstock, GA | Local SEO | Free Audit",
    description:
      "Get more local leads with SEO Company in Woodstock, Georgia. Improve Google rankings, increase website traffic, and attract more customers.",
    url: "https://thegeekonomy.com/seo-company-woodstock-georgia",
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
            headline: "SEO Company in Woodstock, GA | Local SEO | Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />

      <Hero content={heroContent} />
      <ImageCardSection content={GrowBusiness} /> 
      <CardSection content={SeoMatters} />
      <CardSection content={SeoServices} />
      <CardSection content={SeoStrategy} /> 
      <ImageCardSection content={industriesContent} />
      <CTA content={ctaContent} />
      <CardSection content={whyGeekonomyContent} />
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-woodstock-georgia" />
      <LandingPageMap location="woodstock" />
      </main>
  );
} 