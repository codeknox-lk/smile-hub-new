import { 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  CalendarDays, 
  Sparkles, 
  Smile, 
  Layers, 
  Flame, 
  HelpCircle,
  Eye,
  Scan,
  Maximize
} from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { FaqAccordion } from "@/components/faq-accordion";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { quickWhatsAppMessages } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Smile Makeovers & Cosmetic Dentistry | Smile Hub Kandy",
  description: "Transform your appearance with bespoke cosmetic treatments, porcelain veneers, composite bonding, and digital smile makeovers in Kandy.",
  path: "/cosmetic-dentist-smile-makeovers-kandy"
});

const faqs = [
  {
    question: "Can I see what my smile will look like before I commit?",
    answer: "Absolutely. Our digital mock-up process allows you to preview, adjust, and approve your new smile aesthetics on screen before any clinical work begins."
  },
  {
    question: "How long do porcelain veneers last?",
    answer: "Crafted from premium, high-grade ceramics, porcelain veneers are incredibly durable and stain-resistant, routinely lasting 10 to 15 years or more with standard care and regular clinic check-ups."
  },
  {
    question: "Will professional whitening make my teeth sensitive?",
    answer: "We use carefully calibrated, professional-grade whitening systems designed specifically to minimize sensitivity while maximizing luminous results, all under expert clinical supervision."
  }
];

