"use client";

import { motion } from "framer-motion";
import { Handshake, Network, Play, Megaphone, Target, FileSpreadsheet, Key, CheckSquare } from "lucide-react";

const pillars = [
  {
    name: "Mandate Sales",
    desc: "Complete ownership of project sell-out under a structured mandate framework.",
    icon: Key,
  },
  {
    name: "Strategic Alliances",
    desc: "Aligning developers with optimal sales resources, networks, and opportunities.",
    icon: Handshake,
  },
  {
    name: "Channel Partner Network",
    desc: "Activating vast local and regional broker networks to expand marketing reach.",
    icon: Network,
  },
  {
    name: "Sales Execution",
    desc: "On-ground sales teams focused on speed, structure, and closing walk-ins.",
    icon: Play,
  },
  {
    name: "Digital Marketing",
    desc: "Hyper-targeted campaigns built to generate high-intent potential buyers.",
    icon: Megaphone,
  },
  {
    name: "Branding",
    desc: "Sleek narrative design that establishes premium market position and premium appeal.",
    icon: Target,
  },
  {
    name: "Lead Generation",
    desc: "Filtering and qualifying leads systematically to supply active sales teams.",
    icon: CheckSquare,
  },
  {
    name: "Reporting System",
    desc: "Complete data transparency on lead conversions, follow-ups, and sales metrics.",
    icon: FileSpreadsheet,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 md:py-32 bg-background-sec overflow-hidden border-t border-b border-border-line">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-xs uppercase tracking-widest text-gold font-bold font-sans mb-3">Why Indo Global Properties</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans dark:text-white text-zinc-900 leading-tight">
            The Mandate Model That <br />
            <span className="gold-gradient text-glow-gold">Accelerates Momentum</span>
          </h3>
          <p className="text-foreground-muted text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            By combining market insights, operational discipline, and massive network access, we create value that turns property developments into sold-out success stories.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.name}
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                className="glass p-6 rounded-2xl border border-border-line glass-gold-hover hover:-translate-y-2 transition-premium duration-500 relative group overflow-hidden"
              >
                {/* Glowing border inside */}
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/10 rounded-2xl transition-premium duration-500 pointer-events-none" />
                
                {/* Icon Container */}
                <div className="p-4 bg-gold/5 border border-gold/10 text-gold rounded-xl w-fit mb-6 group-hover:bg-gold group-hover:text-black group-hover:scale-110 transition-premium duration-500 shadow-md">
                  <Icon className="w-5 h-5" />
                </div>

                <h4 className="text-base font-bold dark:text-neutral-100 text-neutral-900 font-sans mb-2 group-hover:text-gold transition-colors duration-300">
                  {pillar.name}
                </h4>
                
                <p className="text-xs text-foreground-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
