import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import CTA from "@/components/Landingpage/CTA";
import CTAButton from "@/components/Landingpage/CTAbutton";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import FAQ from "@/components/Landingpage/FAQ";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import { heroContent } from "./const/Herosection";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { SeoServices } from "./const/Seoservices";
import { ctaContent } from "./const/cta";
import { faqContent } from "./const/FAQ";
import { ourProcessContent } from "./const/Ourprocess";
import { industriesContent } from "./const/Industries";
import ImageContent from "@/components/Landingpage/Imagecontent";
import { Goalscontent } from "./const/Goals";
import { Measure } from "./const/Measure";

const PUBLISHED_DATE = "2026-10-10T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Pooler GA | Local SEO | Get Free Audit",
  description:
    "Grow your business with a Pooler SEO Georgia company offering local SEO, technical SEO, content, and strategies built to increase visibility and leads.",
  alternates: {
    canonical: "/seo-company-pooler-georgia",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Pooler GA | Local SEO | Get Free Audit",
    description:
      "Grow your business with a Pooler SEO Georgia company offering local SEO, technical SEO, content, and strategies built to increase visibility and leads.",
    url: "https://thegeekonomy.com/seo-company-pooler-georgia",
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
            headline: "SEO Company Pooler GA | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />

      <Hero content={heroContent} />
      <ImageContent content={Goalscontent} />
      <CardSection content={SeoServices} />
      <CTAButton text="Get Your Free SEO Strategy"/>
      <ImageCardSection content={industriesContent} />
      <CardSection content={whyGeekonomyContent} />
      <StepSection content={ourProcessContent} /> 
      <CTA content={ctaContent} />
      <CardSection content={Measure} /> 
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-pooler-georgia" />
      <LandingPageMap location="pooler" />
      </main>
  );
}