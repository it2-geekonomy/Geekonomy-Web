import type { Metadata } from "next";
import Hero from "./components/Herosection";
import WhyGeekonomy from "./components/Whygeekonomy";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import Industries from "./components/Industries";
import WhenHire from "./components/Whenhire";
import BrandIdentity from "./components/Brandidentity";
import StrongBrand from "./components/Strongbrand";
import BrandProcess from "./components/Brandprocess";
import StandOut from "./components/Brandstandsout";
import BrandServices from "./components/brandservice";
import BrandStrategy from "./components/Strategybeforedesign";

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

      <Hero /> 
      <StandOut/> 
      <BrandServices/> 
      <BrandStrategy/>  
      <BrandProcess/>  
      <Industries/>
      <StrongBrand/> 
      <BrandIdentity/> 
      <WhyGeekonomy/>
      <CTA/>
      <WhenHire/>
      <FAQ />  
      <LandingPageForm 
      landingPageSlug="branding-company-in-bangalore" 
      headline="Contact Our Branding Agency Today and Start Generating More Qualified Leads."/>
      </main>
  );
}
