"use client";

import { useEffect, useRef } from "react";
import { PROCESS_PHASES } from "@/lib/constants";
import { ProcessLeftSection } from "./ProcessSection/ProcessLeftSection";
import { Typography } from "@/components/ui/Typography";

// vh of scroll per phase — increase to slow down, decrease to speed up
const SCROLL_PER_PHASE_VH = 50;

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stripRef   = useRef<HTMLDivElement>(null);
  const windowRef  = useRef<HTMLDivElement>(null);

  const n     = PROCESS_PHASES.length; // 4
  const steps = n - 1;                 // 3

  useEffect(() => {
    const section = sectionRef.current;
    const strip   = stripRef.current;
    const win     = windowRef.current;
    if (!section || !strip || !win) return;

    let raf: number | null = null;

    function render() {
      const rect     = section!.getBoundingClientRect();
      const scrolled = -rect.top;                              // px scrolled past section top
      const total    = section!.offsetHeight - window.innerHeight; // total scroll budget in px
      if (total <= 0) return;

      const p      = Math.max(0, Math.min(1, scrolled / total));
      const cardH  = win!.offsetHeight;
      const slideY = p * steps * cardH;

      strip!.style.transform = `translateY(-${slideY}px)`;
    }

    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => { render(); raf = null; });
    }

    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", render);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", render);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [steps]);

  return (
    
    <section
      ref={sectionRef}
      style={{ height: `calc(100vh + ${steps * SCROLL_PER_PHASE_VH}vh)` }}
      className="relative w-full bg-black"
    >
      {/* This div sticks — scrolls with page until section ends */}
      <div
        className="sticky top-0 w-full bg-black"
        style={{ height: "100vh" }}
      >
        {/* Center content vertically */}
        <div className="h-full flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-10">
            <div
              className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16
                         w-full px-4 sm:px-6 lg:px-10
                         2xl:max-w-7xl 2xl:mx-auto items-center"
            >
              {/* Left copy */}
              <ProcessLeftSection />

              {/* Right: 2 fixed dots + sliding content */}
              <div className="lg:col-span-3 flex gap-6 items-stretch h-[280px]">

                {/* Two dots + line — fixed, never move */}
                <div className="flex flex-col items-center w-3 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#69AE44] flex-shrink-0" />
                  <div className="flex-1 w-px bg-[#69AE44]/40 my-[3px]" />
                  <div className="w-3 h-3 rounded-full bg-[#69AE44] flex-shrink-0" />
                </div>

                {/* Clipping window — content visible only between the two dots */}
                <div ref={windowRef} className="flex-1 overflow-hidden relative">

                  {/* Top fade mask */}
                  <div
                    className="absolute top-0 left-0 right-0 h-10 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, #000 0%, transparent 100%)" }}
                  />
                  {/* Bottom fade mask */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-10 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to top, #000 0%, transparent 100%)" }}
                  />

                  {/* Sliding strip — driven by scroll listener, no Framer Motion */}
                  <div
                    ref={stripRef}
                    className="absolute top-0 left-0 right-0"
                    style={{ height: `${n * 100}%` }}
                  >
                    {PROCESS_PHASES.map((phase) => (
                      <div
                        key={phase.number}
                        className="flex flex-col justify-center"
                        style={{ height: `${100 / n}%` }}
                      >
                        <Typography as="p" variant="sm" className="text-white/90 mb-1">
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
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <circle cx="8" cy="8" r="7" stroke="#69AE44" strokeWidth="1.5" />
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
          </div>
        </div>
      </div>
    </section>
  );
}