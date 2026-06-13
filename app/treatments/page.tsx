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
        title="A cleaner service library for patients who browse and decide on mobile."
        body="These treatment pages are structured for quick understanding: who the treatment helps, what to expect, and how to take the next step without reading through clutter."
        primaryHref={quickWhatsAppMessages.general}
        primaryLabel="Ask about treatment"
        secondaryHref="/book"
        secondaryLabel="Book a consultation"
        heroImage="/images/treatments/cosmetic.png"
        heroImageAlt="Cosmetic Dental Treatments"
      />

      <SectionShell
        eyebrow="Treatment library"
        title="Service pages that feel clearer, more premium, and more useful than the old brochure layout."
        body="Each card leads into a focused treatment page with benefits, process, FAQs, and better mobile pacing."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {treatments.map((treatment, index) => (
            <article key={treatment.slug} className="surface-card overflow-hidden p-0">
              <div
                className={`h-44 ${
                  index % 2 === 0
                    ? "bg-[linear-gradient(135deg,rgba(214,238,251,0.96)_0%,rgba(255,255,255,0.96)_100%)]"
                    : "bg-[linear-gradient(135deg,rgba(44,127,189,0.95)_0%,rgba(13,94,141,0.78)_100%)]"
                }`}
              />
              <div className="p-6">
                <div className="inline-flex rounded-full bg-[color:var(--sand-strong)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--accent-deep)]">
                  {treatment.category}
                </div>
                <h2 className="mt-5 font-display text-3xl font-semibold text-[color:var(--ink)]">
                  {treatment.shortTitle}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{treatment.summary}</p>
                <div className="mt-6 grid gap-3">
                  {treatment.benefits.slice(0, 2).map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent-deep)]" />
                      <p className="text-sm leading-6 text-[color:var(--ink)]">{benefit}</p>
                    </div>
                  ))}
                </div>
                <ActionLink
                  href={`/treatments/${treatment.slug}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent-deep)] underline-offset-4 hover:underline"
                >
                  View treatment details
                  <ArrowRight className="h-4 w-4" />
                </ActionLink>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
