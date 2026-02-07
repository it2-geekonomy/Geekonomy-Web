"use client";

import { motion } from "framer-motion";
import { ANIMATION_DURATIONS, ANIMATION_EASING } from "../ProcessSection/animations";

const TIMELINE_LINE_POSITION = "left-6";
const TIMELINE_LINE_WIDTH = "w-px";

interface CapabilitiesTimelineProps {
  scrollProgress: number;
}

export function CapabilitiesTimeline({ scrollProgress }: CapabilitiesTimelineProps) {
  return (
    <>
      {/* Vertical line - background */}
      <motion.div
        className={`absolute ${TIMELINE_LINE_POSITION} top-0 bottom-0 ${TIMELINE_LINE_WIDTH} bg-white`}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: ANIMATION_DURATIONS.slowest,
          ease: ANIMATION_EASING,
        }}
        style={{ transformOrigin: "top" }}
      />

      {/* Animated fill line */}
      <div
        className={`absolute ${TIMELINE_LINE_POSITION} top-0 ${TIMELINE_LINE_WIDTH} bg-[#6eaf4c] z-10 transition-all duration-300 ease-out`}
        style={{
          height: `${scrollProgress * 100}%`,
          transformOrigin: "top",
          opacity: scrollProgress > 0 ? 1 : 0,
        }}
      />
    </>
  );
}
