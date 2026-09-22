import type { Metadata } from "next";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import WhyGeekonomy from "./components/Whygeekonomy";
import FAQ from "./components/FAQ";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";
import OurProcess from "./components/Ourprocess";
import SeoServices from "./components/Seoservices";
import Hero from "./components/Herosection";
import SeoResults from "./components/Seoresults";
import SeoMatters from "./components/Seomatters";

const PUBLISHED_DATE = "2026-09-22T08:00:00.000Z";

export const metadata: Metadata = {
  title: "SEO Company Lakewood Ranch FL | Local SEO | Get Free Audit",
  description:
    "Grow online visibility and generate local leads with Geekonomy, a results-focused SEO company Lakewood Ranch Florida businesses can trust.",
  alternates: {
    canonical: "/seo-company-lakewood-ranch-fl",
  },
  openGraph: {
    type: "article",
    title: "SEO Company Lakewood Ranch FL | Local SEO | Get Free Audit",
    description:
      "Grow online visibility and generate local leads with Geekonomy, a results-focused SEO company Lakewood Ranch Florida businesses can trust.",
    url: "https://thegeekonomy.com/seo-company-lakewood-ranch-fl",
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
            headline: "SEO Company Lakewood Ranch FL | Local SEO | Get Free Audit",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero /> 
      <SeoMatters/>
      <SeoResults/>
      <SeoServices/>
      <Industries/>
      <WhyGeekonomy/>
      <CTA/>
      <OurProcess/>
      <FAQ /> 
      <LandingPageForm landingPageSlug="seo-company-lakewood-ranch-fl" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56664.077532657175!2d-82.44221909528359!3d27.422373082525475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c339a1a62cd811%3A0xc829d2e8924438f0!2sLakewood%20Ranch%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1790068256028!5m2!1sen!2sin" />
      </main>
  );
}