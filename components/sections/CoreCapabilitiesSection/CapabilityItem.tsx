"use client";

import { motion, useTransform, useSpring, MotionValue } from "framer-motion";
import { Check } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { CoreCapability } from "@/lib/constants";

const SPRING = { stiffness: 55, damping: 18, mass: 1.2 };

// Scroll range helper - same pattern as ProcessSection
function scrollRange(start: number, width: number): [number, number, number, number] {
  return [
    Math.max(0, start - width),
    start,
    Math.min(1, start + width),
    Math.min(1, start + width * 1.2),
  ];
}

interface CapabilityItemProps {
  capability: CoreCapability;
  index: number;
  totalCapabilities: number;
  scrollProgress: MotionValue<number>;
}

export function CapabilityItem({
  capability,
  index,
  totalCapabilities,
  scrollProgress,
}: CapabilityItemProps) {
  const seg = 1 / totalCapabilities;

  // Trigger exactly at the segment boundary — same moment the dot turns green
  const trigger = index * seg;
  const revealW = seg * 0.18; // fast reveal — text snaps in with the dot
  const S = seg * 0.04; // tight stagger between children

  // Container - starts revealing EXACTLY when dot turns green
  const containerRange = scrollRange(trigger, revealW);
  const rawOp = useTransform(scrollProgress, containerRange, [0, 0, 1, 1]);
  const rawX = useTransform(scrollProgress, containerRange, [40, 40, 0, 0]);
  const op = useSpring(rawOp, SPRING);
  const x = useSpring(rawX, SPRING);

  // Number - stagger 1
  const numberRange = scrollRange(trigger + S, revealW);
  const rawNumberOp = useTransform(scrollProgress, numberRange, [0, 0, 1, 1]);
  const rawNumberY = useTransform(scrollProgress, numberRange, [10, 10, 0, 0]);
  const numberOp = useSpring(rawNumberOp, SPRING);
  const numberY = useSpring(rawNumberY, SPRING);

  // Title - stagger 2
  const titleRange = scrollRange(trigger + S * 2, revealW);
  const rawTitleOp = useTransform(scrollProgress, titleRange, [0, 0, 1, 1]);
  const rawTitleY = useTransform(scrollProgress, titleRange, [14, 14, 0, 0]);
  const titleOp = useSpring(rawTitleOp, SPRING);
  const titleY = useSpring(rawTitleY, SPRING);

  // Scale pulse peaks at segment midpoint
  const mid = trigger + seg * 0.5;
  const rawScale = useTransform(scrollProgress, [trigger, mid, trigger + seg], [1, 1.05, 1]);
  const scale = useSpring(rawScale, { stiffness: 70, damping: 22 });

  // Checkmark - stagger 3
  const checkRange = scrollRange(trigger + S * 3, revealW);
  const rawCheckOp = useTransform(scrollProgress, checkRange, [0, 0, 1, 1]);
  const rawCheckX = useTransform(scrollProgress, checkRange, [-16, -16, 0, 0]);
  const checkOp = useSpring(rawCheckOp, SPRING);
  const checkX = useSpring(rawCheckX, SPRING);
  const rawIconScale = useTransform(scrollProgress, checkRange, [0, 0, 1, 1]);
  const iconScale = useSpring(rawIconScale, { stiffness: 200, damping: 15 });

  // Includes list - stagger 4
  const includesRange = scrollRange(trigger + S * 4, revealW);
  const rawIncludesOp = useTransform(scrollProgress, includesRange, [0, 0, 1, 1]);
  const rawIncludesY = useTransform(scrollProgress, includesRange, [12, 12, 0, 0]);
  const includesOp = useSpring(rawIncludesOp, SPRING);
  const includesY = useSpring(rawIncludesY, SPRING);

  return (
    <motion.div
      className="relative"
      style={{ opacity: op, x }}
      initial={{ opacity: 0, x: 40 }}
    >
      <div className="-translate-x-6 md:translate-x-0">
        {/* Section Number */}
        <motion.div
          style={{ opacity: numberOp, y: numberY }}
          initial={{ opacity: 0, y: 10 }}
        >
          <Typography as="p" variant="base" className="text-white/90 mb-2">
            {capability.number}
          </Typography>
        </motion.div>

        {/* Title */}
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
              {capability.title}
            </Typography>
          </motion.span>
        </motion.div>

        {/* Description with Checkmark */}
        <motion.div
          className="flex items-start gap-2 mb-4"
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
          <Typography as="p" variant="base" className="text-[#A0A0A0]">
            {capability.description}
          </Typography>
        </motion.div>

        {/* Includes List */}
        <motion.div
          className="ml-7"
          style={{ opacity: includesOp, y: includesY }}
          initial={{ opacity: 0, y: 12 }}
        >
          <Typography as="p" variant="base" className="text-white mb-2 font-normal">
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
