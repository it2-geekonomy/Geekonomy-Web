"use client";

import { useRef } from "react";
import { GROWTH_SYSTEM_PHASES } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ProcessLeftSection } from "@/components/Aboutpage/leftsection";
import { TimelineLine } from "@/components/sections/ProcessSection/TimelineLine";
import { PhaseItem } from "@/components/Aboutpage/phaseitem";

export default function GrowthSystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-[clamp(2.5rem,2.5rem+2vw,8rem)]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 w-full px-4 sm:px-6 lg:px-10 2xl:max-w-7xl 2xl:mx-auto">
          <ProcessLeftSection />

          {/* Right Section */}
          <div className="lg:col-span-3 relative">
            <TimelineLine scrollProgress={scrollProgress} />

            <div className="relative pl-20 space-y-8 md:space-y-16">
              {GROWTH_SYSTEM_PHASES.map((phase, index) => {
                const currentPhaseIndex = Math.min(
                  Math.floor(scrollProgress * GROWTH_SYSTEM_PHASES.length),
                  GROWTH_SYSTEM_PHASES.length - 1
                );

                const isActive = index === currentPhaseIndex;

                const segmentSize = 1 / GROWTH_SYSTEM_PHASES.length;
                const phaseThreshold = index * segmentSize;
                const isFilled = scrollProgress >= phaseThreshold;

                return (
                  <PhaseItem
                    key={phase.number}
                    phase={phase}
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
