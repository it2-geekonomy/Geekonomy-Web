"use client";

import { motion, MotionValue, useTransform, useSpring } from "framer-motion";
import { Check } from "lucide-react";
import { Typography } from "@/components/ui/Typography";

interface KeyQuestionProps {
  question: string;
  index: number;
  totalPhases: number;
  scrollProgress: MotionValue<number>;
}

// Same scrollRange signature as PhaseItem — trigger = start, width = reveal window
function scrollRange(start: number, width: number): [number, number, number, number] {
  return [
    Math.max(0, start - width),
    start,
    Math.min(1, start + width),
    Math.min(1, start + width * 1.2),
  ];
}

const SPRING = { stiffness: 55, damping: 18, mass: 1.2 };

export function KeyQuestion({
  question,
  index,
  totalPhases,
  scrollProgress,
}: KeyQuestionProps) {
  const seg     = 1 / totalPhases;
  const trigger = index * seg;   // same as PhaseItem + PhaseMarker
  const revealW = seg * 0.18;
  const S       = seg * 0.04;

  // Checkmark row — stagger 3
  const checkRange   = scrollRange(trigger + S * 3, revealW);
  const rawCheckOp   = useTransform(scrollProgress, checkRange, [0, 0, 1, 1]);
  const rawCheckX    = useTransform(scrollProgress, checkRange, [-16, -16, 0, 0]);
  const checkOp      = useSpring(rawCheckOp, SPRING);
  const checkX       = useSpring(rawCheckX, SPRING);
  const rawIconScale = useTransform(scrollProgress, checkRange, [0, 0, 1, 1]);
  const iconScale    = useSpring(rawIconScale, { stiffness: 200, damping: 15 });

  // Question text — stagger 4
  const textRange = scrollRange(trigger + S * 4, revealW);
  const rawTextOp = useTransform(scrollProgress, textRange, [0, 0, 1, 1]);
  const rawTextY  = useTransform(scrollProgress, textRange, [12, 12, 0, 0]);
  const textOp    = useSpring(rawTextOp, SPRING);
  const textY     = useSpring(rawTextY, SPRING);

  return (
    <div>
      <motion.div
        className="flex items-center gap-2 mb-2"
        style={{ opacity: checkOp, x: checkX }}
        initial={{ opacity: 0, x: -16 }}
      >
        <motion.div
          className="w-5 h-5 rounded-full border-2 border-[#6FAF4E] flex items-center justify-center"
          style={{ scale: iconScale }}
          initial={{ scale: 0 }}
        >
          <Check className="w-3 h-3 text-[#6FAF4E] stroke-4" />
        </motion.div>
        <Typography as="span" variant="sm" className="text-[#6FAF4E] font-thin">
          KEY QUESTION
        </Typography>
      </motion.div>

      <motion.div
        className="rounded-lg p-4"
        style={{ opacity: textOp, y: textY }}
        initial={{ opacity: 0, y: 12 }}
      >
        <Typography as="p" variant="base" className="text-[#A0A0A0]">
          {question}
        </Typography>
      </motion.div>
    </div>
  );
}