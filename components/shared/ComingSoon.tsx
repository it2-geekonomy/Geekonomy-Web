"use client";

import { Typography } from "@/components/ui/Typography";
import Link from "next/link";

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-10">
      <div className="text-center max-w-2xl mx-auto">
        <Typography
          as="h1"
          variant="4xl"
          className="text-white font-semibold uppercase tracking-tight mb-6"
        >
          {title}
        </Typography>
        
        <Typography
          as="p"
          variant="2xl"
          className="text-[#6FAF4E] font-normal mb-8"
        >
          Coming Soon
        </Typography>
        
        <Typography
          as="p"
          variant="lg"
          className="text-[#A0A0A0] font-normal leading-relaxed mb-12"
        >
          We're working on something amazing. Check back soon!
        </Typography>
        
        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-full bg-[#6eaf4c]/30 border border-[#6eaf4c] text-white uppercase text-sm font-normal transition-all duration-200 hover:bg-[#6eaf4c]/40"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
