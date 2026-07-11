"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const leaders = [
  {
    name: "Sayyed Imran Qadri",
    role: "Founder & Managing Director",
    bio: "At the helm of Indo Global Properties, Imran Quadri is a multi-disciplinary entrepreneur with experience across hospitality and real estate. His exposure to diverse business environments has shaped a strong understanding of people, positioning, micro-markets, and buyer behavior. With a clear vision to build a performance-driven sales organization, he founded Indo Global Properties on the principles of speed, discipline, and execution excellence. His hands-on leadership, strategic clarity, and market insight continue to shape the company’s culture, strengthen its credibility, and drive consistent growth in a competitive real estate landscape.",
    image: "/assets/founder.png",
    linkedin: "#",
    email: "imran@indoglobalproperties.com",
  },
  {
    name: "Mahesh Bankar",
    role: "Co-Founder & Director of Sales",
    bio: "With over 15 years of real estate experience, he brings strong strategic insight and market understanding to Indo Global Properties. His expertise in micro-markets, project positioning, and sales planning adds direction to every mandate. With a clear understanding of developer expectations and buyer behavior, he drives focused and result-oriented execution. His disciplined approach continues to strengthen the company’s growth, presence, and long-term value.",
    image: "/assets/cofounder.png",
    linkedin: "#",
    email: "mahesh@indoglobalproperties.com",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-24 md:py-32 bg-background-sec overflow-hidden border-b border-border-line">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-xs uppercase tracking-widest text-gold font-bold font-sans mb-3">Leadership Team</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans dark:text-white text-zinc-900 leading-tight">
            The Visionaries Behind <br />
            <span className="gold-gradient text-glow-gold">The Sales Force</span>
          </h3>
          <p className="text-foreground-muted text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Led by seasoned professionals who bring decades of real estate expertise, strategic clarity, and disciplined execution to accelerate developer success.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="glass p-6 md:p-8 rounded-3xl border border-border-line flex flex-col md:flex-row gap-8 items-start relative group hover:-translate-y-2 hover:border-gold/35 hover:shadow-xl hover:shadow-gold/[0.03] transition-premium duration-500 overflow-hidden"
            >
              {/* Image Column */}
              <div className="relative w-full md:w-48 h-64 md:h-64 rounded-2xl overflow-hidden border border-border-line shrink-0 shadow-lg dark:bg-neutral-900 bg-neutral-100">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-premium duration-700"
                />
                
                {/* Visual Gold Overlay inside the image container */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    <a href={leader.linkedin} className="p-2 rounded-full bg-gold text-black hover:bg-gold-hover hover:scale-105 duration-300" aria-label="LinkedIn">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href={`mailto:${leader.email}`} className="p-2 rounded-full bg-gold text-black hover:bg-gold-hover hover:scale-105 duration-300">
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="mb-4">
                    <h4 className="text-xl font-bold dark:text-neutral-100 text-neutral-900 font-sans group-hover:text-gold transition-colors duration-300">
                      {leader.name}
                    </h4>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold mt-1 font-sans">
                      {leader.role}
                    </p>
                  </div>
                  
                  <p className="text-xs text-foreground-muted leading-relaxed font-body text-justify">
                    {leader.bio}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-6 text-xs dark:text-neutral-500 text-neutral-400 border-t border-border-line pt-4">
                  <span className="font-semibold dark:text-neutral-300 text-neutral-700">Core Strength:</span>
                  <span className="text-gold font-medium">
                    {idx === 0 ? "Strategic Scale & Execution Excellence" : "Sales Operations & Positioning"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
