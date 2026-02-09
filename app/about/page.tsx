"use client";

import AboutUs from "@/components/Aboutpage/AboutUs";
import FoundersNote from "@/components/Aboutpage/Foundersnote";
import OurApproach from "@/components/Aboutpage/OurApproach";
import GrowthSystems from "@/components/Aboutpage/GrowthSystems";
import Whatwedo from "@/components/Aboutpage/Whatwedo";
import MagneticRevealSection from "@/components/animations/MagneticRevealSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <AboutUs />
      <MagneticRevealSection index={0}>
        <FoundersNote />
      </MagneticRevealSection>
      <MagneticRevealSection index={1}>
        <OurApproach />
      </MagneticRevealSection>
      <MagneticRevealSection index={2}>
        <GrowthSystems />
      </MagneticRevealSection>
      <MagneticRevealSection index={3}>
        <Whatwedo />
      </MagneticRevealSection>
    </main>
  );
}
