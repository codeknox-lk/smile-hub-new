"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

export function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
  onClick,
  onMouseEnter,
}: DisplayCardProps & { onClick?: () => void; onMouseEnter?: () => void }) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={cn(
        "relative flex h-44 sm:h-48 w-[calc(100vw-4.5rem)] max-w-[19rem] sm:w-[25rem] -skew-y-[8deg] select-none flex-col justify-between rounded-2xl border-2 bg-muted/70 backdrop-blur-sm p-5 sm:p-6 transition-all duration-500 cursor-pointer after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[12rem] sm:after:w-[22rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] after:pointer-events-none hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--accent-light)] to-[color:var(--surface)] p-2 shadow-sm border border-white/60 shrink-0">
          {icon}
        </span>
        <p className={cn("text-base sm:text-lg font-bold tracking-tight truncate", titleClassName)}>{title}</p>
      </div>
      <p className="text-xs sm:text-sm leading-relaxed max-w-[90%] text-pretty text-[color:var(--ink)]/80 font-medium">{description}</p>
      <p className="text-[10px] sm:text-xs font-semibold text-[color:var(--muted)]">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const defaultCards: DisplayCardProps[] = [
    {
      title: "Atmosphere",
      description: "Specially designed interiors crafted to help you unwind.",
      date: "01 / Atmosphere",
    },
    {
      title: "Sterility",
      description: "Highest hygiene protocols for your safety.",
      date: "02 / Sterility",
    },
    {
      title: "Compassion",
      description: "Empathetic team focused on your well-being.",
      date: "03 / Compassion",
    },
    {
      title: "Precision",
      description: "Advanced digital systems for predictable results.",
      date: "04 / Precision",
    },
  ];

  const displayCards = cards || defaultCards;

  // Auto-rotate cards every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayCards.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, displayCards.length]);

  const handleSelectCard = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    // Resume auto-rotation after 10 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
    return () => clearTimeout(timeout);
  };

  const baseZIndexClasses = ["z-0", "z-10", "z-20", "z-30"];

  const stackTranslateClasses = [
    "translate-x-0 translate-y-0",
    "translate-x-5 sm:translate-x-8 translate-y-7 sm:translate-y-16",
    "translate-x-10 sm:translate-x-16 translate-y-14 sm:translate-y-32",
    "translate-x-15 sm:translate-x-24 translate-y-21 sm:translate-y-48",
  ];

  return (
    <div
      className="flex flex-col items-center w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cards stack area */}
      <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 w-full">
        {displayCards.map((cardProps, index) => {
          const isActive = activeIndex === index;
          const translateClass = stackTranslateClasses[index] || "translate-x-0 translate-y-0";
          const baseZ = baseZIndexClasses[index] || "z-0";

          const activeClasses = isActive
            ? "z-40 grayscale-0 before:opacity-0 border-[color:var(--accent)] bg-white shadow-2xl scale-[1.02] -translate-y-3 sm:-translate-y-5"
            : `${baseZ} grayscale before:opacity-100 border-[color:var(--line)] bg-white/90 shadow-md hover:grayscale-0 hover:before:opacity-0`;

          return (
            <DisplayCard
              key={index}
              {...cardProps}
              onClick={() => handleSelectCard(index)}
              onMouseEnter={() => handleSelectCard(index)}
              className={cn(
                "[grid-area:stack] transition-all duration-500 ease-out",
                "before:absolute before:inset-0 before:rounded-xl before:bg-white/50 before:content-[''] before:transition-opacity before:duration-500",
                translateClass,
                activeClasses,
                cardProps.className
              )}
            />
          );
        })}
      </div>

      {/* Mobile & Desktop Pillar Selector Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-28 sm:mt-36 z-30 max-w-full px-2">
        {displayCards.map((card, index) => {
          const isActive = activeIndex === index;
          const parts = card.date?.split("/") || [];
          const num = parts[0]?.trim() || `0${index + 1}`;
          const label = parts[1]?.trim() || card.title || "";

          return (
            <button
              key={index}
              type="button"
              onClick={() => handleSelectCard(index)}
              aria-label={`Select pillar ${num} ${label}`}
              className={cn(
                "px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-300 flex items-center gap-1.5 border select-none cursor-pointer",
                isActive
                  ? "bg-[color:var(--accent-strong)] text-white border-[color:var(--accent-strong)] shadow-lg scale-105"
                  : "bg-white/90 text-[color:var(--ink)]/70 border-[color:var(--line)] hover:bg-white hover:text-[color:var(--ink)] hover:border-[color:var(--accent)]/50"
              )}
            >
              <span
                className={cn(
                  "font-mono text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded-full font-semibold",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[color:var(--accent-strong)]/10 text-[color:var(--accent-strong)]"
                )}
              >
                {num}
              </span>
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
