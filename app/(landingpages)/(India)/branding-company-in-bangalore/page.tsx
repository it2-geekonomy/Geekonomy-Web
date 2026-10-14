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
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";

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
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248815.57510945472!2d77.45716262182738!3d12.988259658071335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1790749301576!5m2!1sen!2sin" />
      </main>
  );
}
