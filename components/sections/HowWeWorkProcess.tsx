"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { HOW_WE_WORK_PHASES } from "@/lib/constants";

const TRANSITION = "0.65s cubic-bezier(0.4, 0, 0.2, 1)";

function HowWeWorkLeftSection() {
  return (
    <div className="lg:col-span-2 2xl:-translate-x-12">
      <Typography
        as="p"
        variant="body-xl"
        className="text-white leading-relaxed max-w-lg"
      >
        We favour measured progress over rushed delivery. Quality holds longer than speed.
      </Typography>
    </div>
  );
}

export default function HowWeWorkProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [maxHeight, setMaxHeight] = useState(380);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  const currentPhaseRef = useRef(0);
  const gestureActiveRef = useRef(false);
  const gestureEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartYRef = useRef(0);
  const touchActiveRef = useRef(false);

  const totalPhases = HOW_WE_WORK_PHASES.length;
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

  // Calculate maximum height from all items
  useEffect(() => {
    const calculateMaxHeight = () => {
      if (itemRefs.current.length === 0) return;
      
      let max = 0;
      itemRefs.current.forEach((item) => {
        if (item) {
          // Create a temporary clone to measure natural height
          const clone = item.cloneNode(true) as HTMLElement;
          clone.style.position = 'absolute';
          clone.style.visibility = 'hidden';
          clone.style.height = 'auto';
          clone.style.width = item.offsetWidth + 'px';
          document.body.appendChild(clone);
          
          const height = clone.scrollHeight;
          document.body.removeChild(clone);
          
          if (height > max) {
            max = height;
          }
        }
      });
      
      if (max > 0) {
        // Add some padding to ensure content fits comfortably
        setMaxHeight(max + 20);
      }
    };

    // Calculate after items are rendered
    const timeoutId = setTimeout(calculateMaxHeight, 100);
    
    // Also recalculate on window resize
    window.addEventListener('resize', calculateMaxHeight);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', calculateMaxHeight);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-[clamp(2.5rem,2.5rem+2vw,8rem)]">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mx-4 sm:mx-6 lg:mx-12 xl:mx-[clamp(0.5rem,0.5rem+8vw,10rem)] 2xl:mx-[clamp(1rem,1rem+12vw,22rem)] items-start">

          {/* LEFT SIDE */}
          <HowWeWorkLeftSection />

          <div
            className="lg:col-span-3 flex gap-6 lg:gap-12 items-stretch relative"
            style={{
              height: `${maxHeight}px`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {/* Scroll hint */}
            {showScrollHint && (
              <div className="absolute top-4 right-0 z-30 animate-fade-in-out">
                <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm border border-[#6FAF4E]/30 px-4 py-2 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#6FAF4E] animate-bounce-vertical">
                    <path d="M8 2v12M8 12l4-4M8 12l-4-4" stroke="#6FAF4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <Typography as="span" variant="body-sm" className="text-[#6FAF4E]">Scroll to explore</Typography>
                </div>
              </div>
            )}

            {/* Progress line + original dot behavior */}
            <div className="flex flex-col items-center w-1 shrink-0 relative">
              <div className="flex-1 w-1 relative">
                {/* Track */}
                <div className="absolute inset-0 bg-[#6FAF4E]/20 rounded-full" />
                {/* Fill — synced to same transition as text */}
                <div
                  className="absolute top-0 left-0 w-full bg-[#6FAF4E] rounded-full"
                  style={{
                    height: `${progress}%`,
                    transition: `height ${TRANSITION}`,
                  }}
                />
                {/* Dots — exact same logic as original */}
                {HOW_WE_WORK_PHASES.map((phase, index) => {
                  const isFirst = index === 0;
                  const isLast = index === HOW_WE_WORK_PHASES.length - 1;
                  const dotPosition = (index / (HOW_WE_WORK_PHASES.length - 1)) * 100;

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
                      <div className="w-2 h-2 rounded-full bg-[#6FAF4E]" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Phase content — GPU transform, same transition */}
            <div className="flex-1 overflow-hidden relative">
              <div
                style={{
                  transform: `translateY(-${currentPhase * maxHeight}px)`,
                  transition: `transform ${TRANSITION}`,
                  willChange: "transform",
                }}
              >
                {HOW_WE_WORK_PHASES.map((phase, index) => {
                  const isActive = index === currentPhase;
                  return (
                    <div
                      key={phase.number}
                      ref={(el) => { itemRefs.current[index] = el; }}
                      className="flex flex-col justify-center"
                      style={{
                        height: `${maxHeight}px`,
                        opacity: isActive ? 1 : 0.15,
                        transition: `opacity ${TRANSITION}`,
                      }}
                    >
                      <Typography as="p" variant="body-xl" className="text-white mb-1">
                        {phase.number}
                      </Typography>

                      <Typography as="h3" variant="h4" className="text-[#6FAF4E] mb-4 font-normal">
                        {phase.name}
                      </Typography>

                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-5 h-5 rounded-full border-2 border-[#6FAF4E] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#6FAF4E] stroke-4" />
                        </div>
                        <Typography as="p" variant="body-xl" className="text-white leading-relaxed">
                          {phase.description}
                        </Typography>
                      </div>

                      {phase.bullets && (
                        <ul className="space-y-2 mb-4">
                          {phase.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <span className="text-white shrink-0">•</span>
                              <Typography as="span" variant="body-xl" className="text-white">{bullet}</Typography>
                            </li>
                          ))}
                        </ul>
                      )}

                      {phase.conclusion && (
                        <Typography as="p" variant="body-xl" className="text-white leading-relaxed">
                          {phase.conclusion}
                        </Typography>
                      )}
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
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes bounce-vertical {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        .animate-fade-in-out { animation: fade-in-out 2s ease-in-out infinite; }
        .animate-bounce-vertical { animation: bounce-vertical 1.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}