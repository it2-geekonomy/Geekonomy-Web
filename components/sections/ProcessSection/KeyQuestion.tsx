"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import {
  ANIMATION_DELAYS,
  ANIMATION_DURATIONS,
  ANIMATION_EASING,
} from "./animations";

interface KeyQuestionProps {
  question: string;
  index: number;
}

export function KeyQuestion({ question, index }: KeyQuestionProps) {
  const baseDelay = index * ANIMATION_DELAYS.phaseStagger;

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: ANIMATION_DURATIONS.fast,
          delay: baseDelay + ANIMATION_DELAYS.checkmarkOffset,
          ease: ANIMATION_EASING,
        }}
        className="flex items-center gap-2 mb-2"
      >
        <motion.div
          className="w-5 h-5 rounded-full border-2 border-[#6FAF4E] flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: baseDelay + ANIMATION_DELAYS.checkmarkInnerOffset,
          }}
        >
          <Check className="w-3 h-3 text-[#6FAF4E] stroke-4" />
        </motion.div>
        <Typography
          as="span"
          variant="sm"
          className="text-[#6FAF4E] font-thin"
        >
          KEY QUESTION
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: ANIMATION_DURATIONS.normal,
          delay: baseDelay + ANIMATION_DELAYS.questionOffset,
          ease: ANIMATION_EASING,
        }}
        className="rounded-lg p-4"
      >
        <Typography as="p" variant="base" className="text-[#A0A0A0]">
          {question}
        </Typography>
      </motion.div>
    </div>
  );
}
