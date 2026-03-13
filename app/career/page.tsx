"use client";

import { Typography } from "@/components/ui/Typography";
import Link from "next/link";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-black flex items-start justify-center px-4 sm:px-6 lg:px-10 pt-[20vh] sm:pt-[25vh]">
      <div className="text-center max-w-2xl mx-auto">
        <Typography
          as="h1"
          variant="display-2xl"
          className="text-white font-semibold uppercase tracking-tight mb-6"
        >
          CAREER
        </Typography>
        
        <Typography
          as="p"
          variant="h4"
          className="text-white font-normal leading-relaxed mb-4"
        >
          We are actively seeking talented individuals to join our team.
        </Typography>
        
        <Typography
          as="p"
          variant="h4"
          className="text-white font-normal leading-relaxed mb-8"
        >
          Please send your resume to:
        </Typography>
        
        <Typography
          as="p"
          variant="h4"
          className="text-[#69AE44] font-normal mb-12"
        >
          <a 
            href="mailto:hr@geekonomy.in" 
            className="hover:underline transition-all duration-200"
          >
            hr@geekonomy.in
          </a>
        </Typography>
        
        <Link
          href="/"
          className="inline-block bg-[#69AE44] text-white border-2 border-transparent px-10 py-3 rounded-full font-semibold uppercase transition-all duration-200 hover:bg-transparent hover:border-[#69AE44] hover:text-[#69AE44] hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
