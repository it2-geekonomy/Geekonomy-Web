"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { Typography } from "@/components/ui/Typography";
import { gsap } from "gsap";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const router = useRouter();
  const curtainRef = useRef<HTMLDivElement | null>(null);

  // Fix hydration: only use pathname after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Don't transition if clicking the same page
    if (href === pathname) {
      return;
    }

    // Only show transition on desktop (>= 1024px) - check if window exists
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      router.push(href);
      return;
    }

    e.preventDefault();
    
    // Get or create curtain element
    let curtain = curtainRef.current;
    if (!curtain) {
      curtain = document.createElement("div");
      curtain.className = "fixed top-0 left-0 w-full h-full bg-black pointer-events-none";
      curtain.setAttribute("data-page-curtain", "true");
      curtain.style.display = "none";
      curtain.style.zIndex = "9999";
      
      // Add logo in center of curtain - bigger and responsive
      const logo = document.createElement("img");
      logo.src = "/Geekonomy Logo.webp";
      logo.alt = "Geekonomy Logo";
      logo.style.position = "absolute";
      logo.style.top = "50%";
      logo.style.left = "50%";
      logo.style.transform = "translate(-50%, -50%)";
      logo.style.width = "clamp(300px, 25vw, 500px)";
      logo.style.height = "auto";
      logo.style.opacity = "1";
      logo.style.maxWidth = "90%";
      logo.setAttribute("data-curtain-logo", "true");
      curtain.appendChild(logo);
      
      document.body.appendChild(curtain);
      curtainRef.current = curtain;
    }

    // Kill any existing animations on curtain
    gsap.killTweensOf(curtain);
    
    const windowHeight = window.innerHeight;
    
    // Set initial state - curtain at top, logo visible normally
    gsap.set(curtain, {
      y: -windowHeight,
      opacity: 1,
      display: "block",
    });

    // Smooth slow curtain drop - THEN navigate
    gsap.to(curtain, {
      y: 0,
      duration: 1.8,
      ease: "power1.out",
      onComplete: () => {
        // Navigate when curtain is fully down
        router.push(href);
      },
    });
  };

  // Close menu on upward scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If scrolling up and menu is open, close it
      if (currentScrollY < lastScrollY.current && isMenuOpen) {
        setIsMenuOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    if (isMenuOpen) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-black w-full relative">
      <div className="px-4 sm:px-6 lg:px-6 xl:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Always on left */}
          <Link 
            href="/" 
            className="flex items-center gap-2 sm:gap-3 z-50 shrink-0" 
            onClick={(e) => {
              closeMenu();
              if (pathname !== "/") {
                handleNavigation(e, "/");
              }
            }}
          >
            <Image
              src="/Geekonomy Logo.webp"
              alt="GEEKONOMY Logo"
              width={350}
              height={350}
              className="object-contain w-[clamp(190px,10vw,150px)] sm:w-[clamp(250px,10vw,150px)] lg:w-70 xl:w-full"
              priority
            />
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <ul className="hidden lg:flex items-center gap-6 lg:gap-3 xl:gap-9 2xl:gap-20">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = isMounted && (pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href)));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className={`font-normal uppercase transition-colors duration-200 ${
                      isActive
                        ? "text-[#6FAF4E]"
                        : "text-white hover:text-[#6FAF4E]"
                    }`}
                  >
                    <Typography as="span" variant="base" className="font-normal">
                      {item.label}
                    </Typography>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile: GET IN TOUCH button and Hamburger Menu */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="/contact#form"
              className="inline-block bg-[#6FAF4E]/80 text-white border-2 border-transparent px-6 sm:px-10 py-2 sm:py-3 rounded-full font-semibold uppercase transition-all duration-200 hover:bg-transparent hover:border-[#6FAF4E] hover:text-[#6FAF4E] hover:scale-105 whitespace-nowrap"
            >
              <Typography as="span" variant="sm" className="font-normal">
                GET IN TOUCH
              </Typography>
            </Link>
            
            <button
              onClick={toggleMenu}
              className="z-50 p-1.5 sm:p-2 transition-all duration-300 shrink-0 translate-y-2 sm:mx-5 md:mx-10"
              aria-label="Toggle menu"
            >
              <div className="relative w-7 h-7 flex">
                <Image
                  src="/mobile navigaton but.webp"
                  alt="Menu"
                  width={28}
                  height={28}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen
                      ? "opacity-0 rotate-90 scale-0"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  size={28}
                  className={`absolute inset-0 text-[#6eaf4c] transition-all duration-300 ${
                    isMenuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slides in from top with animation */}
        <div
          className={`lg:hidden fixed top-0 left-0 right-0 h-screen pt-20 bg-black z-40 transition-all duration-500 ease-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center justify-start gap-8 pt-8 px-4">
            {NAVIGATION_ITEMS.map((item, index) => {
              const isActive = isMounted && (pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href)));
              return (
                <li
                  key={item.href}
                  className="w-full text-center"
                  style={{
                    animation: isMenuOpen
                      ? `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                      : "none",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      closeMenu();
                      handleNavigation(e, item.href);
                    }}
                    className={`block font-medium uppercase transition-all duration-300 py-3 px-4 rounded-lg ${
                      isActive
                        ? "text-[#6FAF4E] bg-[#6FAF4E]/10"
                        : "text-white hover:text-[#6FAF4E] hover:bg-gray-900"
                    }`}
                  >
                    <Typography as="span" variant="lg">
                      {item.label}
                    </Typography>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Overlay - Mobile only with fade animation */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-30 transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        />
      </div>
    </nav>
  );
}
