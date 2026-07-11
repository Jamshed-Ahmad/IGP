"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles, Trophy, Cpu, Smartphone, BarChart } from "lucide-react";

const services = [
  {
    name: "Sales Strategy & Execution",
    desc: "Structured planning and on-ground implementation designed to drive stronger sales momentum and faster closures. We assign dedicated sales leaders to every project to run high-impact campaigns.",
    icon: Compass,
  },
  {
    name: "Channel Partner Activation",
    desc: "Strategic engagement of brokers and channel partners. We activate local agent networks, coordinate broker-meets, and manage incentive schemes to expand market reach and walk-ins.",
    icon: Trophy,
  },
  {
    name: "Digital Marketing & Lead Generation",
    desc: "Performance-driven digital campaigns focused on building visibility, capturing qualified leads, and nurturing buyer interest on major social channels and Google search networks.",
    icon: Smartphone,
  },
  {
    name: "Branding & Creative Support",
    desc: "Impactful communication and creative design solutions. We create brochures, website copy, visual renders, and outdoor advertising assets that enhance project perception and market appeal.",
    icon: Sparkles,
  },
  {
    name: "Pre-sales & Reporting Systems",
    desc: "Efficient CRM lead management, follow-ups, and automated reporting. We ensure that lead conversion rates are optimized, walk-ins are logged, and developers get daily reports.",
    icon: Cpu,
  },
  {
    name: "Market Positioning",
    desc: "Data-backed micro-market mapping and project positioning. We analyze competitive inventory, set optimal price sheets, and identify target audiences to ensure rapid sell-out.",
    icon: BarChart,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-border-line">
      {/* Decorative gradient overlay */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-20">
          <div className="max-w-xl">
            <h2 className="text-xs uppercase tracking-widest text-gold font-bold font-sans mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans dark:text-white text-zinc-900 leading-tight">
              Integrated Solutions <br />
              For <span className="gold-gradient">High-Performing Sales</span>
            </h3>
          </div>
          <p className="text-foreground-muted text-sm md:text-base max-w-md leading-relaxed lg:mb-2">
            Once a project enters the Indo Global Properties mandate framework, structured execution begins immediately—activating sales, channel partners, and digital demand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                className="glass p-8 rounded-2xl border border-border-line relative group transition-premium duration-500 overflow-hidden flex flex-col justify-between min-h-[300px]"
              >
                {/* Golden hover gradient edge */}
                <div className="absolute top-0 left-0 w-1.5 h-0 bg-gold group-hover:h-full transition-all duration-500 ease-out" />
                
                <div className="flex flex-col gap-6">
                  {/* Icon Container */}
                  <div className="p-3.5 dark:bg-neutral-900 bg-neutral-100 border border-border-line text-gold rounded-xl w-fit group-hover:bg-gold group-hover:text-black transition-premium duration-500">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold dark:text-neutral-100 text-neutral-900 font-sans mb-3 group-hover:text-gold transition-colors duration-300">
                      {service.name}
                    </h4>
                    <p className="text-xs text-foreground-muted leading-relaxed font-body">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="mt-8 dark:text-neutral-500 text-neutral-400 group-hover:text-gold transition-colors duration-300 text-xs font-semibold tracking-wider flex items-center gap-1">
                  <span>Elite Execution</span>
                  <span className="w-6 h-[1px] bg-neutral-800 group-hover:bg-gold transition-colors duration-300 ml-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
