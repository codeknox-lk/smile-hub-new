import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { quickWhatsAppMessages, treatments } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Treatments",
  description:
    "Explore Smile Hub treatment paths including preventive care, restorative care, cosmetic dentistry, and orthodontics.",
  path: "/treatments"
});

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title={
          <span>
            A cleaner service library for patients who browse and decide on{" "}
            <span className="font-serif italic font-light text-[color:var(--accent-strong)]">
              mobile.
            </span>
          </span>
        }
        body="These treatment pages are structured for quick understanding: who the treatment helps, what to expect, and how to take the next step without reading through clutter."
        primaryHref={quickWhatsAppMessages.general}
        primaryLabel="Ask about treatment"
        secondaryHref="/book"
        secondaryLabel="Book a consultation"
        heroImage="/images/clinic-1.png"
        heroImageAlt="Smile Hub Dental Treatments"
      />

      <SectionShell
        eyebrow="Treatment library"
        title={
          <span>
            Service pages that feel clearer, more premium, and more useful than the old{" "}
            <span className="font-serif italic font-light text-[color:var(--accent-strong)]">
              brochure layout.
            </span>
          </span>
        }
        body="Each card leads into a focused treatment page with benefits, process, FAQs, and better mobile pacing."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {treatments.map((treatment) => (
            <article key={treatment.slug} className="surface-card overflow-hidden p-0 flex flex-col group transition-all duration-300 hover:shadow-xl border border-[color:var(--line)] rounded-2xl bg-white">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[color:var(--surface)]">
                <img
                  src={treatment.image}
                  alt={treatment.shortTitle}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--accent-strong)] shadow-sm">
                    {treatment.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[color:var(--ink)] leading-snug">
                    {treatment.shortTitle}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)] font-medium">
                    {treatment.summary}
                  </p>
                  <div className="mt-5 space-y-2.5">
                    {treatment.benefits.slice(0, 2).map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent-strong)]" />
                        <p className="text-xs sm:text-sm leading-relaxed text-[color:var(--ink)]/90 font-medium">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <ActionLink
                  href={treatment.slug.startsWith("/") ? treatment.slug : `/treatments/${treatment.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[color:var(--accent-strong)] hover:text-[color:var(--ink)] transition-colors group/link"
                >
                  <span>View treatment details</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </ActionLink>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
