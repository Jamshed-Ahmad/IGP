"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticWrapper from "@/components/MagneticWrapper";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);
  
  // Refs for ScrollTrigger parallax layers
  const skyRef = useRef<HTMLDivElement>(null);
  const buildingRef = useRef<HTMLDivElement>(null);
  const reflectionRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);
  
  // Mouse hover parallax state variables
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Calculate values between -1 and 1
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  useEffect(() => {
    setIsLoaded(true);

    // Canvas floating dust particles (Warm gold color)
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Array<{ x: number; y: number; size: number; speedY: number; opacity: number; angle: number; drift: number }> = [];
    
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize 35 gold micro-particles
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedY: -(Math.random() * 0.3 + 0.1),
        opacity: Math.random() * 0.45 + 0.1,
        angle: Math.random() * Math.PI * 2,
        drift: Math.random() * 0.15 - 0.075,
      });
    }

    const drawParticles = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(197, 168, 128, 0.45)"; // Soft gold color particles
      
      particles.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        p.y += p.speedY;
        p.x += Math.sin(p.angle) * p.drift;
        p.angle += 0.007;
        
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
      });
      animationFrameId = requestAnimationFrame(drawParticles);
    };
    drawParticles();

    // GSAP ScrollTrigger skyscraper revealing timeline
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.0,
      }
    });

    scrollTl
      .to(skyRef.current, { yPercent: 12, ease: "none" }, 0)
      .to(buildingRef.current, { yPercent: -14, scale: 1.12, ease: "none" }, 0)
      .to(reflectionRef.current, { yPercent: 95, xPercent: 95, ease: "none" }, 0)
      .to(sunRef.current, { xPercent: 130, opacity: 0.8, ease: "none" }, 0)
      .to(foregroundRef.current, { yPercent: -18, ease: "none" }, 0);

    // GSAP Stat Counter rolling increment
    const targets = statsRef.current?.querySelectorAll(".stat-counter");
    if (targets) {
      targets.forEach((target) => {
        const val = parseFloat(target.getAttribute("data-target") || "0");
        const isCr = target.getAttribute("data-cr") === "true";
        const decimals = target.getAttribute("data-decimals") === "true";
        const obj = { value: 0 };
        
        gsap.to(obj, {
          value: val,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: target,
            start: "top 92%",
          },
          onUpdate: () => {
            if (decimals) {
              target.textContent = obj.value.toFixed(1) + (isCr ? " Cr+" : "+");
            } else {
              target.textContent = Math.floor(obj.value).toLocaleString() + (isCr ? " Cr+" : "+");
            }
          },
        });
      });
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#projects") as HTMLElement;
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          offset: -80,
          duration: 1.5,
          immediate: false,
        });
      } else {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#contact") as HTMLElement;
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          offset: -80,
          duration: 1.5,
          immediate: false,
        });
      } else {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      id="top"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-background"
    >
      {/* Layered Cinematic Parallax Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Layer 1: Sky & Shifting Sunlight Glow */}
        <div 
          ref={skyRef}
          className="absolute inset-0 transition-transform duration-300"
          style={{ transform: `translate3d(${mousePos.x * -4}px, ${mousePos.y * -4}px, 0)` }}
        >
          {/* Natural sunlight shifts coordinates on hover/scroll */}
          <div 
            ref={sunRef}
            className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-gold/15 rounded-full blur-[100px] transition-all duration-700 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-10" />
        </div>

        {/* Layer 2: Main Skyscraper Rising */}
        <motion.div
          ref={buildingRef}
          initial={{ scale: 1.18, y: "8%" }}
          animate={isLoaded ? { scale: 1.05, y: 0 } : {}}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 transition-transform duration-300 z-1"
          style={{ transform: `translate3d(${mousePos.x * 6}px, ${mousePos.y * 6}px, 0)` }}
        >
          <Image
            src="/assets/hero-bg.jpg"
            alt="Luxury Skyscraper"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Dynamic Glass Reflection Sheen */}
          <div 
            ref={reflectionRef}
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full -translate-y-full rotate-12 z-2"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background z-3" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/25 to-background z-3" />
        </motion.div>

        {/* Layer 3: Skyline silhouette moving slower */}
        <div 
          className="absolute top-1/3 right-10 w-[45%] h-auto opacity-20 pointer-events-none z-4 hidden lg:block transition-transform duration-300"
          style={{ transform: `translate3d(${mousePos.x * -8}px, ${mousePos.y * -8}px, 0)` }}
        >
          <Image
            src="/assets/skyline.png"
            alt="Skyline Vector"
            width={1000}
            height={400}
            className="w-full h-auto object-contain dark:invert transition-all"
          />
        </div>

        {/* Layer 4: Surroundings / Foreground Parallax */}
        <div 
          ref={foregroundRef}
          className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-5 pointer-events-none"
        />

        {/* Layer 5: Canvas Ticker Particles */}
        <canvas ref={particlesRef} className="absolute inset-0 z-6 pointer-events-none opacity-60" />
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col justify-center relative z-20">
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border-line dark:text-neutral-300 text-neutral-700 text-xs font-semibold tracking-wider uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Beyond Sales. Built for Growth.
          </motion.div>

          {/* Headline - Word by Word reveal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05]">
            <span className="inline-block overflow-hidden pb-1 mr-4">
              <motion.span
                initial={{ y: "100%" }}
                animate={isLoaded ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                The
              </motion.span>
            </span>
            <span className="inline-block overflow-hidden pb-1 mr-4">
              <motion.span
                initial={{ y: "100%" }}
                animate={isLoaded ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                Real
              </motion.span>
            </span>
            <span className="inline-block overflow-hidden pb-1 mr-4">
              <motion.span
                initial={{ y: "100%" }}
                animate={isLoaded ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                Estate
              </motion.span>
            </span>
            <br />
            <span className="inline-block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={isLoaded ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block gold-gradient text-glow-gold"
              >
                Sales Force.
              </motion.span>
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-base md:text-lg text-foreground-muted max-w-xl leading-relaxed mb-10"
          >
            We partner with premier real estate developers to transform potential into high-performing sales momentum. Our integrated ecosystem ensures speed, visibility, and measurable results.
          </motion.p>

          {/* CTA Buttons - Wrapped in Magnetic Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mb-16"
          >
            <MagneticWrapper>
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="px-8 py-4 text-xs font-bold uppercase tracking-widest dark:text-black bg-gold rounded-full hover:bg-gold-hover transition-premium duration-300 flex items-center gap-2 shadow-lg shadow-gold/20 group"
              >
                Schedule Consultation
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </MagneticWrapper>
            
            <MagneticWrapper>
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="px-8 py-4 text-xs font-bold uppercase tracking-widest dark:text-white text-zinc-900 border border-border-line rounded-full hover:border-gold hover:text-gold transition-premium duration-300 flex items-center gap-2 glass group"
              >
                View Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
              </a>
            </MagneticWrapper>
          </motion.div>
        </div>
      </div>

      {/* Stats Panel & Scroll Indicator */}
      <div ref={statsRef} className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-border-line glass rounded-2xl px-6 md:px-10">
          <div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans dark:text-neutral-100 text-neutral-900 mb-1 flex items-baseline">
              <span className="stat-counter" data-target="598">0</span>
            </div>
            <p className="text-xs uppercase tracking-widest dark:text-neutral-500 text-neutral-400 font-medium">Apartments Sold</p>
          </div>
          
          <div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans dark:text-neutral-100 text-neutral-900 mb-1 flex items-baseline">
              <span>₹</span>
              <span className="stat-counter" data-target="269" data-cr="true">0</span>
            </div>
            <p className="text-xs uppercase tracking-widest dark:text-neutral-500 text-neutral-400 font-medium">Sales Generated</p>
          </div>
          
          <div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans dark:text-neutral-100 text-neutral-900 mb-1 flex items-baseline">
              <span className="stat-counter" data-target="15">0</span>
            </div>
            <p className="text-xs uppercase tracking-widest dark:text-neutral-500 text-neutral-400 font-medium">Years of Experience</p>
          </div>
          
          <div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans dark:text-neutral-100 text-neutral-900 mb-1 flex items-baseline">
              <span className="stat-counter" data-target="10">0</span>
            </div>
            <p className="text-xs uppercase tracking-widest dark:text-neutral-500 text-neutral-400 font-medium">Developer Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}
