"use client";

import HeroSection from "@/components/sections/HeroSection";
import DisconnectSection from "@/components/sections/DisconnectSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FirstStepSection from "@/components/sections/FirstStepSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ScrollRevealSection from "@/components/animations/ScrollRevealSection";
import BrickWall from "@/components/sections/BrickWall";

export default function Home() {
  return (
    <>
    {/* Fixed background brick wall */}
    <BrickWall />
    <main className="relative z-10 min-h-screen">
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
    </>
  );
}