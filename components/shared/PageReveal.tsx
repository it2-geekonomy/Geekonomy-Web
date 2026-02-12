"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function PageReveal() {
  const revealRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return;
    
    // Check if splash already completed - if so, hide completely
    try {
      const splashComplete = (
        localStorage.getItem("splashComplete") === "true" || 
        sessionStorage.getItem("splashComplete") === "true"
      );
      
      if (splashComplete) {
        // Already completed - hide PageReveal
        if (revealRef.current) {
          gsap.set(revealRef.current, { display: "none", opacity: 0 });
        }
        return;
      }
    } catch (error) {
      if (revealRef.current) {
        gsap.set(revealRef.current, { display: "none", opacity: 0 });
      }
      return;
    }

    // Hide PageReveal completely during splash
    if (revealRef.current && overlayRef.current) {
      gsap.set(revealRef.current, { opacity: 0, display: "none" });
      gsap.set(overlayRef.current, { opacity: 1 });
    }
    
    // Simple, professional reveal animation
    const animateReveal = () => {
      if (!overlayRef.current || !revealRef.current) return;

      const tl = gsap.timeline();

      // Show overlay
      gsap.set(revealRef.current, { display: "block", opacity: 1 });
      gsap.set(overlayRef.current, { opacity: 1 });

      // Smooth fade out - simple and professional
      tl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          if (revealRef.current) {
            gsap.set(revealRef.current, { display: "none" });
          }
        },
      });
    };

    // Wait for splash to complete, then show PageReveal
    const checkSplashComplete = () => {
      if (!revealRef.current || !overlayRef.current) {
        setTimeout(checkSplashComplete, 100);
        return;
      }

      // Poll for splash completion
      intervalRef.current = setInterval(() => {
        try {
          const completed = (
            localStorage.getItem("splashComplete") === "true" || 
            sessionStorage.getItem("splashComplete") === "true"
          );
          
          if (completed) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            // Show and animate PageReveal after splash completes
            setTimeout(() => {
              animateReveal();
            }, 100);
          }
        } catch (error) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      }, 100);
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(checkSplashComplete, 100);
    
    return () => {
      clearTimeout(timeoutId);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isMounted]);

  return (
    <div
      ref={revealRef}
      className="fixed inset-0 z-[9998] pointer-events-none overflow-hidden"
      style={{ opacity: 0, display: "none" }}
    >
      {/* Simple black overlay - fades out smoothly */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black"
      />
    </div>
  );
}
