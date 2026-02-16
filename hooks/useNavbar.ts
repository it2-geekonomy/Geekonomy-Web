import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";

export function useNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const router = useRouter();
  const curtainRef = useRef<HTMLDivElement | null>(null);

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
    if (href === pathname) {
      return;
    }

    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      router.push(href);
      return;
    }

    e.preventDefault();

    let curtain = curtainRef.current;
    if (!curtain) {
      curtain = document.createElement("div");
      curtain.className = "fixed top-0 left-0 w-full h-full bg-black pointer-events-none";
      curtain.setAttribute("data-page-curtain", "true");
      curtain.style.display = "none";
      curtain.style.zIndex = "99999";

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

    gsap.killTweensOf(curtain);

    const windowHeight = window.innerHeight;

    gsap.set(curtain, {
      y: -windowHeight,
      opacity: 1,
      display: "block",
    });

    gsap.to(curtain, {
      y: 0,
      duration: 1.8,
      ease: "power1.out",
      onComplete: () => {
        router.push(href);
      },
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
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

  return {
    isMenuOpen,
    isMounted,
    pathname,
    toggleMenu,
    closeMenu,
    handleNavigation,
  };
}
