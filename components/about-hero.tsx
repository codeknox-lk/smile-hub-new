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
              eventName="about_hero_primary_click" 
              external={primaryHref.startsWith("http")}
            >
              {primaryLabel}
            </ActionLink>
            {secondaryHref && secondaryLabel ? (
              <ActionLink
                href={secondaryHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--ink)] transition-colors hover:text-[color:var(--accent-strong)] group"
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
            className="mt-16 pt-8 border-t border-[color:var(--line)] flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span className="text-xs font-semibold text-[color:var(--ink)]">5.0 Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[color:var(--accent-strong)]">✦</span>
              <span className="text-xs font-semibold text-[color:var(--ink)]">15+ Years Clinical Excellence</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Image Side - Full Bleed with Gradient Mask */}
      <div className="relative w-full lg:w-[65%] xl:w-[65%] h-[60vh] lg:h-auto overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_100%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_100%)]">
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

      {/* Bottom gradient blend to transition smoothly into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[color:var(--background)] to-transparent pointer-events-none z-20" />
    </section>
  );
}
