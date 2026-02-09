"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface DiagonalRevealSectionProps {
  children: ReactNode;
  direction: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export default function DiagonalRevealSection({ 
  children, 
  direction 
}: DiagonalRevealSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Diagonal movement based on direction
  const getTransform = () => {
    switch (direction) {
      case "top-left":
        return { x: [-200, 0], y: [-200, 0] };
      case "top-right":
        return { x: [200, 0], y: [-200, 0] };
      case "bottom-left":
        return { x: [-200, 0], y: [200, 0] };
      case "bottom-right":
        return { x: [200, 0], y: [200, 0] };
    }
  };

  const { x, y } = getTransform();
  
  const translateX = useTransform(scrollYProgress, [0, 1], x);
  const translateY = useTransform(scrollYProgress, [0, 1], y);
  
  // Opacity and scale
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1, 0.95]);

  return (
    <motion.div
      ref={sectionRef}
      style={{
        x: translateX,
        y: translateY,
        opacity,
        scale,
      }}
    >
      {children}
    </motion.div>
  );
}
