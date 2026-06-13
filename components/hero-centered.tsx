"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageCircleMore, CalendarDays, Star } from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { homepageSections, quickWhatsAppMessages, siteSettings } from "@/data/site";
import type { ReviewSnapshot } from "@/lib/reviews";

interface HeroCenteredProps {
  reviewSnapshot: ReviewSnapshot;
}

export function HeroCentered({ reviewSnapshot }: HeroCenteredProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-x-hidden bg-[color:var(--surface)] border-b border-[color:var(--line)] -mt-24 pt-24 pb-12 lg:-mt-28 lg:pt-28 lg:pb-20">
      
      {/* Absolute Full Screen Background Backdrop */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/30 via-black/10 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/15 z-10" /> {/* Ambient darkening */}
        
        <motion.img
          src="/images/young-woman-drinking-coffee-dining-room.jpg"
          alt="Happy Patient at Smile Hub"
          className="absolute inset-0 h-full w-full object-cover transform scale-x-[-1]"
          initial={{ scale: 1.05 }}
          animate={{ scale: [1.05, 1.1, 1.05] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "mirror"
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-20 flex items-center justify-center w-full">
        <motion.div 
          className="w-full max-w-3xl lg:max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_35px_80px_rgba(23,94,146,0.18)] flex flex-col items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -4 }}
        >
          {/* Header Section */}
          <div className="space-y-4 w-full">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-sm">
              <Sparkles className="h-4 w-4 text-amber-300 animate-pulse" />
              {homepageSections.heroEyebrow}
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-white max-w-2xl text-left">
              Smile Brightly,<br />
              <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,rgba(103,198,238,1)_0%,rgba(255,255,255,1)_100%)]">Smile Confidently</span>
            </h1>
          </div>

          {/* Content Section Grid */}
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] mt-8 border-t border-white/10 pt-8 w-full items-start text-left">
            {/* Left Column: Info & Actions */}
            <div className="space-y-5">
              <p className="text-base sm:text-lg leading-relaxed text-white/90 text-pretty">
                {homepageSections.heroBody} Whether you need cosmetic enhancement, restorative care, or maintenance, feel completely looked after.
              </p>
              
              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <ActionLink
                  href={quickWhatsAppMessages.general}
                  external
                  eventName="home_whatsapp_click"
                  className="button-primary group/btn flex items-center gap-2 justify-center px-5 py-2.5 cursor-pointer text-sm"
                >
                  <MessageCircleMore className="h-4.5 w-4.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  Chat on WhatsApp
                </ActionLink>
                <ActionLink 
                  href={siteSettings.bookingUrl} 
                  className="button-secondary flex items-center gap-2 justify-center px-5 py-2.5 !bg-white/90 !text-[color:var(--ink)] hover:!bg-white !border-transparent cursor-pointer text-sm" 
                  eventName="home_book_click"
                >
                  <CalendarDays className="h-4.5 w-4.5" />
                  Book consultation
                </ActionLink>
              </div>
            </div>

            {/* Right Column: Modular Highlight Grid */}
            <div className="grid grid-cols-2 gap-3 h-full w-full">
              {[
                { title: "Preventive", desc: "Routine maintenance" },
                { title: "Cosmetic", desc: "Smile transformations" },
                { title: "Restorative", desc: "Expert replacements" },
                { title: "Painless", desc: "Anxiety-free care" }
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 hover:bg-white/10 transition-all flex flex-col justify-between group cursor-pointer shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] group-hover:scale-125 transition-transform" />
                    <Sparkles className="h-3 w-3 text-white/30 group-hover:text-amber-300 transition-colors" />
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-bold text-white tracking-wide">{item.title}</p>
                    <p className="text-[10px] text-white/70 mt-0.5 line-clamp-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer trust zone */}
          <div className="pt-5 border-t border-white/10 w-full flex items-center justify-between gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-300 text-xs">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs font-semibold text-white/90">5.0 Live Google Rating</p>
            </div>
            <p className="text-xs text-white/40 hidden sm:block">Frosted Panel split layout</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
