"use client";
import { useEffect, useRef } from "react";
import { PROCESS_PHASES } from "@/lib/constants";
import { ProcessLeftSection } from "./ProcessSection/ProcessLeftSection";
import { Typography } from "@/components/ui/Typography";

export default function ProcessSection() {
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
        top: 280, // one full phase height
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
        top: -280,
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
      className="relative w-full bg-black py-18 mb-14"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 2xl:max-w-7xl 2xl:mx-auto items-start">

          {/* LEFT SIDE */}
          <ProcessLeftSection />

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3 flex gap-6 items-stretch h-[280px]">

            {/* Vertical Dots */}
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

              {PROCESS_PHASES.map((phase) => (
                <div
                  key={phase.number}
                  className="flex flex-col justify-center h-[280px] snap-start"
                >
                  <Typography
                    as="p"
                    variant="sm"
                    className="text-white/90 mb-1"
                  >
                    PHASE {phase.number}
                  </Typography>

                  <Typography
                    as="h3"
                    variant="2xl"
                    className="text-[#69AE44] mb-4 font-normal"
                  >
                    {phase.name}
                  </Typography>

                  <div className="flex items-center gap-2 mb-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle
                        cx="8"
                        cy="8"
                        r="7"
                        stroke="#69AE44"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M5 8l2 2 4-4"
                        stroke="#69AE44"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-white/50 text-xs uppercase tracking-widest">
                      KEY QUESTION
                    </span>
                  </div>

                  <Typography
                    as="p"
                    variant="base"
                    className="text-white/40 leading-relaxed max-w-lg"
                  >
                    {phase.keyQuestion}
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