"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rakesh Agarwal",
    company: "Agarwal Group",
    quote: "We appreciate Indo Global Properties for their proactive approach, market knowledge, and sales commitment. They bring the right balance of strategy, responsiveness, and execution to the table.",
  },
  {
    name: "Sohail Ansari",
    company: "STANS Buildtech",
    quote: "Their team approaches every project with seriousness, structure, and a strong sense of market alignment. Indo Global Properties has consistently demonstrated the ability to create meaningful traction in a competitive landscape.",
  },
  {
    name: "Vinay Singh",
    company: "Jee N Vee",
    quote: "What sets Indo Global Properties apart is their disciplined approach and sharp understanding of positioning and buyer intent. They are a dependable partner for developers seeking both visibility and performance.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play the testimonial carousel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background blueprint map layout mimicking page 7 right side graphic */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[55%] h-[80%] opacity-15 pointer-events-none z-0 hidden lg:block">
        <Image
          src="/assets/blueprint-map.png"
          alt="Architectural Blueprint"
          width={1000}
          height={655}
          className="w-full h-full object-contain object-right"
        />
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Header Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h2 className="text-xs uppercase tracking-widest text-gold font-bold font-sans">Partnerships</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans dark:text-white text-zinc-900 leading-tight">
              Developer <br />
              <span className="gold-gradient text-glow-gold">Testimonials</span>
            </h3>
            <p className="text-foreground-muted text-sm leading-relaxed font-body">
              Hear directly from leading property developers in Mumbai who have experienced the speed, structured discipline, and execution success of the Indo Global Properties sales ecosystem.
            </p>
            
            {/* Nav buttons desktop */}
            <div className="hidden lg:flex items-center gap-3 mt-4">
              <button
                onClick={handlePrev}
                className="p-3 bg-white/5 border border-border-line hover:border-gold hover:text-gold rounded-full transition-premium duration-300 shadow-md hover:scale-105"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 bg-white/5 border border-border-line hover:border-gold hover:text-gold rounded-full transition-premium duration-300 shadow-md hover:scale-105"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Carousel Card Column */}
          <div className="lg:col-span-8 relative h-[380px] md:h-[320px] flex items-center">
            
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-x-0 glass p-8 md:p-10 rounded-3xl border border-border-line shadow-2xl flex flex-col justify-between h-full dark:bg-[#0d0d0f]/50 bg-white/70 backdrop-blur-xl"
              >
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 text-gold/10">
                  <Quote className="w-20 h-20 rotate-180" />
                </div>
                
                <div className="flex flex-col gap-6 z-10">
                  <p className="text-base md:text-lg dark:text-neutral-200 text-neutral-800 leading-relaxed font-medium italic">
                    "{testimonials[activeIndex].quote}"
                  </p>
                </div>
                
                <div className="flex justify-between items-end border-t border-border-line pt-6 z-10">
                  <div>
                    <h4 className="text-lg font-bold font-sans dark:text-neutral-100 text-neutral-900">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold mt-1 font-sans">
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                  
                  {/* Indicator Dots */}
                  <div className="flex items-center gap-1.5 pb-1">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setDirection(idx > activeIndex ? 1 : -1);
                          setActiveIndex(idx);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === activeIndex ? "w-6 bg-gold" : "w-1.5 bg-neutral-600 hover:bg-neutral-400"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Navigation for mobile/tablet */}
          <div className="flex lg:hidden justify-center gap-4 mt-6 w-full z-10">
            <button
              onClick={handlePrev}
              className="p-3 bg-white/5 border border-border-line hover:border-gold hover:text-gold rounded-full transition-premium duration-300 shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-white/5 border border-border-line hover:border-gold hover:text-gold rounded-full transition-premium duration-300 shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
