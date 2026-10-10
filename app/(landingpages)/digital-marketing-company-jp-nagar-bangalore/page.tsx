import type { Metadata } from "next";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import Hero from "@/components/Landingpage/Hero";
import { heroContent } from "./const/Herosection";
import CTAButton from "@/components/Landingpage/CTAbutton";
import CardSection from "@/components/Landingpage/Iconcardlayout";
import { whyGeekonomyContent } from "./const/Whygeekonomy";
import { DigiServices } from "./const/Digiservice";
import { WhyNeedDigi } from "./const/Whyneeddigi";
import { DigiStrategy } from "./const/Digistrategy";
import { SeoServices } from "./const/Seoservices";
import { GeoOptimize } from "./const/GEOoptimize";
import { Measure } from "./const/Measure";
import CTA from "@/components/Landingpage/CTA";
import { ctaContent } from "./const/cta";
import FAQ from "@/components/Landingpage/FAQ";
import { faqContent } from "./const/FAQ";
import { ourProcessContent } from "./const/Ourprocess";
import StepSection from "@/components/Landingpage/Stepcardlayout";
import ImageCardSection from "@/components/Landingpage/Imagecardlayout";
import { industriesContent } from "./const/Industries";

const PUBLISHED_DATE = "2026-09-30T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Digital Marketing Company in JP Nagar | 100% Growth",
  description:
    "Grow your business with a digital marketing company in JP Nagar Bangalore offering SEO, PPC, social media, AI SEO, GEO, and lead generation.",
  alternates: {
    canonical: "/digital-marketing-company-jp-nagar-bangalore",
  },
  openGraph: {
    type: "article",
    title: "Digital Marketing Company in JP Nagar | 100% Growth",
    description:
      "Grow your business with a digital marketing company in JP Nagar Bangalore offering SEO, PPC, social media, AI SEO, GEO, and lead generation.",
    url: "https://thegeekonomy.com/digital-marketing-company-jp-nagar-bangalore",
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
            headline: "Digital Marketing Company in JP Nagar | 100% Growth",
            datePublished: PUBLISHED_DATE,
          }),
        }}
        />

      <Hero content={heroContent} />
      <CardSection content={DigiServices} />
      <CardSection content={WhyNeedDigi} />
      <CTAButton text="Get Your Free Digital Marketing Strategy"/>
      <CardSection content={DigiStrategy} />
      <CardSection content={SeoServices} />
      <CTAButton text="Get Your Free Digital Marketing Strategy"/>
      <CardSection content={GeoOptimize} />
      <ImageCardSection content={industriesContent} />
      <CardSection content={whyGeekonomyContent} />
      <StepSection content={ourProcessContent} />
      <CTA content={ctaContent} />
      <CardSection content={Measure} />
      <FAQ content={faqContent} />
      <LandingPageForm landingPageSlug="digital-marketing-company-jp-nagar-bangalore" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31114.234590424596!2d77.55747526540114!3d12.889752079118638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150d7349a72b%3A0xf3d03ea1e1dd3d46!2sJ.%20P.%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1790748087257!5m2!1sen!2sin" />
      </main>
  );
}