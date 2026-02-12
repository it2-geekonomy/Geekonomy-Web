"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface ScrollRevealSectionProps {
  children: ReactNode;
  index: number;
}

export default function ScrollRevealSection({ 
  children, 
  index
}: ScrollRevealSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollTriggerInstances = useRef<any[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !wrapperRef.current) return;

    const initAnimation = async () => {
      if (typeof window === "undefined") return;

      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      // Get all direct children and key nested elements
      const getAnimatableElements = () => {
        const elements: HTMLElement[] = [];
        
        // Get main containers
        const mainContainers = Array.from(wrapper.children) as HTMLElement[];
        elements.push(...mainContainers);
        
        // Get grid items, cards, and sections
        const gridItems = wrapper.querySelectorAll('[class*="grid"] > *, [class*="flex"] > *');
        Array.from(gridItems).forEach((el) => {
          if (!elements.includes(el as HTMLElement)) {
            elements.push(el as HTMLElement);
          }
        });
        
        return elements.length > 0 ? elements : mainContainers;
      };

      const elements = getAnimatableElements();
      if (elements.length === 0) return;

      elements.forEach((el, i) => {
        const isEven = i % 2 === 0;
        const direction = isEven ? -1 : 1; // -1 = left, 1 = right
        
        gsap.set(el, {
          x: direction * 100,
          opacity: 0,
          scale: 0.98,
          force3D: true,
          willChange: "transform, opacity",
        });
      });

      // Create animation - VERY tightly coupled to mouse scroll movement
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 96%",
          end: "top 4%",
          scrub: 0.15, // Ultra-tight scrub - perfectly follows mouse scroll
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Animate each element - directly tied to mouse scroll position
      elements.forEach((el, i) => {
        // Animation progresses exactly with mouse scroll - smooth and responsive
        tl.to(el, {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 2.8, // Longer duration for smoother scroll progression
          ease: "none", // Linear - directly matches scroll position, no easing delay
          force3D: true,
        }, i * 0.1); // Optimized stagger timing
      });

      // Store ScrollTrigger instance for cleanup
      const st = tl.scrollTrigger;
      if (st) {
        scrollTriggerInstances.current.push(st);
      }
    };

    initAnimation();

    return () => {
      scrollTriggerInstances.current.forEach((instance) => {
        if (instance && typeof instance.kill === "function") {
          instance.kill();
        }
      });
      scrollTriggerInstances.current = [];
    };
  }, [index, children]);

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden">
      <div ref={wrapperRef} className="w-full">
        {children}
      </div>
    </div>
  );
}
