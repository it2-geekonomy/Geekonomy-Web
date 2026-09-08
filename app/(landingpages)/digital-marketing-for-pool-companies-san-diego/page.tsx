import type { Metadata } from "next";
import Hero from "./components/Herosection";
import Strategywins from "./components/Strategywins";
import Serviceares from "./components/Serviceareas";
import Services from "./components/Services";
import Businesstypes from "./components/Businesstypes";
import Highintent from "./components/Highintent";
import Ourapproach from "./components/Ourapproach";
import Whyus from "./components/Whygeekonomy";
import Measurablegrowth from "./components/Measurablegrowth";
import FAQ from "./components/FAQ";
import Comparision from "./components/Comparision";
import DataCompliance from "./components/Datacompliance";
import TargetCTA from "./components/TargetingCTA";
import LandingPageForm from "@/components/forms/LandingPageForm";
import { LandingPageMap } from "@/components/landingpagemap/Landingpagemap";

const PUBLISHED_DATE = "2026-08-20T08:00:00.000Z";

export const metadata: Metadata = {
  title: "Digital Marketing for Pool Companies in San Diego",
  description:
    "Grow your pool business with a digital marketing agency in San Diego. Get more local visibility, qualified leads, and pool customers.",
  alternates: {
    canonical: "/digital-marketing-for-pool-companies-san-diego",
  },
  openGraph: {
    type: "article",
    title: "Digital Marketing for Pool Companies in San Diego",
    description:
      "Grow your pool business with a digital marketing agency in San Diego. Get more local visibility, qualified leads, and pool customers.",
    url: "https://YOUR-DOMAIN.com/digital-marketing-for-pool-companies-san-diego",
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
            headline: "Digital Marketing for Pool Companies in San Diego",
            datePublished: PUBLISHED_DATE,
          }),
        }}
      />

      <Hero />
      <Strategywins />
      <Serviceares />
      <Services />
      <Businesstypes />
      <Highintent />
      <Ourapproach />
      <TargetCTA />
      <Whyus />
      <Comparision />
      <Measurablegrowth />
      <DataCompliance />
      <FAQ />
      <LandingPageForm landingPageSlug="digital-marketing-for-pool-companies-san-diego" />
      <LandingPageMap mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429155.64976173657!2d-117.43739978192153!3d32.8246330485614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1788843602160!5m2!1sen!2sin" />
    </main>
  );
}