import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { PricingTable } from "@/components/pricing-table";
import { TreatmentCalculator } from "@/components/treatment-calculator";
import { EliteSuiteBanner } from "@/components/elite-suite-banner";
import { quickWhatsAppMessages } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Treatment Pricing & Transparent Fees",
  description: "Transparent fee guide for dental treatments at Smile Hub Dental Care Kandy. No surprise fees, no hidden costs.",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparent Investment"
        title={
          <span>
            Clear & Transparent <br />
            <span className="font-serif italic font-light text-[color:var(--accent-strong)]">
              Treatment Fee Guide
            </span>
          </span>
        }
        body="We believe premium clinical care should always be transparent. Browse starting rates across all our treatment paths below. Every treatment plan is provided in writing before any procedure begins."
        primaryHref={quickWhatsAppMessages.general}
        primaryLabel="Ask about pricing via WhatsApp"
        secondaryHref="/book"
        secondaryLabel="Book a consultation"
        heroImage="/images/clinic-1.png"
        heroImageAlt="Smile Hub Treatment Pricing"
      />

      <SectionShell
        eyebrow="Fee Library"
        title="Explore Treatment Starting Rates"
        body="Filter by category to view starting fees, package inclusions, and payment plan options."
        align="center"
      >
        <PricingTable />
        <EliteSuiteBanner />
      </SectionShell>
    </>
  );
}
