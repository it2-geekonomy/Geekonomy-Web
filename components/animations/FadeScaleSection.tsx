"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeScaleSectionProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeScaleSection({ 
  children, 
  delay = 0 
}: FadeScaleSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
