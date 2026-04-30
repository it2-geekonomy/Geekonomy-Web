"use client";

import { motion } from "motion/react";
import { Typography } from "@/components/ui/Typography";

const ACCENT = "#6FAF4E";

export default function BlogsPageLoading() {
  return (
    <main
      className="relative z-50 overflow-hidden bg-black min-h-dvh py-[clamp(2.5rem,2.5rem+2vw,8rem)] flex items-center justify-center"
      aria-busy="true"
      aria-label="Preparing the blog"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 40%, ${ACCENT} 0%, transparent 55%)`,
        }}
      />
      <div className="relative flex flex-col items-center gap-8 px-6 text-center">
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography
            as="p"
            variant="display-xl"
            className="text-white font-bold tracking-tight"
          >
            <motion.span
              className="inline-block"
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              Curating reads
            </motion.span>
          </Typography>
          <Typography
            as="p"
            variant="body-lg"
            className="text-white/55 max-w-sm"
          >
            Gathering fresh stories and ideas for you
          </Typography>
        </motion.div>

        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          aria-hidden
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: ACCENT }}
              animate={{
                opacity: [0.35, 1, 0.35],
                scale: [0.92, 1.08, 0.92],
              }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.18,
              }}
            />
          ))}
        </motion.div>
      </div>
    </main>
  );
}
