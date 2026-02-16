import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { Typography } from "@/components/ui/Typography";

interface MobileNavProps {
  isMenuOpen: boolean;
  isMounted: boolean;
  pathname: string;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function MobileNav({
  isMenuOpen,
  isMounted,
  pathname,
  onToggleMenu,
  onCloseMenu,
  onNavigate,
}: MobileNavProps) {
  return (
    <>
      <div className="lg:hidden flex items-center gap-2 sm:gap-3 shrink-0">
        <Link
          href="/contact#form"
          className="inline-block bg-[#69AE44] text-white border-2 border-transparent px-6 sm:px-10 py-2 sm:py-3 rounded-full font-semibold uppercase transition-all duration-200 hover:bg-transparent hover:border-[#69AE44] hover:text-[#69AE44] hover:scale-105 whitespace-nowrap"
        >
          <Typography as="span" variant="sm" className="font-normal">
            GET IN TOUCH
          </Typography>
        </Link>

        <button
          onClick={onToggleMenu}
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
                    onCloseMenu();
                    onNavigate(e, item.href);
                  }}
                  className={`block font-medium uppercase transition-all duration-300 py-3 px-4 rounded-lg ${
                    isActive
                      ? "text-[#69AE44]"
                      : "text-white hover:text-[#69AE44] hover:bg-gray-900"
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

      <div
        className={`lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-30 transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onCloseMenu}
      />
    </>
  );
}
