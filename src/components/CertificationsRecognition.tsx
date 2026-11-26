"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Building2,
  Calendar,
  FileText,
  Hash,
  MapPin,
  Maximize2,
} from "lucide-react";
import MediaLightboxModal from "@/components/MediaLightboxModal";

const CERTIFICATE_SRC = "/api/extracted-assets/certificate/Certificate.jpeg";

export default function CertificationsRecognition() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section
      id="certifications-recognition"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/3 left-12 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

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
              Institutional Recognition | Letter of Appreciation
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans dark:text-white text-zinc-900 leading-tight">
              Certifications, Awards &amp;{" "}
              <span className="gold-gradient text-glow-gold">Recognition</span>
            </h3>
          </div>
          <p className="text-foreground-muted text-sm md:text-base max-w-md leading-relaxed lg:mb-1 font-body">
            Official institutional appreciation presented in recognition of our
            contribution as Guest of Honour at the Leaders on Campus programme.
          </p>
        </motion.div>

        {/* Document Card */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="glass p-6 md:p-10 rounded-3xl border border-border-line shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* Document Preview Column preserving 1176:1600 aspect ratio */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="group relative w-full max-w-[380px] aspect-[1176/1600] rounded-2xl overflow-hidden border-2 border-gold/25 hover:border-gold/70 shadow-2xl bg-white transition-premium duration-500 cursor-pointer text-left"
              aria-label="Enlarge Sanpada College of Commerce & Technology Letter of Appreciation"
            >
              <Image
                src={CERTIFICATE_SRC}
                alt="Official Letter of Appreciation from Sanpada College of Commerce & Technology (Ref. No. SCCT/928/2026-2027)"
                width={1176}
                height={1600}
                unoptimized
                className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/75 via-black/35 to-transparent flex items-center justify-between text-white">
                <span className="text-xs font-semibold tracking-wide">
                  Click to Enlarge Document
                </span>
                <span className="p-2 rounded-full bg-gold text-black shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </button>
          </div>

          {/* Document Metadata & Details Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5 shrink-0" />
                Institutional Recognition | Letter of Appreciation
              </span>
            </div>

            <div>
              <h4 className="text-2xl md:text-3xl font-extrabold dark:text-neutral-100 text-neutral-900 font-sans leading-snug">
                Sanpada College of Commerce &amp; Technology
              </h4>
              <p className="text-sm text-foreground-muted mt-2 leading-relaxed font-body">
                Official Letter of Appreciation acknowledging Mr. Sayyed Imran
                Qadri, Founder &amp; CEO of Indo Global Properties, for his
                contribution as Guest of Honour at the &ldquo;Leaders on
                Campus&rdquo; event.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 border border-border-line rounded-2xl flex items-start gap-3">
                <Building2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-foreground-muted">
                    Institution
                  </p>
                  <p className="text-sm font-semibold dark:text-neutral-100 text-neutral-900 mt-0.5">
                    Sanpada College of Commerce &amp; Technology
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white/5 border border-border-line rounded-2xl flex items-start gap-3">
                <Award className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-foreground-muted">
                    Recognition
                  </p>
                  <p className="text-sm font-semibold dark:text-neutral-100 text-neutral-900 mt-0.5">
                    Guest of Honour
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white/5 border border-border-line rounded-2xl flex items-start gap-3">
                <FileText className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-foreground-muted">
                    Event
                  </p>
                  <p className="text-sm font-semibold dark:text-neutral-100 text-neutral-900 mt-0.5">
                    Leaders on Campus
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white/5 border border-border-line rounded-2xl flex items-start gap-3">
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

              <div className="p-4 bg-white/5 border border-border-line rounded-2xl flex items-start gap-3">
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

              <div className="p-4 bg-white/5 border border-border-line rounded-2xl flex items-start gap-3">
                <Hash className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-foreground-muted">
                    Reference Number
                  </p>
                  <p className="text-sm font-semibold dark:text-neutral-100 text-neutral-900 mt-0.5">
                    SCCT/928/2026-2027
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="px-6 py-3 text-xs font-bold uppercase tracking-widest dark:text-black text-neutral-900 bg-gold rounded-full hover:bg-gold-hover transition-premium duration-300 inline-flex items-center gap-2 shadow-lg shadow-gold/15 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                Inspect Full Document
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <MediaLightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        src={CERTIFICATE_SRC}
        alt="Official Letter of Appreciation from Sanpada College of Commerce & Technology"
        width={1176}
        height={1600}
        eyebrow="Institutional Recognition | Ref: SCCT/928/2026-2027"
        title="Sanpada College of Commerce & Technology — Letter of Appreciation"
        dialogLabel="Letter of Appreciation enlarged preview"
      />
    </section>
  );
}
