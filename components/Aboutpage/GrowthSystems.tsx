"use client";

import { useEffect, useRef } from "react";
import { GROWTH_SYSTEM_PHASES } from "@/lib/constants";
import { ProcessLeftSection } from "@/components/Aboutpage/leftsection";
import { Typography } from "@/components/ui/Typography";

export default function GrowthSystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollBox = scrollRef.current;
    if (!section || !scrollBox) return;

    let isScrolling = false;
    const SCROLL_DELAY = 700;

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
        scrollBox.scrollTop + scrollBox.clientHeight >=
        scrollBox.scrollHeight - 1;

      // DOWN
      if (e.deltaY > 0 && !atBottom) {
        e.preventDefault();
        isScrolling = true;

        scrollBox.scrollBy({
          top: 300,
          behavior: "smooth",
        });

        setTimeout(() => {
          isScrolling = false;
        }, SCROLL_DELAY);

        return;
      }

      // UP
      if (e.deltaY < 0 && !atTop) {
        e.preventDefault();
        isScrolling = true;

        scrollBox.scrollBy({
          top: -300,
          behavior: "smooth",
        });

        setTimeout(() => {
          isScrolling = false;
        }, SCROLL_DELAY);

        return;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-2 xl:py-8 sm:pt-12 md:pt-4 xl:pt-12"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 2xl:max-w-7xl 2xl:mx-auto items-start">

          {/* LEFT SIDE */}
          <ProcessLeftSection />

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3 flex gap-6 items-stretch h-[300px]">

            {/* Vertical Indicator */}
            <div className="flex flex-col items-center w-3 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#69AE44]" />
              <div className="flex-1 w-px bg-[#69AE44]/40 my-[3px]" />
              <div className="w-3 h-3 rounded-full bg-[#69AE44]" />
            </div>

            {/* Scroll Container */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto snap-y snap-mandatory no-scrollbar"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollBehavior: "smooth",
              }}
            >
              <style>
                {`
                  .no-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>

              {GROWTH_SYSTEM_PHASES.map((phase) => (
                <div
                  key={phase.number}
                  className="flex flex-col justify-center h-[300px] snap-start"
                >
                  <Typography
                     as="p"
                    variant="sm"
                    className="text-white leading-relaxed max-w-lg"
                  >
                    {phase.number}
                  </Typography>

                  <Typography
                    as="h3"
                    variant="2xl"
                    className="text-[#69AE44] mb-4 font-normal"
                  >
                    {phase.name}
                  </Typography>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}