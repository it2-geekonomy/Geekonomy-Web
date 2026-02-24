"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { HOW_WE_WORK_PHASES } from "@/lib/constants";

function HowWeWorkLeftSection() {
  return (
    <div className="lg:col-span-2 2xl:-translate-x-12">
      <Typography
        as="p"
        variant="base"
        className="text-[#A0A0A0] leading-relaxed max-w-lg"
      >
        We favour measured progress over rushed delivery. Quality holds longer than speed.
      </Typography>
    </div>
  );
}

export default function HowWeWorkProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Step-by-step wheel scroll
  useEffect(() => {
    const section = sectionRef.current;
    const scrollBox = scrollRef.current;
    if (!section || !scrollBox) return;

    let isScrolling = false;
    const SCROLL_DELAY = 500; // Adjust scroll delay here

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;

      const isActive =
        sectionCenter > viewportCenter - 200 &&
        sectionCenter < viewportCenter + 200;

      if (!isActive) return;

      const atTop = scrollBox.scrollTop <= 0;
      const atBottom =
        scrollBox.scrollTop + scrollBox.clientHeight >= scrollBox.scrollHeight - 1;

      if (e.deltaY > 0 && !atBottom) {
        e.preventDefault();
        isScrolling = true;
        scrollBox.scrollBy({ top: 320, behavior: "smooth" });
        setTimeout(() => { isScrolling = false; }, SCROLL_DELAY);
        return;
      }

      if (e.deltaY < 0 && !atTop) {
        e.preventDefault();
        isScrolling = true;
        scrollBox.scrollBy({ top: -320, behavior: "smooth" });
        setTimeout(() => { isScrolling = false; }, SCROLL_DELAY);
        return;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-[clamp(2.5rem,2.5rem+2vw,8rem)]">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 2xl:max-w-7xl 2xl:mx-auto items-start">

          {/* LEFT SIDE */}
          <HowWeWorkLeftSection />

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3 flex gap-6 items-stretch h-[400px]">

            {/* Vertical Indicator */}
            <div className="flex flex-col items-center w-3 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#6FAF4E]" />
              <div className="flex-1 w-px bg-[#6FAF4E]/40 my-[3px]" />
              <div className="w-3 h-3 rounded-full bg-[#6FAF4E]" />
            </div>

            {/* Scroll Container */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto snap-y snap-mandatory no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}
            >
              <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

              {HOW_WE_WORK_PHASES.map((phase) => (
                <div key={phase.number} className="flex flex-col justify-center h-[380px] snap-start">
                  <Typography as="p" variant="sm" className="text-white/90 mb-1">
                    {phase.number}
                  </Typography>

                  <Typography as="h3" variant="2xl" className="text-[#6FAF4E] mb-4 font-normal">
                    {phase.name}
                  </Typography>

                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-5 h-5 rounded-full border-2 border-[#6FAF4E] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#6FAF4E] stroke-4" />
                    </div>
                    <Typography as="p" variant="base" className="text-[#A0A0A0] leading-relaxed">
                      {phase.description}
                    </Typography>
                  </div>

                  {phase.bullets && (
                    <ul className="space-y-2 mb-4">
                      {phase.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[#A0A0A0] mt-1.5 shrink-0">•</span>
                          <Typography as="span" variant="base" className="text-[#A0A0A0]">{bullet}</Typography>
                        </li>
                      ))}
                    </ul>
                  )}

                  {phase.conclusion && (
                    <Typography as="p" variant="base" className="text-[#A0A0A0] leading-relaxed">
                      {phase.conclusion}
                    </Typography>
                  )}
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}