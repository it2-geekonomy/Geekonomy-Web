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
    </main>
  );
}