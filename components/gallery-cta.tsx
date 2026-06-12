import { ActionLink } from "./action-link";
import { quickWhatsAppMessages } from "@/data/site";

export function GalleryCta() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-48 flex items-center justify-center min-h-[70vh]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-premium-bg.png" 
          alt="Smile Hub Ambient" 
          className="absolute inset-0 w-full h-full object-cover saturate-50"
        />
        <div className="absolute inset-0 bg-[color:var(--ink)]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)] via-transparent to-[color:var(--background)]/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[color:var(--accent)] drop-shadow-sm">
          Visit Us
        </p>
        <h2 className="mt-6 font-[family:var(--font-display)] text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
          Experience a calmer <br /> standard of care.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
          Ready to see the difference for yourself? Book a consultation or send us a quick WhatsApp message to get started.
        </p>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ActionLink 
            href={quickWhatsAppMessages.general} 
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent-strong)] px-8 py-4 text-sm font-semibold text-white transition-transform hover:scale-105 shadow-lg shadow-black/20"
            eventName="gallery_cta_whatsapp"
            external
          >
            Chat on WhatsApp
          </ActionLink>
          <ActionLink 
            href="/contact" 
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            eventName="gallery_cta_contact"
          >
            View Clinic Details
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
