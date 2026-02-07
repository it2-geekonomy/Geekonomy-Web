"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideRotateSectionProps {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
}

export default function SlideRotateSection({ 
  children, 
  direction = "left",
  delay = 0 
}: SlideRotateSectionProps) {
  const x = direction === "left" ? -200 : 200;
  const rotate = direction === "left" ? -15 : 15;

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: x,
        rotate: rotate,
        scale: 0.9
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0,
        rotate: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{
        duration: 1,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
