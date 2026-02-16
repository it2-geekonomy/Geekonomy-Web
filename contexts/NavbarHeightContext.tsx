"use client";

import { createContext, useContext, useLayoutEffect, useState, useCallback, useRef, ReactNode } from "react";

interface NavbarHeightContextType {
  navbarHeight: number;
  setNavbarRef: (ref: HTMLElement | null) => void;
}

const NavbarHeightContext = createContext<NavbarHeightContextType | undefined>(undefined);

export function NavbarHeightProvider({ children }: { children: ReactNode }) {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [navbarElement, setNavbarElement] = useState<HTMLElement | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const resizeHandlerRef = useRef<(() => void) | null>(null);

  const measureHeight = useCallback(() => {
    if (!navbarElement) return;
    
    const height = navbarElement.offsetHeight;
    if (height > 0) {
      setNavbarHeight(height);
      // Set on both navbar element and document root for redundancy
      navbarElement.style.setProperty("--navbar-height", `${height}px`);
      document.documentElement.style.setProperty("--navbar-height", `${height}px`);
    }
  }, [navbarElement]);

  const handleSetNavbarRef = useCallback((ref: HTMLElement | null) => {
    setNavbarElement(ref);
  }, []);

  useLayoutEffect(() => {
    if (!navbarElement) return;

    // Measure immediately after layout
    measureHeight();

    // Also measure on next frame to catch any delayed rendering (images, fonts, etc.)
    requestAnimationFrame(() => {
      measureHeight();
    });

    // Set up ResizeObserver for responsive updates
    const resizeObserver = new ResizeObserver(() => {
      measureHeight();
    });

    resizeObserver.observe(navbarElement);
    resizeObserverRef.current = resizeObserver;

    // Also listen to window resize as fallback
    const handleResize = () => measureHeight();
    resizeHandlerRef.current = handleResize;
    window.addEventListener("resize", handleResize);

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
      if (resizeHandlerRef.current) {
        window.removeEventListener("resize", resizeHandlerRef.current);
        resizeHandlerRef.current = null;
      }
    };
  }, [measureHeight, navbarElement]);

  return (
    <NavbarHeightContext.Provider value={{ navbarHeight, setNavbarRef: handleSetNavbarRef }}>
      {children}
    </NavbarHeightContext.Provider>
  );
}

export function useNavbarHeight() {
  const context = useContext(NavbarHeightContext);
  if (context === undefined) {
    // During SSR/prerendering, return a safe default
    if (typeof window === "undefined") {
      return {
        navbarHeight: 0,
        setNavbarRef: () => {},
      };
    }
    throw new Error("useNavbarHeight must be used within a NavbarHeightProvider");
  }
  return context;
}
