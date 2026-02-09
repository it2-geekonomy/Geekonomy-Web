"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface VerticalSlideSectionProps {
  children: ReactNode;
  direction: "top" | "bottom";
}

export default function VerticalSlideSection({ 
  children, 
  direction 
}: VerticalSlideSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Vertical slide - smooth Y-axis movement
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === "top" ? [-200, 0] : [200, 0]
  );
  
  // Smooth opacity fade
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0.7]);
  
  // Subtle scale for depth
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.95]);

  return (
    <motion.div
      ref={sectionRef}
      style={{
        y,
        opacity,
        scale,
      }}
    >
      {children}
    </motion.div>
  );
}
