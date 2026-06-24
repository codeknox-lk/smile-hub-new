"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { cn } from "@/lib/utils";

export type SlideItem = {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
};

export function ScrollingFeatureShowcase({ slides }: { slides: SlideItem[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Track scroll position of the entire section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        slides.length - 1,
        Math.floor(latest * slides.length)
      );
      setActiveIndex(index >= 0 ? index : 0);
    });
    return () => unsubscribe();
  }, [scrollYProgress, slides.length]);

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[activeIndex];

  const dynamicStyles = {
    backgroundColor: currentSlide.bgColor,
    color: currentSlide.textColor,
    transition: 'background-color 0.8s ease, color 0.8s ease',
  };

  const gridPatternStyle = {
    '--grid-color': currentSlide.textColor === '#ffffff' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(11, 53, 81, 0.08)',
    backgroundImage: `
      linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
    `,
    backgroundSize: '3.5rem 3.5rem',
  };

  return (
    <>
      {/* Mobile Layout (Flowing list of cards) */}
      <div className="block md:hidden px-6 py-12 space-y-8 bg-white">
        <div className="mb-8 pl-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-6 bg-[color:var(--accent-strong)]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--accent-strong)]">
              The Process
            </p>
          </div>
          <h2 className="font-display text-4xl font-bold text-[color:var(--ink)] tracking-tight">
            What your journey <span className="font-serif italic font-light text-[color:var(--accent-strong)]">looks like</span>
          </h2>
        </div>
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="p-6 rounded-[2rem] border border-[color:var(--line)] shadow-sm transition-all duration-300"
            style={{ backgroundColor: slide.bgColor }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-4 bg-[color:var(--accent-strong)]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--accent-strong)]">
                Step 0{index + 1}
              </p>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[color:var(--ink)] font-display leading-[1.1]">
              {slide.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[color:var(--muted)] font-medium leading-relaxed">
              {slide.description}
            </p>
            <div className="mt-6 aspect-[4/3] rounded-2xl overflow-hidden border border-white/40 shadow-inner">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
                onError={(e) => { 
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src = `https://images.unsplash.com/photo-1579684389782-64d84b5e901d?q=80&w=800&auto=format&fit=crop`; 
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout (Sticky Scroll-locked Showcase) */}
      <div 
        ref={containerRef}
        className="hidden md:block relative w-full"
        style={{ height: `${slides.length * 130}vh` }}
      >
        <div 
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden transition-all duration-700"
          style={dynamicStyles}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto px-6 sm:px-8">
            
            {/* Left Column: Text Content, Pagination & Button */}
            <div className="relative flex flex-col justify-center p-8 md:p-16 border-r border-black/5 h-full pt-80 pb-24">
              
              {/* Process Section Header - Sticky inside the column */}
              <div 
                className="absolute left-8 md:left-16 right-8 md:right-16 z-10"
                style={{ top: "120px" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px w-8 bg-[color:var(--accent-strong)]" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--accent-strong)]">
                    The Process
                  </p>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-[color:var(--ink)] leading-[1.1] tracking-tight">
                  What your journey <span className="font-serif italic font-light text-[color:var(--accent-strong)]">looks like</span>
                </h2>
              </div>

              {/* Pagination Bars - Positioned below the Section Header */}
              <div 
                className="absolute left-8 md:left-16 flex space-x-2 z-10"
                style={{ top: "276px" }}
              >
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const el = containerRef.current;
                      if (el) {
                        const rect = el.getBoundingClientRect();
                        const containerTop = rect.top + window.scrollY;
                        const slideHeight = window.innerHeight;
                        window.scrollTo({
                          top: containerTop + (index * slideHeight),
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500 ease-in-out cursor-pointer",
                      index === activeIndex ? 'w-12' : 'w-6'
                    )}
                    style={{
                      backgroundColor: index === activeIndex ? currentSlide.textColor : `${currentSlide.textColor}30`
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="relative h-72 w-full mt-12">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={cn(
                      "absolute inset-0 transition-all duration-700 ease-in-out flex flex-col justify-center",
                      index === activeIndex
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-8 pointer-events-none'
                    )}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-px w-6 bg-[color:var(--accent-strong)]" />
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--accent-strong)]">
                        Step 0{index + 1}
                      </p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight font-display text-[color:var(--ink)] leading-[1.1]">
                      {slide.title}
                    </h2>
                    <p className="mt-6 text-base md:text-lg text-[color:var(--muted)] font-medium leading-relaxed max-w-md">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Book Appointment Button */}
              <div className="absolute bottom-12 left-8 md:left-16">
                <a
                  href="/book"
                  className="px-10 py-4 bg-[color:var(--ink)] text-white font-semibold rounded-full uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all shadow-md inline-block text-sm"
                >
                  Book Appointment
                </a>
              </div>
            </div>

            {/* Right Column: Image Content with Grid Background */}
            <div className="hidden md:flex items-center justify-center p-12 transition-all duration-700" style={gridPatternStyle}>
              <div className="relative w-[82%] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_30px_70px_rgba(11,53,81,0.18)] border-4 border-white bg-white">
                <div 
                  className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover saturate-[0.95]"
                        onError={(e) => { 
                          const target = e.target as HTMLImageElement;
                          target.onerror = null; 
                          target.src = `https://images.unsplash.com/photo-1579684389782-64d84b5e901d?q=80&w=800&auto=format&fit=crop`; 
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
