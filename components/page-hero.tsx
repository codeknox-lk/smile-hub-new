import { ArrowUpRight } from "lucide-react";
import { ActionLink } from "./action-link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  heroImage?: string;
  heroImageAlt?: string;
};

export function PageHero({
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  heroImage,
  heroImageAlt
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--line)]">
      <div className="hero-orb left-[-6rem] top-[-3rem]" />
      <div className="hero-orb right-[-5rem] top-16" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="space-y-6">
          <p className="section-kicker">{eyebrow}</p>
          <h1 className="text-balance font-display text-5xl leading-[1.02] text-[color:var(--ink)] md:text-7xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">{body}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink href={primaryHref} className="button-primary" eventName="hero_primary_click" external={primaryHref.startsWith("http")}>
              {primaryLabel}
            </ActionLink>
            {secondaryHref && secondaryLabel ? (
              <ActionLink
                href={secondaryHref}
                className="button-secondary"
                eventName="hero_secondary_click"
                external={secondaryHref.startsWith("http")}
              >
                {secondaryLabel}
              </ActionLink>
            ) : null}
          </div>
        </div>
        <div className="relative h-full min-h-[420px]">
          {heroImage ? (
            <div className="surface-panel h-full p-2 md:p-3 flex flex-col items-center justify-center">
              <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] min-h-[400px]">
                <img 
                  src={heroImage} 
                  alt={heroImageAlt || "Page Hero"} 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </div>
          ) : (
            <div className="surface-panel min-h-[420px] p-5 md:p-6 h-full">
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,rgba(44,127,189,0.18)_0%,rgba(255,255,255,0.96)_42%,rgba(166,224,246,0.54)_100%)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,198,238,0.34),transparent_32%)]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/80 bg-white/86 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-deep)]">
                  Modern dental experience
                </div>
                <div className="absolute right-5 top-5 rounded-[1.4rem] border border-white/75 bg-white/84 px-4 py-3 shadow-[0_18px_40px_rgba(22,88,138,0.08)]">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]">Fast action</p>
                  <p className="mt-2 text-sm text-[color:var(--ink)]">WhatsApp, call, and book in one thumb zone.</p>
                </div>
                <div className="absolute inset-x-5 bottom-5 rounded-[2rem] border border-white/80 bg-white/84 p-6 shadow-[0_24px_60px_rgba(22,88,138,0.1)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">Experience direction</p>
                      <p className="mt-3 max-w-md text-balance font-display text-3xl leading-tight text-[color:var(--ink)]">
                        Cleaner, brighter, and easier to trust on mobile.
                      </p>
                    </div>
                    <span className="rounded-full bg-[color:var(--sand-strong)] p-3 text-[color:var(--accent-deep)]">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-30 left-5 right-5 rounded-[1.8rem] bg-[linear-gradient(135deg,var(--accent-deep)_0%,var(--accent-strong)_100%)] p-6 text-white shadow-[0_18px_40px_rgba(22,88,138,0.16)]">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/65">Clinic feel</p>
                  <p className="mt-3 text-2xl leading-tight">Premium care without the cold corporate clinic look.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
