"use client";

import { motion } from "framer-motion";
import { MessageCircleMore, ArrowDown, ClipboardPenLine, ArrowRight } from "lucide-react";
import { ActionLink } from "./action-link";

type QuickAction = {
  label: string;
  href: string;
};

type BookHeroProps = {
  primaryHref: string;
  secondaryHref: string;
  quickActions: QuickAction[];
};

export function BookHero({
  primaryHref,
  secondaryHref,
  quickActions,
}: BookHeroProps) {
  return (
    <section className="relative w-full -mt-24 pt-32 pb-16 lg:-mt-28 lg:pt-40 lg:pb-24 bg-[color:var(--background)] overflow-hidden">
      
      {/* 1. Dynamic Aurora Orbs Background (Richer & more saturated) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[color:var(--background)] pointer-events-none">
        
        {/* Orb 1: Teal (Top Left) */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, 50, 100, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(103,198,238,0.7)_0%,transparent_70%)] blur-[120px]"
        />

        {/* Orb 2: Deep Blue (Bottom Right) */}
        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.3, 0.8, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,rgba(44,127,189,0.5)_0%,transparent_70%)] blur-[140px]"
        />

        {/* Orb 3: Soft Accent Glow (Center) */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,transparent_70%)] blur-[100px] mix-blend-overlay"
        />

        {/* Subtle Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

        {/* Soft radial white glow to ensure center text readability over the rich orbs */}
        <div className="absolute inset-0 bg-white/40" />
        
        {/* Bottom fade into the page */}
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[color:var(--background)] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Minimalist Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--accent-strong)] mb-6">
            Secure Your Spot
          </p>
          <h1 className="font-[family:var(--font-display)] text-5xl sm:text-6xl md:text-[5rem] font-semibold leading-[1.05] tracking-tight text-[color:var(--ink)] text-balance">
            How would you like to <span className="font-serif italic font-light text-[color:var(--accent-strong)]">book?</span>
          </h1>
        </motion.div>

        {/* Naked Action Tiles Grid */}
        <div className="grid w-full gap-6 md:grid-cols-[1.1fr_0.9fr] max-w-5xl mx-auto">
          
          {/* Tile 1: WhatsApp (Primary - Slightly wider) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <ActionLink 
              href={primaryHref} 
              external={true}
              eventName="book_hero_whatsapp_click"
              className="group relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-[3rem] bg-white/20 backdrop-blur-3xl p-10 text-left shadow-[0_20px_60px_rgba(37,211,102,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(37,211,102,0.15)] border border-white/80 hover:border-[#25D366]/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-[#25D366]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-[#25D366]/15 text-[#25D366] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]">
                  <MessageCircleMore className="h-8 w-8" />
                </div>
                <h2 className="mb-3 text-4xl font-bold tracking-tight text-[color:var(--ink)]">Fastest: WhatsApp</h2>
                <p className="text-[color:var(--muted)] font-medium max-w-[320px] text-lg leading-relaxed mix-blend-multiply">
                  Send us a quick message. Our front desk typically replies within 5 minutes.
                </p>
              </div>

              {/* Minimalist Glowing Arrow Bottom Right */}
              <div className="relative z-10 mt-12 flex w-full justify-end">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/60 text-[#25D366] transition-all duration-500 group-hover:bg-[#25D366] group-hover:text-white group-hover:shadow-[0_0_25px_rgba(37,211,102,0.5)]">
                  <ArrowRight className="h-6 w-6 -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                </div>
              </div>
            </ActionLink>
          </motion.div>

          {/* Tile 2: Form (Secondary) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <ActionLink 
              href={secondaryHref} 
              external={false}
              eventName="book_hero_form_scroll"
              className="group relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-[3rem] bg-white/20 backdrop-blur-3xl p-10 text-left shadow-[0_20px_60px_rgba(23,94,146,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(23,94,146,0.15)] border border-white/80 hover:border-[color:var(--accent-strong)]/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-[color:var(--accent)]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-[color:var(--sand-strong)] text-[color:var(--accent-strong)] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[color:var(--accent-strong)] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(44,127,189,0.3)]">
                  <ClipboardPenLine className="h-8 w-8" />
                </div>
                <h2 className="mb-3 text-4xl font-bold tracking-tight text-[color:var(--ink)]">Detailed Request</h2>
                <p className="text-[color:var(--muted)] font-medium max-w-[320px] text-lg leading-relaxed mix-blend-multiply">
                  Prefer structure? Fill out a request form with your ideal dates and times.
                </p>
              </div>

              {/* Minimalist Glowing Arrow Bottom Right */}
              <div className="relative z-10 mt-12 flex w-full justify-end">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/60 text-[color:var(--accent-strong)] transition-all duration-500 group-hover:bg-[color:var(--accent-strong)] group-hover:text-white group-hover:shadow-[0_0_25px_rgba(44,127,189,0.4)]">
                  <ArrowDown className="h-6 w-6 transition-transform duration-500 group-hover:translate-y-1" />
                </div>
              </div>
            </ActionLink>
          </motion.div>

        </div>

        {/* Unified "Quick Options" Bottom Tray (True Glass) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-12 w-full max-w-5xl rounded-[2.5rem] bg-white/20 backdrop-blur-3xl border border-white/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_40px_rgba(23,94,146,0.05)] transition-all duration-500 hover:bg-white/30 hover:border-white"
        >
          <div className="text-left shrink-0">
            <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--accent-strong)] mb-1">Quick Shortcuts</p>
            <p className="text-sm font-semibold text-[color:var(--ink)] mix-blend-multiply">Pre-fill your WhatsApp message</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 w-full">
            {quickActions.map((action) => (
              <ActionLink
                key={action.label}
                href={action.href}
                external
                eventName="book_quick_action_click"
                eventPayload={{ label: action.label }}
                className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-white px-4 py-2 text-sm font-semibold text-[color:var(--ink)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[0_5px_15px_rgba(37,211,102,0.3)]"
              >
                {action.label}
              </ActionLink>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
