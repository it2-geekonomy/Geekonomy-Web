"use client";

import { useScroll, useTransform, motion } from "framer-motion";
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
    offset: ["start end", "center center"],
  });

  // 3D sheet rolling effect - rolls in from top or bottom
  const rotateX = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === "top" ? [60, 0] : [-60, 0]
  );
  
  // Scale and zoom effect
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  
  // Z depth for 3D space
  const z = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  
  // Opacity fade
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.5, 1]);

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
          rotateX: rotateX,
          scale: scale,
          z: z,
          opacity: opacity,
          transformStyle: "preserve-3d",
          transformOrigin: direction === "top" ? "center top" : "center bottom",
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