export default function DefineAndSmilePage() {
  return (
    <article className="min-h-screen bg-[color:var(--background)]">
      {/* Cinematic Hero */}
      <PageHero
        eyebrow="Define & Smile"
        title={
          <span>
            Digital Smile Makeovers &{" "}
            <span className="font-serif italic font-light text-[color:var(--accent-strong)]">
              Cosmetic Artistry
            </span>
          </span>
        }
        body="We do not simply design smiles; we define them. Housed in our state-of-the-art Elite Suite, our cosmetic workflows are entirely digitally driven. We believe a premium smile makeover should never look artificial—it should harmonize flawlessly with your natural facial features, lip line, and personality."
        primaryHref={quickWhatsAppMessages.general}
        primaryLabel="Chat on WhatsApp"
        secondaryHref="/book"
        secondaryLabel="Book a consultation"
        heroImage="/images/treatments/cosmetic.png"
        heroImageAlt="Digital Smile Makeover"
      />

      {/* Main Philosophy Introduction Section */}
      <SectionShell
        eyebrow="Bespoke Design"
        title="The Art of Bespoke Aesthetics"
        body="This is bespoke, high-fidelity dentistry crafted to radiate confidence, pairing the latest dental technology with clinical artistry."
        align="center"
        className="bg-white/46"
      >
        {/* Visual Columns (Precision Alterations, Luminous Enhancements) */}
        <div className="grid gap-8 lg:grid-cols-2 mt-12 max-w-5xl mx-auto">
          
          {/* Card 1: Precision Alterations */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 font-serif italic text-6xl font-light text-slate-100 select-none group-hover:text-slate-200 transition-colors pointer-events-none">
              01
            </div>
            
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[color:var(--accent-strong)] group-hover:bg-[color:var(--accent)] group-hover:text-white transition-all duration-500 shadow-sm">
                <Layers className="h-6 w-6" />
              </div>
              
              <h2 className="mt-8 font-display text-2xl lg:text-3xl font-bold text-[color:var(--ink)] tracking-tight leading-none">
                Precision Alterations
              </h2>
              
              <div className="mt-8 space-y-8 border-t border-slate-100 pt-6">
                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Bespoke Porcelain Veneers
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    Ultra-thin, custom-milled ceramic shells designed to correct chips, gaps, and discoloration. We focus on absolute structural integrity and a translucent, natural finish that perfectly mimics natural enamel.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Composite Bonding & Contouring
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    Minimally invasive, high-precision artistry used to refine tooth shape, smooth uneven edges, and achieve perfect symmetry, often completed in a single visit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Luminous Enhancements */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-[linear-gradient(145deg,rgba(214,238,251,0.2)_0%,rgba(255,255,255,0.96)_100%)] p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 font-serif italic text-6xl font-light text-sky-100/50 select-none group-hover:text-sky-100 transition-colors pointer-events-none">
              02
            </div>
            
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[color:var(--accent-strong)] group-hover:bg-[color:var(--accent)] group-hover:text-white transition-all duration-500 shadow-sm">
                <Flame className="h-6 w-6" />
              </div>
              
              <h2 className="mt-8 font-display text-2xl lg:text-3xl font-bold text-[color:var(--ink)] tracking-tight leading-none">
                Luminous Enhancements
              </h2>
              
              <div className="mt-8 space-y-8 border-t border-slate-100 pt-6">
                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Professional Teeth Whitening
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    Safe, highly effective clinical whitening systems tailored to lift deep stains and restore a brilliant, natural glow to your teeth without damaging the enamel.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Aesthetic Gum Recontouring
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    Gentle, laser-assisted reshaping of the gum line to lengthen the appearance of your teeth and correct "gummy" smiles, creating a perfectly balanced aesthetic frame.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </SectionShell>

      {/* The Elite Suite Experience Section */}
      <SectionShell
        eyebrow="The Elite Suite Experience"
        title="Bespoke digital design built for absolute precision."
        body="Experience a cosmetic journey driven by high-resolution scans, facial analysis, and real-time previews."
        className="bg-white"
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-3 mt-12">
          
          <article className="surface-card p-8 rounded-[2rem] border border-[color:var(--line)] bg-slate-50 flex flex-col justify-between">
            <div className="h-10 w-10 rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent-strong)] flex items-center justify-center mb-6">
              <Eye className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-[color:var(--ink)]">Digital Smile Previews</h4>
              <p className="mt-3 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                See your final result before we even begin. Using advanced imaging software, we overlay structural adjustments onto your digital profile.
              </p>
            </div>
          </article>

          <article className="surface-card p-8 rounded-[2rem] border border-[color:var(--line)] bg-slate-50 flex flex-col justify-between">
            <div className="h-10 w-10 rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent-strong)] flex items-center justify-center mb-6">
              <Maximize className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-[color:var(--ink)]">3D Intraoral Scanning</h4>
              <p className="mt-3 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                Say goodbye to uncomfortable, messy putty impressions. We capture high-resolution, perfectly accurate digital models of your teeth in seconds.
              </p>
            </div>
          </article>

          <article className="surface-card p-8 rounded-[2rem] border border-[color:var(--line)] bg-slate-50 flex flex-col justify-between">
            <div className="h-10 w-10 rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent-strong)] flex items-center justify-center mb-6">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-[color:var(--ink)]">Facial Harmony Analysis</h4>
              <p className="mt-3 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                We don't just look at your teeth; we analyze your overall facial symmetry, ensuring your new smile feels authentically and effortlessly you.
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
        body="Swipe to see the dramatic aesthetic difference our bespoke cosmetic treatments and porcelain veneers make."
        align="center"
        className="bg-[color:var(--background)]"
      >
        <div className="mt-12 mx-auto max-w-2xl px-2">
          <BeforeAfterSlider 
            beforeImage="/images/results/cosmetic-before.webp" 
            afterImage="/images/results/cosmetic-after.webp" 
            beforeLabel="Before Makeover" 
            afterLabel="After Custom Veneers" 
          />
        </div>
      </SectionShell>

      {/* Patient FAQs */}
      <section className="pt-24 pb-32 sm:pt-32 sm:pb-40 bg-[color:var(--ink)] rounded-t-[3rem] lg:rounded-t-[4rem] relative z-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              Patient <span className="font-serif italic font-light text-[color:var(--accent)]">FAQs</span>
            </h2>
            <p className="text-white/60 text-lg">Clear answers to help you feel completely comfortable.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 lg:p-10 border border-white/10 mb-20">
             <FaqAccordion items={faqs} theme="dark" />
          </div>

          <div className="text-center space-y-8">
            <h2 className="font-display text-5xl lg:text-7xl font-bold text-white tracking-tight">
              Begin your <span className="font-serif italic font-light text-[color:var(--accent)]">transformation</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ActionLink 
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[color:var(--accent)] text-white px-10 py-5 rounded-full font-bold tracking-wide transition-transform hover:scale-105 shadow-[0_0_30px_rgba(23,94,146,0.3)]"
                eventName="cosmetic_page_book_click"
              >
                <CalendarDays className="h-5 w-5 text-white" />
                Schedule Your Aesthetic Consultation
              </ActionLink>
              <ActionLink 
                href={quickWhatsAppMessages.general} 
                external
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-bold tracking-wide transition-colors hover:bg-white/20"
              >
                <MessageCircle className="h-5 w-5 text-[#25d366]" />
                Ask via WhatsApp
              </ActionLink>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
