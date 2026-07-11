"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const chevrons = [
  { image: "/assets/founder.png", alt: "Sayyed Imran Qadri" },
  { image: "/assets/projects/95-west.jpg", alt: "Commercial Scale" },
  { image: "/assets/projects/ebony-tower.jpg", alt: "Luxury Residential" },
  { image: "/assets/cofounder.png", alt: "Mahesh Bankar" },
];

export default function Philosophy() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-border-line text-center">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-xs uppercase tracking-widest text-gold font-bold font-sans mb-3">IGP VISION</h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans dark:text-white text-zinc-900 leading-tight">
            This isn't just about <span className="gold-gradient">real estate.</span>
          </h3>
        </motion.div>
 
        {/* Chevron Slider/Grid */}
        <div className="flex justify-center items-center -space-x-12 md:-space-x-16 my-16 w-full max-w-5xl mx-auto px-4 overflow-x-auto py-6 scrollbar-hide">
          {chevrons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05, 
                zIndex: 20,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="relative w-44 md:w-64 h-64 md:h-96 shrink-0 transition-shadow duration-300 cursor-pointer group shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_rgba(197,168,128,0.25)]"
              style={{
                clipPath: "polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 30% 50%)"
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover brightness-[0.8] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 176px, 256px"
              />
              {/* Gold border highlight effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Bottom text vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
 
        {/* Subtitle / Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mt-12"
        >
          <p className="text-base md:text-lg font-medium dark:text-neutral-300 text-neutral-700 leading-relaxed font-body">
            It's about scale. Momentum. Getting results.
          </p>
          <p className="text-sm text-foreground-muted mt-3 leading-relaxed font-body max-w-lg mx-auto">
            You're not just looking for a sales agent. You're looking for a growth force. That's what we build for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
