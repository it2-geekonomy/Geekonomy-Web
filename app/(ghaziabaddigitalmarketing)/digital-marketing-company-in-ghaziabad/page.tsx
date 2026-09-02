import type { Metadata } from "next";
import Hero from "./components/Herosection";
import WhatWeDo from "./components/Whatwedo";
import WhyGeekonomy from "./components/Whygeekonomy";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import WhySpecialized from "./components/Whyspecialized";
import OurApproach from "./components/Ourapproach";
import LocalSearch from "./components/Localsearch";
import RightStrategy from "./components/Rightstrategy";
import SearchService from "./components/Searchservice";
import Industries from "./components/Industries";

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

      <Hero /> 
      <SearchService/>
      <WhatWeDo/>
      <WhySpecialized/>
      <LocalSearch/>
      <Industries/>
      <WhyGeekonomy/>
      <RightStrategy/>
      <CTA/>
      <OurApproach/>
      <FAQ />  
      <LandingPageForm landingPageSlug="digital-marketing-company-in-ghaziabad" />
      </main>
  );
}
