"use client";

import { useRef } from "react";
import { PROCESS_PHASES } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ProcessLeftSection } from "./ProcessSection/ProcessLeftSection";
import { TimelineLine } from "./ProcessSection/TimelineLine";
import { PhaseItem } from "./ProcessSection/PhaseItem";

const ACTIVE_THRESHOLD = 0.2;

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-20 lg:py-32"
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
                const phaseProgress = (index + 1) / PROCESS_PHASES.length;
                const isActive =
                  scrollProgress >= phaseProgress - ACTIVE_THRESHOLD;

                return (
                  <PhaseItem
                    key={phase.number}
                    phase={phase}
                    index={index}
                    isActive={isActive}
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
