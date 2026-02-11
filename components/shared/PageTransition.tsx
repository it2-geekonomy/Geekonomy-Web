"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import Image from "next/image";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const curtainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    // Only show transition on desktop (>= 1024px)
    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
    
    // Only animate if pathname actually changed (not on first load)
    if (previousPathname.current !== null && pathname !== previousPathname.current) {
      // Find the curtain element created by Navbar
      const curtain = document.querySelector('[data-page-curtain]') as HTMLElement;
      
      if (curtain && isDesktop) {
        // Kill any existing animations
        gsap.killTweensOf([curtain, contentRef.current]);
        
        // Start animation immediately - no delay
        const windowHeight = window.innerHeight;
        const tl = gsap.timeline();

        // Ensure curtain is covering screen (at top)
        gsap.set(curtain, {
          y: 0,
          display: "flex",
        });

        // Prepare new page content above viewport - only vertical movement
        tl.set(contentRef.current, {
          y: -windowHeight * 0.3, // Start above viewport
          x: 0, // Ensure no horizontal movement
          opacity: 0,
          scale: 1, // No scale to avoid horizontal movement
          filter: "blur(8px) brightness(0.85)",
        })
        // Brief pause to see curtain, then smooth reveal
        .to({}, {
          duration: 0.3,
        })
        // New page slides down smoothly - ONLY vertical movement
        .to(contentRef.current, {
          y: 0,
          x: 0, // Lock horizontal position
          opacity: 1,
          scale: 1, // No scale animation
          filter: "blur(0px) brightness(1)",
          duration: 1.8,
          ease: "power3.out",
        })
        // Curtain moves down smoothly, synchronized with content
        .to(curtain, {
          y: windowHeight,
          duration: 1.8,
          ease: "power3.out",
        }, "-=1.7") // Start slightly before content finishes for smoother overlap
        // Hide curtain after animation completes
        .set(curtain, {
          display: "none",
        });
      } else if (curtain && !isDesktop) {
        // On mobile, just hide curtain immediately
        gsap.set(curtain, {
          display: "none",
          y: -window.innerHeight,
        });
      }
    } else {
      // First load - set initial state
      const curtain = curtainRef.current;
      if (curtain) {
        gsap.set(curtain, {
          display: "none",
          y: "-100%",
        });
      }
      // Don't set contentRef here - let PageContentWrapper handle its own visibility
    }

    // Update previous pathname
    previousPathname.current = pathname;
  }, [pathname]);

  return (
    <>
      {/* Black Curtain */}
      <div
        ref={curtainRef}
        className="fixed top-0 left-0 w-full h-full bg-black pointer-events-none items-center justify-center hidden"
      >
        <Image
          src="/Geekonomy Logo.webp"
          alt="Geekonomy Logo"
          width={500}
          height={150}
          className="object-contain opacity-100 w-[clamp(300px,25vw,500px)] h-auto max-w-[90%]"
          data-curtain-logo="true"
          priority
        />
      </div>
      
      {/* Content Wrapper - for page slide animation */}
      <div ref={contentRef} className="relative w-full min-h-screen">
        {children}
      </div>
    </>
  );
}
