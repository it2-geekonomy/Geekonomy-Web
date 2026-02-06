"use client";

import { motion } from "framer-motion";

interface ChaosLettersProps {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function ChaosLetters({ isHovered, onMouseEnter, onMouseLeave }: ChaosLettersProps) {
  return (
    <motion.div
      className="inline-block"
      style={{ letterSpacing: "-0.125em" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {["C", "H", "A", "O", "S"].map((letter, index) => {
        // Generate unique chaotic patterns for each letter
        const seed = index * 13;
        const getChaoticX = (offset: number) => {
          return Math.sin(seed * 0.5 + offset * 0.7) * 18 + Math.cos(seed * 0.3 + offset * 1.2) * 12;
        };
        const getChaoticY = (offset: number) => {
          return Math.cos(seed * 0.4 + offset * 0.9) * 15 + Math.sin(seed * 0.6 + offset * 1.1) * 10;
        };
        const getChaoticRotate = (offset: number) => {
          return (Math.sin(seed * 0.8 + offset * 0.5) * 25 + Math.cos(seed * 0.7 + offset * 0.8) * 15);
        };
        
        // Different duration for each letter to create more chaos
        const duration = 1.8 + index * 0.4;
        const baseDelay = index * 0.2;
        
        return (
          <motion.span
            key={index}
            className="inline-block font-bold text-white"
            style={{
              fontSize: "clamp(3rem, 2.25rem + 3vw, 5.5rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.125em",
              fontFamily: "var(--font-poppins), Poppins, system-ui, sans-serif",
            }}
            initial={{ x: 0, y: 0, rotate: 0, scale: 1 }}
            animate={
              isHovered
                ? {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                  }
                : {
                    x: [
                      0,
                      getChaoticX(0),
                      getChaoticX(1),
                      getChaoticX(2),
                      getChaoticX(3),
                      getChaoticX(4),
                      getChaoticX(5),
                      getChaoticX(6),
                      0,
                    ],
                    y: [
                      0,
                      getChaoticY(0),
                      getChaoticY(1),
                      getChaoticY(2),
                      getChaoticY(3),
                      getChaoticY(4),
                      getChaoticY(5),
                      getChaoticY(6),
                      0,
                    ],
                    rotate: [
                      0,
                      getChaoticRotate(0),
                      getChaoticRotate(1),
                      getChaoticRotate(2),
                      getChaoticRotate(3),
                      getChaoticRotate(4),
                      getChaoticRotate(5),
                      getChaoticRotate(6),
                      0,
                    ],
                    scale: [
                      1,
                      1.15,
                      0.85,
                      1.2,
                      0.8,
                      1.1,
                      0.9,
                      1.05,
                      1,
                    ],
                  }
            }
            transition={
              isHovered
                ? {
                    duration: 0.6,
                    ease: "easeOut",
                  }
                : {
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                    delay: baseDelay,
                  }
            }
          >
            {letter}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
