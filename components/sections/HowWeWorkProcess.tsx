"use client";

import { useRef } from "react";
import { motion, useScroll, MotionValue, useTransform, useSpring } from "framer-motion";
import { Check } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { HOW_WE_WORK_PHASES } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { TimelineLine } from "./ProcessSection/TimelineLine";
import { PhaseMarker } from "./ProcessSection/PhaseMarker";

const SPRING = { stiffness: 55, damping: 18, mass: 1.2 };

function scrollRange(start: number, width: number): [number, number, number, number] {
  return [
    Math.max(0, start - width),
    start,
    Math.min(1, start + width),
    Math.min(1, start + width * 1.2),
  ];
}

function HowWeWorkLeftSection() {
  return (
    <div className="lg:col-span-2 2xl:-translate-x-12">
      <Typography
        as="p"
        variant="base"
        className="text-[#A0A0A0] leading-relaxed max-w-lg"
      >
        We favour measured progress over rushed delivery. Quality holds longer than speed.
      </Typography>
    </div>
  );
}

interface HowWeWorkPhaseItemProps {
  phase: typeof HOW_WE_WORK_PHASES[0];
  index: number;
  isActive: boolean;
  isFilled: boolean;
  scrollProgress: MotionValue<number>;
  totalPhases: number;
}

function HowWeWorkPhaseItem({ phase, index, isActive, isFilled, scrollProgress, totalPhases }: HowWeWorkPhaseItemProps) {
  const seg = 1 / totalPhases;
  const trigger = index * seg;
  const revealW = seg * 0.18;
  const S = seg * 0.04;

  // Container
  const containerRange = scrollRange(trigger, revealW);
  const rawOp = useTransform(scrollProgress, containerRange, [0, 0, 1, 1]);
  const rawX  = useTransform(scrollProgress, containerRange, [40, 40, 0, 0]);
  const op    = useSpring(rawOp, SPRING);
  const x     = useSpring(rawX, SPRING);

  // Number - stagger 1
  const numberRange = scrollRange(trigger + S, revealW);
  const rawNumberOp = useTransform(scrollProgress, numberRange, [0, 0, 1, 1]);
  const rawNumberY  = useTransform(scrollProgress, numberRange, [10, 10, 0, 0]);
  const numberOp    = useSpring(rawNumberOp, SPRING);
  const numberY     = useSpring(rawNumberY, SPRING);

  // Title - stagger 2
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

  // Description with Checkmark - stagger 3
  const checkRange   = scrollRange(trigger + S * 3, revealW);
  const rawCheckOp   = useTransform(scrollProgress, checkRange, [0, 0, 1, 1]);
  const rawCheckX    = useTransform(scrollProgress, checkRange, [-16, -16, 0, 0]);
  const checkOp      = useSpring(rawCheckOp, SPRING);
  const checkX       = useSpring(rawCheckX, SPRING);
  const rawIconScale = useTransform(scrollProgress, checkRange, [0, 0, 1, 1]);
  const iconScale    = useSpring(rawIconScale, { stiffness: 200, damping: 15 });

  // Bullets/Conclusion - stagger 4
  const contentRange = scrollRange(trigger + S * 4, revealW);
  const rawContentOp = useTransform(scrollProgress, contentRange, [0, 0, 1, 1]);
  const rawContentY  = useTransform(scrollProgress, contentRange, [12, 12, 0, 0]);
  const contentOp    = useSpring(rawContentOp, SPRING);
  const contentY     = useSpring(rawContentY, SPRING);

  return (
    <motion.div
      className="relative"
      style={{ opacity: op, x }}
      initial={{ opacity: 0, x: 40 }}
    >
      <div>
        <motion.div
          style={{ opacity: numberOp, y: numberY }}
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
              variant="2xl"
              className="text-[#6FAF4E] mb-4 font-normal"
            >
              {phase.name}
            </Typography>
          </motion.span>
        </motion.div>
        <motion.div
          className="flex items-start gap-3 mb-4"
          style={{ opacity: checkOp, x: checkX }}
          initial={{ opacity: 0, x: -16 }}
        >
          <motion.div
            className="w-5 h-5 rounded-full border-2 border-[#6FAF4E] flex items-center justify-center shrink-0 mt-0.5"
            style={{ scale: iconScale }}
            initial={{ scale: 0 }}
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
          style={{ opacity: contentOp, y: contentY }}
          initial={{ opacity: 0, y: 12 }}
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
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const plainProgress = useScrollProgress(sectionRef); // For isActive/isFilled
  const n = HOW_WE_WORK_PHASES.length;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-[clamp(2.5rem,2.5rem+2vw,8rem)]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 w-full px-4 sm:px-6 lg:px-10 2xl:max-w-7xl 2xl:mx-auto">
          <HowWeWorkLeftSection />

          <div className="lg:col-span-3 relative">
            <TimelineLine scrollProgress={scrollYProgress} />

            <div className="relative pl-20 space-y-8 md:space-y-16">
              {HOW_WE_WORK_PHASES.map((phase, index) => (
                <div key={phase.number} className="relative">
                  <div
                    className="absolute"
                    style={{ left: "-56px", top: "0", transform: "translateX(-50%)" }}
                  >
                    <PhaseMarker
                      index={index}
                      totalPhases={n}
                      scrollProgress={scrollYProgress}
                    />
                  </div>

                  <HowWeWorkPhaseItem
                    phase={phase}
                    index={index}
                    isActive={
                      index ===
                      Math.min(
                        Math.floor(plainProgress * HOW_WE_WORK_PHASES.length),
                        HOW_WE_WORK_PHASES.length - 1
                      )
                    }
                    isFilled={plainProgress >= index / HOW_WE_WORK_PHASES.length}
                    scrollProgress={scrollYProgress}
                    totalPhases={n}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
