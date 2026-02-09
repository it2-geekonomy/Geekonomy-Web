"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface MagneticRevealSectionProps {
  children: ReactNode;
  index: number;
}

export default function MagneticRevealSection({ 
  children, 
  index 
}: MagneticRevealSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Ultra-smooth spring animation - refined for premium feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
    mass: 0.8,
  });

  // Refined magnetic pull - smoother, more subtle
  const y = useTransform(
    smoothProgress,
    [0, 0.4, 0.6, 1],
    [
      index % 2 === 0 ? 120 : -120, 
      0, 
      0, 
      index % 2 === 0 ? -60 : 60
    ]
  );

  // Enhanced 3D depth - smoother transitions
  const z = useTransform(
    smoothProgress, 
    [0, 0.5, 1], 
    [-250, 0, 150]
  );
  
  // Refined scale - more subtle peak
  const scale = useTransform(
    smoothProgress, 
    [0, 0.45, 0.55, 1], 
    [0.85, 1.02, 1.02, 0.97]
  );
  
  // Perfect opacity curve
  const opacity = useTransform(
    smoothProgress, 
    [0, 0.25, 0.75, 1], 
    [0, 1, 1, 0.9]
  );
  
  // Subtle refined 3D rotation
  const rotateX = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    index % 2 === 0 ? [20, 0, -8] : [-20, 0, 8]
  );

  return (
    <div
      ref={sectionRef}
      style={{
        perspective: "2500px",
        transformStyle: "preserve-3d",
        width: "100%",
      }}
    >
      <motion.div
        style={{
          y,
          z,
          scale,
          opacity,
          rotateX,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
