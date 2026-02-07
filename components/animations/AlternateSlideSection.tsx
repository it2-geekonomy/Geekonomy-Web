"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AlternateSlideSectionProps {
  children: ReactNode;
  direction: "left" | "right";
}

export default function AlternateSlideSection({ 
  children, 
  direction 
}: AlternateSlideSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Slide from left or right based on direction
  const x = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    direction === "left" 
      ? [-300, 0, 100] 
      : [300, 0, -100]
  );
  
  // Opacity fade in/out
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.7]);
  
  // Scale effect
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9]);
  
  // Slight rotation for depth
  const rotateY = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    direction === "left" ? [-10, 0, 5] : [10, 0, -5]
  );

  return (
    <div 
      ref={sectionRef}
      style={{ 
        perspective: "1500px",
        transformStyle: "preserve-3d",
        width: "100%",
      }}
    >
      <motion.div
        style={{
          x,
          opacity,
          scale,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
