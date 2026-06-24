"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, ShieldAlert } from "lucide-react";

const techBadges = [
  "3D Intraoral Scanning",
  "Pain-Free Laser Dentistry",
  "AI-Driven Diagnostics",
  "Digital Smile Mock-ups",
];

const bannerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.610, 0.355, 1.000] as const,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export function EliteSuiteBanner() {
  return (
    <motion.article
      variants={bannerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="group relative overflow-hidden rounded-[2.5rem] bg-[color:var(--ink)] p-8 sm:p-10 lg:p-14 shadow-2xl mt-16 lg:mt-24 border border-white/5"
    >
      {/* 1. Futuristic Background Orbs for Premium Tech Theme */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Soft cyan glow in the top-right corner */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[radial-gradient(circle,rgba(88,204,244,0.15)_0%,transparent_70%)] blur-3xl rounded-full" />
        
        {/* Soft clinical blue glow in the bottom-left */}
        <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-[radial-gradient(circle,rgba(19,111,155,0.2)_0%,transparent_70%)] blur-3xl rounded-full" />
        
        {/* Dynamic mesh network outline overlay (very faint) */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
        {/* Left Side Content Column */}
        <div className="lg:col-span-7">
          {/* Eyebrow Highlight */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[color:var(--accent-light)] border border-white/10 mb-6 backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>Coming Soon to Kandy</span>
          </div>

          {/* Sub-headline (MUST be h3) */}
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-4 text-balance">
            The Elite Suite:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent-light)] to-[color:var(--accent)] font-serif italic font-light">Advanced Cosmetic Dentistry</span>
          </h3>

          {/* Intro Text */}
          <p className="text-base sm:text-lg leading-relaxed text-white/80 font-medium text-pretty">
            Arriving soon. An exclusive, state-of-the-art suite dedicated entirely to digital smile makeovers, 
            complex restorations, and clear aligners. We are bringing the world's most advanced dental 
            technologies directly to Kandy.
          </p>
        </div>

        {/* Right Side Technology Badge Grid Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">
              TECHNICAL FEATURES
            </p>
            
            <div className="flex flex-wrap gap-2.5">
              {techBadges.map((badge, idx) => (
                <motion.span
                  key={badge}
                  custom={idx}
                  variants={badgeVariants}
                  className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-white/10 hover:border-[color:var(--accent)] hover:shadow-sm"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] mr-2.5 shadow-[0_0_8px_var(--accent)]" />
                  {badge}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
