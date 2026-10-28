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
import { SeoStrategy } from "./const/Seostrategy";
import { SeoMatters } from "./const/Seomatters";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import { ourProcessContent } from "./const/Ourprocess";
import { GrowBusiness } from "./const/Growbusiness";
import { Compete } from "./const/Compete";

const PUBLISHED_DATE = "2026-10-26T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Gettysburg PA | Local SEO Services",
  description:
    "Get more local customers with a Gettysburg SEO Company focused on higher rankings, targeted traffic, and qualified leads for your business.",
  alternates: {
    canonical: "/seo-company-gettysburg-pennsylvania",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Gettysburg PA | Local SEO Services",
    description:
      "Get more local customers with a Gettysburg SEO Company focused on higher rankings, targeted traffic, and qualified leads for your business.",
    url: "https://thegeekonomy.com/seo-company-gettysburg-pennsylvania",
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
            headline: "SEO Company Gettysburg PA | Local SEO Services",
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
      <CTAButton text="Get Your Free SEO Strategy"/>
      <StepSection content={ourProcessContent} /> 
      <CardSection content={whyGeekonomyContent} />
      <CTA content={ctaContent} />
      <CardSection content={Compete} /> 
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-gettysburg-pennsylvania" />
      <LandingPageMap location="gettysburg" />
      </main>
  );
} 