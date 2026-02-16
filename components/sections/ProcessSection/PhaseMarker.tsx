"use client";

import { motion, MotionValue, useTransform, useSpring } from "framer-motion";

type PhaseMarkerProps =
  | {
      index: number;
      totalPhases: number;
      scrollProgress: MotionValue<number>;
      isActive?: never;
      isFilled?: never;
    }
  | {
      index: number;
      isActive: boolean;
      isFilled: boolean;
      totalPhases?: never;
      scrollProgress?: never;
    };

export function PhaseMarker(props: PhaseMarkerProps) {
  if ("scrollProgress" in props && props.scrollProgress) {
    return (
      <PhaseMarkerScroll
        index={props.index}
        totalPhases={props.totalPhases}
        scrollProgress={props.scrollProgress}
      />
    );
  }
  return (
    <PhaseMarkerSimple
      index={props.index}
      isActive={props.isActive}
      isFilled={props.isFilled}
    />
  );
}

function PhaseMarkerScroll({
  index,
  totalPhases,
  scrollProgress,
}: {
  index: number;
  totalPhases: number;
  scrollProgress: MotionValue<number>;
}) {
  const seg = 1 / totalPhases;
  const trigger = index * seg;
  const fillW = seg * 0.18;

  const rawFill = useTransform(
    scrollProgress,
    [Math.max(0, trigger - fillW), trigger, Math.min(1, trigger + fillW)],
    [0, 0, 1]
  );
  const fill = useSpring(rawFill, { stiffness: 55, damping: 18, mass: 1.2 });

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

function PhaseMarkerSimple({
  index,
  isActive,
  isFilled,
}: {
  index: number;
  isActive: boolean;
  isFilled: boolean;
}) {
  return (
    <motion.div
      className="relative w-3 h-3"
      animate={{ scale: isActive ? 1.35 : 1 }}
      transition={{ stiffness: 70, damping: 22 }}
      style={{ transformOrigin: "center center" }}
    >
      <div className="w-3 h-3 rounded-full bg-white" />
      <motion.div
        className="absolute inset-0 rounded-full bg-[#6eaf4c]"
        animate={{ opacity: isFilled ? 1 : 0 }}
        transition={{ stiffness: 55, damping: 18 }}
      />
    </motion.div>
  );
}