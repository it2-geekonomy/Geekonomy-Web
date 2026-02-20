"use client";

import HeroSection from "@/components/sections/HeroSection";
import DisconnectSection from "@/components/sections/DisconnectSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FirstStepSection from "@/components/sections/FirstStepSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ScrollRevealSection from "@/components/animations/ScrollRevealSection";

export default function Home() {
  return (
    
    <main className="min-h-screen bg-black">
      <HeroSection />
      <ScrollRevealSection index={0}>
        <DisconnectSection />
      </ScrollRevealSection>
      <ScrollRevealSection index={1}>
        <ServicesSection />
      </ScrollRevealSection>
      <ProcessSection />
      <IndustriesSection />
      <ScrollRevealSection index={4}>
        <FirstStepSection />
      </ScrollRevealSection>
    </main>
  );
}