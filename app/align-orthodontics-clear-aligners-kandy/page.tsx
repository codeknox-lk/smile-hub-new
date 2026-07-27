import { 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  CalendarDays, 
  Sparkles, 
  Smile, 
  Award,
  ShieldCheck,
  Maximize,
  Maximize2,
  Scan
} from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { FaqAccordion } from "@/components/faq-accordion";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { quickWhatsAppMessages } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Clear Aligners & Orthodontics | Smile Hub Kandy",
  description: "Straighten your teeth with absolute precision and discretion. Premium clear aligners and modern low-profile braces in Kandy.",
  path: "/align-orthodontics-clear-aligners-kandy"
});

const faqs = [
  {
    question: "Can adults start orthodontic treatment?",
    answer: "Yes. Adults commonly begin alignment treatment for both cosmetic and functional reasons."
  },
  {
    question: "Will I understand the full journey before starting?",
    answer: "Yes. Smile Hub’s approach emphasizes clear expectations, timing, and step-by-step digital planning."
  }
];

export default function AlignAndSmilePage() {
  return (
    <article className="min-h-screen bg-[color:var(--background)]">
      {/* Cinematic Hero */}
      <PageHero
        eyebrow="Align & Smile"
        title={
          <span>
            Precision{" "}
            <span className="font-serif italic font-light text-[color:var(--accent-strong)]">
              Orthodontics
            </span>
          </span>
        }
        body="A beautifully aligned smile is the ultimate expression of confidence. Whether you are looking for a subtle correction or comprehensive orthodontic therapy, our approach combines advanced digital planning with exceptional clinical expertise."
        primaryHref={quickWhatsAppMessages.general}
        primaryLabel="Chat on WhatsApp"
        secondaryHref="/book"
        secondaryLabel="Book a consultation"
        heroImage="/images/treatments/orthodontics.png"
        heroImageAlt="Orthodontic Treatments and Aligners"
      />

      {/* Main Philosophy Introduction Section */}
      <SectionShell
        eyebrow="Clear Path"
        title="We prioritize your comfort and aesthetic goals."
        body="Delivering seamless alignment treatments in a highly refined setting, where advanced digital planning meets exceptional clinical expertise."
        align="center"
        className="bg-white/46"
      >
        {/* Visual Columns (Clear Aligners, Traditional Orthodontics) */}
        <div className="grid gap-8 lg:grid-cols-2 mt-12 max-w-5xl mx-auto">
          
          {/* Card 1: Advanced Clear Aligners */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 font-serif italic text-6xl font-light text-slate-100 select-none group-hover:text-slate-200 transition-colors pointer-events-none">
              01
            </div>
            
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[color:var(--accent-strong)] group-hover:bg-[color:var(--accent)] group-hover:text-white transition-all duration-500 shadow-sm">
                <Sparkles className="h-6 w-6" />
              </div>
              
              <h2 className="mt-8 font-display text-2xl lg:text-3xl font-bold text-[color:var(--ink)] tracking-tight leading-none">
                Advanced Clear Aligners
              </h2>
              
              <div className="mt-8 space-y-8 border-t border-slate-100 pt-6">
                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Virtually Invisible Care
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    Straighten your teeth discreetly with custom-fabricated, ultra-clear aligners that fit seamlessly into your daily life.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    3D Digital Precision
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    Say goodbye to uncomfortable traditional molds. We utilize advanced 3D intraoral scanning to capture a flawless digital impression of your teeth in minutes.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Predictable Results
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    Visualize your entire treatment journey and your final, defined smile before you even wear your first aligner.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Modern Traditional Orthodontics */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-[linear-gradient(145deg,rgba(214,238,251,0.2)_0%,rgba(255,255,255,0.96)_100%)] p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 font-serif italic text-6xl font-light text-sky-100/50 select-none group-hover:text-sky-100 transition-colors pointer-events-none">
              02
            </div>
            
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[color:var(--accent-strong)] group-hover:bg-[color:var(--accent)] group-hover:text-white transition-all duration-500 shadow-sm">
                <Smile className="h-6 w-6" />
              </div>
              
              <h2 className="mt-8 font-display text-2xl lg:text-3xl font-bold text-[color:var(--ink)] tracking-tight leading-none">
                Modern Traditional Orthodontics
              </h2>
              
              <div className="mt-8 space-y-8 border-t border-slate-100 pt-6">
                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Low-Profile Brackets
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    For cases requiring complex biomechanical control, we offer modern bracket systems that are smaller, more comfortable, and highly effective.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Comprehensive Bite Correction
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    Moving beyond aesthetics to ensure your upper and lower jaws function together perfectly, protecting against long-term wear and joint issues.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Tailored Teen & Adult Care
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    Expertly managed treatment plans designed to address the unique structural needs of patients at any stage of life.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </SectionShell>

      {/* The Smile Hub Advantage Section */}
      <SectionShell
        eyebrow="The Smile Hub Advantage"
        title="Focused care built around your schedule and comfort."
        body="Experience a new standard of modern alignment treatments designed to deliver healthy, beautiful symmetry."
        className="bg-white"
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-3 mt-12">
          
          <article className="surface-card p-8 rounded-[2rem] border border-[color:var(--line)] bg-slate-50 flex flex-col justify-between">
            <div className="h-10 w-10 rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent-strong)] flex items-center justify-center mb-6">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-[color:var(--ink)]">The Aligner Suite Experience</h4>
              <p className="mt-3 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                Your orthodontic visits take place in a dedicated, premium suite thoughtfully designed for focused, uninterrupted care.
              </p>
            </div>
          </article>

          <article className="surface-card p-8 rounded-[2rem] border border-[color:var(--line)] bg-slate-50 flex flex-col justify-between">
            <div className="h-10 w-10 rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent-strong)] flex items-center justify-center mb-6">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-[color:var(--ink)]">Effortless Maintenance</h4>
              <p className="mt-3 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                Clear aligners allow you to maintain your standard brushing and flossing routines without the obstruction of wires.
              </p>
            </div>
          </article>

          <article className="surface-card p-8 rounded-[2rem] border border-[color:var(--line)] bg-slate-50 flex flex-col justify-between">
            <div className="h-10 w-10 rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent-strong)] flex items-center justify-center mb-6">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-[color:var(--ink)]">Defining Symmetry</h4>
              <p className="mt-3 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                Our orthodontic approach doesn't just straighten teeth; it harmonizes your dental alignment with your unique facial proportions.
              </p>
            </div>
          </article>

        </div>
      </SectionShell>

      {/* Before & After Section */}
      <SectionShell
        eyebrow="Real Results"
        title={
          <span>
            Transformative dental care <br className="hidden sm:block" />
            <span className="font-serif italic font-light text-[color:var(--accent)]">
              that speaks for itself.
            </span>
          </span>
        }
        body="See how clear aligners transform misaligned teeth into a perfectly symmetrical, confident smile."
        align="center"
        className="bg-[color:var(--background)]"
      >
        <div className="mt-12 mx-auto max-w-2xl px-2">
          <BeforeAfterSlider 
            beforeImage="/images/results/ortho-before.png" 
            afterImage="/images/results/ortho-after.png" 
            beforeLabel="Before Alignment" 
            afterLabel="After Orthodontics" 
          />
        </div>
      </SectionShell>

      {/* Booking Call-to-action Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--ink)] rounded-t-[3rem] lg:rounded-t-[4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 text-center">
          
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-[color:var(--accent-light)] mb-6">
            Begin Your Alignment
          </p>
          <h2 className="text-balance font-display text-4xl sm:text-6xl font-semibold leading-[1.05] text-white tracking-tight">
            Ready to define your <br className="hidden md:block" />
            <span className="font-serif italic font-light text-[color:var(--accent)]">perfect symmetry?</span>
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-white/70 font-medium">
            Schedule a dedicated orthodontic consultation to visually map your alignment plan and explore custom aligner options.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ActionLink
              href="/book"
              className="inline-flex items-center gap-3 bg-[color:var(--accent)] hover:brightness-110 text-white px-8 py-4 rounded-2xl font-bold tracking-wide transition-all shadow-lg shadow-[color:var(--accent)]/20"
              eventName="align_page_book_click"
            >
              <CalendarDays className="h-5 w-5 text-white" />
              Schedule Your Orthodontic Consultation
            </ActionLink>
            
            <ActionLink
              href={quickWhatsAppMessages.general}
              external
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold tracking-wide transition-colors border border-white/10"
              eventName="align_page_whatsapp_click"
            >
              <MessageCircle className="h-5 w-5 text-[#25d366]" />
              Ask a question via WhatsApp
            </ActionLink>
          </div>
          
        </div>
      </section>
    </article>
  );
}
