"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";

interface ClarityHeadingProps {
  isClarityHovered: boolean;
  mousePosition: { x: number; y: number };
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function ClarityHeading({
  isClarityHovered,
  mousePosition,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
}: ClarityHeadingProps) {
  return (
    <motion.div
      className="relative inline-block cursor-pointer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      <Typography
        as="h1"
        variant="3xl"
        className="text-[#6FAF4E] mb-6 leading-[1.1] relative"
        letterSpacing="1em"
        fontWeight={275}
      >
        CLARITY
      </Typography>
      {/* Shine sweep effect - on enter */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: "200%", opacity: [0, 1, 0] }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          delay: 0.6,
          duration: 1.5,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(110, 175, 78, 0.6), transparent)",
          filter: "blur(15px)",
          transform: "skewX(-25deg)",
          width: "50%",
          height: "100%",
        }}
      />
      {/* Shine effect - on hover at mouse position */}
      {isClarityHovered && (
        <motion.div
          className="absolute pointer-events-none"
          animate={{ 
            x: mousePosition.x,
            y: mousePosition.y,
            opacity: 0.8,
            scale: 1.5,
          }}
          transition={{
            x: { type: "spring", stiffness: 500, damping: 30 },
            y: { type: "spring", stiffness: 500, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
          }}
          style={{
            left: 0,
            top: 0,
            width: "120px",
            height: "120px",
            background: "radial-gradient(circle, rgba(110, 175, 78, 0.7), transparent 70%)",
            filter: "blur(25px)",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </motion.div>
  );
}
