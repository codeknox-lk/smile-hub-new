"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const spaces = [
  {
    id: "reception",
    title: "Reception Lounge",
    subtitle: "A welcoming, calm environment designed to reduce clinical anxiety before your consultation.",
    image: "/images/clinic-1.png",
  },
  {
    id: "consultation",
    title: "Consultation Suite",
    subtitle: "Private spaces for clear communication, transparent treatment planning, and answering your questions.",
    image: "/images/why/comfort-care.png",
  },
  {
    id: "treatment",
    title: "Treatment Rooms",
    subtitle: "Equipped with digital diagnostics and ergonomic chairs for precise, comfortable care.",
    image: "/images/hero-bright-bg-ai.png",
  }
];

export function ClinicAtmosphereReveal() {
  const [activeSpace, setActiveSpace] = useState(spaces[0].id);

  return (
    <div className="relative w-full h-[500px] lg:h-[700px] rounded-[3rem] overflow-hidden border border-[color:var(--line)] shadow-2xl flex items-center group/container">
      {/* Background Images */}
      {spaces.map((space) => (
        <div 
          key={space.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            activeSpace === space.id ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <img 
            src={space.image} 
            alt={space.title} 
            className="w-full h-full object-cover transition-transform duration-[10s] ease-out"
            style={{ 
              transform: activeSpace === space.id ? 'scale(1)' : 'scale(1.05)',
            }}
          />
          {/* Cinematic Overlay - Darker on the left where text sits */}
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--ink)] via-[color:var(--ink)]/60 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/80 via-transparent to-transparent opacity-80" />
        </div>
      ))}

      {/* Interactive List Content */}
      <div className="relative z-20 w-full px-8 md:px-16 lg:px-24">
        <div className="max-w-md space-y-2">
          {spaces.map((space) => (
            <div 
              key={space.id}
              className="group cursor-pointer py-3 lg:py-4 transition-all duration-300"
              onMouseEnter={() => setActiveSpace(space.id)}
              onClick={() => setActiveSpace(space.id)}
            >
              <div className="flex items-center gap-3 lg:gap-4">
                {/* Animated Line Indicator */}
                <div className={cn(
                  "h-[2px] transition-all duration-500",
                  activeSpace === space.id ? "w-6 lg:w-12 bg-[color:var(--accent-light)]" : "w-0 bg-white/30 group-hover:w-4"
                )} />
                <h3 className={cn(
                  "font-display text-2xl lg:text-5xl font-bold transition-all duration-500 tracking-tight",
                  activeSpace === space.id ? "text-white" : "text-white/40 group-hover:text-white/70"
                )}>
                  {space.title}
                </h3>
              </div>
              
              {/* Expandable Subtitle */}
              <div className={cn(
                "grid transition-all duration-500 pl-12 lg:pl-16",
                activeSpace === space.id ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
              )}>
                <p className="overflow-hidden text-sm lg:text-base leading-relaxed text-white/80 font-medium">
                  {space.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:block">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
          Hover to explore
        </p>
      </div>
    </div>
  );
}
