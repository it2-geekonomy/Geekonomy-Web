"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ZoomRotateSectionProps {
  children: ReactNode;
  direction: "in" | "out";
}

export default function ZoomRotateSection({ 
  children, 
  direction 
}: ZoomRotateSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Zoom effect - zoom in or out based on direction
  const scale = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    direction === "in" 
      ? [0.3, 1, 1.2] 
      : [1.5, 1, 0.6]
  );
  
  // Rotation effect
  const rotateZ = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    direction === "in" ? [180, 0, -45] : [-180, 0, 45]
  );
  
  // 3D rotation for depth
  const rotateX = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    direction === "in" ? [45, 0, -20] : [-45, 0, 20]
  );
  
  // Opacity fade
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.6]);
  
  // Z depth movement
  const z = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    direction === "in" ? [-400, 0, 200] : [400, 0, -200]
  );

  return (
    <div 
      ref={sectionRef}
      style={{ 
        perspective: "2000px",
        transformStyle: "preserve-3d",
        width: "100%",
      }}
    >
      <motion.div
        style={{
          scale,
          rotateZ,
          rotateX,
          opacity,
          z,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
