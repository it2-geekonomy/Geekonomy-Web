"use client";

import AboutUs from "@/components/Aboutpage/AboutUs";
import FoundersNote from "@/components/Aboutpage/Foundersnote";
import OurApproach from "@/components/Aboutpage/OurApproach";
import GrowthSystems from "@/components/Aboutpage/GrowthSystems";
import Whatwedo from "@/components/Aboutpage/Whatwedo";
import ScrollRevealSection from "@/components/animations/ScrollRevealSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <ScrollRevealSection index={0}>
        <AboutUs />
      </ScrollRevealSection>
      <ScrollRevealSection index={1}>
        <FoundersNote />
      </ScrollRevealSection>
      <ScrollRevealSection index={2}>
        <OurApproach />
      </ScrollRevealSection>
      <ScrollRevealSection index={3}>
        <GrowthSystems />
      </ScrollRevealSection>
      <ScrollRevealSection index={4}>
        <Whatwedo />
      </ScrollRevealSection>
    </main>
  );
}
