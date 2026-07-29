import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { TeamGrid } from "@/components/team-grid";
import { quickWhatsAppMessages } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Our Clinical Team | Smile Hub Kandy",
  description: "Meet the experienced, compassionate dentists and specialists behind Smile Hub Dental Care in Kandy.",
  path: "/team"
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Clinical Excellence"
        title={
          <span>
            Meet the Dentists <br />
            <span className="font-serif italic font-light text-[color:var(--accent-strong)]">
              Behind Your Smile
            </span>
          </span>
        }
        body="Our doctors combine advanced international training with a gentle, patient-first philosophy. We take the time to explain every procedure in plain language so you feel completely at ease."
        primaryHref={quickWhatsAppMessages.general}
        primaryLabel="Talk with our team"
        secondaryHref="/book"
        secondaryLabel="Schedule a consultation"
        heroImage="/images/about-hero-doctor.png"
        heroImageAlt="Smile Hub Clinical Team"
      />

      <SectionShell
        eyebrow="Our Specialists"
        title="Experience & Expertise You Can Trust"
        body="Learn more about our principal dentists, specialists, and care philosophy."
        align="center"
      >
        <TeamGrid />
      </SectionShell>
    </>
  );
}
