"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ActionLink } from "./action-link";

type GalleryHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  images: { src: string; alt: string }[];
};

export function GalleryHero({
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  images
}: GalleryHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 3) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images]);

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);
  const translateX = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const translateY = useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Compute animation props for each image position — called inline, not as a component
  const getAnimProps = (posIndex: number) => {
    if (posIndex === 0) return { top: "20%", left: "20%", width: "60%", height: "65%", zIndex: 50, opacity: 1, scale: 1 };
    if (posIndex === 1) return { top: "0%",  left: "0%",  width: "50%", height: "50%", zIndex: 40, opacity: 0.8, scale: 0.95 };
    if (posIndex === 2) return { top: "45%", left: "45%", width: "50%", height: "50%", zIndex: 30, opacity: 0.8, scale: 0.95 };
    if (posIndex === 3) return { top: "5%",  left: "55%", width: "40%", height: "40%", zIndex: 20, opacity: 0.6, scale: 0.85 };
    if (posIndex === 4) return { top: "55%", left: "5%",  width: "40%", height: "40%", zIndex: 10, opacity: 0.6, scale: 0.85 };
    return { top: "25%", left: "25%", width: "50%", height: "50%", zIndex: 0, opacity: 0, scale: 0.5 };
  };

  return (
    <section
      className="relative overflow-hidden border-b-0 min-h-[95vh] flex items-center -mt-24 pt-24 lg:-mt-28 lg:pt-28"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Frosted Glass Ambient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[color:var(--background)]">
        <img
          src="/images/clinic-1.png"
          alt="Clinic Ambient"
          className="absolute inset-0 w-full h-full object-cover scale-105 opacity-100 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[color:var(--background)]/10 backdrop-blur-[4px] saturate-110" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--background)]/90 via-[color:var(--background)]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color:var(--background)] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full grid max-w-7xl gap-6 lg:gap-12 px-4 pt-8 pb-8 sm:px-6 sm:py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">

        {/* ── Left / Text column ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center relative"
        >
          {/* Eyebrow pill */}
          <motion.div
            className="w-fit mb-4 flex items-center gap-2 rounded-full border border-black/5 bg-white/40 backdrop-blur-md px-4 py-2 shadow-sm"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] uppercase tracking-widest text-[color:var(--ink)] font-bold">✦ Immersive Experience</span>
          </motion.div>

          {/* Kicker */}
          <p className="section-kicker drop-shadow-sm mb-4">{eyebrow}</p>

          {/* Heading */}
          <h1 className="text-balance font-display text-5xl leading-[1.02] text-[color:var(--ink)] md:text-7xl lg:text-8xl tracking-tight">
            {title}
          </h1>

          {/* ── Mobile-only inline collage (below h1, above body) ── */}
          <div className="lg:hidden mt-8 mb-2" style={{ perspective: "800px" }}>
            <div className="relative w-full max-w-[280px] aspect-square mx-auto" style={{ transformStyle: "preserve-3d" }}>
              <div className="relative w-full h-full">
                {images.map((img, index) => {
                  const posIndex = (index - currentIndex + images.length) % images.length;
                  return (
                    <motion.div
                      key={img.src}
                      className="absolute overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(22,88,138,0.2)] border-4 border-white/80 bg-white"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={getAnimProps(posIndex)}
                      transition={{ duration: 2, ease: [0.25, 1, 0.5, 1], delay: index * 0.15 }}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover saturate-95" />
                      <div className="absolute inset-0 bg-[color:var(--accent)]/5 mix-blend-color pointer-events-none" />
                      {posIndex !== 0 && (
                        <motion.div
                          className="absolute inset-0 bg-[color:var(--ink)] mix-blend-overlay pointer-events-none"
                          initial={false}
                          animate={{ opacity: 0.3 }}
                          transition={{ duration: 2 }}
                        />
                      )}
                    </motion.div>
                  );
                })}
                {/* Decorative camera badge */}
                <div className="absolute -bottom-6 -left-2 bg-white rounded-full p-4 shadow-xl z-40 border border-[color:var(--line)]">
                  <div className="bg-[color:var(--surface-overlay)] text-[color:var(--accent-deep)] rounded-full h-12 w-12 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Progress bar */}
            <div className="mt-10 mx-auto w-32 h-[3px] bg-black/5 rounded-full overflow-hidden">
              <motion.div
                key={currentIndex}
                className="h-full bg-gradient-to-r from-[color:var(--accent-strong)] to-[color:var(--accent)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
          </div>

          {/* Body */}
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-[color:var(--muted)] font-medium drop-shadow-sm">{body}</p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href={primaryHref} className="button-primary" eventName="gallery_hero_primary_click" external={primaryHref.startsWith("http")}>
              {primaryLabel}
            </ActionLink>
            {secondaryHref && secondaryLabel ? (
              <ActionLink
                href={secondaryHref}
                className="button-secondary"
                eventName="gallery_hero_secondary_click"
                external={secondaryHref.startsWith("http")}
              >
                {secondaryLabel}
              </ActionLink>
            ) : null}
          </div>
        </motion.div>

        {/* ── Right collage — desktop only ── */}
        <div className="hidden lg:block relative" style={{ perspective: "1200px" }}>
          <motion.div
            className="relative w-full max-w-[500px] aspect-square mx-auto"
            style={{
              rotateX,
              rotateY,
              x: translateX,
              y: translateY,
              transformStyle: "preserve-3d"
            }}
          >
            <div className="relative w-full h-full">
              {images.map((img, index) => {
                const posIndex = (index - currentIndex + images.length) % images.length;
                return (
                  <motion.div
                    key={img.src}
                    className="absolute overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(22,88,138,0.2)] border-4 border-white/80 bg-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={getAnimProps(posIndex)}
                    transition={{ duration: 2, ease: [0.25, 1, 0.5, 1], delay: index * 0.15 }}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover saturate-95" />
                    <div className="absolute inset-0 bg-[color:var(--accent)]/5 mix-blend-color pointer-events-none" />
                    {posIndex !== 0 && (
                      <motion.div
                        className="absolute inset-0 bg-[color:var(--ink)] mix-blend-overlay pointer-events-none"
                        initial={false}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 2 }}
                      />
                    )}
                  </motion.div>
                );
              })}
              {/* Decorative camera badge */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-white rounded-full p-4 shadow-xl z-40 border border-[color:var(--line)]">
                <div className="bg-[color:var(--surface-overlay)] text-[color:var(--accent-deep)] rounded-full h-12 w-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Progress Indicator */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-black/5 rounded-full overflow-hidden">
            <motion.div
              key={currentIndex}
              className="h-full bg-gradient-to-r from-[color:var(--accent-strong)] to-[color:var(--accent)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
