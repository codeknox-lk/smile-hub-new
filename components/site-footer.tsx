import { navItems, quickWhatsAppMessages, siteSettings } from "@/data/site";
import { formatPhoneForTel } from "@/lib/utils";
import { ActionLink } from "./action-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--surface)] pb-28 pt-12 md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="section-kicker">Smile Hub Premium Dental Care</p>
          <h2 className="font-[family:var(--font-display)] text-3xl text-[color:var(--ink)]">
            Mobile-first dentistry for busy lives and confident smiles.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--muted)]">
            A custom premium website experience built around clarity, comfort, and fast mobile conversion. Replace photography and copy inside the shared content layer as the clinic assets become available.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
            Navigate
          </p>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <ActionLink key={item.href} href={item.href} className="text-sm text-[color:var(--ink)]">
                {item.label}
              </ActionLink>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
            Contact
          </p>
          <div className="space-y-2 text-sm text-[color:var(--muted)]">
            <p>{siteSettings.addressLines.join(", ")}</p>
            <p>
              <a href={`tel:${formatPhoneForTel(siteSettings.phonePrimary)}`} className="text-[color:var(--ink)]">
                {siteSettings.phonePrimary}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteSettings.emailPrimary}`} className="text-[color:var(--ink)]">
                {siteSettings.emailPrimary}
              </a>
            </p>
          </div>
          <ActionLink
            href={quickWhatsAppMessages.general}
            external
            className="button-secondary"
            eventName="footer_whatsapp_click"
          >
            Book on WhatsApp
          </ActionLink>
        </div>
      </div>
    </footer>
  );
}

