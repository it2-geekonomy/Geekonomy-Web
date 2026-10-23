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
import { SeoStrategy } from "./const/Seostrategy";
import { ctaContent } from "./const/cta";
import { faqContent } from "./const/FAQ";
import { ourProcessContent } from "./const/Ourprocess";
import { industriesContent } from "./const/Industries";
import { Difference } from "./const/Difference";
import { SeoLeads } from "./const/Seoleads";
import { LocalSeo } from "./const/Localseo";
import LocationList from "@/components/landingpagelocations/Locationlist";
import ServingNearby from "@/components/Landingpage/NearbyArea";
import { Nearby } from "./const/Nearby";

const PUBLISHED_DATE = "2026-10-22T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Camarillo SEO Company CA | Local SEO | Get Free Audit",
  description:
    "Looking for a Camarillo SEO Company California? Geekonomy helps local businesses improve Google rankings, attract traffic, and generate leads.",
  alternates: {
    canonical: "/seo-company-camarillo-ca",
  },
  openGraph: {
    type: "article",
    title: "Camarillo SEO Company CA | Local SEO | Get Free Audit",
    description:
      "Looking for a Camarillo SEO Company California? Geekonomy helps local businesses improve Google rankings, attract traffic, and generate leads.",
    url: "https://thegeekonomy.com/seo-company-camarillo-ca",
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
            headline: "Camarillo SEO Company CA | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />

      <Hero content={heroContent} />
      <CardSection content={SeoServices} />
      <ImageCardSection content={LocalSeo} />
      <CardSection content={SeoStrategy} />
      <CTAButton text="Get Your Free SEO Strategy"/>
      <ImageCardSection content={industriesContent} />
      <CardSection content={whyGeekonomyContent} />
      <CardSection content={SeoLeads} /> 
      <ServingNearby content={Nearby} /> 
      <StepSection content={ourProcessContent} /> 
      <CTA content={ctaContent} />
      <CardSection content={Difference} /> 
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-camarillo-ca" />
      <LandingPageMap location="camarillo" />
      <LocationList region="california" HidecurrentSlug="seo-company-camarillo-ca"/>
      </main>
  );
}