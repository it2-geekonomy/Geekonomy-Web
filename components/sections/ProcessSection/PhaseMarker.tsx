"use client";

import { motion, MotionValue, useTransform, useSpring } from "framer-motion";

interface PhaseMarkerProps {
  index: number;
  totalPhases: number;
  scrollProgress: MotionValue<number>;
}

export function PhaseMarker({ index, totalPhases, scrollProgress }: PhaseMarkerProps) {
  const seg = 1 / totalPhases;

  // Trigger at segment boundary — exactly when text starts revealing
  const trigger = index * seg;
  const fillW   = seg * 0.18; // matches PhaseItem revealW

  // White → green: starts exactly when text starts appearing
  const rawFill = useTransform(
    scrollProgress,
    [Math.max(0, trigger - fillW), trigger, Math.min(1, trigger + fillW)],
    [0, 0, 1]
  );
  const fill = useSpring(rawFill, { stiffness: 55, damping: 18, mass: 1.2 });

  // Scale pulse peaks at segment midpoint
  const mid = trigger + seg * 0.5;
  const rawScale = useTransform(
    scrollProgress,
    [trigger, mid, trigger + seg],
    [1, 1.35, 1]
  );
  const scale = useSpring(rawScale, { stiffness: 70, damping: 22 });

  return (
    <motion.div
      className="relative w-3 h-3"
      style={{ scale, transformOrigin: "center center" }}
      initial={{ scale: 1 }}
    >
      <div className="w-3 h-3 rounded-full bg-white" />
      <motion.div
        className="absolute inset-0 rounded-full bg-[#6eaf4c]"
        style={{ opacity: fill }}
        initial={{ opacity: 0 }}
      />
    </motion.div>
  );
}