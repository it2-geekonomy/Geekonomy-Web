import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import CTA from "@/components/Landingpage/CTA";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import FAQ from "@/components/Landingpage/FAQ";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import ImageContent from "@/components/Landingpage/Imagecontent";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import CTAButton from "@/components/Landingpage/CTAbutton";
import { heroContent } from "./const/Herosection";
import { standOutContent } from "./const/Brandstandout";
import { brandServicesContent } from "./const/brandservice";
import { brandStrategyContent } from "./const/Strategybeforedesign";
import { brandProcessContent } from "./const/Brandprocess";
import { industriesContent } from "./const/Industries";
import { strongBrandContent } from "./const/Strongbrand";
import { brandIdentityContent } from "./const/Brandidentity";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { whenHireContent } from "./const/Whenhire";
import { faqContent } from "./const/FAQ";
import { ctaContent } from "./const/cta";

const PUBLISHED_DATE = "2026-09-03T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Branding Company in Bangalore | Free Branding Strategy",
  description:
    "Build a stronger brand with a branding company in Bangalore offering strategy, identity, positioning, and creative branding services for growing businesses.",
  alternates: {
    canonical: "/branding-company-in-bangalore",
  },
  openGraph: {
    type: "article",
    title: "Branding Company in Bangalore | Free Branding Strategy",
    description:
      "Build a stronger brand with a branding company in Bangalore offering strategy, identity, positioning, and creative branding services for growing businesses.",
    url: "https://thegeekonomy.com/branding-company-in-bangalore",
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
            headline: "Branding Company in Bangalore | Free Branding Strategy",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero content={heroContent} />
      <ImageContent content={standOutContent} />
      <CardSection content={brandServicesContent} />
      <CTAButton text="Start Building Your Brand" />
      <CardSection content={brandStrategyContent} />
      <StepSection content={brandProcessContent} />
      <CTAButton text="Start Building Your Brand" />
      <CardSection content={industriesContent} />
      <CardSection content={strongBrandContent} />
      <CardSection content={brandIdentityContent} />
      <ImageCardSection content={whyGeekonomyContent} />
      <CTA content={ctaContent} />
      <CardSection content={whenHireContent} />
      <FAQ content={faqContent} />
      <LandingPageForm
        landingPageSlug="branding-company-in-bangalore"
        headline="Contact Our Branding Agency Today and Start Generating More Qualified Leads."
      />
      <LandingPageMap location="bangalore" />
      </main>
  );
}
