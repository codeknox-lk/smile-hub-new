"use client";

import { motion } from "framer-motion";

export function HeroBgImage() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Localized Dark Safety Gradient on the Left text zone */}
      <div className="absolute inset-y-0 left-0 w-[55%] bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.4)_70%,transparent_100%)] z-10" />
      
      {/* Animated Image - Mirrored to place subject on the right */}
      <motion.img
        src="/images/young-woman-drinking-coffee-dining-room.jpg"
        alt="Happy Patient"
        className="absolute right-0 top-0 h-full w-full object-cover object-left z-0 transform scale-x-[-1]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "mirror"
        }}
      />
    </div>
  );
}
