"use client";

import { useState } from "react";

type BeforeAfterSliderProps = {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After"
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  function handleResize(event: React.ChangeEvent<HTMLInputElement>) {
    setPosition(Number(event.target.value));
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.2rem] border border-white/80 bg-[linear-gradient(135deg,rgba(44,127,189,0.1)_0%,rgba(255,255,255,0.95)_45%,rgba(166,224,246,0.3)_100%)] shadow-[0_22px_65px_rgba(22,88,138,0.12)]">
      {/* Before Image or Placeholder */}
      <div className="absolute inset-0">
        {beforeImage && (
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}
        <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 rounded-full border border-white/80 bg-white/84 px-2.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-deep)] shadow-[0_8px_20px_rgba(23,94,146,0.06)]">
          {beforeLabel}
        </div>
      </div>

      {/* After Image or Placeholder (Clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        {afterImage && (
          <img
            src={afterImage}
            alt={afterLabel}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}
        <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 rounded-full border border-white/80 bg-white/84 px-2.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_8px_20px_rgba(23,94,146,0.06)] bg-[linear-gradient(135deg,var(--accent-strong)_0%,var(--accent-deep)_100%)]">
          {afterLabel}
        </div>
      </div>

      {/* Center Handle / Slider Marker */}
      <div
        className="absolute top-0 bottom-0 z-20 w-1 -translate-x-1/2 cursor-ew-resize bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[linear-gradient(135deg,var(--accent-strong)_0%,var(--accent)_100%)] shadow-[0_12px_28px_rgba(22,88,138,0.25)] flex items-center justify-center">
          <div className="flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18-6-6 6-6" />
              <path d="m15 6 6 6-6 6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Transparent Overlay Range Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={handleResize}
        className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
        aria-label="Adjust Before and After view ratio"
      />
    </div>
  );
}
