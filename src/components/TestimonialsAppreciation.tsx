"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Building2,
  CheckCircle2,
  MapPin,
  Play,
  Quote,
  Sparkles,
} from "lucide-react";

interface VideoTestimonial {
  id: string;
  category: string;
  title: string;
  videoSrc: string;
  durationLabel: string;
  highlights: string[];
  personName: string;
  designation: string;
  company: string;
  projectName: string;
  projectLocation: string;
  quote: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: "royal-lagoon-experience-impact",
    category: "Developer Testimonial",
    title: "Experience & Impact — 30-Day Milestone",
    videoSrc:
      "/api/extracted-assets/testimonials_video/Reel1_Experience_and_impact-1.mp4",
    durationLabel: "0:58",
    highlights: ["150–200 site visits.", "20+ units closed in 30 days."],
    personName: "Deven Premji Shah",
    designation: "Director, Royal Realtors",
    company: "Royal Realtors",
    projectName: "Royal Lagoon",
    projectLocation: "Malad West, Mumbai",
    quote:
      "Imran bhai and his team has created a huge impact on the project—approximately till date 150 to 200 site visits have been done, and they have successfully closed more than 20 units till now in a span of 30 days.",
  },
  {
    id: "royal-lagoon-message-developers",
    category: "Developer Testimonial",
    title: "Message for Other Developers",
    videoSrc:
      "/api/extracted-assets/testimonials_video/Message%20for%20Other%20Developers.mp4",
    durationLabel: "0:14",
    highlights: [
      "Message for Other Developers",
      "Exclusive Sales & Marketing Partner",
    ],
    personName: "Deven Premji Shah",
    designation: "Director, Royal Realtors",
    company: "Royal Realtors",
    projectName: "Royal Lagoon",
    projectLocation: "Malad West, Mumbai",
    quote:
      "Definitely I would suggest everybody, my developer brothers from the fraternity, you must work or you must try Imran bhai. Thank you.",
  },
];

