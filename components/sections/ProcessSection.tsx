"use client";

import { useRef } from "react";
import { PROCESS_PHASES } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ProcessLeftSection } from "./ProcessSection/ProcessLeftSection";
import { TimelineLine } from "./ProcessSection/TimelineLine";
import { PhaseItem } from "./ProcessSection/PhaseItem";

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black pb-[clamp(2.5rem,2.5rem+2vw,8rem)]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 w-full px-4 sm:px-6 lg:px-10 2xl:max-w-7xl 2xl:mx-auto">
          <ProcessLeftSection />

          {/* Right Section - Timeline - 60% */}
          <div className="lg:col-span-3 relative">
            <TimelineLine scrollProgress={scrollProgress} />

            {/* Phases */}
            <div className="relative pl-20 space-y-8 md:space-y-16">
              {PROCESS_PHASES.map((phase, index) => {
                // Calculate which phase the scroll progress is currently in
                const currentPhaseIndex = Math.min(
                  Math.floor(scrollProgress * PROCESS_PHASES.length),
                  PROCESS_PHASES.length - 1
                );
                
                // Phase is active if it's the current phase
                const isActive = index === currentPhaseIndex;
                
                // Phase is filled if scroll progress has passed its threshold
                // Divide scroll into equal segments: 0-25%, 25-50%, 50-75%, 75-100%
                // Each phase fills when entering its segment
                const segmentSize = 1 / PROCESS_PHASES.length; // 0.25 for 4 phases
                const phaseThreshold = index * segmentSize;
                // Fill when scroll progress enters this phase's segment
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
