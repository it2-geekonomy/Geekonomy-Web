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
    offset: ["start end", "start center"],
  });

  // Ultra-smooth spring animation - refined for premium feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
    mass: 0.8,
  });

  // Enhanced 3D depth - smoother transitions (reduced to prevent gaps)
  const z = useTransform(
    smoothProgress, 
    [0, 0.5, 1], 
    [-150, 0, 100]
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
  
  // Subtle refined 3D rotation (reduced to prevent gaps)
  const rotateX = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    index % 2 === 0 ? [10, 0, -4] : [-10, 0, 4]
  );

  return (
    <div
      ref={sectionRef}
      style={{
        perspective: "2500px",
        transformStyle: "preserve-3d",
        width: "100%",
        overflow: "hidden",
        margin: 0,
        padding: 0,
        display: "block",
      }}
    >
      <motion.div
        style={{
          z,
          scale,
          opacity,
          rotateX,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
          willChange: "transform",
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
