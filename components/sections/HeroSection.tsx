"use client";

import HeroMobile from "./HeroMobile";
import HeroDesktop from "./HeroDesktop";

export default function HeroSection() {
  return (
    <section className="relative w-full h-full flex items-center bg-black overflow-hidden">
      <HeroMobile />
      <HeroDesktop />
    </section>
  );
}
