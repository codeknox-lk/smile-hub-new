"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, HeartHandshake, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Pillar {
  title: string;
  body: string;
  icon: React.ElementType;
  image: string;
}

const defaultPillars: Pillar[] = [
  {
    title: "Clear explanations",
    body: "Patients should understand what is happening, why it matters, and what comes next.",
    icon: Stethoscope,
    image: "/images/doctor-1.png"
  },
  {
    title: "Comfort-first care",
    body: "The whole visit should feel calmer and more supportive than a typical clinic experience.",
    icon: HeartHandshake,
    image: "/images/clinic-1.png"
  },
  {
    title: "Modern presentation",
    body: "A premium environment, clean digital flow, and a more polished patient journey.",
    icon: Sparkles,
    image: "/images/hero-premium-bg.png"
  }
];

interface AboutPillarsProps {
  eyebrow: string;
  title: React.ReactNode;
}

export function AboutPillars({ eyebrow, title }: AboutPillarsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[color:var(--surface)] overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--accent-strong)]">
            {eyebrow}
          </p>
          <h2 className="mt-6 font-[family:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-[color:var(--ink)] text-balance">
            {title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-center">

          {/* Left: Interactive Tabs */}
          <div className="flex flex-col gap-2 relative">
            {/* Background line to anchor tabs */}
            <div className="absolute left-0 top-8 bottom-8 w-[1px] bg-[color:var(--line)] hidden lg:block" />

            {defaultPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={pillar.title}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "group relative flex flex-col items-start text-left w-full p-6 sm:p-8 rounded-[2rem] transition-all duration-500",
                    isActive ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]" : "hover:bg-white/50"
                  )}
                >
                  <div className="flex items-center gap-4 mb-2 lg:mb-4">
                    <div className={cn(
                      "flex items-center justify-center h-12 w-12 rounded-full transition-colors duration-500 shrink-0",
                      isActive ? "bg-[color:var(--accent-strong)] text-white" : "bg-[color:var(--background)] text-[color:var(--accent-strong)] group-hover:bg-[color:var(--background)] group-hover:text-[color:var(--accent-strong)]"
                    )}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className={cn(
                      "text-xl sm:text-2xl font-semibold font-[family:var(--font-display)] transition-colors duration-500",
                      isActive ? "text-[color:var(--ink)]" : "text-[color:var(--muted)] group-hover:text-[color:var(--ink)]"
                    )}>
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Expandable Body Text */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-base sm:text-lg leading-relaxed text-[color:var(--muted)] pt-2 pb-2 pl-0 sm:pl-16">
                          {pillar.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activePillarIndicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-16 bg-[color:var(--accent-strong)] rounded-r-full hidden lg:block"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Cinematic Image Crossfade */}
          <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[color:var(--background)] shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={defaultPillars[activeIndex].image}
                  alt={defaultPillars[activeIndex].title}
                  className="w-full h-full object-cover saturate-[0.95]"
                />
                <div className="absolute inset-0 bg-[color:var(--accent)]/5 mix-blend-color pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/20 to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
