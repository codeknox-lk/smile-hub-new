import { navItems, quickWhatsAppMessages, siteSettings } from "@/data/site";
import { formatPhoneForTel } from "@/lib/utils";
import { ActionLink } from "./action-link";

export function SiteFooter() {
  return (
    <footer className="relative bg-[color:var(--ink)] overflow-hidden pt-12 pb-24 md:pb-12 border-t border-white/5">
      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 sm:px-8 lg:grid-cols-[1.5fr_0.8fr_1fr] lg:px-12 pt-10 pb-32 lg:pb-48">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-[color:var(--accent-light)]/50" />
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[color:var(--accent-light)]">
              Smile Hub Premium Dental Care
            </p>
          </div>
          <h2 className="font-[family:var(--font-display)] text-3xl lg:text-4xl text-white tracking-tight leading-[1.1]">
            Redefining dental care in Kandy.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-white/60 font-medium">
            Redefining dental care in Kandy with transparent, comfortable, and world-class treatments. Experience modern dentistry designed around your busy lifestyle.
          </p>
        </div>

        {/* Navigation Column */}
        <div className="space-y-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent-light)]">
            Navigate
          </p>
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <ActionLink key={item.href} href={item.href} className="text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white transition-colors w-fit">
                {item.label}
              </ActionLink>
            ))}
          </div>
        </div>

        {/* Contact Column */}
        <div className="space-y-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent-light)]">
            Contact
          </p>
          <div className="space-y-4 text-sm font-medium text-white/60 leading-relaxed">
            <p className="max-w-[250px]">{siteSettings.addressLines.join(", ")}</p>
            <p>
              <a href={`tel:${formatPhoneForTel(siteSettings.phonePrimary)}`} className="hover:text-white transition-colors">
                {siteSettings.phonePrimary}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteSettings.emailPrimary}`} className="hover:text-white transition-colors">
                {siteSettings.emailPrimary}
              </a>
            </p>
          </div>
          <div className="pt-4">
            <ActionLink
              href={quickWhatsAppMessages.general}
              external
              className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/20 hover:border-white/30"
              eventName="footer_whatsapp_click"
            >
              Book on WhatsApp
            </ActionLink>
          </div>
        </div>
      </div>

      {/* The Mega Brand Watermark */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden flex justify-center pointer-events-none select-none">
        <h1 className="font-[family:var(--font-display)] font-black text-[15vw] leading-none text-white opacity-10 translate-y-1/4 whitespace-nowrap">
          SMILE HUB
        </h1>
      </div>
    </footer>
  );
}

