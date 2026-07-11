"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Award, Calendar, BarChart2 } from "lucide-react";

const chartData = [
  { year: 2020, sold: 74 },
  { year: 2021, sold: 105 },
  { year: 2022, sold: 86 },
  { year: 2023, sold: 90 },
  { year: 2024, sold: 111 },
  { year: 2025, sold: 132 },
];

const generationData = [
  { year: 2023, amount: "76 Cr.", percentage: 82, color: "#c5a880" },
  { year: 2024, amount: "90 Cr.", percentage: 80, color: "#dfcbb3" },
  { year: 2025, amount: "103 Cr.", percentage: 84, color: "#e5cfa3" },
];

export default function SalesPerformance() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  // Maximum value for scaling the SVG chart bars
  const maxSold = Math.max(...chartData.map((d) => d.sold));
  const chartHeight = 240;

  return (
    <section id="performance" className="relative py-24 md:py-32 bg-background-sec overflow-hidden border-t border-b border-border-line">
      {/* Decorative gradient overlay */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Info Column */}
          <motion.div 
            initial={{ opacity: 0, y: 35, filter: "blur(8px)", scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <h2 className="text-xs uppercase tracking-widest text-gold font-bold font-sans">Sales Performance</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans dark:text-white text-zinc-900 leading-tight">
              Our Sales <br />
              <span className="gold-gradient text-glow-gold">Momentum</span>
            </h3>
            
            <p className="dark:text-neutral-300 text-neutral-700 leading-relaxed text-sm">
              Our growth journey has been shaped by a focused approach to structured mandates, performance-driven execution, and lasting developer relationships. By combining market insight with operational discipline, Indo Global Properties has consistently created value across every association.
            </p>
            
            <p className="text-foreground-muted leading-relaxed text-xs">
              These strong partnerships continue to strengthen our credibility, expand our opportunities, and drive sustained business growth year over year.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gold/5 border border-gold/25 rounded-lg text-gold shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold dark:text-neutral-200 text-neutral-800">Sustained Growth Curve</h5>
                  <p className="text-[10px] dark:text-neutral-500 text-neutral-400">Year-on-year increase in overall apartment sales closures</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gold/5 border border-gold/25 rounded-lg text-gold shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold dark:text-neutral-200 text-neutral-800">Target Achievement Lead</h5>
                  <p className="text-[10px] dark:text-neutral-500 text-neutral-400">Consistent 80%+ mandate sales milestone fulfillment rates</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Charts and Gauges Column */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            
            {/* Custom Interactive SVG Bar Chart */}
            <div className="glass p-6 md:p-8 rounded-3xl border border-border-line relative">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h4 className="text-base font-bold dark:text-neutral-200 text-neutral-800 font-sans flex items-center gap-2">
                    <BarChart2 className="w-4.5 h-4.5 text-gold" /> Apartments Sold
                  </h4>
                  <p className="text-[10px] dark:text-neutral-500 text-neutral-400">Cumulative sales closures tracking (2020-2025)</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold font-sans text-gold">598</span>
                  <p className="text-[10px] uppercase tracking-wider dark:text-neutral-500 text-neutral-400">Total closed</p>
                </div>
              </div>

              {/* Chart SVG Canvas */}
              <div className="relative w-full h-[260px] flex items-end">
                <svg className="w-full h-full" viewBox="0 0 600 260" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
                    <line
                      key={ratio}
                      x1="0"
                      y1={chartHeight * (1 - ratio) + 10}
                      x2="600"
                      y2={chartHeight * (1 - ratio) + 10}
                      stroke="var(--border-line)"
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* SVG Bars */}
                  {chartData.map((d, index) => {
                    const barWidth = 40;
                    const spacing = 100;
                    const x = index * spacing + 35;
                    const barHeight = (d.sold / maxSold) * (chartHeight - 40);
                    const y = chartHeight - barHeight + 10;
                    
                    return (
                      <g key={d.year}>
                        {/* Hover Overlay transparent rect */}
                        <rect
                          x={x - 15}
                          y="0"
                          width={barWidth + 30}
                          height="240"
                          fill="transparent"
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredBar(index)}
                          onMouseLeave={() => setHoveredBar(null)}
                        />
                        
                        {/* Actual Gold Bar */}
                        <motion.rect
                          initial={{ height: 0, y: chartHeight + 10 }}
                          whileInView={{ height: barHeight, y: y }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                          x={x}
                          width={barWidth}
                          rx="6"
                          fill={hoveredBar === index ? "#dfcbb3" : "#c5a880"}
                          className="transition-all duration-300 shadow-[0_0_15px_rgba(197,168,128,0.1)]"
                        />

                        {/* Top Counter Label on hover or peak */}
                        {hoveredBar === index && (
                          <foreignObject x={x - 10} y={y - 32} width={barWidth + 20} height="28">
                            <div className="bg-neutral-800 text-gold text-[10px] font-bold py-1 px-1.5 rounded-md border border-gold/20 text-center shadow-lg animate-fade-in">
                              {d.sold} units
                            </div>
                          </foreignObject>
                        )}
                        
                        {/* Static Value labels */}
                        {hoveredBar !== index && (
                          <text
                            x={x + barWidth / 2}
                            y={y - 8}
                            fill="#a3a3a3"
                            fontSize="10"
                            fontWeight="bold"
                            textAnchor="middle"
                            className="font-sans"
                          >
                            {d.sold}
                          </text>
                        )}

                        {/* X Axis Labels */}
                        <text
                          x={x + barWidth / 2}
                          y={chartHeight + 25}
                          fill="#737373"
                          fontSize="10"
                          fontWeight="semibold"
                          textAnchor="middle"
                          className="font-sans"
                        >
                          {d.year}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Circular Gauges for Sales Generated */}
            <div>
              <h4 className="text-base font-bold dark:text-neutral-200 text-neutral-800 font-sans mb-6 flex items-center gap-2">
                <Calendar className="w-4.5 h-4.5 text-gold" /> Sales Generated Amount
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {generationData.map((d, index) => {
                  const radius = 40;
                  const circumference = 2 * Math.PI * radius;
                  const offset = circumference - (d.percentage / 100) * circumference;

                  return (
                    <motion.div
                      key={d.year}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass p-6 rounded-2xl border border-border-line flex flex-col items-center gap-4 text-center group"
                    >
                      {/* Circle Gauge SVG */}
                      <div className="relative w-24 h-24 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="48"
                            cy="48"
                            r={radius}
                            fill="transparent"
                            stroke="var(--border-line)"
                            strokeWidth="8"
                          />
                          <motion.circle
                            initial={{ strokeDashoffset: circumference }}
                            whileInView={{ strokeDashoffset: offset }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                            cx="48"
                            cy="48"
                            r={radius}
                            fill="transparent"
                            stroke="#c5a880"
                            strokeWidth="8"
                            strokeDasharray={circumference}
                            strokeLinecap="round"
                            className="shadow-lg"
                          />
                        </svg>
                        
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-base font-extrabold dark:text-neutral-100 text-neutral-900 font-sans">{d.percentage}%</span>
                          <span className="text-[8px] uppercase tracking-wider dark:text-neutral-500 text-neutral-400">Achieved</span>
                        </div>
                      </div>

                      <div>
                        <span className="dark:text-neutral-500 text-neutral-400 text-[10px] uppercase font-bold tracking-wider">Year {d.year}</span>
                        <h5 className="text-lg font-black dark:text-neutral-100 text-neutral-900 mt-0.5 group-hover:text-gold transition-colors duration-300">
                          Around {d.amount}
                        </h5>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
