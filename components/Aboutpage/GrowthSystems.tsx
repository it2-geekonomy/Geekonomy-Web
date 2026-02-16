"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { GROWTH_SYSTEM_PHASES } from "@/lib/constants";
import { ProcessLeftSection } from "@/components/Aboutpage/leftsection";
import { TimelineLine } from "@/components/sections/ProcessSection/TimelineLine";
import { PhaseMarker } from "@/components/sections/ProcessSection/PhaseMarker";
import { PhaseItem } from "@/components/Aboutpage/phaseitem";

export default function GrowthSystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const n = GROWTH_SYSTEM_PHASES.length;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-[clamp(2.5rem,2.5rem+2vw,8rem)]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 w-full px-4 sm:px-6 lg:px-10 2xl:max-w-7xl 2xl:mx-auto">
          <ProcessLeftSection />

          <div className="lg:col-span-3 relative">
            <TimelineLine scrollProgress={scrollYProgress} />

            {/* Original structure — pl-20, dot sits inside each row */}
            <div className="relative pl-20 space-y-8 md:space-y-16">
              {GROWTH_SYSTEM_PHASES.map((phase, index) => (
                <div key={phase.number} className="relative">
                  <div
                    className="absolute"
                    style={{ left: "-56px", top: "0", transform: "translateX(-50%)" }}
                  >
                    <PhaseMarker
                      index={index}
                      totalPhases={n}
                      scrollProgress={scrollYProgress}
                    />
                  </div>

                  <PhaseItem
                    phase={phase}
                    index={index}
                    totalPhases={n}
                    scrollProgress={scrollYProgress}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
