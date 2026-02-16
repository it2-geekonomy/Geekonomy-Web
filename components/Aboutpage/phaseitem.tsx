"use client";

import { motion, useTransform, useSpring, MotionValue } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { GrowthSystemPhase } from "@/lib/constants";

const SPRING = { stiffness: 55, damping: 18, mass: 1.2 };

// Reveals from `start` over `width` of scroll travel
// [hidden, begin-reveal, fully-visible, clamp]
function scrollRange(start: number, width: number): [number, number, number, number] {
  return [
    Math.max(0, start - width),      // fully hidden before
    start,                            // begin revealing HERE
    Math.min(1, start + width),       // fully visible
    Math.min(1, start + width * 1.2), // clamp stay visible
  ];
}

interface PhaseItemProps {
  phase: GrowthSystemPhase;
  index: number;
  totalPhases: number;
  scrollProgress: MotionValue<number>;
}

export function PhaseItem({ phase, index, totalPhases, scrollProgress }: PhaseItemProps) {
  const seg = 1 / totalPhases;

  // Trigger exactly at the segment boundary — same moment the dot turns green
  const trigger = index * seg;
  const revealW = seg * 0.18; // fast reveal — text snaps in with the dot
  const S = seg * 0.04;       // tight stagger between children

  // Container
  const containerRange = scrollRange(trigger, revealW);
  const rawOp = useTransform(scrollProgress, containerRange, [0, 0, 1, 1]);
  const rawX  = useTransform(scrollProgress, containerRange, [40, 40, 0, 0]);
  const op    = useSpring(rawOp, SPRING);
  const x     = useSpring(rawX, SPRING);

  // Label "STEP 0X" — stagger 1
  const labelRange = scrollRange(trigger + S, revealW);
  const rawLabelOp = useTransform(scrollProgress, labelRange, [0, 0, 1, 1]);
  const rawLabelY  = useTransform(scrollProgress, labelRange, [10, 10, 0, 0]);
  const labelOp    = useSpring(rawLabelOp, SPRING);
  const labelY     = useSpring(rawLabelY, SPRING);

  // Title — stagger 2
  const titleRange = scrollRange(trigger + S * 2, revealW);
  const rawTitleOp = useTransform(scrollProgress, titleRange, [0, 0, 1, 1]);
  const rawTitleY  = useTransform(scrollProgress, titleRange, [14, 14, 0, 0]);
  const titleOp    = useSpring(rawTitleOp, SPRING);
  const titleY     = useSpring(rawTitleY, SPRING);

  // Scale pulse peaks at segment midpoint
  const mid = trigger + seg * 0.5;
  const rawScale = useTransform(
    scrollProgress,
    [trigger, mid, trigger + seg],
    [1, 1.05, 1]
  );
  const scale = useSpring(rawScale, { stiffness: 70, damping: 22 });

  return (
    <motion.div
      className="relative"
      style={{ opacity: op, x }}
      initial={{ opacity: 0, x: 40 }}
    >
      <div>
        <motion.div
          style={{ opacity: labelOp, y: labelY }}
          initial={{ opacity: 0, y: 10 }}
        >
          <Typography as="p" variant="sm" className="text-white/90 mb-1">
            {phase.number}
          </Typography>
        </motion.div>

        <motion.div
          style={{ opacity: titleOp, y: titleY }}
          initial={{ opacity: 0, y: 14 }}
        >
          <motion.span
            className="inline-block"
            style={{ scale, transformOrigin: "left center" }}
            initial={{ scale: 1 }}
          >
            <Typography
              as="h3"
              variant="xl"
              className="text-[#6FAF4E] mb-4 font-normal"
            >
              {phase.name}
            </Typography>
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
