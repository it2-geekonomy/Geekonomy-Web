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
          initial={{ opacity: 0, y: 10, scale: 1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            scale: isActive ? [1, 1.15, 1] : 1,
          }}
          transition={{
            opacity: {
              duration: ANIMATION_DURATIONS.normal,
              delay: baseDelay + ANIMATION_DELAYS.titleOffset,
              ease: ANIMATION_EASING,
            },
            y: {
              duration: ANIMATION_DURATIONS.normal,
              delay: baseDelay + ANIMATION_DELAYS.titleOffset,
              ease: ANIMATION_EASING,
            },
            scale: {
              duration: isActive ? 0.5 : 0.3,
              ease: [0.16, 1, 0.3, 1],
              repeat: isActive ? Infinity : 0,
              repeatType: "reverse" as const,
            },
          }}
        >
          <Typography
            as="h3"
            variant="2xl"
            className={`text-[#6FAF4E] mb-4 transition-all duration-300 ${
              isActive ? "font-bold" : "font-normal"
            }`}
          >
            {phase.name}
          </Typography>
        </motion.div>
        <KeyQuestion question={phase.keyQuestion} index={index} />
      </div>
    </motion.div>
  );
}
