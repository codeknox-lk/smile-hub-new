"use client";

import { ArrowRight } from "lucide-react";

type SideBySideComparisonProps = {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export function SideBySideComparison({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After"
}: SideBySideComparisonProps) {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full max-w-6xl mx-auto group/wrapper">
      {/* Before Card */}
      <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-white/80 bg-slate-100 shadow-xl transition-all duration-500 hover:-translate-y-1">
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 transition-colors duration-500" />
        <div className="absolute top-4 left-4 rounded-full border border-white/80 bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[color:var(--muted)] shadow-sm backdrop-blur-md">
          {beforeLabel}
        </div>
      </div>

      {/* Center Arrow Indicator (Desktop Only) */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-14 w-14 items-center justify-center rounded-full border-[6px] border-[color:var(--background)] bg-[color:var(--accent-strong)] text-white shadow-2xl transition-transform duration-500 group-hover/wrapper:scale-110">
        <ArrowRight className="h-6 w-6" />
      </div>

      {/* Arrow Indicator (Mobile Only, between stacks) */}
      <div className="flex md:hidden justify-center -my-2 relative z-10">
        <div className="h-10 w-10 flex items-center justify-center rounded-full border-4 border-[color:var(--background)] bg-[color:var(--accent-strong)] text-white shadow-lg">
          <ArrowRight className="h-4 w-4 rotate-90" />
        </div>
      </div>

      {/* After Card */}
      <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white shadow-2xl shadow-[color:var(--accent)]/10 transition-all duration-500 hover:-translate-y-1">
        <img
          src={afterImage}
          alt={afterLabel}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 rounded-full border border-white/20 bg-[linear-gradient(135deg,var(--accent-strong)_0%,var(--accent-deep)_100%)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-lg">
          {afterLabel}
        </div>
      </div>
    </div>
  );
}
