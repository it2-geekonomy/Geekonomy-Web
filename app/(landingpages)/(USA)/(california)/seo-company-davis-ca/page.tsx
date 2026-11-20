import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import Hero from "@/components/Landingpage/Hero";
import ImageContent from "@/components/Landingpage/Imagecontent";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import CTA from "@/components/Landingpage/CTA";
import CTAButton from "@/components/Landingpage/CTAbutton";
import FAQ from "@/components/Landingpage/FAQ";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import LocationList from "@/components/landingpagelocations/Locationlist";
import { heroContent } from "./const/Herosection";
import { builtAroundContent } from "./const/Builtaround";
import { seoServicesContent } from "./const/Seoservices";
import { whereSearchContent } from "./const/Wheresearch";
import { industriesContent } from "./const/Industries";
import { ourProcessContent } from "./const/Ourprocess";
import { ctaContent } from "./const/cta";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { faqContent } from "./const/FAQ";

const PUBLISHED_DATE = "2026-09-04T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Davis CA | Local SEO Services | Free Audit",
  description:
    "Looking for an SEO Company Davis CA? Get local SEO strategies designed to improve rankings, search visibility, traffic, and qualified leads.",
  alternates: {
    canonical: "/seo-company-davis-ca",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Davis CA | Local SEO Services | Free Audit",
    description:
      "Looking for an SEO Company Davis CA? Get local SEO strategies designed to improve rankings, search visibility, traffic, and qualified leads.",
    url: "https://thegeekonomy.com/seo-company-davis-ca",
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
            headline: "SEO Company Davis CA | Local SEO Services | Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero content={heroContent} />
      <ImageContent content={builtAroundContent} />
      <CardSection content={seoServicesContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <ImageCardSection content={whereSearchContent} />
      <ImageCardSection content={industriesContent} />
      <CTAButton text="Get Your Free SEO Strategy" />
      <StepSection content={ourProcessContent} />
      <CTA content={ctaContent} />
      <CardSection content={whyGeekonomyContent} />
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-davis-ca" />
      <LandingPageMap location="davis" />
      <LocationList region="california" HidecurrentSlug="seo-company-davis-ca"/>
      </main>
  );
}