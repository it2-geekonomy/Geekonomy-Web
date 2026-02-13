import HeroSection from "@/components/sections/HeroSection";
import DisconnectSection from "@/components/sections/DisconnectSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FirstStepSection from "@/components/sections/FirstStepSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ScrollRevealSection from "@/components/animations/ScrollRevealSection";
import { getStaticSEOData } from "@/seoData";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const data = getStaticSEOData("home");

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: data.canonical,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: data.url,
      siteName: "Geekonomy",
      images: data.image ? [{ url: data.image }] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: data.image ? [data.image] : [],
      creator: data.twitterHandle,
    },
  };
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <HeroSection />
      <ScrollRevealSection index={0}>
        <DisconnectSection />
      </ScrollRevealSection>
      <ScrollRevealSection index={1}>
        <ServicesSection />
      </ScrollRevealSection>
      <ScrollRevealSection index={2}>
        <ProcessSection />
      </ScrollRevealSection>
        <IndustriesSection />
      <ScrollRevealSection index={4}>
        <FirstStepSection />
      </ScrollRevealSection>
    </main>
  );
}

