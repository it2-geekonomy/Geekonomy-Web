"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { Typography } from "@/components/ui/Typography";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
      <div className="px-4 sm:px-6 lg:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Always on left */}
          <Link href="/" className="flex items-center gap-3 z-50" onClick={closeMenu}>
            <Image
              src="/Geekonomy Logo.webp"
              alt="GEEKONOMY Logo"
              width={350}
              height={350}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <ul className="hidden lg:flex items-center gap-6 lg:gap-7 xl:gap-18 2xl:gap-24">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-medium uppercase transition-colors duration-200 ${
                    item.isActive
                      ? "text-accent-green"
                      : "text-white hover:text-accent-green"
                  }`}
                >
                  <Typography as="span" variant="lg">
                    {item.label}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu Button - Mobile only */}
          <button
            onClick={toggleMenu}
            className="lg:hidden z-50 p-2 rounded-lg transition-all duration-300 hover:bg-gray-900"
            aria-label="Toggle menu"
          >
            <div className="relative w-7 h-7">
              <Menu
                size={28}
                className={`absolute inset-0 text-white transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-0 rotate-90 scale-0"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                size={28}
                className={`absolute inset-0 text-white hover:text-accent-green transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-0"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu - Slides in from top with animation */}
        <div
          className={`lg:hidden fixed top-0 left-0 right-0 bg-black z-40 transition-all duration-500 ease-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
          style={{ height: "100vh", paddingTop: "80px" }}
        >
          <ul className="flex flex-col items-center justify-start gap-8 pt-8 px-4">
            {NAVIGATION_ITEMS.map((item, index) => (
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
                  onClick={closeMenu}
                  className={`block font-medium uppercase transition-all duration-300 py-3 px-4 rounded-lg ${
                    item.isActive
                      ? "text-accent-green bg-accent-green/10"
                      : "text-white hover:text-accent-green hover:bg-gray-900"
                  }`}
                >
                  <Typography as="span" variant="lg">
                    {item.label}
                  </Typography>
                </Link>
              </li>
            ))}
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
