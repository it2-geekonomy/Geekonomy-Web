"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import Image from "next/image";

export default function SplashScreen() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const paperTextureRef = useRef<HTMLDivElement>(null);
  
  const leftPieceRef = useRef<HTMLDivElement>(null);
  const rightPieceRef = useRef<HTMLDivElement>(null);
  const whiteDotRef = useRef<HTMLDivElement>(null);
  const greenSquareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on home page and only on first visit
    const isHomePage = pathname === "/";
    const hasSeenSplash = localStorage.getItem("splashComplete");
    
    if (!isHomePage || hasSeenSplash === "true") {
      setIsVisible(false);
      return;
    }

    // Show splash screen
    setIsVisible(true);
    
    // Wait for refs to be ready before animating
    const initAnimation = () => {
      // Check if all refs are available
      if (
        !overlayRef.current ||
        !logoContainerRef.current ||
        !paperTextureRef.current ||
        !leftPieceRef.current ||
        !rightPieceRef.current ||
        !whiteDotRef.current ||
        !greenSquareRef.current
      ) {
        // Retry after a short delay if refs aren't ready
        setTimeout(initAnimation, 50);
        return;
      }

      const tl = gsap.timeline();
      
      const allLogoPieces = [
        leftPieceRef.current,
        rightPieceRef.current,
        whiteDotRef.current,
        greenSquareRef.current
      ].filter(Boolean); // Filter out any null refs

      if (allLogoPieces.length === 0) return;

      gsap.set(overlayRef.current, { opacity: 1 });
      gsap.set(logoContainerRef.current, { opacity: 1 });
      gsap.set(paperTextureRef.current, { opacity: 0.3 });
      
      gsap.set(allLogoPieces, {
        transformOrigin: "50% 50%",
        scale: 0.8,
        rotation: 0,
      });
      if (leftPieceRef.current) {
        gsap.set(leftPieceRef.current, { 
          opacity: 0,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          filter: "blur(12px) brightness(0.2) drop-shadow(0 0 25px rgba(255,255,255,0.2))",
          scale: 0.9,
          y: 80, 
          rotation: -8,
          x: -5, 
        });
      }
      
      if (greenSquareRef.current) {
        gsap.set(greenSquareRef.current, { 
          opacity: 0,
          clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
          filter: "blur(15px) brightness(0.1) drop-shadow(0 0 40px rgba(0,255,0,0.5))",
          scale: 0.2,
          rotation: 0,
          x: 50, 
          y: -50,
        });
      }
      
      if (rightPieceRef.current) {
        gsap.set(rightPieceRef.current, { 
          opacity: 0,
          clipPath: "polygon(0% 50%, 0% 50%, 0% 50%, 0% 50%)",
          filter: "blur(10px) brightness(0.2) drop-shadow(0 0 30px rgba(255,255,255,0.2))",
          scale: 0.95,
          x: -120,
          rotation: -3,
          y: 5,
        });
      }
      
      if (whiteDotRef.current) {
        gsap.set(whiteDotRef.current, { 
          opacity: 0,
          clipPath: "circle(0% at 50% 50%)",
          filter: "blur(20px) brightness(0.05) drop-shadow(0 0 60px rgba(255,255,255,0.8))",
          scale: 0,
          x: 3,
          y: -3,
        });
      }

      tl
        // Paper texture fades in with subtle animation
        .to(paperTextureRef.current, {
          opacity: 0.6,
          duration: 0.5,
          ease: "power2.out",
        })
        
        // Left piece animations
        .to(leftPieceRef.current, {
          opacity: 0.5,
          clipPath: "polygon(0% 85%, 100% 85%, 100% 100%, 0% 100%)",
          filter: "blur(8px) brightness(0.4) drop-shadow(0 0 30px rgba(255,255,255,0.3))",
          y: 50,
          rotation: -6,
          x: -3,
          scale: 0.95,
          duration: 0.25,
          ease: "power3.out",
        })
        .to(leftPieceRef.current, {
          opacity: 0.85,
          clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)",
          filter: "blur(4px) brightness(0.7) drop-shadow(0 0 25px rgba(255,255,255,0.5))",
          y: 20,
          rotation: -2,
          x: -1,
          scale: 0.98,
          duration: 0.35,
          ease: "power2.inOut",
        })
        .to(leftPieceRef.current, {
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          filter: "blur(0px) brightness(1.15) drop-shadow(0 0 25px rgba(255,255,255,0.5))",
          y: 0,
          rotation: 0,
          x: 0,
          scale: 1,
          duration: 0.45,
          ease: "power1.out",
        })
        .to(leftPieceRef.current, {
          scale: 1.02,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        }, "-=0.1")
        
        // Green square animations
        .to(greenSquareRef.current, {
          opacity: 0.6,
          clipPath: "polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%)",
          filter: "blur(12px) brightness(0.3) drop-shadow(0 0 45px rgba(0,255,0,0.6))",
          scale: 0.4,
          rotation: 0,
          x: 40,
          y: -40,
          duration: 0.3,
          ease: "power3.out",
        }, "-=0.45")
        .to(greenSquareRef.current, {
          opacity: 0.9,
          clipPath: "polygon(15% 15%, 85% 15%, 85% 85%, 15% 85%)",
          filter: "blur(5px) brightness(0.85) drop-shadow(0 0 35px rgba(0,255,0,0.7))",
          scale: 0.85,
          rotation: 0,
          x: 20,
          y: -20,
          duration: 0.35,
          ease: "power2.inOut",
        })
        .to(greenSquareRef.current, {
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          filter: "blur(0px) brightness(1.25) drop-shadow(0 0 20px rgba(0,255,0,0.5))",
          scale: 1,
          rotation: 0,
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.6)",
        })
        .to(greenSquareRef.current, {
          scale: 1.08,
          rotation: 0,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        }, "-=0.15")
        
        // Right piece animations
        .to(rightPieceRef.current, {
          opacity: 0.6,
          clipPath: "polygon(0% 50%, 15% 50%, 15% 50%, 0% 50%)",
          filter: "blur(8px) brightness(0.4) drop-shadow(0 0 35px rgba(255,255,255,0.3))",
          x: -100,
          rotation: -2,
          y: 3,
          scale: 0.97,
          duration: 0.25,
          ease: "power3.out",
        }, "-=0.4")
        .to(rightPieceRef.current, {
          opacity: 0.9,
          clipPath: "polygon(0% 0%, 70% 0%, 70% 100%, 0% 100%)",
          filter: "blur(3px) brightness(0.8) drop-shadow(0 0 28px rgba(255,255,255,0.5))",
          x: -30,
          rotation: -1,
          y: 1,
          scale: 0.99,
          duration: 0.4,
          ease: "power2.inOut",
        })
        .to(rightPieceRef.current, {
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          filter: "blur(0px) brightness(1.15) drop-shadow(0 0 22px rgba(255,255,255,0.5))",
          x: 0,
          rotation: 0,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "power1.out",
        })
        .to(rightPieceRef.current, {
          scale: 1.01,
          duration: 0.12,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        }, "-=0.1")

        // White dot animations
        .to(whiteDotRef.current, {
          opacity: 0.9,
          clipPath: "circle(3% at 50% 50%)",
          filter: "blur(15px) brightness(0.2) drop-shadow(0 0 60px rgba(255,255,255,0.9))",
          scale: 0.2,
          x: 2,
          y: -2,
          duration: 0.2,
          ease: "power4.out",
        }, "-=0.35")
        .to(whiteDotRef.current, {
          opacity: 0.98,
          clipPath: "circle(25% at 50% 50%)",
          filter: "blur(8px) brightness(0.6) drop-shadow(0 0 50px rgba(255,255,255,0.8))",
          scale: 0.6,
          x: 1,
          y: -1,
          duration: 0.3,
          ease: "power2.inOut",
        })
        .to(whiteDotRef.current, {
          opacity: 1,
          clipPath: "circle(100% at 50% 50%)",
          filter: "blur(0px) brightness(1.4) drop-shadow(0 0 30px rgba(255,255,255,0.6))",
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
        })
        .to(whiteDotRef.current, {
          scale: 1.1,
          filter: "brightness(1.5) drop-shadow(0 0 40px rgba(255,255,255,0.7))",
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        }, "-=0.2")
      
      .to(allLogoPieces, {
        filter: "brightness(1.3) drop-shadow(0 0 35px rgba(255,255,255,0.8))",
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out",
      }, "-=0.15")
      .to(allLogoPieces, {
        filter: "brightness(1.15) drop-shadow(0 0 25px rgba(255,255,255,0.6))",
        scale: 1,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(allLogoPieces, {
        scale: 1.01,
        filter: "brightness(1.2) drop-shadow(0 0 30px rgba(255,255,255,0.7))",
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
      }, "-=0.2")
      
      // Hold - let logo shine
      .to(allLogoPieces, {
        duration: 0.7,
        ease: "none",
      })
      
      .to(allLogoPieces, {
        scale: 1.12,
        opacity: 0.9,
        filter: "brightness(1.1) blur(2px) drop-shadow(0 0 40px rgba(255,255,255,0.4))",
        duration: 0.35,
        ease: "power2.out",
      })
      .to(allLogoPieces, {
        scale: 1.5,
        opacity: 0.6,
        filter: "brightness(0.85) blur(8px) drop-shadow(0 0 50px rgba(255,255,255,0.25))",
        duration: 0.45,
        ease: "power2.inOut",
      }, "-=0.1")
      .to(allLogoPieces, {
        scale: 2.2,
        opacity: 0.25,
        filter: "brightness(0.5) blur(20px) drop-shadow(0 0 60px rgba(255,255,255,0.1))",
        duration: 0.55,
        ease: "power2.inOut",
      }, "-=0.15")
      .to(allLogoPieces, {
        scale: 3.8,
        opacity: 0.05,
        filter: "brightness(0.3) blur(40px)",
        duration: 0.6,
        ease: "power2.inOut",
      }, "-=0.2")
      .to(allLogoPieces, {
        scale: 5.5,
        opacity: 0,
        filter: "brightness(0.1) blur(70px)",
        duration: 0.5,
        ease: "power3.in",
      }, "-=0.25")
      
      // Overlay fades out smoothly
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          // Store in localStorage so it only shows once ever
          localStorage.setItem("splashComplete", "true");
          // Also set in sessionStorage for PageReveal compatibility
          sessionStorage.setItem("splashComplete", "true");
          setIsVisible(false);
        },
      }, "-=0.35");
    };

    // Initialize animation after component is visible
    initAnimation();
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div 
      ref={overlayRef}
      className="splash-overlay fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      <div
        ref={paperTextureRef}
        className="absolute inset-0 pointer-events-none paper-texture"
      />


      {/* Logo container */}
      <div 
        ref={logoContainerRef}
        className="relative flex items-center justify-center w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem]"
      >
        <div
          ref={leftPieceRef}
          className="absolute left-[20%] top-[40%] w-20 h-48 sm:w-24 sm:h-56 md:w-26 md:h-26 z-10"
        >
          <Image
            src="/Geekonomy icon white svg file-01.svg"
            alt="Left Logo Piece"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Green square - Geekonomy icon white svg file-04.svg (above left piece, top-right corner with slight space) */}
        <div
          ref={greenSquareRef}
          className="absolute right-[47.5%] top-[34.5%] w-12 h-12 sm:w-16 sm:h-16 md:w-23 md:h-23 z-10"
        >
          <Image
            src="/Geekonomy icon white svg file-04.svg"
            alt="Green Square"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Right piece - Geekonomy icon white svg file-03.svg (horizontal bar extending from middle, then down - below left piece with equal space) */}
        <div
          ref={rightPieceRef}
          className="absolute left-[29%] top-[45.5%] w-48 h-12 sm:w-56 sm:h-16 md:w-23 md:h-23 z-10"
        >
          <Image
            src="/Geekonomy icon white svg file-03.svg"
            alt="Right Logo Piece"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* White dot - Geekonomy icon white svg file-02.svg (centered among all pieces - inside P shape) */}
        <div
          ref={whiteDotRef}
          className="absolute left-[35.5%] top-[52%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 z-10"
        >
          <Image
            src="/Geekonomy icon white svg file-02.svg"
            alt="White Dot"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
