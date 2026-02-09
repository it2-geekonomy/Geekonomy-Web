"use client";

import HeroSection from "@/components/sections/HeroSection";
import DisconnectSection from "@/components/sections/DisconnectSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FirstStepSection from "@/components/sections/FirstStepSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import Section3DSheet from "@/components/animations/Section3DSheet";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <HeroSection />
      <Section3DSheet direction="bottom">
        <DisconnectSection />
      </Section3DSheet>
      <Section3DSheet direction="top">
        <ServicesSection />
      </Section3DSheet>
      <Section3DSheet direction="bottom">
        <ProcessSection />
      </Section3DSheet>
      <Section3DSheet direction="top">
        <IndustriesSection />
      </Section3DSheet>
      <Section3DSheet direction="bottom">
        <FirstStepSection />
      </Section3DSheet>
    </main>
  );
}

