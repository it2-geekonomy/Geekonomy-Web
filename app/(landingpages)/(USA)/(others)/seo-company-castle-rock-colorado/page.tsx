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
import { WhyNeed } from "./const/Whyneed";
import { LocalSeo } from "./const/Localseo";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import { ourProcessContent } from "./const/Ourprocess";
import { GrowingBusinesses } from "./const/Growingbusiness";

const PUBLISHED_DATE = "2026-10-27T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Castle Rock CO | Local SEO | Get Free Audit",
  description:
    "Looking for an SEO company in Castle Rock, Colorado? Geekonomy helps local businesses improve Google visibility, and generate leads.",
  alternates: {
    canonical: "/seo-company-castle-rock-colorado",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Castle Rock CO | Local SEO | Get Free Audit",
    description:
      "Looking for an SEO company in Castle Rock, Colorado? Geekonomy helps local businesses improve Google visibility, and generate leads.",
    url: "https://thegeekonomy.com/seo-company-castle-rock-colorado",
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
            headline: "SEO Company Castle Rock CO | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />

      <Hero content={heroContent} />
      <ImageCardSection content={WhyNeed} /> 
      <CardSection content={SeoServices} />
      <CTAButton text="Get Your Free SEO Strategy"/>
      <CardSection content={LocalSeo} /> 
      <ImageCardSection content={industriesContent} />
      <CardSection content={whyGeekonomyContent} />
      <CTAButton text="Get Your Free SEO Strategy"/>
      <CardSection content={GrowingBusinesses} />
      <StepSection content={ourProcessContent} /> 
      <CTA content={ctaContent} />
      <CardSection content={Difference} /> 
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="seo-company-castle-rock-colorado" />
      <LandingPageMap location="colorado" />
      </main>
  );
}