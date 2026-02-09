"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SplitRevealSectionProps {
  children: ReactNode;
  splitDirection?: "horizontal" | "vertical";
}

export default function SplitRevealSection({ 
  children, 
  splitDirection = "horizontal"
}: SplitRevealSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Split reveal effect
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    splitDirection === "horizontal"
      ? ["inset(50% 0 50% 0)", "inset(0 0 0 0)", "inset(0 0 0 0)"]
      : ["inset(0 50% 0 50%)", "inset(0 0 0 0)", "inset(0 0 0 0)"]
  );
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  return (
    <motion.div
      ref={sectionRef}
      style={{
        clipPath,
        opacity,
        scale,
      }}
    >
      {children}
    </motion.div>
  );
}
