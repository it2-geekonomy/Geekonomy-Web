"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AlternateSlideSectionProps {
  children: ReactNode;
  direction: "left" | "right";
  variant?: "smooth" | "fast";
}

export default function AlternateSlideSection({ 
  children, 
  direction,
  variant = "smooth"
}: AlternateSlideSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // For fast variant - "Slow down to speed up" concept
  // Starts VERY slow (almost still), then EXPLODES with speed
  if (variant === "fast") {
    return (
      <motion.div
        ref={sectionRef}
        initial={{
          x: direction === "left" ? -1200 : 1200,
          opacity: 0,
          scale: 0.2,
          rotateY: direction === "left" ? -50 : 50,
        }}
        whileInView={{
          x: [
            direction === "left" ? -1200 : 1200,  // Start very far
            direction === "left" ? -1100 : 1100,  // Barely moves (0-50% - VERY SLOW)
            direction === "left" ? -1050 : 1050,  // Still barely moving (50-70%)
            direction === "left" ? -400 : 400,    // Starting to move (70-85%)
            direction === "left" ? 200 : -200,    // FAST acceleration (85-95%)
            0                                      // Final snap (95-100% - EXPLOSIVE)
          ],
          opacity: [0, 0.1, 0.2, 0.5, 0.9, 1],
          scale: [
            0.2,   // Very small
            0.25,  // Barely growing (slow)
            0.3,   // Still slow
            0.6,   // Starting to grow
            1.2,   // FAST growth
            1      // Final
          ],
          rotateY: [
            direction === "left" ? -50 : 50,   // Start rotated
            direction === "left" ? -45 : 45,   // Barely changes (slow)
            direction === "left" ? -40 : 40,   // Still slow
            direction === "left" ? -20 : 20,   // Starting to rotate
            direction === "left" ? 15 : -15,   // FAST rotation
            0                                   // Final
          ],
        }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{
          duration: 1.5, // Longer to really feel the slow phase
          times: [0, 0.5, 0.7, 0.85, 0.95, 1], // Most time in slow phase (0-85%), then explosive (85-100%)
          ease: [0.42, 0, 0.58, 1], // Custom easing: very slow start, explosive end
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "2000px",
        }}
      >
        <div style={{ pointerEvents: "auto", position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </motion.div>
    );
  }

  // Smooth scroll-based animation for normal variant
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    direction === "left" 
      ? [-300, 0, 100] 
      : [300, 0, -100]
  );
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9]);
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
        <div style={{ pointerEvents: "auto", position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
