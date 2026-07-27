import { 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  CalendarDays, 
  ShieldCheck, 
  Users, 
  Sparkles,
  Heart,
  Baby,
  Smile
} from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { FaqAccordion } from "@/components/faq-accordion";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { quickWhatsAppMessages } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Preventive & Kids Dentistry | Smile Hub Kandy",
  description: "From childhood's first tooth to comprehensive adult maintenance. Gentle, anxiety-free preventive and pediatric care in Kandy.",
  path: "/protect-smile-preventive-kids-kandy"
});

const faqs = [
  {
    question: "How often should I have a professional cleaning?",
    answer: "For most patients, we recommend a preventive check-up and scaling every 6 months to maintain health and prevent decay."
  },
  {
    question: "How do you handle nervous children?",
    answer: "Our 'Tell-Show-Do' method is designed to eliminate fear. We never rush, allowing your child to become comfortable with the environment at their own pace."
  },
  {
    question: "Is ultrasonic scaling painful?",
    answer: "It is significantly more comfortable than traditional metal tools, often feeling like a gentle tickling sensation rather than scraping."
  }
];

export default function ProtectAndSmilePage() {
  return (
    <article className="min-h-screen bg-[color:var(--background)]">
      {/* Cinematic Hero */}
      <PageHero
        eyebrow="Protect & Smile"
        title={
          <span>
            Family Preventive &{" "}
            <span className="font-serif italic font-light text-[color:var(--accent-strong)]">
              Kids Dentistry
            </span>
          </span>
        }
        body="From your child’s first discovery of the dentist to comprehensive adult maintenance, our clinic is designed as a tranquil sanctuary. We believe that regular, proactive care should be a peaceful, positive experience."
        primaryHref={quickWhatsAppMessages.general}
        primaryLabel="Chat on WhatsApp"
        secondaryHref="/book"
        secondaryLabel="Book a consultation"
        heroImage="/images/treatments/preventive.png"
        heroImageAlt="Family Preventive & Pediatric Care"
      />

      {/* Main Philosophy Introduction Section */}
      <SectionShell
        eyebrow="Bespoke Care"
        title="A Sanctuary for Your Entire Family"
        body="By combining advanced diagnostics with a gentle, patient-first approach, we ensure every member of your family feels safe, informed, and in control."
        align="center"
        className="bg-white/46"
      >
        {/* Visual Columns (Preventive Care adults, Pediatric Care kids) */}
        <div className="grid gap-8 lg:grid-cols-2 mt-12 max-w-5xl mx-auto">
          
          {/* Card 1: Our Preventive Care Package (Adults) */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 font-serif italic text-6xl font-light text-slate-100 select-none group-hover:text-slate-200 transition-colors pointer-events-none">
              01
            </div>
            
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[color:var(--accent-strong)] group-hover:bg-[color:var(--accent)] group-hover:text-white transition-all duration-500 shadow-sm">
                <ShieldCheck className="h-6 w-6" />
              </div>
              
              <h2 className="mt-8 font-display text-2xl lg:text-3xl font-bold text-[color:var(--ink)] tracking-tight leading-none">
                Preventive Care Package
              </h2>
              <p className="mt-2 text-xs font-semibold text-[color:var(--accent-strong)] uppercase tracking-wider">
                The foundation of a resilient smile
              </p>
              
              <div className="mt-8 space-y-6 border-t border-slate-100 pt-6">
                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Routine Clinical Examinations
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 font-medium">
                    Comprehensive check-ups to map your dental health and catch potential issues before they become painful or costly.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Digital Diagnostics & X-Rays
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 font-medium">
                    State-of-the-art imaging technology providing immediate, crystal-clear views of your oral health for precise, early detection.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Ultrasonic Full-Mouth Scaling
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 font-medium">
                    Modern, gentle vibration technology to remove tartar and plaque buildup without the discomfort of traditional scraping.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Precision Polishing & Stain Removal
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 font-medium">
                    A revitalizing treatment to lift surface stains, leaving your enamel perfectly smooth and naturally bright.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Proactive Treatment Planning & Coaching
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 font-medium">
                    We map out a future roadmap and teach interdental hygiene techniques tailored specifically to your mouth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Kids Dentistry & Pediatric Care */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-[linear-gradient(145deg,rgba(214,238,251,0.2)_0%,rgba(255,255,255,0.96)_100%)] p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 font-serif italic text-6xl font-light text-sky-100/50 select-none group-hover:text-sky-100 transition-colors pointer-events-none">
              02
            </div>
            
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[color:var(--accent-strong)] group-hover:bg-[color:var(--accent)] group-hover:text-white transition-all duration-500 shadow-sm">
                <Baby className="h-6 w-6" />
              </div>
              
              <h2 className="mt-8 font-display text-2xl lg:text-3xl font-bold text-[color:var(--ink)] tracking-tight leading-none">
                Kids Dentistry & Pediatric Care
              </h2>
              <p className="mt-2 text-xs font-semibold text-[color:var(--accent-strong)] uppercase tracking-wider">
                Shaping positive dental habits for life
              </p>
              
              <div className="mt-8 space-y-6 border-t border-slate-100 pt-6">
                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    First-Visit Discovery
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 font-medium">
                    Fun, educational visits for your little ones to monitor dental growth and build early trust.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    "Tell-Show-Do" Method
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 font-medium">
                    We walk children through every step at their own pace, ensuring they feel completely safe and in control.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Early Orthodontic Assessment
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 font-medium">
                    Monitoring jaw development and tooth eruption to catch alignment issues early, ensuring your child has a confident start.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Protective Sealants
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 font-medium">
                    Strengthening treatments for enamel to prevent childhood cavities.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </SectionShell>

      {/* The Smile Hub Advantage Section */}
      <SectionShell
        eyebrow="Sanctuary Standard"
        title="Tranquil, modern check-ups tailored to your family."
        body="Experience a new standard of preventive dental visits designed around calm interaction and absolute comfort."
        className="bg-white"
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-3 mt-12">
          
          <article className="surface-card p-8 rounded-[2rem] border border-[color:var(--line)] bg-slate-50 flex flex-col justify-between">
            <div className="h-10 w-10 rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent-strong)] flex items-center justify-center mb-6">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-[color:var(--ink)]">Comfort-First Philosophy</h4>
              <p className="mt-3 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                Our space is designed specifically to help families completely unwind and feel safe, ensuring checkups are a positive milestone.
              </p>
            </div>
          </article>

          <article className="surface-card p-8 rounded-[2rem] border border-[color:var(--line)] bg-slate-50 flex flex-col justify-between">
            <div className="h-10 w-10 rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent-strong)] flex items-center justify-center mb-6">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-[color:var(--ink)]">Evidence-Based Diagnostics</h4>
              <p className="mt-3 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                We combine the highest clinical protocols with low-radiation digital radiography for transparent diagnostics and precise findings.
              </p>
            </div>
          </article>

          <article className="surface-card p-8 rounded-[2rem] border border-[color:var(--line)] bg-slate-50 flex flex-col justify-between">
            <div className="h-10 w-10 rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent-strong)] flex items-center justify-center mb-6">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-[color:var(--ink)]">Luminous Smile Coaching</h4>
              <p className="mt-3 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                We provide custom health coaching and tailormade cleaning methods so your family maintains strong, protected smiles at home.
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
        body="See how early preventive care and professional scaling maintains a flawless, healthy smile over time."
        align="center"
        className="bg-[color:var(--background)]"
      >
        <div className="mt-12 mx-auto max-w-2xl px-2">
          <BeforeAfterSlider 
            beforeImage="/images/results/kids-before.webp" 
            afterImage="/images/results/kids-after.webp" 
            beforeLabel="Before Kids Cleaning" 
            afterLabel="After Gentle Polishing" 
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
              Book your <span className="font-serif italic font-light text-[color:var(--accent)]">family visit</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ActionLink 
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[color:var(--accent)] text-white px-10 py-5 rounded-full font-bold tracking-wide transition-transform hover:scale-105 shadow-[0_0_30px_rgba(23,94,146,0.3)]"
                eventName="preventive_page_book_click"
              >
                <CalendarDays className="h-5 w-5 text-white" />
                Book Your Family’s Visit
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
