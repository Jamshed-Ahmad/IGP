"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn, ZoomOut } from "lucide-react";

interface MediaLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  width: number;
  height: number;
  eyebrow: string;
  title: string;
  caption?: string;
  maxWidthClass?: string;
  zoomedWidthClass?: string;
  dialogLabel: string;
}

/**
 * Shared click-to-enlarge lightbox modal for recognition documents and event photographs.
 */
export default function MediaLightboxModal({
  isOpen,
  onClose,
  src,
  alt,
  width,
  height,
  eyebrow,
  title,
  caption,
  maxWidthClass = "max-w-4xl",
  zoomedWidthClass = "w-full max-w-[1050px]",
  dialogLabel,
}: MediaLightboxModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClose = () => {
    setIsZoomed(false);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsZoomed(false);
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center dark:bg-black/90 bg-black/75 p-4 md:p-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={dialogLabel}
        >
          <motion.div
            initial={{ scale: 0.94, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full ${maxWidthClass} max-h-[92vh] glass rounded-3xl border border-border-line shadow-2xl p-4 md:p-6 flex flex-col gap-4`}
          >
            <div className="flex items-center justify-between gap-4 border-b border-border-line pb-3">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-gold font-bold">
                  {eyebrow}
                </p>
                <h4 className="text-sm md:text-base font-bold dark:text-white text-zinc-900">
                  {title}
                </h4>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsZoomed((prev) => !prev)}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-border-line hover:border-gold hover:text-gold text-xs font-semibold inline-flex items-center gap-1.5 transition-premium cursor-pointer"
                  aria-label={isZoomed ? "Reset zoom" : "Zoom in"}
                >
                  {isZoomed ? (
                    <>
                      <ZoomOut className="w-3.5 h-3.5 text-gold" />
                      <span>Reset</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn className="w-3.5 h-3.5 text-gold" />
                      <span>Zoom</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-2 rounded-full bg-white/5 border border-border-line hover:border-gold hover:text-gold transition-premium cursor-pointer"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="overflow-auto flex-1 flex items-start justify-center rounded-2xl bg-neutral-950/60 p-2 md:p-4">
              <div
                onClick={() => setIsZoomed((prev) => !prev)}
                className={`transition-all duration-300 ${
                  isZoomed
                    ? `${zoomedWidthClass} cursor-zoom-out`
                    : "w-full max-w-[560px] cursor-zoom-in"
                }`}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  unoptimized
                  className="w-full h-auto rounded-xl shadow-2xl object-contain"
                />
              </div>
            </div>

            {caption && (
              <p className="text-xs text-foreground-muted text-center">
                {caption}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
