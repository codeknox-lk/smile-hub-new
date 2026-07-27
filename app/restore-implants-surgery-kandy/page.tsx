import { 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  CalendarDays, 
  Cpu, 
  HeartPulse, 
  Stethoscope,
  ShieldCheck,
  Sparkles,
  Award
} from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { quickWhatsAppMessages } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Dental Implants, Root Canals & Oral Surgery | Smile Hub Kandy",
  description: "Advanced implants, pain-free root canals, and expert oral surgery designed to rebuild your smile with uncompromising precision in Kandy.",
  path: "/restore-implants-surgery-kandy"
});

export default function RestoreAndSmilePage() {
  return (
    <article className="min-h-screen bg-[color:var(--background)]">
      {/* Cinematic Hero */}
      <PageHero
        eyebrow="Restore & Smile"
        title={
          <span>
            Advanced Clinical{" "}
            <span className="font-serif italic font-light text-[color:var(--accent-strong)]">
              Therapies
            </span>
          </span>
        }
        body="When dental function is compromised, true restoration requires both structural integrity and flawless aesthetics. Whether you require a single precise implant, a pain-free root canal, or expert oral surgery, our approach seamlessly blends advanced technology with a tranquil, comfortable environment."
        primaryHref={quickWhatsAppMessages.general}
        primaryLabel="Chat on WhatsApp"
        secondaryHref="/book"
        secondaryLabel="Book a consultation"
        heroImage="/images/treatments/restorative.png"
        heroImageAlt="Smile Restoration Care"
      />

      {/* Main Philosophy Introduction Section */}
      <SectionShell
        eyebrow="Clinical Philosophy"
        title="We do not just repair teeth; we define your perfect smile."
        body="Every procedure in our Restorative suite is mapped out to deliver permanent, natural-looking results with minimal discomfort and absolute transparency."
        align="center"
        className="bg-white/46"
      >
        {/* Visual Columns (Implants, Restorative, Surgery) */}
        <div className="grid gap-8 lg:grid-cols-3 mt-12">
          
          {/* Category 1: Implants */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 font-serif italic text-6xl font-light text-slate-100 select-none group-hover:text-slate-200 transition-colors pointer-events-none">
              01
            </div>
            
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[color:var(--accent-strong)] group-hover:bg-[color:var(--accent)] group-hover:text-white transition-all duration-500 shadow-sm">
                <Cpu className="h-6 w-6" />
              </div>
              
              <h2 className="mt-8 font-display text-2xl lg:text-3xl font-bold text-[color:var(--ink)] tracking-tight leading-none">
                Precision Implants & Prosthetics
              </h2>
              
              <div className="mt-8 space-y-6 border-t border-slate-100 pt-6">
                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    3D Guided Implantology
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    We utilize state-of-the-art CBCT imaging and 3D intraoral scanning to map your jaw structure, ensuring exact placement and exceptional longevity for your implants.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Bespoke Crowns & Bridges
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    Custom-milled prosthetics engineered to perfectly match the shade, translucency, and shape of your natural teeth.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Full Arch Restoration
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    Comprehensive implant-supported solutions that permanently restore your ability to eat, speak, and smile with absolute confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Category 2: Restorative */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-[linear-gradient(145deg,rgba(214,238,251,0.2)_0%,rgba(255,255,255,0.96)_100%)] p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 font-serif italic text-6xl font-light text-sky-100/50 select-none group-hover:text-sky-100 transition-colors pointer-events-none">
              02
            </div>
            
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[color:var(--accent-strong)] group-hover:bg-[color:var(--accent)] group-hover:text-white transition-all duration-500 shadow-sm">
                <HeartPulse className="h-6 w-6" />
              </div>
              
              <h2 className="mt-8 font-display text-2xl lg:text-3xl font-bold text-[color:var(--ink)] tracking-tight leading-none">
                Restorative & Root Canal
              </h2>
              
              <div className="mt-8 space-y-6 border-t border-slate-100 pt-6">
                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Pain-Free Root Canals
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    Expert endodontic care designed to save your natural tooth, utilizing advanced anesthetic techniques to ensure you remain completely comfortable.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Biomimetic Restorations
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    High-quality, tooth-colored composite fillings that bond seamlessly with your enamel, replacing outdated silver amalgams.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Inlays & Onlays
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    Conservative, precision-crafted porcelain restorations for teeth that require more support than a standard filling but do not need a full crown.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Category 3: Surgery */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 font-serif italic text-6xl font-light text-slate-100 select-none group-hover:text-slate-200 transition-colors pointer-events-none">
              03
            </div>
            
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[color:var(--accent-strong)] group-hover:bg-[color:var(--accent)] group-hover:text-white transition-all duration-500 shadow-sm">
                <Stethoscope className="h-6 w-6" />
              </div>
              
              <h2 className="mt-8 font-display text-2xl lg:text-3xl font-bold text-[color:var(--ink)] tracking-tight leading-none">
                Oral Surgery & Gum Care
              </h2>
              
              <div className="mt-8 space-y-6 border-t border-slate-100 pt-6">
                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Gentle Extractions & Wisdom Teeth
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    Complex extractions performed with exceptional care and precision in our curated, sanctuary-like clinical space.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Advanced Periodontal Therapy
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    Targeted treatments to arrest gum disease, restore tissue health, and establish a strong, disease-free foundation for your teeth.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[color:var(--ink)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    Post-Surgical Healing Protocols
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                    Comprehensive aftercare guidance to ensure a swift, comfortable, and predictable recovery.
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
        title="Restorative care, redefined for long-term health."
        body="We pair evidence-based clinical practices with high-end customer hospitality to make complex care simple."
        className="bg-white"
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-3 mt-12">
          
          <article className="surface-card p-8 rounded-[2rem] border border-[color:var(--line)] bg-slate-50 flex flex-col justify-between">
            <div className="h-10 w-10 rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent-strong)] flex items-center justify-center mb-6">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-[color:var(--ink)]">Defining, Not Just Designing</h4>
              <p className="mt-3 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                Every restorative treatment plan is meticulously crafted to define the ideal proportions of your unique face, respecting natural oral anatomy.
              </p>
            </div>
          </article>

          <article className="surface-card p-8 rounded-[2rem] border border-[color:var(--line)] bg-slate-50 flex flex-col justify-between">
            <div className="h-10 w-10 rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent-strong)] flex items-center justify-center mb-6">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-[color:var(--ink)]">Uncompromising Comfort</h4>
              <p className="mt-3 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                Complex procedures are delivered in a space thoughtfully designed for your relaxation and peace of mind, with absolute comfort at every step.
              </p>
            </div>
          </article>

          <article className="surface-card p-8 rounded-[2rem] border border-[color:var(--line)] bg-slate-50 flex flex-col justify-between">
            <div className="h-10 w-10 rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent-strong)] flex items-center justify-center mb-6">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-[color:var(--ink)]">Enduring Quality</h4>
              <p className="mt-3 text-xs leading-relaxed text-[color:var(--muted)] font-medium">
                We utilize only premium, biocompatible materials meant to withstand the test of time, giving you permanent confidence.
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
        body="See the structural and aesthetic difference our advanced restorative implants make. Transparency builds confidence before you book."
        align="center"
        className="bg-[color:var(--background)]"
      >
        <div className="mt-12 mx-auto max-w-2xl px-2">
          <BeforeAfterSlider 
            beforeImage="/images/results/restore-before.png" 
            afterImage="/images/results/restore-after.png" 
            beforeLabel="Missing Tooth" 
            afterLabel="After Implant Restoration" 
          />
        </div>
      </SectionShell>

      {/* Booking Call-to-action Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--ink)] rounded-t-[3rem] lg:rounded-t-[4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 text-center">
          
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-[color:var(--accent-light)] mb-6">
            Begin Your Journey
          </p>
          <h2 className="text-balance font-display text-4xl sm:text-6xl font-semibold leading-[1.05] text-white tracking-tight">
            Ready to reclaim your <br className="hidden md:block" />
            <span className="font-serif italic font-light text-[color:var(--accent)]">smile health?</span>
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-white/70 font-medium">
            Book a dedicated consultation to diagnose, explain, and construct a personalized smile roadmap with our clinical team.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ActionLink
              href="/book"
              className="inline-flex items-center gap-3 bg-[color:var(--accent)] hover:brightness-110 text-white px-8 py-4 rounded-2xl font-bold tracking-wide transition-all shadow-lg shadow-[color:var(--accent)]/20"
              eventName="restore_page_book_click"
            >
              <CalendarDays className="h-5 w-5 text-white" />
              Schedule Your Restorative Consultation
            </ActionLink>
            
            <ActionLink
              href={quickWhatsAppMessages.general}
              external
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold tracking-wide transition-colors border border-white/10"
              eventName="restore_page_whatsapp_click"
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
