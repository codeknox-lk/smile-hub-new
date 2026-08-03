"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { ActionLink } from "./action-link";
import { siteSettings } from "@/data/site";

type ContactHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  image: string;
  imageAlt: string;
};

export function ContactHero({
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  image,
  imageAlt
}: ContactHeroProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [nextOpenText, setNextOpenText] = useState("See hours below");

  useEffect(() => {
    // Real clinic hours based on Google Maps
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    
    let open = false;
    let nextText = "See hours below";

    if (day >= 2 && day <= 6) { // Tue-Sat
      if (hour >= 17 && hour < 19) {
        open = true;
      } else if (hour < 17) {
        nextText = "Opens today at 5 PM";
      } else { // hour >= 19
        if (day === 6) { // Saturday
          nextText = "Opens tomorrow at 9 AM";
        } else {
          nextText = "Opens tomorrow at 5 PM";
        }
      }
    } else if (day === 0) { // Sunday
      if (hour >= 9 && hour < 14) {
        open = true;
      } else if (hour < 9) {
        nextText = "Opens today at 9 AM";
      } else { // hour >= 14
        nextText = "Opens Tue at 5 PM";
      }
    } else if (day === 1) { // Monday
      nextText = "Opens tomorrow at 5 PM";
    }

    setIsOpen(open);
    setNextOpenText(nextText);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-[92vh] flex items-end overflow-hidden -mt-24 pt-24 lg:-mt-28 lg:pt-28 pb-8 lg:pb-14 bg-[color:var(--background)]">
      
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[color:var(--background)]">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={image} 
          alt={imageAlt} 
          className="absolute inset-0 w-full h-full object-cover object-center saturate-[0.95]"
        />
        {/* Soft, targeted gradient overlay that protects text contrast on left while keeping middle/top 100% visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--background)]/90 via-[color:var(--background)]/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[color:var(--background)] via-[color:var(--background)]/60 to-transparent" />
      </div>

      {/* Main Container: Split Bottom Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col lg:flex-row items-end justify-between gap-8 pt-20">
        
        {/* Bottom Left Content Block */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:max-w-xl text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent-strong)]/10 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[color:var(--accent-strong)] border border-[color:var(--accent-strong)]/20 backdrop-blur-md">
            {eyebrow}
          </span>
          
          <h1 className="mt-4 font-display text-3xl sm:text-5xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-[color:var(--ink)]">
            {title}
          </h1>
          
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[color:var(--muted)] font-medium max-w-lg">
            {body}
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <ActionLink 
              href={primaryHref} 
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent-strong)] px-7 py-3.5 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[color:var(--accent-strong)]/25 shadow-md" 
              eventName="contact_hero_primary_click" 
              external={primaryHref.startsWith("http")}
            >
              {primaryLabel}
            </ActionLink>
            
            {secondaryHref && secondaryLabel ? (
              <ActionLink
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/80 hover:bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-[color:var(--ink)] transition-all border border-gray-200/80 shadow-sm group"
                eventName="contact_hero_secondary_click"
                external={secondaryHref.startsWith("http")}
              >
                {secondaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[color:var(--accent-strong)]" />
              </ActionLink>
            ) : null}
          </div>
        </motion.div>

        {/* Bottom Right Floating Executive Info & Live Status Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-auto shrink-0 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/60 p-5 sm:p-6 shadow-2xl space-y-4 shadow-slate-900/10"
        >
          {/* Live Status Header */}
          <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpen ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Clinic Status</span>
            </div>
            
            <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${isOpen ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
              {isOpen ? "Open Now" : "Closed"}
            </span>
          </div>

          {/* Quick Details List */}
          <div className="space-y-2.5 text-xs text-slate-700">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50 text-[color:var(--accent-strong)] shrink-0">
                <Clock className="h-3.5 w-3.5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Tue-Sat: 5PM - 7PM • Sun: 9AM - 2PM</p>
                <p className="text-[11px] text-slate-500">{nextOpenText}</p>
              </div>
            </div>

            <ActionLink 
              href={siteSettings.googleMapsUrl} 
              external 
              eventName="contact_hero_map_click"
              className="flex items-center gap-3 group cursor-pointer pt-1"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50 text-[color:var(--accent-strong)] group-hover:bg-[color:var(--accent-strong)] group-hover:text-white transition-colors shrink-0">
                <MapPin className="h-3.5 w-3.5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 group-hover:text-[color:var(--accent-strong)] transition-colors">Peradeniya Road, Kandy</p>
                <p className="text-[11px] text-slate-500 underline decoration-slate-300">Opposite Damro Showroom</p>
              </div>
            </ActionLink>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
