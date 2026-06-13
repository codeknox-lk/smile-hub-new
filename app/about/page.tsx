import { AboutHero } from "@/components/about-hero";
import { AboutPillars } from "@/components/about-pillars";
import { AboutDoctor } from "@/components/about-doctor";
import { ReviewCarousel } from "@/components/review-carousel";
import { GalleryCta } from "@/components/gallery-cta";
import { quickWhatsAppMessages } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import { getReviewSnapshot } from "@/lib/reviews";

export const metadata = createMetadata({
  title: "About Smile Hub",
  description:
    "Discover the Smile Hub clinic experience, the doctor-led treatment philosophy, and the patient-first approach behind every visit.",
  path: "/about"
});

export default async function AboutPage() {
  const reviewSnapshot = await getReviewSnapshot();

  return (
    <>
      <AboutHero
        eyebrow="Welcome to Smile Hub"
        title={
          <>
            A modern dental experience built on <span className="font-serif italic font-light text-[color:var(--accent-strong)]">comfort</span> and trust.
          </>
        }
        body="We believe going to the dentist shouldn't be stressful. From our welcoming environment to our transparent treatment plans, every detail is designed to put you completely at ease."
        primaryHref={quickWhatsAppMessages.general}
        primaryLabel="Ask a question"
        secondaryHref="/book"
        secondaryLabel="Book consultation"
        image="/images/doctor-1.png"
        imageAlt="Smile Hub Clinical Team"
      />

      <AboutPillars
        eyebrow="Clinic story"
        title={
          <>
            A dental brand works better when it feels local, clear, and genuinely <span className="font-serif italic font-light text-[color:var(--accent-strong)]">patient-first.</span>
          </>
        }
      />

      <AboutDoctor
        eyebrow="Clinical Leadership"
        name="Dr. Lakmina Ekanayake"
        role="Clinical Director"
        signatureText="Lakmina"
        quote={
          <>
            Good dentistry should feel <span className="font-serif italic font-light text-[color:var(--accent-strong)]">organized, gentle,</span> and easy to understand.
          </>
        }
        body={
          <>
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:italic first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[color:var(--accent-strong)]">
              My goal has always been to create a clinic where patients feel genuinely listened to. We have invested heavily in modern technology, not just for clinical excellence, but because it makes treatments faster, safer, and far more comfortable for you.
            </p>
            <p className="mt-4">
              Whether you are here for a routine checkup or a complex smile restoration, my team and I will always take the time to explain your options in plain language. We want you to feel completely confident and informed before making any decisions about your oral health.
            </p>
          </>
        }
        credentials={[
          "Patient-centered communication",
          "Modern diagnostic workflow",
          "Comfort-focused consultations",
          "Comprehensive treatment planning"
        ]}
        image="/images/patient-1.png"
      />

      <section className="bg-[color:var(--surface)] py-24 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--accent-strong)]">
              Patient Voices
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-[color:var(--ink)]">
              Real stories from our <span className="font-serif italic font-light text-[color:var(--accent-strong)]">patients.</span>
            </h2>
          </div>
          <ReviewCarousel snapshot={reviewSnapshot} />
        </div>
      </section>

      <GalleryCta />
    </>
  );
}
