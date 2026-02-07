"use client";

import { useRef } from "react";
import { CORE_CAPABILITIES } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { CapabilitiesLeftSection } from "./CoreCapabilitiesSection/CapabilitiesLeftSection";
import { CapabilitiesTimeline } from "./CoreCapabilitiesSection/CapabilitiesTimeline";
import { CapabilityItem } from "./CoreCapabilitiesSection/CapabilityItem";

export default function CoreCapabilitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-[clamp(2.5rem,2.5rem+2vw,8rem)]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 w-full 2xl:max-w-7xl 2xl:mx-auto">
          <CapabilitiesLeftSection />

          {/* Right Section - Timeline - 60% */}
          <div className="lg:col-span-3 relative">
            <CapabilitiesTimeline scrollProgress={scrollProgress} />

            {/* Capabilities */}
            <div className="relative pl-20 space-y-8 md:space-y-16">
              {CORE_CAPABILITIES.map((capability, index) => {
                // Calculate which capability the scroll progress is currently in
                const currentCapabilityIndex = Math.min(
                  Math.floor(scrollProgress * CORE_CAPABILITIES.length),
                  CORE_CAPABILITIES.length - 1
                );
                
                // Capability is active if it's the current capability
                const isActive = index === currentCapabilityIndex;
                
                // Capability is filled if scroll progress has passed its threshold
                // Divide scroll into equal segments: 0-25%, 25-50%, 50-75%, 75-100%
                // Each capability fills when entering its segment
                const segmentSize = 1 / CORE_CAPABILITIES.length; // 0.25 for 4 capabilities
                const capabilityThreshold = index * segmentSize;
                // Fill when scroll progress enters this capability's segment
                const isFilled = scrollProgress >= capabilityThreshold;

                return (
                  <CapabilityItem
                    key={capability.number}
                    capability={capability}
                    index={index}
                    isActive={isActive}
                    isFilled={isFilled}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
