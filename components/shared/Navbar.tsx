"use client";

import { useCallback, useLayoutEffect, useRef, useState, useEffect } from "react";
import { useNavbar } from "@/hooks/useNavbar";
import { useNavbarHeight } from "@/contexts/NavbarHeightContext";
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

  const [isInBanner, setIsInBanner] = useState(true);

  useEffect(() => {
    // Reset to true when pathname changes
    setIsInBanner(true);

    const checkScrollPosition = () => {
      // Try to find first section - check main first, then body
      const firstSection = document.querySelector('main > section:first-of-type') || 
                          document.querySelector('main section:first-of-type') ||
                          document.querySelector('body > section:first-of-type') ||
                          document.querySelector('section:first-of-type');
      
      if (!firstSection) {
        setIsInBanner(false);
        return;
      }

      const sectionRect = firstSection.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      
      // Check if first section is visible in viewport (at least 20% visible)
      const viewportHeight = window.innerHeight;
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;
      
      // Section is considered visible if any part of it is in the viewport
      // and we haven't scrolled past most of it
      const isSectionVisible = sectionBottom > 0 && sectionTop < viewportHeight;
      const scrollPastThreshold = scrollY > (sectionRect.height * 0.2); // Scrolled past 20% of section
      
      setIsInBanner(isSectionVisible && !scrollPastThreshold);
    };

    // Initial check after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      checkScrollPosition();
    }, 100);

    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    window.addEventListener('resize', checkScrollPosition);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, [pathname]);

  const navRef = useRef<HTMLElement>(null);
  const { setNavbarRef } = useNavbarHeight();

  // Set CSS variable directly on the navbar element for immediate, synchronous update
  const navRefCallback = useCallback(
    (node: HTMLElement | null) => {
      navRef.current = node;
      setNavbarRef(node);
      
      if (node && typeof window !== "undefined" && typeof document !== "undefined") {
        // Measure and set CSS variable with multiple strategies to ensure we catch it
        const measureAndSet = () => {
          // Force a reflow to ensure layout is calculated
          void node.offsetHeight;
          const height = node.offsetHeight;
          if (height > 0) {
            node.style.setProperty("--navbar-height", `${height}px`);
            if (document.documentElement) {
              document.documentElement.style.setProperty("--navbar-height", `${height}px`);
            }
          }
        };
        
        // Immediate measurement (may be 0 if not laid out yet)
        measureAndSet();
        
        // Measure synchronously after DOM update
        requestAnimationFrame(() => {
          measureAndSet();
          // Double-check after another frame
          requestAnimationFrame(measureAndSet);
        });
      }
    },
    [setNavbarRef]
  );

  // Also measure on layout changes and when component mounts
  useLayoutEffect(() => {
    if (!navRef.current || typeof window === "undefined" || typeof document === "undefined") return;
    
    const measureHeight = () => {
      const height = navRef.current?.offsetHeight;
      if (height && height > 0 && document.documentElement) {
        navRef.current?.style.setProperty("--navbar-height", `${height}px`);
        document.documentElement.style.setProperty("--navbar-height", `${height}px`);
      }
    };

    // Measure immediately
    measureHeight();
    
    // Measure on next frame
    requestAnimationFrame(() => {
      measureHeight();
      // One more check after layout
      requestAnimationFrame(measureHeight);
    });
  });

  return (
    <nav ref={navRefCallback} className="bg-black w-full fixed top-0 left-0 right-0 z-50">
      <div className="px-4 sm:px-6 lg:px-6 xl:px-10 py-2 lg:py-0">
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
            showFullNav={isInBanner}
            onToggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
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
