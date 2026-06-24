"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
        <div className="max-w-xl space-y-2">
          {spaces.map((space) => (
            <div 
              key={space.id}
              className="group cursor-pointer py-3 lg:py-4 transition-all duration-300 relative"
              onMouseEnter={() => setActiveSpace(space.id)}
              onClick={() => setActiveSpace(space.id)}
            >
              <div className="flex items-center min-h-[40px] lg:min-h-[60px]">
                {/* Animated Line Indicator (absolutely positioned to prevent layout shift) */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-start pointer-events-none">
                  <div className={cn(
                    "h-[2px] transition-all duration-500 ease-out",
                    activeSpace === space.id ? "w-6 lg:w-12 bg-[color:var(--accent-light)]" : "w-0 bg-white/30 group-hover:w-4"
                  )} />
                </div>
                <h3 className={cn(
                  "font-display text-2xl lg:text-5xl font-bold transition-all duration-500 tracking-tight pl-8 lg:pl-16",
                  activeSpace === space.id ? "text-white" : "text-white/40 group-hover:text-white/70"
                )}>
                  {space.title}
                </h3>
              </div>
              
              {/* Expandable Subtitle */}
              <motion.div
                initial={false}
                animate={{
                  height: activeSpace === space.id ? "auto" : 0,
                  opacity: activeSpace === space.id ? 1 : 0,
                  marginTop: activeSpace === space.id ? 16 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1], // easeOutExpo
                }}
                className="pl-8 lg:pl-16 overflow-hidden"
              >
                <p className="text-sm lg:text-base leading-relaxed text-white/80 font-medium">
                  {space.subtitle}
                </p>
              </motion.div>
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
