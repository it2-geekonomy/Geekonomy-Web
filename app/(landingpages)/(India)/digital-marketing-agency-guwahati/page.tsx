import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import ImageContent from "@/components/Landingpage/Imagecontent";
import ServingNearby from "@/components/Landingpage/NearbyArea";
import FAQ from "@/components/Landingpage/FAQ";
import CTA from "@/components/Landingpage/CTA";
import CTAButton from "@/components/Landingpage/CTAbutton";
import LocationList from "@/components/landingpagelocations/Locationlist";
import { heroContent } from "./const/Herosection";
import { businessStrategyContent } from "./const/Businessstrategy";
import { serviceAreasContent } from "./const/Acrossguwahati";
import { whatWeDoContent } from "./const/Whatwedo";
import { rightStrategyContent } from "./const/Rightstrategy";
import { searchOpportunityContent } from "./const/Searchopportunity";
import { industriesContent } from "./const/Industries";
import { ctaContent } from "./const/cta";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { faqContent } from "./const/FAQ";

const PUBLISHED_DATE = "2026-09-02T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Guwahati | Get Free Plan",
  description:
    "Grow your business with a results-driven digital marketing agency in Guwahati offering SEO, PPC, social media and lead generation services.",
  alternates: {
    canonical: "/digital-marketing-agency-guwahati",
  },
  openGraph: {
    type: "article",
    title: "Digital Marketing Agency in Guwahati | Get Free Plan",
    description:
      "Grow your business with a results-driven digital marketing agency in Guwahati offering SEO, PPC, social media and lead generation services.",
    url: "https://thegeekonomy.com/digital-marketing-agency-guwahati",
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
            headline: "Digital Marketing Agency in Guwahati | Get Free Plan",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero content={heroContent} />
      <ImageContent content={businessStrategyContent} />
      <ServingNearby content={serviceAreasContent} />
      <CTAButton text="Get Your Free Digital Marketing Strategy" />
      <ImageCardSection content={whatWeDoContent} />
      <CardSection content={rightStrategyContent} />
      <CardSection content={searchOpportunityContent} />
      <CardSection content={industriesContent} />
      <CTA content={ctaContent} />
      <CardSection content={whyGeekonomyContent} />
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="digital-marketing-agency-guwahati" />
      <LandingPageMap location="guwahati" />
      <LocationList region="india" HidecurrentSlug="digital-marketing-agency-guwahati"/>
      </main>
  );
}
