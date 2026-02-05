"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { ProcessPhase } from "@/lib/constants";
import {
  ANIMATION_DELAYS,
  ANIMATION_DURATIONS,
  ANIMATION_EASING,
  VIEWPORT_OPTIONS_WIDE,
} from "./animations";
import { PhaseMarker } from "./PhaseMarker";
import { KeyQuestion } from "./KeyQuestion";

interface PhaseItemProps {
  phase: ProcessPhase;
  index: number;
  isActive: boolean;
}

export function PhaseItem({ phase, index, isActive }: PhaseItemProps) {
  const baseDelay = index * ANIMATION_DELAYS.phaseStagger;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VIEWPORT_OPTIONS_WIDE}
      transition={{
        duration: ANIMATION_DURATIONS.slow,
        delay: baseDelay,
        ease: ANIMATION_EASING,
      }}
    >
      <PhaseMarker isActive={isActive} index={index} />

      <div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: ANIMATION_DURATIONS.normal,
            delay: baseDelay + ANIMATION_DELAYS.contentOffset,
            ease: ANIMATION_EASING,
          }}
        >
          <Typography
            as="p"
            variant="sm"
            className="text-white/90 mb-1"
          >
            PHASE {phase.number}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: ANIMATION_DURATIONS.normal,
            delay: baseDelay + ANIMATION_DELAYS.titleOffset,
            ease: ANIMATION_EASING,
          }}
        >
          <Typography
            as="h3"
            variant="2xl"
            className="text-[#6FAF4E] font-normal mb-4"
          >
            {phase.name}
          </Typography>
        </motion.div>
        <KeyQuestion question={phase.keyQuestion} index={index} />
      </div>
    </motion.div>
  );
}
