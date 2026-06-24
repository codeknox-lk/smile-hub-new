"use client";

import DisplayCards from "@/components/ui/display-cards";
import { Sparkles, ShieldCheck, Heart, Cpu } from "lucide-react";

const standardCards = [
  {
    icon: <Sparkles className="size-4 text-emerald-600" />,
    title: "Anxiety-Free Atmosphere",
    description: "Specially designed interiors to help you unwind and feel at ease.",
    date: "01 / Atmosphere",
    titleClassName: "text-emerald-700 font-bold",
    className:
      "[grid-area:stack] z-0 hover:z-40 hover:-translate-y-12 before:absolute before:inset-0 before:rounded-xl before:bg-white/40 before:content-[''] grayscale hover:grayscale-0 before:transition-opacity before:duration-700 hover:before:opacity-0 bg-white border-[color:var(--line)] text-[color:var(--ink)] hover:border-emerald-500 hover:bg-white",
  },
  {
    icon: <ShieldCheck className="size-4 text-blue-600" />,
    title: "Uncompromising Sterility",
    description: "The highest international hygiene standards for clinical safety.",
    date: "02 / Sterility",
    titleClassName: "text-blue-700 font-bold",
    className:
      "[grid-area:stack] z-10 hover:z-40 translate-x-4 sm:translate-x-12 translate-y-3 sm:translate-y-8 hover:-translate-y-6 before:absolute before:inset-0 before:rounded-xl before:bg-white/40 before:content-[''] grayscale hover:grayscale-0 before:transition-opacity before:duration-700 hover:before:opacity-0 bg-white border-[color:var(--line)] text-[color:var(--ink)] hover:border-blue-500 hover:bg-white",
  },
  {
    icon: <Heart className="size-4 text-rose-500" />,
    title: "Compassionate Care",
    description: "A highly trained, empathetic dental team focused on your comfort.",
    date: "03 / Compassion",
    titleClassName: "text-rose-700 font-bold",
    className:
      "[grid-area:stack] z-20 hover:z-40 translate-x-8 sm:translate-x-24 translate-y-6 sm:translate-y-16 hover:-translate-y-0 before:absolute before:inset-0 before:rounded-xl before:bg-white/40 before:content-[''] grayscale hover:grayscale-0 before:transition-opacity before:duration-700 hover:before:opacity-0 bg-white border-[color:var(--line)] text-[color:var(--ink)] hover:border-rose-500 hover:bg-white",
  },
  {
    icon: <Cpu className="size-4 text-purple-600" />,
    title: "Precision Technology",
    description: "Integrating advanced digital systems for flawless results.",
    date: "04 / Precision",
    titleClassName: "text-purple-700 font-bold",
    className:
      "[grid-area:stack] z-30 translate-x-12 sm:translate-x-36 translate-y-9 sm:translate-y-24 hover:translate-y-12 bg-white border-[color:var(--line)] text-[color:var(--ink)] hover:border-purple-500 hover:bg-white shadow-xl hover:shadow-2xl",
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
      <div className="lg:col-span-7 flex justify-center py-10 lg:py-16 overflow-visible pr-0 sm:pr-24 lg:pr-36">
        <DisplayCards cards={standardCards} />
      </div>
    </div>
  );
}
