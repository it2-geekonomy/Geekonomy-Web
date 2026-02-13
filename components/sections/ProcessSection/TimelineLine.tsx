"use client";

import { motion, MotionValue, useSpring, useTransform } from "framer-motion";

interface TimelineLineProps {
  scrollProgress: MotionValue<number>;
}

// Line grows via scaleY driven by the same MotionValue — no CSS height/transition.
// transformOrigin: top means it grows downward from the first dot.
export function TimelineLine({ scrollProgress }: TimelineLineProps) {
  // Line grows linearly with scroll. Spring adds the physical lag.
  const rawScaleY = useTransform(scrollProgress, [0, 1], [0, 1]);
  const scaleY = useSpring(rawScaleY, { stiffness: 55, damping: 18, mass: 1.2 });

  const rawOpacity = useTransform(scrollProgress, [0, 0.05], [0, 1]);
  const opacity = useSpring(rawOpacity, { stiffness: 55, damping: 18, mass: 1.2 });

  return (
    <>
      {/* Background track                                                  */}
      {/* top: 10px = dot top (4px) + half dot height (6px)                */}
      {/* Line starts exactly at the center of the first dot               */}
      <div className="absolute left-6 bottom-0 w-px bg-white/20" style={{ top: "10px" }} />

      {/* Green fill — same origin */}
      <motion.div
        className="absolute left-6 bottom-0 w-px bg-[#6eaf4c] z-10 origin-top"
        style={{ scaleY, opacity, top: "10px" }}
      />
    </>
  );
}