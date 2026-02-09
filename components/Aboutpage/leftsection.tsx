"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { ANIMATION_DURATIONS, ANIMATION_EASING, VIEWPORT_OPTIONS } from "@/components/sections/ProcessSection/animations";

export function ProcessLeftSection() {
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
          className="text-white font-normal leading-tight mb-4 max-w-sm"
        >
          What We Mean by{" "}
          <motion.span
            className="text-[#6eaf4c]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATIONS.normal, delay: 0.3 }}
          >
            “Growth Systems”
          </motion.span>
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: ANIMATION_DURATIONS.slower,
          delay: 0.2,
          ease: ANIMATION_EASING,
        }}
      >
        <Typography
          as="p"
          variant="base"
          className="text-[#A0A0A0] leading-relaxed"
        >
          A growth system is not a single website, campaign or app. It’s a connected
          ecosystem where branding, tech and marketing works together with purpose.
        </Typography>
      </motion.div>
    </div>
  );
}
