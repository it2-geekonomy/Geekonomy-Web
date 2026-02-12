"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function PageContentWrapper({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !wrapperRef.current) return;
    
    // Simple fade in animation
    const tl = gsap.timeline();

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
  }, [isMounted]);

  return (
    <div ref={wrapperRef} style={{ opacity: 0, pointerEvents: "none" }}>
      {children}
    </div>
  );
}
