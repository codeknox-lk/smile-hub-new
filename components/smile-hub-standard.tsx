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
  },
  {
    icon: <ShieldCheck className="size-4 text-[color:var(--accent-strong)]" />,
    title: "Uncompromising Sterility",
    description: "The highest international hygiene protocols for your absolute clinical safety.",
    date: "02 / Sterility",
    titleClassName: "text-[color:var(--ink)] font-bold",
  },
  {
    icon: <Heart className="size-4 text-[color:var(--accent-strong)]" />,
    title: "Compassionate Care",
    description: "A highly trained, empathetic dental team focused entirely on your well-being.",
    date: "03 / Compassion",
    titleClassName: "text-[color:var(--ink)] font-bold",
  },
  {
    icon: <Cpu className="size-4 text-[color:var(--accent-strong)]" />,
    title: "Precision Technology",
    description: "Integrating advanced digital systems for accurate diagnostics and predictable, flawless results.",
    date: "04 / Precision",
    titleClassName: "text-[color:var(--ink)] font-bold",
  },
];

export function SmileHubStandard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full mt-4 sm:mt-8">
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
        
        <div className="pt-2">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[color:var(--muted)]">
            Tap or hover pillars to explore
          </p>
        </div>
      </div>

      {/* Right side stacked cards deck column */}
      <div className="lg:col-span-7 flex justify-center pt-4 pb-16 sm:pb-28 lg:pt-12 lg:pb-36 overflow-visible px-2 sm:px-0">
        <DisplayCards cards={standardCards} />
      </div>
    </div>
  );
}

