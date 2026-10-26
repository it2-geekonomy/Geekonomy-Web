import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import CTA from "@/components/Landingpage/CTA";
import CTAButton from "@/components/Landingpage/CTAbutton";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import FAQ from "@/components/Landingpage/FAQ";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import { heroContent } from "./const/Herosection";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { SeoServices } from "./const/Seoservices";
import { ctaContent } from "./const/cta";
import { faqContent } from "./const/FAQ";
import { industriesContent } from "./const/Industries";
import { Difference } from "./const/Difference";
import { Results } from "./const/Results";
import { SeoStrategy } from "./const/Seostrategy";
import { LocalSeo } from "./const/Localseo";
import { SeoLeads } from "./const/Leads";

const PUBLISHED_DATE = "2026-10-24T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Redmond WA | Get Free SEO Audit",
  description:
    "Grow your Redmond, Washington business with Geekonomy, a results-driven SEO company offering local SEO, technical SEO, and lead-focused strategies.",
  alternates: {
    canonical: "/seo-company-redmond-washington",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Redmond WA | Get Free SEO Audit",
    description:
      "Grow your Redmond, Washington business with Geekonomy, a results-driven SEO company offering local SEO, technical SEO, and lead-focused strategies.",
    url: "https://thegeekonomy.com/seo-company-redmond-washington",
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
            headline: "SEO Company Redmond WA | Get Free SEO Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />

      <Hero content={heroContent} />
      <ImageCardSection content={SeoStrategy} /> 
      <CardSection content={SeoServices} />
      <CTAButton text="Get Your Free SEO Strategy"/>
      <ImageCardSection content={LocalSeo} /> 
      <CardSection content={SeoLeads} />
      <CardSection content={Results} /> 
      <ImageCardSection content={industriesContent} />
      <CardSection content={whyGeekonomyContent} />
      <CTA content={ctaContent} />
      <CardSection content={Difference} /> 
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-redmond-washington" />
      <LandingPageMap location="redmond" />
      </main>
  );
}