"use client";

import HeroSection from "@/components/sections/HeroSection";
import DisconnectSection from "@/components/sections/DisconnectSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FirstStepSection from "@/components/sections/FirstStepSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import AlternateSlideSection from "@/components/animations/AlternateSlideSection";

export default function AlternateSlidePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero - No animation */}
      <HeroSection />

      {/* Alternating left and right slides */}
      <AlternateSlideSection direction="right">
        <DisconnectSection />
      </AlternateSlideSection>

      <AlternateSlideSection direction="left">
        <ServicesSection />
      </AlternateSlideSection>

      <AlternateSlideSection direction="right">
        <ProcessSection />
      </AlternateSlideSection>

      <AlternateSlideSection direction="left">
        <IndustriesSection />
      </AlternateSlideSection>

      <AlternateSlideSection direction="right">
        <FirstStepSection />
      </AlternateSlideSection>
    </main>
  );
}
