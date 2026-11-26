"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  Camera,
  MapPin,
  Maximize2,
  Sparkles,
} from "lucide-react";
import MediaLightboxModal from "@/components/MediaLightboxModal";

const GROUP_PHOTO_SRC = "/api/extracted-assets/group_photos/group1.jpeg";

export default function EventHighlights() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section
      id="event-highlights"
      className="relative py-24 md:py-32 bg-background border-t border-border-line overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute bottom-16 right-12 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

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
              Leadership Engagements
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans dark:text-white text-zinc-900 leading-tight">
              Event Highlights &amp;{" "}
              <span className="gold-gradient text-glow-gold">
                Leadership Engagements
              </span>
            </h3>
          </div>
          <p className="text-foreground-muted text-sm md:text-base max-w-md leading-relaxed lg:mb-1 font-body">
            Moments from leadership forums, academic collaborations, and
            industry engagements across Mumbai and Navi Mumbai.
          </p>
        </motion.div>

        {/* Event Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="glass p-6 md:p-10 rounded-3xl border border-border-line shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* Original 4:3 Group Photograph without cropping */}
          <div className="lg:col-span-7">
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gold/25 hover:border-gold/60 shadow-2xl dark:bg-neutral-900 bg-neutral-100 transition-premium duration-500 cursor-pointer block text-left"
              aria-label="Enlarge Leaders on Campus group photograph"
            >
              <Image
                src={GROUP_PHOTO_SRC}
                alt="Group photograph from Leaders on Campus event organised by Sanpada College of Commerce & Technology and Oriental Institute of Management on 17th November 2026"
                width={1600}
                height={1200}
                unoptimized
                className="w-full h-full object-contain group-hover:scale-[1.015] transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/75 via-black/30 to-transparent flex items-center justify-between text-white">
                <span className="inline-flex items-center gap-2 text-xs font-semibold">
                  <Camera className="w-3.5 h-3.5 text-gold" />
                  Leaders on Campus &bull; 17th November 2026
                </span>
                <span className="p-2 rounded-full bg-gold text-black shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </button>
          </div>

          {/* Caption and Event Metadata Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider w-fit">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              Leaders on Campus
            </div>

            <p className="text-base md:text-lg dark:text-neutral-100 text-neutral-900 leading-relaxed font-medium">
              An enriching interaction at Leaders on Campus, organised by
              Sanpada College of Commerce &amp; Technology and Oriental
              Institute of Management, on 17th November 2026.
            </p>

            <div className="flex flex-col gap-3 border-t border-border-line pt-5">
              <div className="p-3.5 bg-white/5 border border-border-line rounded-2xl flex items-start gap-3">
                <Building2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-foreground-muted">
                    Institution &amp; Association
                  </p>
                  <p className="text-xs font-semibold dark:text-neutral-100 text-neutral-900 mt-0.5 leading-snug">
                    Sanpada College of Commerce &amp; Technology in association
                    with Oriental Institute of Management
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-white/5 border border-border-line rounded-2xl flex items-start gap-3">
                <Calendar className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-foreground-muted">
                    Date
                  </p>
                  <p className="text-sm font-semibold dark:text-neutral-100 text-neutral-900 mt-0.5">
                    17th November 2026
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-white/5 border border-border-line rounded-2xl flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-foreground-muted">
                    Venue
                  </p>
                  <p className="text-sm font-semibold dark:text-neutral-100 text-neutral-900 mt-0.5">
                    Oriental Institute of Management, Vashi, Navi Mumbai
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="px-6 py-3 text-xs font-bold uppercase tracking-widest dark:text-black text-neutral-900 bg-gold rounded-full hover:bg-gold-hover transition-premium duration-300 inline-flex items-center gap-2 shadow-lg shadow-gold/15 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                View Full Photograph
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <MediaLightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        src={GROUP_PHOTO_SRC}
        alt="Leaders on Campus event group photograph"
        width={1600}
        height={1200}
        eyebrow="Leaders on Campus • 17th November 2026"
        title="Sanpada College of Commerce & Technology & Oriental Institute of Management"
        caption="An enriching interaction at Leaders on Campus, organised by Sanpada College of Commerce & Technology and Oriental Institute of Management, on 17th November 2026."
        maxWidthClass="max-w-5xl"
        zoomedWidthClass="w-[140%] max-w-none"
        dialogLabel="Leaders on Campus enlarged group photograph"
      />
    </section>
  );
}
