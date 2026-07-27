"use client";

import DisplayCards from "@/components/ui/display-cards";
import { Sparkles, ShieldCheck, Heart, Cpu } from "lucide-react";

const standardCards = [
  {
    icon: <Sparkles className="size-4 text-[color:var(--accent-strong)]" />,
    title: "Anxiety-Free Atmosphere",
    description: "Specially designed interiors crafted to help you completely unwind and feel at ease.",
    date: "01 / Atmosphere",
    titleClassName: "text-[color:var(--ink)] font-bold",
    className:
      "[grid-area:stack] z-0 hover:z-40 hover:-translate-y-8 before:absolute before:inset-0 before:rounded-xl before:bg-white/40 before:content-[''] grayscale hover:grayscale-0 before:transition-opacity before:duration-700 hover:before:opacity-0 bg-white border-[color:var(--line)] text-[color:var(--ink)] hover:border-[color:var(--accent)] hover:bg-white",
  },
  {
    icon: <ShieldCheck className="size-4 text-[color:var(--accent-strong)]" />,
    title: "Uncompromising Sterility",
    description: "The highest international hygiene protocols for your absolute clinical safety.",
    date: "02 / Sterility",
    titleClassName: "text-[color:var(--ink)] font-bold",
    className:
      "[grid-area:stack] z-10 hover:z-40 translate-x-3 sm:translate-x-8 translate-y-8 sm:translate-y-16 hover:-translate-y-2 sm:hover:translate-y-8 before:absolute before:inset-0 before:rounded-xl before:bg-white/40 before:content-[''] grayscale hover:grayscale-0 before:transition-opacity before:duration-700 hover:before:opacity-0 bg-white border-[color:var(--line)] text-[color:var(--ink)] hover:border-[color:var(--accent)] hover:bg-white",
  },
  {
    icon: <Heart className="size-4 text-[color:var(--accent-strong)]" />,
    title: "Compassionate Care",
    description: "A highly trained, empathetic dental team focused entirely on your well-being.",
    date: "03 / Compassion",
    titleClassName: "text-[color:var(--ink)] font-bold",
    className:
      "[grid-area:stack] z-20 hover:z-40 translate-x-6 sm:translate-x-16 translate-y-16 sm:translate-y-32 hover:translate-y-8 sm:hover:translate-y-24 before:absolute before:inset-0 before:rounded-xl before:bg-white/40 before:content-[''] grayscale hover:grayscale-0 before:transition-opacity before:duration-700 hover:before:opacity-0 bg-white border-[color:var(--line)] text-[color:var(--ink)] hover:border-[color:var(--accent)] hover:bg-white",
  },
  {
    icon: <Cpu className="size-4 text-[color:var(--accent-strong)]" />,
    title: "Precision Technology",
    description: "Integrating advanced digital systems for accurate diagnostics and predictable, flawless results.",
    date: "04 / Precision",
    titleClassName: "text-[color:var(--ink)] font-bold",
    className:
      "[grid-area:stack] z-30 translate-x-9 sm:translate-x-24 translate-y-24 sm:translate-y-48 hover:translate-y-16 sm:hover:translate-y-40 bg-white border-[color:var(--line)] text-[color:var(--ink)] hover:border-[color:var(--accent)] hover:bg-white shadow-xl hover:shadow-2xl",
  },
];

export function SmileHubStandard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full mt-8">
      {/* Left side text column */}
      <div className="lg:col-span-5 text-center lg:text-left space-y-6">
        <div className="flex items-center gap-3 justify-center lg:justify-start">
          <div className="h-px w-8 bg-[color:var(--accent-strong)]/30" />
          <h3 className="text-xs uppercase tracking-[0.25em] font-bold text-[color:var(--accent-strong)]">
            The Smile Hub Standard
          </h3>
        </div>
        
        <h4 className="font-display text-3xl sm:text-4xl font-bold text-[color:var(--ink)] leading-tight tracking-tight">
          Redefining Clinical Excellence
        </h4>
        
        <p className="text-base sm:text-lg leading-relaxed text-[color:var(--ink)]/70 font-medium">
          Step into a practice designed entirely for your comfort and safety. 
          By combining advanced clinical protocols with a calming, patient-first environment, 
          we ensure every visit is transparent, safe, and completely anxiety-free.
        </p>
        
        <div className="hidden lg:block pt-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--muted)]">
            Hover cards on the right to reveal pillars
          </p>
        </div>
      </div>

      {/* Right side stacked cards deck column */}
      <div className="lg:col-span-7 flex justify-center pt-10 pb-32 lg:pt-16 lg:pb-56 overflow-visible pr-0 sm:pr-24 lg:pr-32">
        <DisplayCards cards={standardCards} />
      </div>
    </div>
  );
}
