"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis scroll engine with soft luxury inertia
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential decay easing
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.8,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    // Direct Lenis scroll events to update GSAP ScrollTrigger calculations
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Feed Lenis frame ticks into the high-performance GSAP requestAnimationFrame ticker
    const rafCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafCallback);

    // Disable GSAP lag smoothing to maintain lock-step synchronization between scroll position and visuals
    gsap.ticker.lagSmoothing(0);

    // Handle initial hash routing anchor scrolls smoothly
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.hash && anchor.hash.startsWith("#") && anchor.origin === window.location.origin) {
        const element = document.querySelector(anchor.hash) as HTMLElement;
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, {
            offset: -80,
            duration: 1.5,
            immediate: false,
          });
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      // Clean up resources on unmount
      window.lenis = undefined;
      lenis.destroy();
      gsap.ticker.remove(rafCallback);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}
