"use client";

import { motion } from "framer-motion";
import {
  ANIMATION_DELAYS,
  ANIMATION_DURATIONS,
  VIEWPORT_OPTIONS,
} from "../ProcessSection/animations";

interface CapabilityMarkerProps {
  isActive: boolean;
  isFilled: boolean;
  index: number;
}

export function CapabilityMarker({ isActive, isFilled, index }: CapabilityMarkerProps) {
  return (
    <motion.div
      className={`absolute left-1/2 -translate-x-[710%] w-3 h-3 rounded-full transition-colors duration-500 ${
        isFilled ? "bg-[#6eaf4c]" : "bg-white"
      }`}
      style={{
        left: "24px",
        transform: "translateX(-50%)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={VIEWPORT_OPTIONS}
      transition={{
        duration: ANIMATION_DURATIONS.fast,
        delay: index * ANIMATION_DELAYS.phaseStagger + ANIMATION_DELAYS.markerOffset,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      animate={{
        scale: isActive ? 1.3 : 1,
      }}
    />
  );
}
