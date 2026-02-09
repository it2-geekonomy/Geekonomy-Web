"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface CleanSlideSectionProps {
  children: ReactNode;
  direction: "left" | "right";
}

export default function CleanSlideSection({ 
  children, 
  direction 
}: CleanSlideSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Clean horizontal slide - simple and smooth
  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === "left" ? [-150, 0] : [150, 0]
  );
  
  // Smooth opacity
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  return (
    <motion.div
      ref={sectionRef}
      style={{
        x,
        opacity,
      }}
    >
      {children}
    </motion.div>
  );
}
