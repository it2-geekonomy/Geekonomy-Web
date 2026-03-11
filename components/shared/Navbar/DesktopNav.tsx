import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { Typography } from "@/components/ui/Typography";

interface DesktopNavProps {
  pathname: string;
  isMounted: boolean;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  showFullNav: boolean;
  onToggleMenu: () => void;
  isMenuOpen: boolean;
}

export function DesktopNav({ 
  pathname, 
  isMounted, 
  onNavigate, 
  showFullNav, 
  onToggleMenu,
  isMenuOpen 
}: DesktopNavProps) {
  return (
    <div className="relative w-full flex justify-end">
      {/* Full Navigation - shown when in banner on home page */}
      <ul className={`hidden lg:flex items-center gap-6 lg:gap-6 xl:gap-12 2xl:gap-20 transition-all duration-500 ease-in-out ${
        showFullNav 
          ? "opacity-100 translate-x-0 scale-100" 
          : "opacity-0 translate-x-full scale-0 pointer-events-none absolute right-0"
      }`}>
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = isMounted && (pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href)));
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(e) => onNavigate(e, item.href)}
                className={`font-normal uppercase transition-colors duration-200 ${
                  isActive
                    ? "text-[#69AE44]"
                    : "text-white hover:text-[#69AE44]"
                }`}
              >
                <Typography 
                  as="span" 
                  variant="body-lg" 
                  className={`font-normal uppercase ${
                    isActive
                      ? "text-[#69AE44]"
                      : "text-white hover:text-[#69AE44]"
                  }`}
                >
                  {item.label}
                </Typography>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Menu Icon - shown when scrolled past banner or on other pages */}
      <div className={`hidden lg:flex items-center transition-all duration-500 ease-in-out ${
        showFullNav 
          ? "opacity-0 -translate-x-full pointer-events-none absolute right-0" 
          : "opacity-100 translate-x-0 relative z-50"
      }`}>
        <button
          onClick={onToggleMenu}
          className="z-50 p-1.5 sm:p-2 transition-all duration-300 shrink-0"
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

      {/* Desktop Menu Overlay - shown when menu icon is clicked */}
      <div
        className={`hidden lg:block fixed top-0 right-0 h-screen w-full max-w-md bg-black z-40 transition-all duration-500 ease-out ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-24 px-8">
          <ul className="flex flex-col items-start gap-6">
            {NAVIGATION_ITEMS.map((item, index) => {
              const isActive = isMounted && (pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href)));
              return (
                <li
                  key={item.href}
                  className="w-full"
                  style={{
                    animation: isMenuOpen
                      ? `fadeInRight 0.5s ease-out ${index * 0.1}s both`
                      : "none",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      onNavigate(e, item.href);
                      onToggleMenu();
                    }}
                    className={`block font-medium uppercase transition-all duration-300 py-3 px-4 rounded-lg ${
                      isActive
                        ? "text-[#69AE44]"
                        : "text-white hover:text-[#69AE44] hover:bg-gray-900"
                    }`}
                  >
                    <Typography 
                      as="span" 
                      variant="body-xl"
                      className={isActive ? "text-[#69AE44]" : "text-white"}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`hidden lg:block fixed inset-0 bg-black/70 backdrop-blur-sm z-30 transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onToggleMenu}
      />
    </div>
  );
}
