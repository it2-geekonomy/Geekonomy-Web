"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface ScrollRevealSectionProps {
  children: ReactNode;
  index: number;
  mode?: "slide" | "simple";
}

export default function ScrollRevealSection({ 
  children, 
  index,
  mode = "slide",
}: ScrollRevealSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !wrapperRef.current) return;
    let disposed = false;
    let ctx: gsap.Context | null = null;

    const initAnimation = async () => {
      if (typeof window === "undefined") return;

      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (disposed) return;

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

      ctx = gsap.context(() => {
        if (mode === "simple") {
          gsap.set(wrapper, {
            y: 20,
            opacity: 0,
            force3D: true,
            willChange: "transform, opacity",
          });
          gsap.to(wrapper, {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power2.out",
            force3D: true,
            clearProps: "transform,willChange",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 92%",
              toggleActions: "play none none none",
              once: true,
              invalidateOnRefresh: true,
            },
          });
          return;
        }

        elements.forEach((el, i) => {
          const direction = i % 2 === 0 ? -1 : 1;
          gsap.set(el, {
            y: 0,
            x: direction * 60,
            opacity: 0,
            force3D: true,
            willChange: "transform, opacity",
          });
        });

        gsap.to(elements, {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.08,
          force3D: true,
          clearProps: "transform,willChange",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 92%",
            toggleActions: "play none none none",
            once: true,
            invalidateOnRefresh: true,
          },
        });
      }, wrapper);
    };

    initAnimation();

    return () => {
      disposed = true;
      ctx?.revert();
    };
  }, [index]);

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden">
      <div ref={wrapperRef} className="w-full">
        {children}
      </div>
    </div>
  );
}
