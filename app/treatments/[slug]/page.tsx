import { CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { quickWhatsAppMessages, treatments } from "@/data/site";
import { createMetadata } from "@/lib/seo";

type TreatmentDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug
  }));
}

export async function generateMetadata({ params }: TreatmentDetailPageProps) {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) {
    return {};
  }

  return createMetadata({
    title: treatment.title,
    description: treatment.summary,
    path: `/treatments/${slug}`
  });
}

export default async function TreatmentDetailPage({ params }: TreatmentDetailPageProps) {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={treatment.heroTag}
        title={treatment.title}
        body={treatment.summary}
        primaryHref={quickWhatsAppMessages.general}
        primaryLabel="Chat on WhatsApp"
        secondaryHref="/book"
        secondaryLabel="Book consultation"
      />

      <SectionShell
        eyebrow="Ideal for"
        title="A treatment page should answer the patient’s main questions quickly."
        body={treatment.idealFor}
      >
        <div className="grid gap-4 lg:grid-cols-[0.98fr_1.02fr]">
          <article className="surface-panel min-h-[380px] p-6 md:p-8">
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <p className="section-kicker">Benefits</p>
                <h2 className="mt-4 font-[family:var(--font-display)] text-3xl font-semibold text-[color:var(--ink)]">
                  Why patients consider this treatment
                </h2>
              </div>
              <div className="grid gap-3">
                {treatment.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-[1.4rem] bg-white/84 px-4 py-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent-deep)]" />
                    <p className="text-sm leading-6 text-[color:var(--ink)]">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="surface-card">
            <p className="section-kicker">Process</p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-3xl font-semibold text-[color:var(--ink)]">
              What the journey looks like
            </h2>
            <div className="mt-6 grid gap-4">
              {treatment.process.map((step, index) => (
                <div key={step} className="grid gap-3 md:grid-cols-[auto_1fr] md:items-start">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--accent-deep)] text-sm text-white">
                    0{index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-7 text-[color:var(--muted)]">{step}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="FAQs"
        title="Keep the page honest, useful, and reassuring."
        body="These answers reduce friction on mobile and help patients decide whether to ask a question or book straight away."
        className="bg-white/46"
      >
        <FaqAccordion items={treatment.faqs} />
      </SectionShell>
    </>
  );
}
