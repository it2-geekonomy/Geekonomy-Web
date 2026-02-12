"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { HOW_WE_WORK_PHASES } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { TimelineLine } from "./ProcessSection/TimelineLine";
import { PhaseMarker } from "./ProcessSection/PhaseMarker";
import {
  ANIMATION_DELAYS,
  ANIMATION_DURATIONS,
  ANIMATION_EASING,
  VIEWPORT_OPTIONS,
  VIEWPORT_OPTIONS_WIDE,
} from "./ProcessSection/animations";

function HowWeWorkLeftSection() {
  return (
    <div className="lg:col-span-2 2xl:-translate-x-12">
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
          className="text-[#A0A0A0] leading-relaxed max-w-lg"
        >
          We favour measured progress over rushed delivery. Quality holds longer than speed.
        </Typography>
      </motion.div>
    </div>
  );
}

interface HowWeWorkPhaseItemProps {
  phase: typeof HOW_WE_WORK_PHASES[0];
  index: number;
  isActive: boolean;
  isFilled: boolean;
}

function HowWeWorkPhaseItem({ phase, index, isActive, isFilled }: HowWeWorkPhaseItemProps) {
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
      <PhaseMarker isActive={isActive} isFilled={isFilled} index={index} />

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
            {phase.number}
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
          <motion.span
            className="inline-block"
            animate={{
              scale: isActive ? [1, 1.15, 1] : 1,
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: "left center" }}
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
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: ANIMATION_DURATIONS.fast,
            delay: baseDelay + ANIMATION_DELAYS.checkmarkOffset,
            ease: ANIMATION_EASING,
          }}
          className="flex items-start gap-3 mb-4"
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
          <Typography
            as="p"
            variant="base"
            className="text-[#A0A0A0] leading-relaxed"
          >
            {phase.description}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: ANIMATION_DURATIONS.normal,
            delay: baseDelay + ANIMATION_DELAYS.questionOffset,
            ease: ANIMATION_EASING,
          }}
        >
          {phase.bullets && (
            <ul className="space-y-2 mb-4">
              {phase.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="flex items-start gap-3">
                  <span className="text-[#A0A0A0] mt-1.5 shrink-0">•</span>
                  <Typography as="span" variant="base" className="text-[#A0A0A0]">
                    {bullet}
                  </Typography>
                </li>
              ))}
            </ul>
          )}
          {phase.conclusion && (
            <Typography
              as="p"
              variant="base"
              className="text-[#A0A0A0] leading-relaxed"
            >
              {phase.conclusion}
            </Typography>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function HowWeWorkProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-[clamp(2.5rem,2.5rem+2vw,8rem)]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 w-full px-4 sm:px-6 lg:px-10 2xl:max-w-7xl 2xl:mx-auto">
          <HowWeWorkLeftSection />

          {/* Right Section - Timeline */}
          <div className="lg:col-span-3 relative">
            <TimelineLine scrollProgress={scrollProgress} />

            {/* Phases */}
            <div className="relative pl-20 space-y-8 md:space-y-16">
              {HOW_WE_WORK_PHASES.map((phase, index) => {
                const currentPhaseIndex = Math.min(
                  Math.floor(scrollProgress * HOW_WE_WORK_PHASES.length),
                  HOW_WE_WORK_PHASES.length - 1
                );
                
                const isActive = index === currentPhaseIndex;
                const segmentSize = 1 / HOW_WE_WORK_PHASES.length;
                const phaseThreshold = index * segmentSize;
                const isFilled = scrollProgress >= phaseThreshold;

                return (
                  <HowWeWorkPhaseItem
                    key={phase.number}
                    phase={phase}
                    index={index}
                    isActive={isActive}
                    isFilled={isFilled}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