export default function TestimonialsAppreciation() {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [startedIds, setStartedIds] = useState<Record<string, boolean>>({});

  const pauseOtherVideos = (activeId: string) => {
    for (const [id, el] of Object.entries(videoRefs.current)) {
      if (id !== activeId && el && !el.paused) {
        el.pause();
      }
    }
  };

  const handleStartPlayback = (id: string) => {
    const videoEl = videoRefs.current[id];
    if (!videoEl) return;
    pauseOtherVideos(id);
    setStartedIds((prev) => ({ ...prev, [id]: true }));
    void videoEl.play();
  };

  return (
    <section
      id="testimonials-appreciation"
      className="relative py-24 md:py-32 bg-background-sec overflow-hidden border-t border-b border-border-line"
    >
      {/* Ambient gold glow accents matching the website palette */}
      <div className="absolute top-16 right-12 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 left-10 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <h2 className="text-xs uppercase tracking-widest text-gold font-bold font-sans mb-3">
              Developer &amp; Partner Voices
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans dark:text-white text-zinc-900 leading-tight">
              What Our{" "}
              <span className="gold-gradient text-glow-gold">Clients Say</span>
            </h3>
          </div>
          <p className="text-foreground-muted text-sm md:text-base max-w-md leading-relaxed lg:mb-1 font-body">
            Real Experiences. Trusted Partnerships. Successful Outcomes.
          </p>
        </motion.div>

        {/* Two-Column Video Testimonial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {videoTestimonials.map((item, idx) => {
            const isStarted = Boolean(startedIds[item.id]);

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.85,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-3xl bg-[#070b14] text-white border border-gold/30 hover:border-gold/60 shadow-2xl p-6 md:p-8 flex flex-col justify-between gap-6 transition-premium duration-500 relative overflow-hidden"
              >
                {/* Subtle top gold radial sheen */}
                <div className="absolute -top-24 -right-24 w-56 h-56 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

                {/* Top Section: Brand, Category & Verified Highlights */}
                <div className="flex flex-col gap-4 relative z-10">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold text-[11px] font-bold uppercase tracking-wider">
                      <Award className="w-3.5 h-3.5 shrink-0" />
                      {item.category}
                    </span>
                    <Image
                      src="/assets/igp-logo-dark-v2.png"
                      alt="IndoGlobal Properties"
                      width={110}
                      height={40}
                      className="h-7 w-auto object-contain opacity-90 shrink-0"
                    />
                  </div>

                  {/* Bold Highlights matching reference design */}
                  <div className="border-b border-white/10 pb-4 flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2 text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">
                      <span className="text-gold">{item.projectName}</span>
                      <span>{item.durationLabel}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      {item.highlights.map((highlight) => (
                        <p
                          key={highlight}
                          className="text-lg md:text-xl font-extrabold font-sans text-white tracking-tight leading-snug flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                          <span>{highlight}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle Section: Vertical 9:16 Video Player */}
                <div className="relative w-full max-w-[310px] mx-auto aspect-[9/16] rounded-2xl overflow-hidden border border-gold/35 shadow-2xl bg-black z-10">
                  <video
                    ref={(el) => {
                      videoRefs.current[item.id] = el;
                    }}
                    controls
                    playsInline
                    preload="metadata"
                    onPlay={() => {
                      pauseOtherVideos(item.id);
                      setStartedIds((prev) => ({ ...prev, [item.id]: true }));
                    }}
                    aria-label={`${item.personName} - ${item.title} (${item.projectName})`}
                    className="w-full h-full object-contain bg-black"
                  >
                    <source src={item.videoSrc} type="video/mp4" />
                    Your browser does not support HTML5 video playback.
                  </video>

                  {!isStarted && (
                    <button
                      type="button"
                      onClick={() => handleStartPlayback(item.id)}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-t from-black/75 via-black/20 to-transparent group cursor-pointer"
                      aria-label={`Play ${item.title} video`}
                    >
                      <span className="w-14 h-14 rounded-full bg-gold text-black flex items-center justify-center shadow-xl shadow-gold/30 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </span>
                      <span className="px-3.5 py-1 rounded-full bg-black/75 border border-gold/40 text-[11px] font-semibold uppercase tracking-wider text-gold">
                        Watch Testimonial
                      </span>
                    </button>
                  )}
                </div>

                {/* Bottom Section: Quote + Person, Designation, Company & Project */}
                <div className="flex flex-col gap-4 border-t border-white/10 pt-5 relative z-10">
                  <div className="flex items-start gap-2.5 text-neutral-300">
                    <Quote className="w-4 h-4 text-gold shrink-0 mt-1 rotate-180" />
                    <p className="text-xs md:text-sm leading-relaxed italic font-body">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="flex flex-wrap items-end justify-between gap-4 pt-2 border-t border-white/10">
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-white font-sans">
                        {item.personName}
                      </h4>
                      <p className="text-xs font-semibold text-gold uppercase tracking-wider mt-0.5">
                        {item.designation}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs text-neutral-400">
                      <span className="inline-flex items-center gap-1.5 text-neutral-200 font-semibold">
                        <Building2 className="w-3.5 h-3.5 text-gold shrink-0" />
                        Project: {item.projectName}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px]">
                        <MapPin className="w-3 h-3 text-gold shrink-0" />
                        {item.projectLocation}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Verified Mandate Footer Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 glass px-6 py-4 rounded-2xl border border-border-line flex flex-wrap items-center justify-between gap-4 text-xs text-foreground-muted"
        >
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold shrink-0" />
            <span>
              Featuring{" "}
              <strong className="dark:text-neutral-200 text-neutral-800">
                Deven Premji Shah
              </strong>{" "}
              (Director, Royal Realtors) &amp;{" "}
              <strong className="dark:text-neutral-200 text-neutral-800">
                Sayyed Imran Qadri
              </strong>{" "}
              (Founder, Indo Global Properties)
            </span>
          </span>
          <span className="text-[11px] uppercase tracking-wider text-gold font-bold">
            Royal Lagoon &bull; 502 Apartments &bull; Exclusive Mandate
          </span>
        </motion.div>
      </div>
    </section>
  );
}
