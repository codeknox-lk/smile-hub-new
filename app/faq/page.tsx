import { MessageCircleMore } from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import { ActionLink } from "@/components/action-link";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { faqItems, quickWhatsAppMessages } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "FAQs",
  description:
    "Find quick answers about Smile Hub booking, location, treatments, and the patient journey.",
  path: "/faq"
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Short, useful answers for patients who want clarity before they book."
        body="The FAQ page should feel quick to scan on mobile and practical enough to reduce hesitation before a patient contacts the clinic."
        primaryHref={quickWhatsAppMessages.general}
        primaryLabel="Ask on WhatsApp"
        secondaryHref="/book"
        secondaryLabel="Book a visit"
        heroImage="/images/patient-1.png"
        heroImageAlt="Happy Patient Smiling"
      />

      <SectionShell
        eyebrow="FAQs"
        title="Helpful answers, without the clutter."
        body="This content block is ready for the clinic team to expand over time while keeping the page simple and useful."
      >
        <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <FaqAccordion items={faqItems} />

          <aside className="surface-panel min-h-[320px] p-6 md:p-8">
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <p className="section-kicker">Still unsure?</p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[color:var(--ink)]">
                  A quick WhatsApp message is often easier than reading through every question.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                  If the answer you need is specific to your symptoms, treatment plan, or timing, the fastest next step is to message Smile Hub directly.
                </p>
              </div>

              <ActionLink href={quickWhatsAppMessages.general} external className="button-primary">
                <MessageCircleMore className="h-4 w-4" />
                Ask on WhatsApp
              </ActionLink>
            </div>
          </aside>
        </div>
      </SectionShell>
    </>
  );
}
