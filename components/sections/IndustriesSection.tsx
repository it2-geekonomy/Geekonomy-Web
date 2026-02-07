"use client";

import { useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/ui/Typography";
import { HEADING_TEXT, CLIENTS } from "@/lib/constants";

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Split heading text once
  const headingWords = HEADING_TEXT.split(" ");
  const midIndex = Math.ceil(headingWords.length / 2);

  return (
    <section className="bg-black relative overflow-x-hidden w-full">
      {/* Heading */}
      <div className="px-8 sm:px-4 lg:px-24 mb-10 sm:mb-12 lg:mb-16 flex justify-center w-full overflow-x-hidden">
        <Typography
          as="p"
          variant="lg"
          className="text-white font-light leading-relaxed text-center lg:[text-wrap:balance]"
        >
          {/* Desktop-only line break */}
          <span className="hidden lg:inline">
            {headingWords.slice(0, midIndex).join(" ")}
            <br />
            {headingWords.slice(midIndex).join(" ")}
          </span>
          {/* Mobile / Tablet */}
          <span className="inline lg:hidden">{HEADING_TEXT}</span>
        </Typography>
      </div>

      {/* Grid */}
      <div className="px-12 sm:px-12 md:px-22 lg:px-2 xl:px-6 2xl:px-20 w-full overflow-x-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-6 lg:gap-1 w-full">
          {CLIENTS.map((item, i) => {
            const isActive = activeIndex === i;

            const logoSizeClass =
              i === 0
                ? "w-30 sm:w-34 lg:w-auto"
                : i === 2 || i === 3
                  ? "w-40 sm:w-44 lg:w-auto"
                  : "w-26 sm:w-30 lg:w-auto";

            return (
              <div
                key={i}
                onClick={() => setActiveIndex(isActive ? null : i)}
                className="relative group cursor-pointer w-full"
              >
                {/* Image wrapper */}
                <div className="relative w-full overflow-hidden bg-black">
                  <div className="relative w-full h-auto">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={500}
                      height={300}
                      className="object-contain block transition-transform duration-700 group-hover:scale-105 sm:object-contain max-w-full"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                        maxWidth: "100%",
                      }}
                    />

                    {/* Overlay */}
                    <div
                      className={`
                        absolute inset-0 bg-black/50 transition-opacity duration-300
                        ${isActive ? "opacity-100" : "opacity-0"}
                        group-hover:opacity-100
                      `}
                    />

                    {/* Logo inside image wrapper */}
                    <div
                      className={`
                        absolute bottom-1 left-1 z-10 transition-all duration-300
                        ${isActive
                          ? "opacity-100 translate-x-0 translate-y-0"
                          : "opacity-0 -translate-x-2 translate-y-2"}
                        group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0
                      `}
                    >
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={item.width}
                        height={item.height}
                        className={`object-contain ${logoSizeClass}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrows */}
      <div className="hidden lg:flex absolute top-1/6 2xl:top-1/8 right-8 gap-6 xl:right-18 2xl:right-32">
        <button className="text-white text-xl hover:opacity-70 transition">←</button>
        <button className="text-white text-xl hover:opacity-70 transition">→</button>
      </div>

    </section>
  );
}