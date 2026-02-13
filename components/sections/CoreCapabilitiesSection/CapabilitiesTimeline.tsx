"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

const TIMELINE_LINE_POSITION = "left-6";
const TIMELINE_LINE_WIDTH = "w-px";

interface CapabilitiesTimelineProps {
  scrollProgress: MotionValue<number>;
}

export function CapabilitiesTimeline({ scrollProgress }: CapabilitiesTimelineProps) {
  const height = useTransform(scrollProgress, (progress) => `${progress * 100}%`);
  const opacity = useTransform(scrollProgress, [0, 0.01, 1], [0, 1, 1]);

  return (
    <>
      {/* Vertical line - background */}
      <motion.div
        className={`absolute ${TIMELINE_LINE_POSITION} top-0 bottom-0 ${TIMELINE_LINE_WIDTH} bg-white`}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ transformOrigin: "top" }}
      />

      {/* Animated fill line */}
      <motion.div
        className={`absolute ${TIMELINE_LINE_POSITION} top-0 ${TIMELINE_LINE_WIDTH} bg-[#6eaf4c] z-10`}
        style={{
          height,
          opacity,
          transformOrigin: "top",
        }}
      />
    </>
  );
}
