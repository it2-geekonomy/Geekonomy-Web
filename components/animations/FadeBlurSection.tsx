"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeBlurSectionProps {
  children: ReactNode;
  direction?: "left" | "right";
}

export default function FadeBlurSection({ 
  children, 
  direction = "left"
}: FadeBlurSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle horizontal movement
  const x = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    direction === "left" ? [-80, 0, 40] : [80, 0, -40]
  );
  
  // Opacity fade
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);
  
  // Blur effect
  const blur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [20, 0, 0, 5]);

  return (
    <motion.div
      ref={sectionRef}
      style={{
        x,
        opacity,
        filter: `blur(${blur}px)`,
      }}
    >
      {children}
    </motion.div>
  );
}
