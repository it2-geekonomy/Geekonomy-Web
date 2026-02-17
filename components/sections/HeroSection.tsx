"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (!isHovered) {
      // Reset animation key when leaving hover to restart chaotic animation
      setAnimationKey((prev) => prev + 1);
    }
  }, [isHovered]);
  
  return (
    <section className="relative w-full h-full flex items-center bg-black overflow-hidden">
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 py-8 lg:py-30">
        <div className="lg:pl-[clamp(1rem,1rem+8vw,10rem)] xl:pl-[clamp(1rem,1rem+12vw,16rem)]">
          {/* Introductory text with green line */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 mb-6 xl:mb-10">
            <div className="h-8 w-1 lg:h-1 lg:w-12 bg-[#69AE44]" />
            <Typography as="p" variant="2xl" className="text-white font-normal text-center lg:text-left">
              We help businesses grow with
            </Typography>
          </div>

          {/* Main Heading */}
          <div className="mb-5">
            <div className="text-center lg:text-left relative">
              <motion.div
                className="relative inline-block"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <h1
                  className="text-[#69AE44] mb-6 leading-[1.1] relative"
                  style={{
                    fontSize: "clamp(1.5rem, 1.25rem + 2vw, 3rem)",
                    fontWeight: 275,
                    letterSpacing: "1em",
                    fontFamily: "var(--font-poppins), Poppins, system-ui, sans-serif",
                  }}
                >
                  {["C", "L", "A", "R", "I", "T", "Y"].map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      animate={{
                        textShadow: isHovered
                          ? "0 0 8px rgba(105, 174, 68, 0.6), 0 0 12px rgba(105, 174, 68, 0.4)"
                          : "0 0 0px rgba(105, 174, 68, 0)",
                        filter: isHovered
                          ? "drop-shadow(0 0 4px rgba(105, 174, 68, 0.5))"
                          : "drop-shadow(0 0 0px rgba(105, 174, 68, 0))",
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </h1>
                {/* Shine sweep effect - on enter */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: "200%", opacity: [0, 1, 0] }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    delay: 0.6,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(110, 175, 78, 0.6), transparent)",
                    filter: "blur(15px)",
                    transform: "skewX(-25deg)",
                    width: "50%",
                    height: "100%",
                  }}
                />
              </motion.div>
            </div>
            {/* Gray horizontal line */}
            <div className="h-px w-84 sm:w-95 md:w-120 lg:w-130 xl:w-140 bg-[#414340] mb-3 mx-auto lg:mx-0" />
            <div className="flex items-baseline gap-10 justify-center lg:justify-start">
              <motion.h2
                className="font-bold text-white leading-[1.1]"
                style={{
                  fontSize: "clamp(3rem, 2.25rem + 3vw, 5.5rem)",
                  fontFamily: "var(--font-poppins), Poppins, system-ui, sans-serif",
                }}
                animate={{
                  letterSpacing: isHovered ? "0em" : "-0.125em",
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                OVER
              </motion.h2>
              <motion.div
                className="inline-block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={{
                  letterSpacing: isHovered ? "0em" : "-0.125em",
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                {["C", "H", "A", "O", "S"].map((letter, index) => {
                  // Generate unique chaotic patterns for each letter
                  const seed = index * 13;
                  const getChaoticX = (offset: number) => {
                    return Math.sin(seed * 0.5 + offset * 0.7) * 18 + Math.cos(seed * 0.3 + offset * 1.2) * 12;
                  };
                  const getChaoticY = (offset: number) => {
                    return Math.cos(seed * 0.4 + offset * 0.9) * 15 + Math.sin(seed * 0.6 + offset * 1.1) * 10;
                  };
                  const getChaoticRotate = (offset: number) => {
                    return (Math.sin(seed * 0.8 + offset * 0.5) * 25 + Math.cos(seed * 0.7 + offset * 0.8) * 15);
                  };
                  
                  // Different duration for each letter to create more chaos
                  const duration = 1.8 + index * 0.4;
                  const baseDelay = index * 0.2;
                  
                  return (
                    <motion.span
                      key={`${index}-${animationKey}`}
                      className="inline-block font-bold text-white"
                      style={{
                        fontSize: "clamp(3rem, 2.25rem + 3vw, 5.5rem)",
                        lineHeight: "1.1",
                        fontFamily: "var(--font-poppins), Poppins, system-ui, sans-serif",
                      }}
                      initial={false}
                      animate={
                        isHovered
                          ? {
                              x: 0,
                              y: 0,
                              rotate: 0,
                              scale: 1,
                              letterSpacing: "0em",
                            }
                          : {
                              x: [
                                0,
                                getChaoticX(0),
                                getChaoticX(1),
                                getChaoticX(2),
                                getChaoticX(3),
                                getChaoticX(4),
                                getChaoticX(5),
                                getChaoticX(6),
                                0,
                              ],
                              y: [
                                0,
                                getChaoticY(0),
                                getChaoticY(1),
                                getChaoticY(2),
                                getChaoticY(3),
                                getChaoticY(4),
                                getChaoticY(5),
                                getChaoticY(6),
                                0,
                              ],
                              rotate: [
                                0,
                                getChaoticRotate(0),
                                getChaoticRotate(1),
                                getChaoticRotate(2),
                                getChaoticRotate(3),
                                getChaoticRotate(4),
                                getChaoticRotate(5),
                                getChaoticRotate(6),
                                0,
                              ],
                              scale: [
                                1,
                                1.15,
                                0.85,
                                1.2,
                                0.8,
                                1.1,
                                0.9,
                                1.05,
                                1,
                              ],
                              letterSpacing: "-0.125em",
                            }
                      }
                      transition={
                        isHovered
                          ? {
                              duration: 0.6,
                              ease: "easeOut",
                            }
                          : {
                              duration: duration,
                              repeat: Infinity,
                              ease: "linear",
                              repeatType: "loop",
                              delay: baseDelay,
                              repeatDelay: 0,
                            }
                      }
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Descriptive Text */}
          <div className="mb-10 space-y-5 text-center lg:text-left">
            <Typography as="p" variant="base" className="text-white font-light leading-relaxed max-w-3xl mx-auto lg:mx-0 text-justify">
              Geekonomy partners with founders and leadership teams to build brands, digital systems and marketing that are designed to last, not just launch.
            </Typography>
            <Typography as="p" variant="base" className="text-white font-light">
              Strategy-led. Thoughtfully built. Carefully executed.
            </Typography>
          </div>

          {/* Call-to-Action Button - Centered on mobile, absolute on desktop */}
          <div className="relative lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-full lg:w-auto text-center lg:text-left">
            <Link
              href="/contact#form"
              className="inline-block bg-[#69AE44] text-white border-2 border-transparent px-10 py-3 rounded-full font-semibold uppercase transition-all duration-200 hover:bg-transparent hover:border-[#69AE44] hover:text-[#69AE44] hover:scale-105"
            >
              <Typography as="span" variant="sm" className="font-normal">
                START A CONVERSATION
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
