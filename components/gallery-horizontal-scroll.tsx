"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import type { GalleryItem } from "@/data/site";

interface GalleryHorizontalScrollProps {
  items: GalleryItem[];
}

export function GalleryHorizontalScroll({ items }: GalleryHorizontalScrollProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateRange = () => {
      if (scrollRef.current) {
        setScrollRange(scrollRef.current.scrollWidth - window.innerWidth);
      }
    };
    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, [items]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Interpolate directly to the exact negative pixel distance needed
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <>
      {/* 1. Desktop Cinematic Scroll Layout - Visible on lg screens and wider */}
      <section ref={targetRef} className="hidden lg:block relative h-[400vh] bg-[color:var(--background)]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          
          {/* Context / Intro Block that stays fixed on the left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full lg:w-1/3 px-6 lg:px-12 z-20 pointer-events-none text-[color:var(--ink)]">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--accent-strong)]">The Experience</p>
            <h2 className="mt-4 font-display text-5xl lg:text-7xl font-semibold leading-tight">
              Take a walk <br className="hidden lg:block"/> through the <span className="font-serif italic font-light text-[color:var(--accent-strong)]">clinic.</span>
            </h2>
            <p className="mt-6 max-w-sm text-lg font-medium text-[color:var(--muted)]">
              A closer look at the spaces designed around your comfort, privacy, and peace of mind.
            </p>
          </div>

          {/* The scrolling track wrapper with fading mask */}
          <div className="w-full lg:[mask-image:linear-gradient(to_right,transparent_0%,transparent_25%,black_45%)]">
            <motion.div ref={scrollRef} style={{ x }} className="w-max flex gap-16 pl-[45vw] pr-[10vw] h-[65vh] items-center">
              {items.map((item) => {
                return (
                  <div 
                    key={item.title} 
                    className="group relative lg:w-[35vw] h-full flex flex-col justify-end shrink-0 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/10 border border-black/5"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                    
                    <div className="relative z-10 p-10 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent)]">{item.category}</p>
                      <h3 className="mt-3 text-3xl font-display font-semibold">{item.title}</h3>
                      <p className="mt-3 text-sm text-white/80 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 text-[color:var(--ink)]">
             <span className="text-[10px] uppercase tracking-widest font-bold">Keep Scrolling</span>
             <div className="w-[1px] h-12 bg-black/20 overflow-hidden relative">
               <motion.div 
                 className="absolute top-0 left-0 w-full h-full bg-[color:var(--accent-strong)]"
                 initial={{ y: "-100%" }}
                 animate={{ y: "100%" }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
               />
             </div>
          </div>
        </div>
      </section>

      {/* 2. Mobile/Tablet Responsive Layout - Visible below lg screens */}
      <section className="block lg:hidden relative h-auto bg-[color:var(--background)] py-12">
        <div className="px-6 pb-6 text-left text-[color:var(--ink)]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--accent-strong)]">The Experience</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">
            Take a walk through the <span className="font-serif italic font-light text-[color:var(--accent-strong)]">clinic.</span>
          </h2>
          <p className="mt-3 text-base font-medium text-[color:var(--muted)]">
            A closer look at the spaces designed around your comfort, privacy, and peace of mind.
          </p>
        </div>

        {/* Native Horizontal Scroll Container */}
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_5%)]">
          <div className="flex overflow-x-auto gap-6 px-6 py-4 w-full h-[52vh] sm:h-[60vh] items-center scrollbar-none snap-x snap-mandatory">
            {items.map((item) => (
              <div 
                key={item.title} 
                className="group relative w-[80vw] sm:w-[50vw] md:w-[45vw] h-full flex flex-col justify-end shrink-0 overflow-hidden rounded-[2rem] shadow-xl shadow-black/5 border border-black/5 snap-start"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover saturate-[0.95]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                
                <div className="relative z-10 p-6 text-white">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[color:var(--accent)]">{item.category}</p>
                  <h3 className="mt-2 text-2xl font-display font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs text-white/80 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Swipe indicator badge */}
        <div className="mt-4 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[color:var(--muted)] opacity-80">
          <span>Swipe to explore</span>
          <span className="animate-pulse">→</span>
        </div>
      </section>
    </>
  );
}
