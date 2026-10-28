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
import { Measure } from "./const/Measure";
import { Results } from "./const/Results";
import { SeoStrategy } from "./const/Seostrategy";
import { LocalSeo } from "./const/Localseo";
import { SeoMatters } from "./const/Seomatters";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import { ourProcessContent } from "./const/Ourprocess";
import { Nearby } from "./const/Nearby";
import ServingNearby from "@/components/Landingpage/NearbyArea";
import { GrowingBusinesses } from "./const/Growingbusiness";
import LocationList from "@/components/landingpagelocations/Locationlist";

const PUBLISHED_DATE = "2026-10-26T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Lynchburg VA | Local SEO | Get Free Audit",
  description:
    "Looking for an SEO company in Lynchburg, Virginia? Geekonomy helps Lynchburg businesses improve rankings, attract local customers, and generate more leads.",
  alternates: {
    canonical: "/seo-company-lynchburg-virginia",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Lynchburg VA | Local SEO | Get Free Audit",
    description:
      "Looking for an SEO company in Lynchburg, Virginia? Geekonomy helps Lynchburg businesses improve rankings, attract local customers, and generate more leads.",
    url: "https://thegeekonomy.com/seo-company-lynchburg-virginia",
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
            headline: "SEO Company Lynchburg VA | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />


      <Hero content={heroContent} />
      <ImageCardSection content={Results} /> 
      <ImageCardSection content={industriesContent} />
      <CardSection content={SeoMatters} />
      <CTAButton text="Get Your Free SEO Strategy"/>
      <CardSection content={SeoServices} />
      <CardSection content={LocalSeo} /> 
      <CardSection content={SeoStrategy} /> 
      <CardSection content={whyGeekonomyContent} />
      <CardSection content={GrowingBusinesses} />
      <ServingNearby content={Nearby} />
      <CTA content={ctaContent} />
      <StepSection content={ourProcessContent} /> 
      <CardSection content={Measure} /> 
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-lynchburg-virginia" />
      <LandingPageMap location="lynchburg" />
      <LocationList region="virginia" HidecurrentSlug="seo-company-lynchburg-virginia"/>
      </main>
  );
}