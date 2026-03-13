"use client";

import { useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/ui/Typography";

const CARDS = [
  {
    id: 0,
    index: "01",
    title: "Scope Boundaries",
    image: "/ourapproach/Scope_Boundaries.png",
    description: "Clear limits",
  },
  {
    id: 1,
    index: "02",
    title: "Priorities",
    image: "/ourapproach/Priotities.png",
    description: "What matters most",
  },
  {
    id: 2,
    index: "03",
    title: "Expected Timelines",
    image: "/ourapproach/Expected_Timelines.png",
    description: "Realistic schedules",
  },
  {
    id: 3,
    index: "04",
    title: "Realistic Outcomes",
    image: "/ourapproach/Realistic_Outcomes.png",
    description: "Achievable results",
  },
];

const EASE = "cubic-bezier(0.77, 0, 0.18, 1)";
const G = {
  full:  "#6eaf4c",
  mid:   "rgba(110,175,76,0.5)",
  low:   "rgba(110,175,76,0.12)",
  faint: "rgba(110,175,76,0.05)",
};

function HowWeWorkCard({ card }: { card: (typeof CARDS)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{
        position: "relative",
        width: "100%",
        minWidth: 0,
        background: "#0d0d0d",
        cursor: "pointer",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: open
          ? `0 0 0 1px ${G.low}, 0 28px 72px rgba(0,0,0,0.7)`
          : `0 0 0 1px rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.45)`,
        transition: "box-shadow 500ms ease",
      }}
    >
      {/* TOP ACCENT LINE */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 1,
          background: G.full,
          transform: open ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "center",
          transition: `transform 520ms ${EASE} 80ms`,
          zIndex: 30,
        }}
      />

      {/* BOTTOM ACCENT LINE */}
      <div
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: 1,
          background: G.full,
          transform: open ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "center",
          transition: `transform 520ms ${EASE} 80ms`,
          zIndex: 30,
        }}
      />

      {/* CORNER RETICLES */}
      {(["tl", "tr", "bl", "br"] as const).map((pos) => {
        const size = open ? 20 : 12;
        const shared: React.CSSProperties = {
          position: "absolute",
          width: size,
          height: size,
          transition: `all 420ms ${EASE}`,
          zIndex: 30,
          pointerEvents: "none",
        };
        const dirs: Record<string, React.CSSProperties> = {
          tl: { top: 0, left: 0, borderTop: `1px solid ${G.mid}`, borderLeft: `1px solid ${G.mid}` },
          tr: { top: 0, right: 0, borderTop: `1px solid ${G.mid}`, borderRight: `1px solid ${G.mid}` },
          bl: { bottom: 0, left: 0, borderBottom: `1px solid ${G.mid}`, borderLeft: `1px solid ${G.mid}` },
          br: { bottom: 0, right: 0, borderBottom: `1px solid ${G.mid}`, borderRight: `1px solid ${G.mid}` },
        };
        return <div key={pos} style={{ ...shared, ...dirs[pos] }} />;
      })}

      {/* INDEX + TITLE */}
      <div
        style={{
          padding: "32px 28px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          position: "relative",
          zIndex: 10,
          flexShrink: 0,
          minHeight: 140,
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 10,
            letterSpacing: "0.22em",
            color: open ? G.full : "rgba(255,255,255,0.28)",
            transition: "color 380ms ease",
          }}
        >
          {card.index}
        </span>

        <Typography
          as="h3"
          variant="h3"
          className="text-white leading-snug"
        >
          {card.title}
        </Typography>

        {/* Divider rule */}
        <div
          style={{
            height: 1,
            background: `linear-gradient(to right, ${G.mid}, transparent)`,
            transform: open ? "scaleX(1)" : "scaleX(0.45)",
            transformOrigin: "left",
            transition: `transform 480ms ${EASE} 60ms`,
          }}
        />
      </div>

      {/* IMAGE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 28px 28px",
          position: "relative",
          zIndex: 10,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: open
              ? `radial-gradient(ellipse at center, ${G.faint} 0%, transparent 70%)`
              : "transparent",
            transition: "background 600ms ease",
            pointerEvents: "none",
          }}
        />
        <Image
          src={card.image}
          alt={card.title}
          width={1000}
          height={90}
          style={{
            width: 80,
            height: 80,
            objectFit: "contain",
            position: "relative",
            zIndex: 1,
          }}
        />
      </div>

      {/* DESCRIPTION — always visible */}
      <div
        style={{
          padding: "0 28px 32px",
          position: "relative",
          zIndex: 10,
          flexShrink: 0,
        }}
      >
        <Typography
          as="p"
          variant="body-xl"
          className="text-center"
          style={{ lineHeight: 1.65, color: "white" }}
        >
          {card.description}
        </Typography>
      </div>
    </div>
  );
}

export default function HowWeWorkCards() {
  return (
    <section className="bg-black text-white mx-4 sm:mx-6 lg:mx-12 xl:mx-[clamp(0.5rem,0.5rem+8vw,10rem)] 2xl:mx-[clamp(1rem,1rem+12vw,22rem)]">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 2xl:gap-12">
          {CARDS.map((card) => (
            <HowWeWorkCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}