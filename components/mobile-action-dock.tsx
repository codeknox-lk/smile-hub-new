"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, MapPinned, MessageCircleMore, Phone } from "lucide-react";
import { quickWhatsAppMessages, siteSettings } from "@/data/site";
import { formatPhoneForTel } from "@/lib/utils";
import { ActionLink } from "./action-link";

export function MobileActionDock() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Hide at the bottom of the page (footer area) to prevent overlapping watermark and links
      const isAtBottom = windowHeight + currentScrollY >= documentHeight - 120;
      
      if (isAtBottom) {
        setIsVisible(false);
      } else if (currentScrollY <= 50) {
        setIsVisible(true);
      } else {
        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: 100, x: "-50%", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 z-50 md:hidden w-[90%] max-w-[340px] rounded-full border border-white/10 bg-slate-950/90 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl p-1.5 flex items-center justify-between gap-2"
        >
          <ActionLink
            href={quickWhatsAppMessages.general}
            external
            eventName="dock_whatsapp_click"
            className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 active:scale-95 active:bg-white/10 transition-all text-white shrink-0"
            aria-label="WhatsApp Chat"
          >
            <MessageCircleMore className="h-4.5 w-4.5" />
          </ActionLink>

          <a
            href={`tel:${formatPhoneForTel(siteSettings.phonePrimary)}`}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 active:scale-95 active:bg-white/10 transition-all text-white shrink-0"
            aria-label="Call Clinic"
          >
            <Phone className="h-4.5 w-4.5" />
          </a>

          <ActionLink
            href={siteSettings.googleMapsUrl}
            external
            eventName="dock_map_click"
            className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 active:scale-95 active:bg-white/10 transition-all text-white shrink-0"
            aria-label="View Map Location"
          >
            <MapPinned className="h-4.5 w-4.5" />
          </ActionLink>

          <ActionLink
            href={siteSettings.bookingUrl}
            eventName="dock_book_click"
            className="h-10 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-[color:var(--accent-strong)] to-[color:var(--accent)] px-4 rounded-full shadow-lg shadow-[color:var(--accent-strong)]/20 active:scale-95 active:brightness-105 transition-all flex-grow min-w-[110px]"
          >
            <CalendarDays className="h-3.5 w-3.5 shrink-0" />
            <span>Book Now</span>
          </ActionLink>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

