"use client";

import { motion } from "framer-motion";
import { 
  MessageCircleMore, 
  CalendarDays, 
  Star, 
  CheckCircle2, 
  Clock, 
  Users,
  Heart
} from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { quickWhatsAppMessages, siteSettings } from "@/data/site";
import type { ReviewSnapshot } from "@/lib/reviews";

interface HeroModernHealthProps {
  reviewSnapshot: ReviewSnapshot;
}

export function HeroModernHealth({ reviewSnapshot }: HeroModernHealthProps) {
  return (
    <section className="relative min-h-[95dvh] flex items-end md:items-center justify-center overflow-hidden bg-[color:var(--background)] -mt-24 lg:-mt-28 pt-24 lg:pt-28 pb-8 lg:pb-10">
      
      {/* 1. Cinematic Background Backdrop (Bright Mode) - True Disappearing Bottom Mask */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none" style={{ WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" }}>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 h-full w-full overflow-hidden"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-bright-bg-ai.png"
            className="absolute inset-0 h-full w-full object-cover object-top"
            style={{ objectPosition: "center 8%" }}
          >
            <source src="/images/7803281-hd_1920_1078_30fps.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Layered Cinematic Overlays for Text Legibility on Light Images */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--background)]/40 via-transparent to-transparent z-10" />
        
        {/* Soft blur overlay to give it a premium glow */}
        <div className="absolute inset-0 backdrop-blur-[1px] z-10 opacity-60" />
      </div>

      {/* 2. Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30 flex flex-col justify-end md:justify-center min-h-[80vh] lg:min-h-[72vh] pb-0 md:pb-0">
        
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Eyebrow Signal */}
          <motion.div 
            className="flex items-center gap-3 mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="h-[2px] w-12 bg-[color:var(--accent-strong)]" />
            <p className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.4em] text-[color:var(--accent-strong)]">
              SMILE HUB PREMIUM DENTAL CARE
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold leading-[1.1] lg:leading-[0.95] tracking-tight text-[color:var(--ink)] mb-2 lg:mb-3 drop-shadow-sm text-balance"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          >
            Defining Your Perfect Smile,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent-strong)] to-[color:var(--accent)] font-serif italic font-light pr-2 lg:pr-4 pb-2">Precisely.</span>
          </motion.h1>

          {/* Sub-Headline */}
          <motion.h2 
            className="font-display text-base sm:text-xl lg:text-2xl font-semibold tracking-tight text-[color:var(--accent-strong)] mb-3 lg:mb-4 drop-shadow-sm text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
          >
            Premium Digital Dentistry in the Heart of Kandy
          </motion.h2>

          {/* Body Text */}
          <motion.div 
            className="relative inline-block max-w-xl lg:max-w-2xl group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
          >
            <p className="text-sm sm:text-base lg:text-[1.05rem] leading-relaxed text-[color:var(--ink)]/85 font-medium relative text-pretty drop-shadow-sm">
              Experience a new standard of clinical excellence at Smile Hub Premium Dental Care. 
              Combining advanced digital diagnostics with a calming, patient-first environment, 
              our experienced team of dental surgeons and specialists provides trusted, precise, 
              and transparent care from your first consultation to your final result.
            </p>
          </motion.div>

          {/* Primary Action Zone */}
          <motion.div 
            className="hidden md:flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-4 mt-4 lg:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
          >
            <ActionLink 
              href="/book" 
              className="group inline-flex items-center gap-3 justify-center rounded-full bg-[color:var(--ink)] px-5 lg:px-7 py-3 lg:py-3.5 text-base font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(11,25,44,0.3)] active:scale-95 shadow-md border border-[color:var(--ink)] w-full sm:w-auto"
            >
              <CalendarDays className="h-5 w-5 text-[color:var(--accent-strong)] transition-colors duration-300 group-hover:text-white" />
              Book Consultation
            </ActionLink>

            <ActionLink 
              href={quickWhatsAppMessages.general} 
              external 
              className="group inline-flex items-center gap-3 justify-center rounded-full border border-[color:var(--line)] bg-white/70 backdrop-blur-xl px-5 lg:px-7 py-3 lg:py-3.5 text-base font-bold text-[color:var(--ink)] transition-all hover:border-[color:var(--accent-strong)] hover:bg-white active:scale-95 shadow-sm w-full sm:w-auto"
            >
              <MessageCircleMore className="h-5 w-5 text-[#25D366]" />
              Chat on WhatsApp
            </ActionLink>
          </motion.div>
        </div>

        {/* 3. Trust Signals (Light Mode) */}
        <motion.div 
          className="mt-4 lg:mt-5 grid grid-cols-3 gap-2 sm:gap-6 lg:gap-8 border-t border-[color:var(--line)]/80 pt-3 lg:pt-4 relative z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* Signal 1: Reviews */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-4 group">
            <div className="flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-white shadow-sm border border-[color:var(--line)] transition-transform group-hover:scale-105">
              <span className="text-base sm:text-xl font-black text-[color:var(--ink)]">5.0</span>
            </div>
            <div>
              <div className="flex justify-center sm:justify-start gap-0.5 sm:gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                ))}
              </div>
              <p className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-[color:var(--muted)] mt-1">
                {reviewSnapshot?.reviewCount || "60+"} Google Reviews
              </p>
            </div>
          </div>

          {/* Signal 2: Availability */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-4 group">
             <div className="flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[color:var(--surface)] shadow-sm border border-[color:var(--line)] text-[color:var(--accent-strong)] transition-transform group-hover:scale-105">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[color:var(--ink)] leading-tight">Flexible Booking</p>
              <p className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-[color:var(--accent-strong)] mt-0.5 sm:mt-1">
                Weekend Slots
              </p>
            </div>
          </div>

          {/* Signal 3: Comfort Promise */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-4 group">
             <div className="flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-rose-50 shadow-sm border border-rose-100 text-rose-500 transition-transform group-hover:scale-105">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[color:var(--ink)] leading-tight">Comfort-First</p>
              <p className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-[color:var(--muted)] mt-0.5 sm:mt-1">
                Gentle & Reassuring
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-40 pointer-events-none opacity-[0.02] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20200%20200%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noiseFilter%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.65%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] bg-repeat" />
    </section>
  );
}
