"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { ReviewSnapshot } from "@/lib/reviews";

interface HeroVisualDeckProps {
  reviewSnapshot: ReviewSnapshot;
}

export function HeroVisualDeck({ reviewSnapshot }: HeroVisualDeckProps) {
  return (
    <div className="relative flex justify-center lg:justify-end items-center px-4 lg:px-0 mt-8 lg:mt-0">
      <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_30px_70px_rgba(23,94,146,0.14)] border border-white/40">
        <motion.img
          src="/images/young-woman-drinking-coffee-dining-room.jpg"
          alt="Happy Patient at Smile Hub"
          className="absolute inset-0 h-full w-full object-cover transform scale-x-[-1]"
          initial={{ scale: 1.15 }}
          animate={{ scale: [1.15, 1.2, 1.15] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            repeatType: "mirror"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent mix-blend-overlay" />
      </div>

      {/* Floating Stat Card (Top Left) */}
      <motion.div 
        className="absolute -top-4 -left-2 sm:-left-6 z-30 rounded-3xl border border-white/30 bg-white/80 backdrop-blur-md p-5 shadow-[0_20px_40px_rgba(23,94,146,0.08)] max-w-[13rem] cursor-pointer"
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex items-center gap-1.5">
          <div className="flex -space-x-1.5">
            {[1, 2, 3].map((v) => (
              <div key={v} className="h-6 w-6 rounded-full border-2 border-white overflow-hidden shadow-sm">
                <img src={`/images/avatars/avatar-${v}.png`} alt="Patient avatar" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[color:var(--accent-deep)]">Google Rating</p>
        </div>
        <div className="mt-2.5 flex items-baseline gap-1.5">
          <p className="font-display text-4xl font-bold text-[color:var(--ink)]">
            {reviewSnapshot.rating.toFixed(1)}
          </p>
          <div className="flex text-amber-400 text-xs mb-1">
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Status Badge (Bottom Right) */}
      <motion.div 
        className="absolute bottom-6 right-2 sm:-right-4 z-30 rounded-full border border-white/20 bg-white/90 backdrop-blur-md px-4 py-2.5 shadow-[0_12px_24px_rgba(0,0,0,0.05)] flex items-center gap-2 cursor-pointer"
        whileHover={{ x: 4, scale: 1.03 }}
      >
        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <p className="text-xs font-semibold text-[color:var(--ink)] tracking-wide">Ready for Appointments</p>
      </motion.div>
    </div>
  );
}
