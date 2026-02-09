"use client";

import HeroSection from "@/components/sections/HeroSection";
import DisconnectSection from "@/components/sections/DisconnectSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FirstStepSection from "@/components/sections/FirstStepSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import MagneticRevealSection from "@/components/animations/MagneticRevealSection";

export default function MagneticRevealPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Hero - No animation */}
      <HeroSection />

      {/* Magnetic reveal with 3D depth - premium award-winning effect */}
      <MagneticRevealSection index={0}>
        <DisconnectSection />
      </MagneticRevealSection>

      <MagneticRevealSection index={1}>
        <ServicesSection />
      </MagneticRevealSection>

      <MagneticRevealSection index={2}>
        <ProcessSection />
      </MagneticRevealSection>

      <MagneticRevealSection index={3}>
        <IndustriesSection />
      </MagneticRevealSection>

      <MagneticRevealSection index={4}>
        <FirstStepSection />
      </MagneticRevealSection>
    </main>
  );
}
