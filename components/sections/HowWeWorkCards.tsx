"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/ui/Typography";

const CARDS = [
  {
    id: 0,
    title: "Scope Boundaries",
    image: "/ourapproach/Scope_Boundaries.png",
    description: "Clear limits",
  },
  {
    id: 1,
    title: "Priorities",
    image: "/ourapproach/Priotities.png",
    description: "What matters most",
  },
  {
    id: 2,
    title: "Expected Timelines",
    image: "/ourapproach/Expected_Timelines.png",
    description: "Realistic schedules",
  },
  {
    id: 3,
    title: "Realistic Outcomes",
    image: "/ourapproach/Realistic_Outcomes.png",
    description: "Achievable results",
  },
];

export default function HowWeWorkCards() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  // 👇 Reset when clicking outside cards
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (cardsRef.current && !cardsRef.current.contains(e.target as Node)) {
        setActiveCard(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="w-full bg-black text-white py-8 md:py-10 xl:py-20 px-6 sm:px-2 md:px-12 lg:px-18">
      {/* Cards */}
      <div ref={cardsRef} className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
          {CARDS.map((card) => (
            <div
              key={card.id}
              onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
              className="group relative bg-[#0f0f0f] w-full min-w-[280px] xl:min-w-[285px] 2xl:min-w-[320px] px-6 py-12 flex flex-col items-center text-center cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[#6eaf4c]/60" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#6eaf4c]/60" />

              <Typography
                as="h3"
                variant="xl"
                className={`mb-6 transition-all duration-300 ${
                  activeCard === card.id ? "font-bold" : "group-hover:font-bold"
                }`}
              >
                {card.title}
              </Typography>

              <Image
                src={card.image}
                alt={card.title}
                width={120}
                height={90}
                className={`mb-6 transition-all duration-300 ${
                  activeCard === card.id
                    ? "scale-[1.18] drop-shadow-[0_0_32px_rgba(110,175,76,0.95)]"
                    : "group-hover:scale-[1.18] group-hover:drop-shadow-[0_0_32px_rgba(110,175,76,0.95)]"
                }`}
              />

              <Typography
                as="p"
                variant="lg"
                className={`relative text-white overflow-hidden transition-colors duration-300 ${
                  activeCard === card.id ? "text-white/70" : "group-hover:text-white/70"
                }`}
              >
                <span className="relative z-10">{card.description}</span>
                <span
                  className={`absolute left-0 top-1/2 h-[4px] bg-[#6eaf4c] transition-all duration-300 ${
                    activeCard === card.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
