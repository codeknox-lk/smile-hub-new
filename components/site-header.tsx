"use client";

import { 
  ChevronDown, 
  HeartPulse, 
  Menu, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  Smile, 
  X, 
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navItems, quickWhatsAppMessages, siteSettings, treatments } from "@/data/site";
import { formatPhoneForTel } from "@/lib/utils";
import { ActionLink } from "./action-link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <header className="sticky top-0 z-50 pt-4 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <motion.div 
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 transition-all duration-500 relative
          ${isScrolled 
            ? "rounded-2xl border border-black/5 bg-white/95 backdrop-blur-xl px-4 sm:px-6 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.08)]" 
            : "rounded-3xl sm:rounded-[2.5rem] border border-white bg-white/100 px-4 sm:px-8 py-3 sm:py-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* 1. Branding Zone */}
        <div className="flex items-center gap-8">
          <ActionLink href="/" className="flex min-w-0 items-center justify-center group" eventName="nav_logo_click">
            <motion.div className="relative">
              <img 
                src="/images/logo white back.png" 
                alt="Smile Hub" 
                className={`transition-all duration-500 object-contain ${isScrolled ? "h-10 w-10" : "h-16 w-16"}`} 
              />
            </motion.div>
          </ActionLink>

          {/* 2. Primary Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item, idx) => {
              const active = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

              if (item.label === "Treatments") {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setIsTreatmentsOpen(true)}
                    onMouseLeave={() => setIsTreatmentsOpen(false)}
                  >
                    <button
                      type="button"
                      className={`relative inline-flex items-center gap-1.5 px-4 py-2 text-sm transition-all font-bold tracking-tight rounded-full hover:bg-black/5
                        ${active ? "text-[color:var(--ink)]" : "text-[color:var(--ink)]/60 hover:text-[color:var(--ink)]"}`}
                    >
                      {active && (
                        <motion.span
                          layoutId="active-nav-indicator"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[color:var(--accent-strong)] shadow-[0_0_8px_rgba(44,127,189,0.4)]"
                        />
                      )}
                      {item.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isTreatmentsOpen ? "rotate-180" : "rotate-0"}`} />
                    </button>

                    <AnimatePresence>
                      {isTreatmentsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 pt-4 z-[60]"
                        >
                          <div className="w-[520px] rounded-3xl border border-black/5 bg-white p-6 shadow-[0_30px_70px_rgba(0,0,0,0.12)] grid grid-cols-2 gap-4">
                            {treatments.map((t) => {
                              const Icon = t.slug === "preventive-care" ? ShieldCheck : t.slug === "restorative-care" ? HeartPulse : t.slug === "cosmetic-dentistry" ? Sparkles : Smile;
                              return (
                                <ActionLink
                                  key={t.slug}
                                  href={`/treatments/${t.slug}`}
                                  className="group/item relative flex flex-col justify-end min-h-[140px] p-4 rounded-2xl overflow-hidden transition-all bg-black"
                                >
                                  {/* Background Image & Overlays */}
                                  <div className="absolute inset-0 z-0">
                                    <img 
                                      src={t.image} 
                                      alt={t.shortTitle} 
                                      className="h-full w-full object-cover transition-transform duration-500 group-hover/item:scale-110 opacity-60"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                                  </div>

                                  {/* Icon & Text Layer */}
                                  <div className="relative z-20">
                                    <div className="flex items-center gap-3">
                                      <div className="shrink-0 h-8 w-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-[color:var(--accent)] border border-white/10">
                                        <Icon className="h-4 w-4" />
                                      </div>
                                      <p className="font-bold text-sm text-white group-hover/item:text-[color:var(--accent)] transition-colors">{t.shortTitle}</p>
                                    </div>
                                  </div>
                                </ActionLink>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <ActionLink
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-bold tracking-tight rounded-full transition-all hover:bg-black/5
                    ${active ? "text-[color:var(--ink)]" : "text-[color:var(--ink)]/60 hover:text-[color:var(--ink)]"}`}
                >
                  {active && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[color:var(--accent-strong)] shadow-[0_0_8px_rgba(44,127,189,0.4)]"
                    />
                  )}
                  {item.label}
                </ActionLink>
              );
            })}
          </nav>
        </div>

        {/* 3. Action Bridge Zone */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center border-l border-black/10 pl-6 gap-6">
            <a
              href={`tel:${formatPhoneForTel(siteSettings.phonePrimary)}`}
              className="group flex flex-col items-end"
            >
              <span className="text-[10px] uppercase tracking-widest text-[color:var(--ink)]/40 font-bold">Inquiry</span>
              <span className="text-sm text-[color:var(--ink)]/90 font-bold group-hover:text-[color:var(--accent-strong)] transition-colors">
                {siteSettings.phonePrimary}
              </span>
            </a>

            <ActionLink
              href={quickWhatsAppMessages.general}
              external
              className="relative group overflow-hidden bg-[color:var(--accent-strong)] text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-[1.03] active:scale-95 shadow-lg shadow-[color:var(--accent-strong)]/20"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </span>
            </ActionLink>
          </div>

          <button
            type="button"
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-black/5 text-[color:var(--ink)]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* 4. Scroll Progress Indicator */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-[color:var(--accent-strong)] z-50 rounded-full"
          style={{ scaleX: useTransform(scrollY, [0, 1000], [0, 1]), transformOrigin: "0%" }}
        />
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="absolute top-[calc(100%+0.5rem)] inset-x-4 rounded-3xl border border-black/5 bg-white p-6 shadow-2xl lg:hidden z-50 overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <Smile className="h-32 w-32 text-[color:var(--ink)]" />
             </div>
             
            <nav className="flex flex-col gap-4 relative z-10">
              {navItems.map((item) => {
                const active = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);
                return (
                  <ActionLink
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between p-4 rounded-2xl transition ${
                      active ? "bg-black/5 text-[color:var(--ink)]" : "text-[color:var(--ink)]/60"
                    }`}
                  >
                    <span className="text-lg font-bold">{item.label}</span>
                    <ArrowRight className={`h-5 w-5 transition-transform ${active ? "translate-x-0" : "-translate-x-4 opacity-0"}`} />
                  </ActionLink>
                );
              })}
              
              <div className="mt-4 pt-6 border-t border-black/10 flex flex-col gap-3">
                 <ActionLink href={quickWhatsAppMessages.general} external className="w-full bg-[color:var(--accent-strong)] text-white p-5 rounded-2xl text-center font-bold shadow-lg shadow-[color:var(--accent-strong)]/20">
                    Message via WhatsApp
                 </ActionLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
