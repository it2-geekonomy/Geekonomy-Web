"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/ui/Typography";
import { HEADING_TEXT, CLIENTS } from "@/lib/constants";
import { caseStudies } from "@/lib/caseStudies";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const CLIENT_TO_SLUG: Record<string, string> = {
  DivyaSree: "divyasree-builders",
  Musashi: "mushashi-delta",
  "Hindustan Power": "hindustan-power",
  "VST Group": "vst-group",
};

function getCaseStudyLink(clientName: string): string | null {
  const slug = CLIENT_TO_SLUG[clientName];
  if (!slug) return null;

  const caseStudy = caseStudies.find((cs) => cs.slug === slug);
  if (!caseStudy || !caseStudy.category?.length) return null;

  return `/case-studies/${slugify(caseStudy.category[0])}/${slug}`;
}

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const wrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const masksRef = useRef<(HTMLDivElement | null)[]>([]);

  const headingWords = HEADING_TEXT.split(" ");
  const midIndex = Math.ceil(headingWords.length / 2);

  useEffect(() => {
    const masks = masksRef.current.filter(Boolean) as HTMLDivElement[];
    if (!masks.length) return;

    ScrollTrigger.getAll().forEach((t) => t.kill());

    const ctx = gsap.context(() => {
      gsap.set(masks, { scaleY: 1, transformOrigin: "top center" });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        onEnter: () => {
          gsap.to(masks, {
            scaleY: 0,
            duration: 0.7,
            ease: "power3.inOut",
            stagger: { amount: 0.4, from: "start" },
          });
        },
        onLeaveBack: () => {
          gsap.to(masks, {
            scaleY: 1,
            duration: 0.7,
            ease: "power3.inOut",
            stagger: { amount: 0.4, from: "start" },
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black relative w-full"
      style={{ overflow: "hidden" }}
    >
      {/* Heading */}
      <div className="px-8 sm:px-4 lg:px-24 mb-10 sm:mb-12 lg:mb-16 flex justify-center w-full">
        <Typography
          as="p"
          variant="lg"
          className="text-white font-light leading-relaxed text-center lg:[text-wrap:balance]"
        >
          <span className="hidden lg:inline">
            {headingWords.slice(0, midIndex).join(" ")}
            <br />
            {headingWords.slice(midIndex).join(" ")}
          </span>
          <span className="inline lg:hidden">{HEADING_TEXT}</span>
        </Typography>
      </div>

      {/* Grid */}
      <div className="px-12 sm:px-12 md:px-22 lg:px-2 xl:px-6 2xl:px-20 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-6 lg:gap-1 w-full">
          {CLIENTS.map((item, i) => {
            const isActive = activeIndex === i;
            const caseStudyLink = getCaseStudyLink(item.name);

            const logoSizeClass =
              i === 0
                ? "w-30 sm:w-34 lg:w-auto"
                : i === 2 || i === 3
                ? "w-40 sm:w-44 lg:w-auto"
                : "w-26 sm:w-30 lg:w-auto";

            const CardContent = (
              <div className="relative w-full overflow-hidden bg-black">
                <div className="relative w-full h-auto">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={500}
                    height={300}
                    className="object-contain block max-w-full"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "auto",
                      maxWidth: "100%",
                    }}
                  />

                  {/* Overlay (NO hover effect now) */}
                  <div
                    className={`
                      absolute inset-0 bg-black/50 transition-opacity duration-300
                      ${isActive ? "opacity-100" : "opacity-0"}
                    `}
                  />

                  {/* Logo (NO hover effect now) */}
                  <div
                    className={`
                      absolute bottom-1 left-1 z-10 transition-all duration-300
                      ${
                        isActive
                          ? "opacity-100 translate-x-0 translate-y-0"
                          : "opacity-0 -translate-x-2 translate-y-2"
                      }
                    `}
                  >
                  </div>
                </div>
              </div>
            );

            return (
              <div
                key={i}
                ref={(el) => {
                  wrappersRef.current[i] = el;
                }}
                className="w-full relative"
              >
                {/* Curtain Mask */}
                <div
                  ref={(el) => {
                    masksRef.current[i] = el;
                  }}
                  className="absolute inset-0 bg-black z-20 pointer-events-none"
                  style={{
                    transformOrigin: "top center",
                    transform: "scaleY(1)",
                  }}
                />

                {caseStudyLink ? (
                  <Link href={caseStudyLink} className="block">
                    {CardContent}
                  </Link>
                ) : (
                  <div
                    onClick={() =>
                      setActiveIndex(isActive ? null : i)
                    }
                    className="cursor-pointer"
                  >
                    {CardContent}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrows */}
      <div className="hidden lg:flex absolute top-1/6 2xl:top-1/8 right-8 gap-6 xl:right-18 2xl:right-32">
        <button className="text-white text-xl hover:opacity-70 transition">
          ←
        </button>
        <button className="text-white text-xl hover:opacity-70 transition">
          →
        </button>
      </div>
    </section>
  );
}