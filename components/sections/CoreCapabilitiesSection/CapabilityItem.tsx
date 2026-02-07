"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { CoreCapability } from "@/lib/constants";
import {
  ANIMATION_DELAYS,
  ANIMATION_DURATIONS,
  ANIMATION_EASING,
  VIEWPORT_OPTIONS_WIDE,
} from "../ProcessSection/animations";
import { CapabilityMarker } from "./CapabilityMarker";

interface CapabilityItemProps {
  capability: CoreCapability;
  index: number;
  isActive: boolean;
  isFilled: boolean;
}

export function CapabilityItem({ capability, index, isActive, isFilled }: CapabilityItemProps) {
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
      <CapabilityMarker isActive={isActive} isFilled={isFilled} index={index} />

      <div className="-translate-x-6 md:translate-x-0">
        {/* Section Number */}
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
            variant="base"
            className="text-white/90 mb-2"
          >
            {capability.number}
          </Typography>
        </motion.div>

        {/* Title */}
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
            className="text-[#6FAF4E] mb-4 font-normal"
          >
            {capability.title}
          </Typography>
        </motion.div>

        {/* Description with Checkmark */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: ANIMATION_DURATIONS.fast,
            delay: baseDelay + ANIMATION_DELAYS.checkmarkOffset,
            ease: ANIMATION_EASING,
          }}
          className="flex items-start gap-2 mb-4"
        >
          <motion.div
            className="w-5 h-5 rounded-full border-2 border-[#6FAF4E] flex items-center justify-center shrink-0 mt-0.5"
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
          <Typography as="p" variant="base" className="text-[#A0A0A0] ">
            {capability.description}
          </Typography>
        </motion.div>

        {/* Includes List */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: ANIMATION_DURATIONS.normal,
            delay: baseDelay + ANIMATION_DELAYS.questionOffset,
            ease: ANIMATION_EASING,
          }}
          className="ml-7"
        >
          <Typography
            as="p"
            variant="base"
            className="text-white mb-2 font-normal"
          >
            This includes:
          </Typography>
          <ul className="space-y-1">
            {capability.includes.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start gap-2">
                <span className="text-[#6FAF4E] mt-1.5 shrink-0">•</span>
                <Typography as="span" variant="base" className="text-white">
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
