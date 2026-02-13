"use client";

import { useNavbar } from "@/hooks/useNavbar";
import { NavbarLogo } from "./Navbar/NavbarLogo";
import { DesktopNav } from "./Navbar/DesktopNav";
import { MobileNav } from "./Navbar/MobileNav";

export default function Navbar() {
  const {
    isMenuOpen,
    isMounted,
    pathname,
    toggleMenu,
    closeMenu,
    handleNavigation,
  } = useNavbar();

  return (
    <nav className="bg-black w-full relative">
      <div className="px-4 sm:px-6 lg:px-6 xl:px-10 py-4">
        <div className="flex items-center justify-between">
          <NavbarLogo
            pathname={pathname}
            onNavigate={handleNavigation}
            onCloseMenu={closeMenu}
          />

          <DesktopNav
            pathname={pathname}
            isMounted={isMounted}
            onNavigate={handleNavigation}
          />

          <MobileNav
            isMenuOpen={isMenuOpen}
            isMounted={isMounted}
            pathname={pathname}
            onToggleMenu={toggleMenu}
            onCloseMenu={closeMenu}
            onNavigate={handleNavigation}
          />
        </div>
      </div>
    </nav>
  );
}
