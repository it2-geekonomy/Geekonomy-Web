"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function PageReveal() {
  const revealRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return;
    
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

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      animateReveal();
    }, 100);
    
    return () => {
      clearTimeout(timeoutId);
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
