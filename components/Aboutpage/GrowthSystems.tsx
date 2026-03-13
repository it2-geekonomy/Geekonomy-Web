"use client";

import { useEffect, useRef, useState } from "react";
import { GROWTH_SYSTEM_PHASES } from "@/lib/constants";
import { ProcessLeftSection } from "@/components/Aboutpage/leftsection";
import { Typography } from "@/components/ui/Typography";

const TRANSITION = "0.65s cubic-bezier(0.4, 0, 0.2, 1)";

export default function GrowthSystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  const currentPhaseRef = useRef(0);
  const gestureActiveRef = useRef(false);
  const gestureEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartYRef = useRef(0);
  const touchActiveRef = useRef(false);

  const totalPhases = GROWTH_SYSTEM_PHASES.length;
  // progress as percentage 0–100 based on current phase
  const progress = (currentPhase / (totalPhases - 1)) * 100;

  const goToPhase = (index: number) => {
    const clamped = Math.max(0, Math.min(totalPhases - 1, index));
    currentPhaseRef.current = clamped;
    setCurrentPhase(clamped);
    if (clamped > 0) setShowScrollHint(false);
  };

  // ── Entrance ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            currentPhaseRef.current = 0;
            gestureActiveRef.current = false;
            touchActiveRef.current = false;
            setCurrentPhase(0);
            setShowScrollHint(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // ── Desktop: wheel ────────────────────────────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const isActive =
        sectionCenter > viewportCenter - 200 &&
        sectionCenter < viewportCenter + 200;
      if (!isActive) return;

      const atTop = currentPhaseRef.current === 0;
      const atBottom = currentPhaseRef.current === totalPhases - 1;

      if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) {
        e.preventDefault();
      } else {
        return;
      }

      if (gestureActiveRef.current) {
        if (gestureEndTimerRef.current) clearTimeout(gestureEndTimerRef.current);
        gestureEndTimerRef.current = setTimeout(() => { gestureActiveRef.current = false; }, 150);
        return;
      }

      gestureActiveRef.current = true;
      if (e.deltaY > 0 && !atBottom) goToPhase(currentPhaseRef.current + 1);
      else if (e.deltaY < 0 && !atTop) goToPhase(currentPhaseRef.current - 1);

      if (gestureEndTimerRef.current) clearTimeout(gestureEndTimerRef.current);
      gestureEndTimerRef.current = setTimeout(() => { gestureActiveRef.current = false; }, 150);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (gestureEndTimerRef.current) clearTimeout(gestureEndTimerRef.current);
    };
  }, []);

  // ── Mobile: touch ─────────────────────────────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
      touchActiveRef.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const isActive =
        sectionCenter > viewportCenter - 200 &&
        sectionCenter < viewportCenter + 200;
      if (!isActive) return;

      const atTop = currentPhaseRef.current === 0;
      const atBottom = currentPhaseRef.current === totalPhases - 1;
      const deltaY = touchStartYRef.current - e.touches[0].clientY;
      const isSwipeDown = deltaY > 0;
      const isSwipeUp = deltaY < 0;

      if ((isSwipeDown && !atBottom) || (isSwipeUp && !atTop)) {
        e.preventDefault();
      } else {
        return;
      }

      if (touchActiveRef.current) return;
      if (Math.abs(deltaY) < 30) return;

      touchActiveRef.current = true;
      if (isSwipeDown && !atBottom) goToPhase(currentPhaseRef.current + 1);
      else if (isSwipeUp && !atTop) goToPhase(currentPhaseRef.current - 1);
    };

    section.addEventListener("touchstart", handleTouchStart, { passive: true });
    section.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      section.removeEventListener("touchstart", handleTouchStart);
      section.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-10 lg:py-20 mx-4 sm:mx-6 lg:mx-12 xl:mx-[clamp(0.5rem,0.5rem+8vw,10rem)] 2xl:mx-[clamp(1rem,1rem+12vw,22rem)]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* LEFT SIDE */}
          <ProcessLeftSection />

          {/* RIGHT SIDE */}
          <div
            className="lg:col-span-3 flex gap-6 items-stretch h-[300px] relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >

            {/* Scroll hint */}
            {showScrollHint && (
              <div className="absolute top-4 right-0 z-30 animate-fade-in-out">
                <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm border border-[#69AE44]/30 px-4 py-2 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#69AE44] animate-bounce-vertical">
                    <path d="M8 2v12M8 12l4-4M8 12l-4-4" stroke="#69AE44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <Typography as="span" variant="body-sm" className="text-[#69AE44]">Scroll to explore</Typography>
                </div>
              </div>
            )}

            {/* Progress line + original dot behavior */}
            <div className="flex flex-col items-center w-1 shrink-0 relative">
              <div className="flex-1 w-1 relative">
                {/* Track */}
                <div className="absolute inset-0 bg-[#69AE44]/20 rounded-full" />
                {/* Fill — synced to same transition as text */}
                <div
                  className="absolute top-0 left-0 w-full bg-[#69AE44] rounded-full"
                  style={{
                    height: `${progress}%`,
                    transition: `height ${TRANSITION}`,
                  }}
                />
                {/* Dots — exact same logic as original */}
                {GROWTH_SYSTEM_PHASES.map((phase, index) => {
                  const isFirst = index === 0;
                  const isLast = index === GROWTH_SYSTEM_PHASES.length - 1;
                  const dotPosition = (index / (GROWTH_SYSTEM_PHASES.length - 1)) * 100;

                  let targetPosition: number;
                  if (isFirst) {
                    targetPosition = 0;
                  } else if (isLast) {
                    targetPosition = 100;
                  } else {
                    targetPosition = progress >= dotPosition ? dotPosition : progress;
                  }

                  return (
                    <div
                      key={phase.number}
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                      style={{
                        top: `${targetPosition}%`,
                        transition: `top ${TRANSITION}`,
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#69AE44]" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Phase content — GPU transform, same transition */}
            <div className="flex-1 overflow-hidden relative">
              <div
                style={{
                  transform: `translateY(-${currentPhase * 300}px)`,
                  transition: `transform ${TRANSITION}`,
                  willChange: "transform",
                }}
              >
                {GROWTH_SYSTEM_PHASES.map((phase, index) => {
                  const isActive = index === currentPhase;
                  return (
                    <div
                      key={phase.number}
                      className="flex flex-col justify-center h-[300px]"
                      style={{
                        opacity: isActive ? 1 : 0.15,
                        transition: `opacity ${TRANSITION}`,
                      }}
                    >
                      <Typography
                        as="p"
                        variant="body-xl"
                        className="text-white leading-relaxed max-w-lg"
                      >
                        {phase.number}
                      </Typography>

                      <Typography
                        as="h3"
                        variant="body-xl"
                        className="text-[#69AE44] mb-4 font-normal"
                      >
                        {phase.name}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-out {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes bounce-vertical {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(4px);
          }
        }
        .animate-fade-in-out {
          animation: fade-in-out 2s ease-in-out infinite;
        }
        .animate-bounce-vertical {
          animation: bounce-vertical 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}