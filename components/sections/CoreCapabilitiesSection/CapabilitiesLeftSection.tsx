"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { ANIMATION_DURATIONS, ANIMATION_EASING, VIEWPORT_OPTIONS } from "../ProcessSection/animations";

export function CapabilitiesLeftSection() {
  return (
    <div className="lg:col-span-2 2xl:-translate-x-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT_OPTIONS}
        transition={{
          duration: ANIMATION_DURATIONS.slower,
          ease: ANIMATION_EASING,
        }}
      >
        <Typography
          as="h2"
          variant="2xl"
          className="text-white font-normal leading-tight mb-4"
        >
          Our Core Capabilities
        </Typography>
      </motion.div>
    </div>
  );
}
