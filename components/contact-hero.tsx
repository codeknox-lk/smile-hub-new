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
    <section className="relative w-full min-h-[95vh] flex flex-col lg:flex-row -mt-24 pt-24 lg:-mt-28 lg:pt-0 bg-[color:var(--background)]">
      {/* Left Typography Side */}
      <div className="relative z-10 w-full lg:w-[45%] xl:w-[40%] flex flex-col justify-center px-6 py-16 sm:px-12 lg:pl-20 xl:pl-24 lg:pr-12 lg:pt-28">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl mx-auto lg:mx-0"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--accent-strong)]">
            {eyebrow}
          </p>
          <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-[5rem] font-semibold leading-[1.05] tracking-tight text-[color:var(--ink)]">
            {title}
          </h1>
          <p className="mt-8 text-lg md:text-xl leading-relaxed text-[color:var(--muted)] font-medium">
            {body}
          </p>
          
          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
            <ActionLink 
              href={primaryHref} 
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent-strong)] px-10 py-5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[color:var(--accent-strong)]/20" 
              eventName="contact_hero_primary_click" 
              external={primaryHref.startsWith("http")}
            >
              {primaryLabel}
            </ActionLink>
            {secondaryHref && secondaryLabel ? (
              <ActionLink
                href={secondaryHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--ink)] transition-colors hover:text-[color:var(--accent-strong)] group"
                eventName="contact_hero_secondary_click"
                external={secondaryHref.startsWith("http")}
              >
                {secondaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </ActionLink>
            ) : null}
          </div>

          {/* Quick Info Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-[color:var(--line)] flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[color:var(--accent-strong)]" />
              <span className="text-xs font-semibold text-[color:var(--ink)]">Tue-Sat 5PM-7PM • Sun 9AM-2PM</span>
            </div>
            <ActionLink 
              href={siteSettings.googleMapsUrl} 
              external 
              eventName="contact_hero_map_click"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <MapPin className="h-4 w-4 text-[color:var(--accent-strong)] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-[color:var(--ink)] group-hover:text-[color:var(--accent-strong)] transition-colors">Peradeniya Road, Kandy</span>
            </ActionLink>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Image Side */}
      <div className="relative w-full lg:w-[65%] xl:w-[65%] h-[60vh] lg:h-auto">
        {/* Masked Image Container */}
        <div className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_100%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_100%)]">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={image} 
            alt={imageAlt} 
            className="absolute inset-0 w-full h-full object-cover object-[center_20%] lg:object-[left_center] saturate-[0.95]"
          />
          {/* Cinematic overlays to match the premium vibe */}
          <div className="absolute inset-0 bg-[color:var(--accent)]/5 mix-blend-color pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/40 via-transparent to-transparent opacity-30 pointer-events-none" />
        </div>

        {/* Floating Live Status Badge - Placed outside mask to prevent fading */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-16 lg:bottom-12 left-6 lg:left-12 z-30 flex items-center gap-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200/50 p-4 shadow-xl"
        >
          <div className="relative flex h-3 w-3">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-green-400' : 'bg-amber-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpen ? 'bg-green-500' : 'bg-amber-500'}`}></span>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Live Status</p>
            <p className="text-sm font-bold text-slate-900">
              {isOpen ? "Open • Walk-ins welcome" : `Closed • ${nextOpenText}`}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient blend to transition smoothly into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[color:var(--background)] to-transparent pointer-events-none z-20" />
    </section>
  );
}
