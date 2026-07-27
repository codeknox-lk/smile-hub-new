"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ActionLink } from "./action-link";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  heroImage?: string;
  heroImageAlt?: string;
};

export function PageHero({
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  heroImage,
  heroImageAlt
}: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[95vh] flex items-end lg:items-center justify-start overflow-hidden -mt-24 pt-24 lg:-mt-28 lg:pt-28 lg:pb-0 bg-[color:var(--background)]">
      
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[color:var(--background)]">
        {heroImage && (
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroImage} 
            alt={heroImageAlt || "Page Hero"} 
            className="absolute inset-0 w-full h-full object-cover object-center saturate-[0.95]"
          />
        )}
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
          <p className="mt-4 sm:mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-[color:var(--muted)] font-medium">
            {body}
          </p>
          
          <div className="mt-8 sm:mt-12 flex flex-col gap-4 sm:gap-6 sm:flex-row sm:items-center">
            <ActionLink 
              href={primaryHref} 
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent-strong)] px-8 sm:px-10 py-4 sm:py-5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[color:var(--accent-strong)]/20 w-full sm:w-auto" 
              eventName="hero_primary_click" 
              external={primaryHref.startsWith("http")}
            >
              {primaryLabel}
            </ActionLink>
            {secondaryHref && secondaryLabel ? (
              <ActionLink
                href={secondaryHref}
                className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-semibold text-[color:var(--ink)] transition-colors hover:text-[color:var(--accent-strong)] group py-2"
                eventName="hero_secondary_click"
                external={secondaryHref.startsWith("http")}
              >
                {secondaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </ActionLink>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
