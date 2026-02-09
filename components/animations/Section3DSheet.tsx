"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Section3DSheetProps {
  children: ReactNode;
  direction?: "top" | "bottom";
}

export default function Section3DSheet({ 
  children, 
  direction = "top" 
}: Section3DSheetProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"], // Animation starts from bottom, completes at center
  });

  // Smooth spring animation for stable, fluid motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  // More noticeable 3D sheet rolling effect - starts from further down
  const rotateX = useTransform(
    smoothProgress, 
    [0, 0.5, 0.7, 1], // More gradual progression
    direction === "top" ? [50, 20, 5, 0] : [-50, -20, -5, 0]
  );
  
  // More noticeable scale effect
  const scale = useTransform(smoothProgress, [0, 0.5, 0.7, 1], [0.75, 0.9, 0.98, 1]);
  
  // More depth for better 3D feel
  const z = useTransform(smoothProgress, [0, 0.5, 0.7, 1], [-200, -80, -20, 0]);
  
  // Opacity with better progression - clear by 70%
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.6, 0.8, 1], [0, 0.4, 0.85, 1, 1]);
  
  // Add Y translation for more visible entry
  const y = useTransform(
    smoothProgress,
    [0, 0.5, 0.7, 1],
    direction === "top" ? [80, 30, 10, 0] : [-80, -30, -10, 0]
  );

  return (
    <div 
      ref={sectionRef}
      className="w-full overflow-hidden"
      style={{ 
        perspective: "2500px", 
        transformStyle: "preserve-3d",
        isolation: "isolate",
      }}
    >
      <motion.div
        className="w-full"
        style={{
          rotateX: rotateX,
          scale: scale,
          z: z,
          y: y,
          opacity: opacity,
          transformStyle: "preserve-3d",
          transformOrigin: direction === "top" ? "center top" : "center bottom",
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
