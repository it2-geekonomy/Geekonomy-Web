"use client";
import { useEffect, useRef, useState } from "react";
import { PROCESS_PHASES } from "@/lib/constants";
import { ProcessLeftSection } from "./ProcessSection/ProcessLeftSection";
import { Typography } from "@/components/ui/Typography";

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const prevScrollRef = useRef(0);

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

  // Track scroll position for dots animation
  useEffect(() => {
    const scrollBox = scrollRef.current;
    if (!scrollBox) return;

    const updateProgress = () => {
      const scrollTop = scrollBox.scrollTop;
      const scrollHeight = scrollBox.scrollHeight - scrollBox.clientHeight;
      const progressPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      
      prevScrollRef.current = scrollTop;
      setProgress(progressPercent);
      
      // Hide scroll hint after first scroll
      if (scrollTop > 10) {
        setShowScrollHint(false);
      }
    };

    scrollBox.addEventListener("scroll", updateProgress);
    updateProgress(); // Initial update

    return () => {
      scrollBox.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black pb-18"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mx-4 sm:mx-6 lg:mx-14 xl:mx-[clamp(0.5rem,0.5rem+10vw,10rem)] 2xl:mx-[clamp(1rem,1rem+15vw,22rem)] items-start">

          {/* LEFT SIDE */}
          <ProcessLeftSection />

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3 flex gap-6 lg:gap-12 items-stretch h-[280px] relative">

            {/* Scroll to Explore Hint */}
            {showScrollHint && (
              <div className="absolute top-4 right-0 z-30 animate-fade-in-out">
                <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm border border-[#69AE44]/30 px-4 py-2 rounded-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-[#69AE44] animate-bounce-vertical"
                  >
                    <path
                      d="M8 2v12M8 12l4-4M8 12l-4-4"
                      stroke="#69AE44"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Typography
                    as="span"
                    variant="body-sm"
                    className="text-[#69AE44]"
                  >
                    Scroll to explore
                  </Typography>
                </div>
              </div>
            )}

            {/* Scrollbar-like Progress Indicator with Animated Dots */}
            <div className="flex flex-col items-center w-1 shrink-0 relative">
              <div className="flex-1 w-1 relative">
                {/* Track - Background */}
                <div className="absolute inset-0 bg-[#69AE44]/20 rounded-full" />
                
                {/* Thumb - Progress Fill */}
                <div
                  className="absolute top-0 left-0 w-full bg-[#69AE44] rounded-full transition-all duration-700 ease-out overflow-hidden"
                  style={{
                    height: `${progress}%`,
                  }}
                />
                
                {/* Animated Dots - Original behavior with bidirectional animation */}
                {PROCESS_PHASES.map((phase, index) => {
                  const isFirst = index === 0;
                  const isLast = index === PROCESS_PHASES.length - 1;
                  const dotPosition = (index / (PROCESS_PHASES.length - 1)) * 100;
                  
                  let targetPosition: number;
                  
                  if (isFirst) {
                    // First dot always at top (0%)
                    targetPosition = 0;
                  } else if (isLast) {
                    // Last dot always at bottom (100%)
                    targetPosition = 100;
                  } else {
                    // Middle dots: animate based on current progress
                    // When scrolling down: move from top (progress) to position
                    // When scrolling up: move back up from position
                    if (progress >= dotPosition) {
                      // Reached or passed position - stay at final position
                      targetPosition = dotPosition;
                    } else {
                      // Not reached yet - follow progress from top
                      targetPosition = progress;
                    }
                  }
                  
                  return (
                    <div
                      key={phase.number}
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-700 ease-out"
                      style={{ 
                        top: `${targetPosition}%`,
                        opacity: 1,
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#69AE44] transition-all duration-500" />
                    </div>
                  );
                })}
              </div>
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
                      variant="body-xl"
                    className="text-white mb-1"
                  >
                    PHASE {phase.number}
                  </Typography>

                  <Typography
                    as="h3"
                    variant="body-xl"
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
                    <span className="text-white text-xs uppercase tracking-widest">
                      <Typography as="span" variant="body-xl" className="text-white text-xs uppercase tracking-widest">
                      KEY QUESTION
                      </Typography>
                    </span>
                  </div>

                  <Typography
                    as="p"
                    variant="body-xl"
                    className="text-white leading-relaxed max-w-lg"
                  >
                    {phase.keyQuestion}
                  </Typography>
                </div>
              ))}
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