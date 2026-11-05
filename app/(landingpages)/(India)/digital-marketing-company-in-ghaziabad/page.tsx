import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/Landingpage/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import ImageContent from "@/components/Landingpage/Imagecontent";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import TextSection from "@/components/Landingpage/Textsection";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import CTA from "@/components/Landingpage/CTA";
import CTAButton from "@/components/Landingpage/CTAbutton";
import FAQ from "@/components/Landingpage/FAQ";
import LocationList from "@/components/landingpagelocations/Locationlist";
import { heroContent } from "./const/Herosection";
import { searchServiceContent } from "./const/Searchservice";
import { whatWeDoContent } from "./const/Whatwedo";
import { specializedContent } from "./const/Whyspecialized";
import { localSearchContent } from "./const/Localsearch";
import { industriesContent } from "./const/Industries";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { rightStrategyContent } from "./const/Rightstrategy";
import { ctaContent } from "./const/cta";
import { ourApproachContent } from "./const/Ourapproach";
import { faqContent } from "./const/FAQ";

const PUBLISHED_DATE = "2026-09-01T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Digital Marketing Company in Ghaziabad | Get Free Plan",
  description:
    "Choose a trusted digital marketing company in Ghaziabad to grow online visibility, generate qualified leads, and turn more searches into customers.",
  alternates: {
    canonical: "/digital-marketing-company-in-ghaziabad",
  },
  openGraph: {
    type: "article",
    title: "Digital Marketing Company in Ghaziabad | Get Free Plan",
    description:
      "Choose a trusted digital marketing company in Ghaziabad to grow online visibility, generate qualified leads, and turn more searches into customers.",
    url: "https://thegeekonomy.com/digital-marketing-company-in-ghaziabad",
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
            headline: "Digital Marketing Company in Ghaziabad | Get Free Plan",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero content={heroContent} />
      <ImageContent content={searchServiceContent} />
      <ImageCardSection content={whatWeDoContent} />
      <CTAButton text="Get Your Free Digital Marketing Strategy" />
      <CardSection content={specializedContent} />
      <TextSection content={localSearchContent} />
      <CTAButton text="Get Your Free Digital Marketing Strategy" />
      <CardSection content={industriesContent} />
      <CardSection content={whyGeekonomyContent} />
      <CardSection content={rightStrategyContent} />
      <CTA content={ctaContent} />
      <StepSection content={ourApproachContent} />
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="digital-marketing-company-in-ghaziabad" />
      <LandingPageMap location="ghaziabad" />
      <LocationList region="india" HidecurrentSlug="digital-marketing-company-in-ghaziabad"/>
      </main>
  );
}
