"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function PageContentWrapper({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !wrapperRef.current) return;
    
    // Set initial state first
    gsap.set(wrapperRef.current, {
      opacity: 0,
      pointerEvents: "none",
    });
    
    const checkAndAnimate = () => {
      // Check both localStorage (from SplashScreen) and sessionStorage (for compatibility)
      const splashComplete = typeof window !== "undefined" && (localStorage.getItem("splashComplete") === "true" || sessionStorage.getItem("splashComplete") === "true");
      const isHomePage = pathname === "/";
      
      // If splash already completed OR not on home page, show immediately
      if (splashComplete || !isHomePage) {
        // Show content immediately
        gsap.set(wrapperRef.current, { 
          opacity: 1, 
          pointerEvents: "auto",
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        });
        return;
      }

      // ANIMATED PAGE REVEAL - Simple and professional
      const tl = gsap.timeline({
        delay: 0.5, // Small delay after splash completes
      });

      // Initial state - content hidden
      gsap.set(wrapperRef.current, { 
        opacity: 0, 
        pointerEvents: "none",
        y: 30,
      });

      // Simple fade in with slight slide up
      tl.to(wrapperRef.current, {
        y: 0,
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.8,
        ease: "power2.out",
      });
    };

    setTimeout(checkAndAnimate, 100);
  }, [pathname, isMounted]);

  return (
    <div ref={wrapperRef} style={{ opacity: 0, pointerEvents: "none" }}>
      {children}
    </div>
  );
}
