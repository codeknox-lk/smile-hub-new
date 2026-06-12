"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
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
    }, 5000); // Wait longer between movements
    return () => clearInterval(timer);
  }, [images]);

  const img1 = images[currentIndex % images.length];
  const img2 = images[(currentIndex + 1) % images.length];
  const img3 = images[(currentIndex + 2) % images.length];

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
        {/* The Frosting - Very light blur to keep it photographic */}
        <div className="absolute inset-0 bg-[color:var(--background)]/10 backdrop-blur-[4px] saturate-110" />
        {/* Subtle gradient to ensure text readability on the left, fading out faster */}
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--background)]/90 via-[color:var(--background)]/40 to-transparent" />
        {/* Seamless blend into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color:var(--background)] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 flex flex-col justify-center relative"
        >
          <motion.div 
            className="w-fit mb-2 flex items-center gap-2 rounded-full border border-black/5 bg-white/40 backdrop-blur-md px-4 py-2 shadow-sm"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] uppercase tracking-widest text-[color:var(--ink)] font-bold">✦ Immersive Experience</span>
          </motion.div>

          <p className="section-kicker drop-shadow-sm">{eyebrow}</p>
          <h1 className="text-balance font-[family:var(--font-display)] text-5xl leading-[1.02] text-[color:var(--ink)] md:text-7xl lg:text-8xl tracking-tight">
            {title}
          </h1>
          <p className="max-w-xl text-xl leading-relaxed text-[color:var(--muted)] font-medium drop-shadow-sm">{body}</p>
          <div className="flex flex-col gap-3 sm:flex-row pt-8">
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
        
        {/* Masonry Collage Right Side with Parallax */}
        <div className="relative lg:mt-0" style={{ perspective: "1200px" }}>
          <motion.div 
            className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] aspect-square mx-auto mt-12 lg:mt-0"
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
              // Calculate the virtual position index for this image
              // 0 = Center Foreground, 1-4 = Background layers, >4 = Hidden
              const posIndex = (index - currentIndex + images.length) % images.length;
              
              let animationProps;
              if (posIndex === 0) {
                // Center Foreground
                animationProps = { top: "20%", left: "20%", width: "60%", height: "65%", zIndex: 50, opacity: 1, scale: 1 };
              } else if (posIndex === 1) {
                // Top Left
                animationProps = { top: "0%", left: "0%", width: "50%", height: "50%", zIndex: 40, opacity: 0.8, scale: 0.95 };
              } else if (posIndex === 2) {
                // Bottom Right
                animationProps = { top: "45%", left: "45%", width: "50%", height: "50%", zIndex: 30, opacity: 0.8, scale: 0.95 };
              } else if (posIndex === 3) {
                // Top Right
                animationProps = { top: "5%", left: "55%", width: "40%", height: "40%", zIndex: 20, opacity: 0.6, scale: 0.85 };
              } else if (posIndex === 4) {
                // Bottom Left
                animationProps = { top: "55%", left: "5%", width: "40%", height: "40%", zIndex: 10, opacity: 0.6, scale: 0.85 };
              } else {
                // Hidden queue
                animationProps = { top: "25%", left: "25%", width: "50%", height: "50%", zIndex: 0, opacity: 0, scale: 0.5 };
              }

              return (
                <motion.div
                  key={img.src}
                  className="absolute overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(22,88,138,0.2)] border-4 border-white/80 bg-white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={animationProps}
                  transition={{ 
                    duration: 2, 
                    ease: [0.25, 1, 0.5, 1],
                    delay: index * 0.15 // Stagger entrance
                  }}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover saturate-95" />
                  
                  {/* Global cooling tint to neutralize warm/brown tones and match theme */}
                  <div className="absolute inset-0 bg-[color:var(--accent)]/5 mix-blend-color pointer-events-none" />

                  {/* Subtle dark overlay for background items */}
                  {posIndex !== 0 && (
                    <motion.div 
                      className="absolute inset-0 bg-[color:var(--ink)] mix-blend-overlay pointer-events-none"
                      initial={false}
                      animate={{ opacity: posIndex === 0 ? 0 : 0.3 }}
                      transition={{ duration: 2 }} // Match parent duration
                    />
                  )}
                </motion.div>
              );
            })}

            {/* Decorative Element stays on top */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-xl z-40 border border-[color:var(--line)]">
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
