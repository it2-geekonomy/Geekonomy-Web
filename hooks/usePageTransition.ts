"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { gsap } from "gsap";

export function usePageTransition() {
  const router = useRouter();
  const curtainRef = useRef<HTMLDivElement | null>(null);

  const navigateWithTransition = (href: string) => {
    // Get or create curtain element
    let curtain = curtainRef.current;
    if (!curtain) {
      curtain = document.createElement("div");
      curtain.className = "fixed top-0 left-0 w-full h-full bg-black pointer-events-none";
      curtain.style.display = "none";
      curtain.style.zIndex = "9999";
      document.body.appendChild(curtain);
      curtainRef.current = curtain;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        // Navigate when curtain is fully down
        router.push(href);
        
        // After navigation, lift curtain and remove
        setTimeout(() => {
          gsap.to(curtain, {
            y: "-100%",
            duration: 0.5,
            ease: "power3.inOut",
            onComplete: () => {
              if (curtain && curtain.parentNode) {
                curtain.style.display = "none";
              }
            },
          });
        }, 100);
      },
    });

    // Drop curtain from top
    tl.set(curtain, {
      y: "-100%",
      opacity: 1,
      display: "block",
    }).to(curtain, {
      y: "0%",
      duration: 0.6,
      ease: "power3.inOut",
    });
  };

  return { navigateWithTransition };
}
