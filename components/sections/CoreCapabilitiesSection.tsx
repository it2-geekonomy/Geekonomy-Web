"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { CORE_CAPABILITIES } from "@/lib/constants";
import { CapabilitiesLeftSection } from "./CoreCapabilitiesSection/CapabilitiesLeftSection";
import { CapabilitiesTimeline } from "./CoreCapabilitiesSection/CapabilitiesTimeline";
import { CapabilityMarker } from "./CoreCapabilitiesSection/CapabilityMarker";
import { CapabilityItem } from "./CoreCapabilitiesSection/CapabilityItem";

export default function CoreCapabilitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const n = CORE_CAPABILITIES.length;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-[clamp(2.5rem,2.5rem+2vw,8rem)]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 w-full 2xl:max-w-7xl 2xl:mx-auto">
          <CapabilitiesLeftSection />

          <div className="lg:col-span-3 relative">
            <CapabilitiesTimeline scrollProgress={scrollYProgress} />

            <div className="relative pl-20 space-y-8 md:space-y-16">
              {CORE_CAPABILITIES.map((capability, index) => (
                <div key={capability.number} className="relative">
                  <div
                    className="absolute"
                    style={{ left: "-56px", top: "0", transform: "translateX(-50%)" }}
                  >
                    <CapabilityMarker
                      index={index}
                      totalCapabilities={n}
                      scrollProgress={scrollYProgress}
                    />
                  </div>

                  <CapabilityItem
                    capability={capability}
                    index={index}
                    totalCapabilities={n}
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
