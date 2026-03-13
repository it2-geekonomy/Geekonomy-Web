"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { CORE_CAPABILITIES } from "@/lib/constants";
import { CapabilitiesLeftSection } from "./CoreCapabilitiesSection/CapabilitiesLeftSection";

export default function CoreCapabilitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [maxHeight, setMaxHeight] = useState(380);
  const [progress, setProgress] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const prevScrollRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollBox = scrollRef.current;
    if (!section || !scrollBox) return;

    let isScrolling = false;
    const SCROLL_DELAY = 500;

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
        // Calculate scroll amount dynamically from first item height
        const firstItem = scrollBox.querySelector('[class*="snap-start"]') as HTMLElement;
        const scrollAmount = firstItem ? firstItem.offsetHeight : 380;
        scrollBox.scrollBy({ top: scrollAmount, behavior: "smooth" });
        setTimeout(() => { isScrolling = false; }, SCROLL_DELAY);
        return;
      }

      if (e.deltaY < 0 && !atTop) {
        e.preventDefault();
        isScrolling = true;
        // Calculate scroll amount dynamically from first item height
        const firstItem = scrollBox.querySelector('[class*="snap-start"]') as HTMLElement;
        const scrollAmount = firstItem ? firstItem.offsetHeight : 380;
        scrollBox.scrollBy({ top: -scrollAmount, behavior: "smooth" });
        setTimeout(() => { isScrolling = false; }, SCROLL_DELAY);
        return;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
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
  }, [maxHeight]);

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-[clamp(2.5rem,2.5rem+2vw,8rem)]">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* LEFT SIDE */}
          <CapabilitiesLeftSection />

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3 flex gap-6 lg:gap-12 items-stretch relative" style={{ height: `${maxHeight}px` }}>

            {/* Scroll to Explore Hint */}
            {showScrollHint && (
              <div className="absolute top-4 right-0 z-30 animate-fade-in-out">
                <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm border border-[#6FAF4E]/30 px-4 py-2 rounded-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-[#6FAF4E] animate-bounce-vertical"
                  >
                    <path
                      d="M8 2v12M8 12l4-4M8 12l-4-4"
                      stroke="#6FAF4E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Typography
                    as="span"
                    variant="body-sm"
                    className="text-[#6FAF4E]"
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
                <div className="absolute inset-0 bg-[#6FAF4E]/20 rounded-full " />
                
                {/* Thumb - Progress Fill */}
                <div
                  className="absolute top-0 left-0 w-full bg-[#6FAF4E] rounded-full transition-all duration-700 ease-out overflow-hidden"
                  style={{
                    height: `${progress}%`,
                  }}
                />
                
                {/* Animated Dots - Original behavior with bidirectional animation */}
                {CORE_CAPABILITIES.map((capability, index) => {
                  const isFirst = index === 0;
                  const isLast = index === CORE_CAPABILITIES.length - 1;
                  const dotPosition = (index / (CORE_CAPABILITIES.length - 1)) * 100;
                  
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
                      key={capability.number}
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-700 ease-out"
                      style={{ 
                        top: `${targetPosition}%`,
                        opacity: 1,
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#6FAF4E] transition-all duration-500 -translate-x-1" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Scroll Container */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto snap-y snap-mandatory no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}
            >
              <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

              {CORE_CAPABILITIES.map((capability, index) => (
                <div 
                  key={capability.number} 
                  ref={(el) => { itemRefs.current[index] = el; }}
                  className="flex flex-col justify-center snap-start"
                  style={{ height: `${maxHeight}px` }}
                >
                  <Typography as="p" variant="body-xl" className="text-white mb-1">
                    {capability.number}
                  </Typography>
                  <Typography as="h3" variant="h2" className="text-[#6FAF4E] mb-4 font-normal">
                    {capability.title}
                  </Typography>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-5 h-5 rounded-full border-2 border-[#6FAF4E] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#6FAF4E] stroke-4" />
                    </div>
                    <Typography as="p" variant="body-xl" className="text-white leading-relaxed">
                      {capability.description}
                    </Typography>
                  </div>

                  {capability.includes && (
                    <ul className="space-y-2 mb-4">
                      {capability.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-white mt-1.5 shrink-0">•</span>
                          <Typography as="span" variant="body-xl" className="text-white">{item}</Typography>
                        </li>
                      ))}
                    </ul>
                  )}
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