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
import { LocalSeo } from "./const/LocalSeo";

const PUBLISHED_DATE = "2026-10-26T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company in Secane PA | Local SEO | Get Free Audit",
  description:
    "Grow your Secane business with expert local SEO. Geekonomy helps businesses improve Google visibility, attract local customers, and generate leads.",
  alternates: {
    canonical: "/seo-company-secane-pennsylvania",
  },
  openGraph: {
    type: "article",
    title: "SEO Company in Secane PA | Local SEO | Get Free Audit",
    description:
      "Grow your Secane business with expert local SEO. Geekonomy helps businesses improve Google visibility, attract local customers, and generate leads.",
    url: "https://thegeekonomy.com/seo-company-secane-pennsylvania",
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
            headline: "SEO Company in Secane PA | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />

      <Hero content={heroContent} />
      <ImageCardSection content={LocalSeo} /> 
      <CardSection content={SeoServices} />
      <CTAButton text="Get Your Free SEO Strategy"/>
      <CardSection content={SeoMatters} />
      <CardSection content={SeoStrategy} /> 
      <CardSection content={whyGeekonomyContent} />
      <ImageCardSection content={industriesContent} />
      <CTA content={ctaContent} />
      <StepSection content={ourProcessContent} /> 
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-secane-pennsylvania" />
      <LandingPageMap location="secane" />
      </main>
  );
} 