"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { ActionLink } from "./action-link";

type AboutHeroProps = {
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

export function AboutHero({
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  image,
  imageAlt
}: AboutHeroProps) {
  return (
    <section className="relative w-full min-h-[95vh] flex items-end lg:items-center justify-start overflow-hidden -mt-24 pt-24 pb-0 lg:-mt-28 lg:pt-28 lg:pb-0">
      
      {/* Background Image & Overlays (Gallery Hero Style) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[color:var(--background)]">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={image} 
          alt={imageAlt} 
          className="absolute inset-0 w-full h-full object-cover object-center saturate-[0.95]"
        />
        {/* Subtle gradient to ensure text readability on the left, fading out faster */}
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--background)]/90 via-[color:var(--background)]/40 to-transparent" />
        
        {/* Seamless blend into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color:var(--background)] to-transparent" />
      </div>

      {/* Left Typography Side */}
      <div className="relative z-10 w-full lg:w-[50%] xl:w-[45%] flex flex-col justify-end lg:justify-center px-6 pt-12 pb-8 sm:px-12 sm:pb-20 lg:pl-20 xl:pl-24 lg:pr-12 lg:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl mx-auto lg:mx-0"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--accent-strong)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 sm:mt-8 font-display text-4xl sm:text-6xl lg:text-[5rem] font-semibold leading-[1.05] tracking-tight text-[color:var(--ink)]">
            {title}
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-[color:var(--muted)] font-medium">
            {body}
          </p>
          
          <div className="mt-6 sm:mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <ActionLink 
              href={primaryHref} 
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent-strong)] px-8 py-4 sm:px-10 sm:py-5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[color:var(--accent-strong)]/20 active:scale-95 w-full sm:w-auto" 
              eventName="about_hero_primary_click" 
              external={primaryHref.startsWith("http")}
            >
              {primaryLabel}
            </ActionLink>
            {secondaryHref && secondaryLabel ? (
              <ActionLink
                href={secondaryHref}
                className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-semibold text-[color:var(--ink)] transition-colors hover:text-[color:var(--accent-strong)] group py-2"
                eventName="about_hero_secondary_click"
                external={secondaryHref.startsWith("http")}
              >
                {secondaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </ActionLink>
            ) : null}
          </div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 mb-6 sm:mb-0 pt-5 sm:mt-12 sm:pt-8 border-t border-[color:var(--line)]/80 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4"
          >
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-2">
              <div className="flex text-amber-400 shrink-0">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <span className="text-xs font-semibold text-[color:var(--ink)] leading-tight">5.0 Google Rating</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[color:var(--accent-strong)] text-xs shrink-0 leading-none">✦</span>
              <span className="text-xs font-semibold text-[color:var(--ink)] leading-none">15+ Years Clinical Excellence</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
