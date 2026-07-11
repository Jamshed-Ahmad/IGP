"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const developers = [
  { name: "Agrawals", logo: "/assets/developers/agrawals.png" },
  { name: "SMGK Group", logo: "/assets/developers/smgk.jpg" },
  { name: "Stans Buildtech", logo: "/assets/developers/stans.png" },
  { name: "Neminath Group", logo: "/assets/developers/neminath.png" },
  { name: "Je & Vee", logo: "/assets/developers/jee-and-vee.png" },
  { name: "Gagangiri", logo: "/assets/developers/gagangiri.png" },
];

export default function TrustedDevelopers() {
  // Duplicate developers list for infinite marquee scrolling effect
  const marqueeList = [...developers, ...developers, ...developers, ...developers];

  return (
    <section id="developers" className="relative py-20 bg-background-sec overflow-hidden border-t border-b border-border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-12 text-center">
        <h2 className="text-xs uppercase tracking-widest text-gold font-bold font-sans mb-3">TRUSTED BY THE BEST</h2>
        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight font-sans dark:text-neutral-200 text-neutral-800 uppercase tracking-widest">
          Those Who Trust Us
        </h3>
      </div>

      {/* Endless Horizontal Marquee */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-4">
        {/* Left-to-right mask overlays for seamless look */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background-sec to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background-sec to-transparent z-10 pointer-events-none" />

        {/* Marquee Track 1 (Left Scrolling) */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee flex gap-8 items-center py-2">
            {marqueeList.map((dev, idx) => (
              <div
                key={`${dev.name}-1-${idx}`}
                className="glass px-8 py-5 rounded-2xl border border-border-line flex items-center justify-center min-w-[160px] md:min-w-[200px] h-20 md:h-24 hover:border-gold/35 hover:shadow-[0_0_25px_rgba(197,168,128,0.15)] hover:scale-[1.02] animate-float transition-premium duration-300 group"
                style={{ animationDelay: `${(idx % 6) * 0.45}s` }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={dev.logo}
                    alt={dev.name}
                    width={120}
                    height={40}
                    className="max-h-12 md:max-h-16 w-auto object-contain brightness-90 group-hover:brightness-105 group-hover:scale-105 transition-all duration-300 rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Track 2 (Right Scrolling) */}
        <div className="flex w-full overflow-hidden mt-2">
          <div className="animate-marquee-reverse flex gap-8 items-center py-2">
            {marqueeList.map((dev, idx) => (
              <div
                key={`${dev.name}-2-${idx}`}
                className="glass px-8 py-5 rounded-2xl border border-border-line flex items-center justify-center min-w-[160px] md:min-w-[200px] h-20 md:h-24 hover:border-gold/35 hover:shadow-[0_0_25px_rgba(197,168,128,0.15)] hover:scale-[1.02] animate-float transition-premium duration-300 group"
                style={{ animationDelay: `${((idx + 3) % 6) * 0.45}s` }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={dev.logo}
                    alt={dev.name}
                    width={120}
                    height={40}
                    className="max-h-12 md:max-h-16 w-auto object-contain brightness-90 group-hover:brightness-105 group-hover:scale-105 transition-all duration-300 rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
