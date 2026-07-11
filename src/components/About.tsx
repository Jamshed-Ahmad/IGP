"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Zap, Users2, Target, Eye, Compass, BarChart3, LineChart } from "lucide-react";

const values = [
  { name: "Integrity", desc: "Honesty and transparent deal-making at every touchpoint.", icon: ShieldCheck },
  { name: "Accountability", desc: "Owning results and taking pride in executing commitments.", icon: Award },
  { name: "Innovation", desc: "Applying creative marketing and strategic technology solutions.", icon: Zap },
  { name: "Collaboration", desc: "Unifying developers, buyers, and channel partners seamlessly.", icon: Users2 },
  { name: "Commitment", desc: "Relentless dedication to project success and fast sell-out.", icon: Target },
  { name: "Clear Strategy", desc: "Data-driven positioning and target audience mapping.", icon: Eye },
  { name: "Disciplined Execution", desc: "Rigorous daily routines that convert leads to actual buyers.", icon: Compass },
  { name: "Market Intelligence", desc: "Deep understanding of micro-markets and buyer behavior.", icon: BarChart3 },
  { name: "Consistent Performance", desc: "Sustaining momentum from project launch to complete sell-out.", icon: LineChart },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* About Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 35, filter: "blur(8px)", scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-xs uppercase tracking-widest text-gold font-bold font-sans">About Company</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans leading-tight">
              Born for Sales. <br />
              <span className="gold-gradient text-glow-gold">Built for Scale.</span>
            </h3>
            
            <p className="dark:text-neutral-300 text-neutral-700 leading-relaxed text-sm md:text-base">
              Indo Global Properties is a mandate sales specialist built to deliver complete real estate sales solutions for developers. We operate as an integrated sales ecosystem, supporting projects at every stage of the sales journey with speed, structure, and strategic execution.
            </p>
            
            <p className="text-foreground-muted leading-relaxed text-sm">
              From on-ground sales teams and channel partner activation to digital marketing, branding, and pre-sales support, our framework is designed to help projects scale faster without creating additional operational burden for developers.
            </p>
            
            <div className="flex items-center gap-6 mt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-sans dark:text-white text-zinc-900">100%</span>
                <span className="text-xs dark:text-neutral-500 text-neutral-400 uppercase tracking-wider">Mandate Focus</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-sans dark:text-white text-zinc-900">Mumbai</span>
                <span className="text-xs dark:text-neutral-500 text-neutral-400 uppercase tracking-wider">Primary Market</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Column: Interactive Insights Funnel */}
          <motion.div
            initial={{ opacity: 0, x: 45, filter: "blur(8px)", scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 w-full relative py-2"
          >
            {/* Connecting line */}
            <div className="absolute left-8 top-10 bottom-10 w-[2px] bg-gradient-to-b from-gold via-gold/40 to-transparent hidden md:block" />

            {/* Funnel Step 1 */}
            <motion.div 
              whileHover={{ x: 6 }}
              className="glass p-5 rounded-2xl border border-border-line flex gap-5 items-center relative z-10 transition-premium duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 text-gold flex items-center justify-center font-bold text-lg font-sans shrink-0">
                01
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h4 className="text-sm font-bold dark:text-neutral-300 text-neutral-700">Network Mobilization</h4>
                  <span className="text-lg font-black text-gold">1,500+ CPs</span>
                </div>
                <p className="text-[11px] text-foreground-muted mt-1 leading-relaxed font-body">
                  Activating Mumbai's massive broker networks to maximize walk-ins and project reach.
                </p>
              </div>
            </motion.div>

            {/* Funnel Step 2 */}
            <motion.div 
              whileHover={{ x: 6 }}
              className="glass p-5 rounded-2xl border border-border-line flex gap-5 items-center relative z-10 transition-premium duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 text-gold flex items-center justify-center font-bold text-lg font-sans shrink-0">
                02
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h4 className="text-sm font-bold dark:text-neutral-300 text-neutral-700">Sales Closure Velocity</h4>
                  <span className="text-lg font-black text-gold">598+ Units</span>
                </div>
                <p className="text-[11px] text-foreground-muted mt-1 leading-relaxed font-body">
                  Converting generated leads and walk-ins into final bookings with dedicated sales managers.
                </p>
              </div>
            </motion.div>

            {/* Funnel Step 3 */}
            <motion.div 
              whileHover={{ x: 6 }}
              className="glass p-5 rounded-2xl border border-border-line flex gap-5 items-center relative z-10 transition-premium duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 text-gold flex items-center justify-center font-bold text-lg font-sans shrink-0">
                03
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h4 className="text-sm font-bold dark:text-neutral-300 text-neutral-700">Value Realization</h4>
                  <span className="text-lg font-black text-gold">₹269+ Cr.</span>
                </div>
                <p className="text-[11px] text-foreground-muted mt-1 leading-relaxed font-body">
                  Maximizing sales values and achieving developer target cash flows under structured mandates.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-16">
            <h3 className="text-xs uppercase tracking-widest text-gold font-bold font-sans mb-3">Our Core Values</h3>
            <h4 className="text-2xl md:text-4xl font-extrabold tracking-tight font-sans dark:text-white text-zinc-900">
              The Values That <span className="gold-gradient">Drive Our Force</span>
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                  className="glass p-6 rounded-2xl glass-gold-hover hover:-translate-y-1.5 duration-300 border border-border-line flex flex-col gap-4 relative overflow-hidden group"
                >
                  {/* Subtle golden corner indicator */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="p-3 bg-gold/5 border border-gold/15 text-gold rounded-xl w-fit group-hover:bg-gold group-hover:text-black transition-premium duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div>
                    <h5 className="text-base font-bold dark:text-neutral-100 text-neutral-900 font-sans mb-1 group-hover:text-gold transition-colors duration-300">{v.name}</h5>
                    <p className="text-xs text-foreground-muted leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
