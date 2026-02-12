"use client";

import { Typography } from "@/components/ui/Typography";
import Link from "next/link";

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <main className="min-h-screen bg-black flex items-start justify-center px-4 sm:px-6 lg:px-10 pt-[20vh] sm:pt-[25vh]">
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
          className="inline-block bg-[#6FAF4E]/80 text-white border-2 border-transparent px-10 py-3 rounded-full font-semibold uppercase transition-all duration-200 hover:bg-transparent hover:border-[#6FAF4E] hover:text-[#6FAF4E] hover:scale-105"
        >
          <Typography as="span" variant="sm" className="font-normal">
            Back to Home
          </Typography>
        </Link>
      </div>
    </main>
  );
}
