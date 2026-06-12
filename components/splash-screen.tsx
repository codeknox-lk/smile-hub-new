"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("splash_seen");
    if (hasSeenSplash === "true") {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      // Optional: uncomment below to ONLY show once per session
      // sessionStorage.setItem("splash_seen", "true");
    }, 3200); // Wait for animations to complete

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: "blur(8px)",
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          }}
        >
          {/* Subtle Background Radial Glows */}
          <div className="absolute inset-0 z-0">
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full opacity-20 filter blur-3xl bg-[color:var(--accent)]" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full opacity-20 filter blur-3xl bg-[color:var(--accent-strong)]" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Logo Image with Premium Shimmer Sweep */}
            <motion.div
              className="relative flex flex-col items-center justify-center p-4 overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.9, 
                ease: [0.175, 0.885, 0.32, 1.15], // Premium spring curve overshoot
                delay: 0.2 
              }}
            >
              {/* Cinematic Shimmer Light Ray Overlay */}
              <motion.div 
                className="absolute inset-x-0 h-full z-20 bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.45)_50%,rgba(255,255,255,0)_100%)] w-[120%]"
                initial={{ x: "-120%" }}
                animate={{ x: "120%" }}
                transition={{ 
                  delay: 0.9, 
                  duration: 1.2, 
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1.5
                }}
              />

              <img 
                src="/images/logo white back.png"
                alt="Smile Hub Logo"
                className="w-56 md:w-64 h-auto relative z-10 drop-shadow-[0_16px_45px_rgba(66,150,212,0.14)] object-contain mix-blend-multiply"
              />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
