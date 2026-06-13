import { CheckCircle2, ArrowRight, MessageCircleMore, CalendarDays, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/faq-accordion";
import { ActionLink } from "@/components/action-link";
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
    <article className="min-h-screen bg-[color:var(--background)]">
      {/* 1. Cinematic Hero */}
      <section className="relative min-h-[95vh] flex items-center pt-24 pb-16 -mt-24 lg:-mt-28 lg:pt-28 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[color:var(--background)]">
          <img 
            src={treatment.image} 
            alt={treatment.title}
            className="absolute inset-0 w-full h-full object-cover opacity-100"
          />
          {/* Subtle gradient to ensure text readability on the left, fading out faster */}
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--background)]/95 via-[color:var(--background)]/60 to-transparent" />
          {/* Seamless blend into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color:var(--background)] to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[color:var(--accent-strong)]" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--accent-strong)]">
                {treatment.heroTag}
              </p>
            </div>
            <h1 className="font-[family:var(--font-display)] text-5xl sm:text-6xl lg:text-[5.5rem] font-bold text-[color:var(--ink)] leading-[0.95] tracking-tight mb-8">
              {treatment.title}
            </h1>
            <p className="text-xl sm:text-2xl text-[color:var(--muted)] max-w-2xl leading-relaxed font-medium">
              {treatment.summary}
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <ActionLink 
                href={quickWhatsAppMessages.general} 
                external
                className="inline-flex items-center justify-center gap-3 bg-[color:var(--ink)] text-white px-8 py-4 rounded-2xl font-bold transition-transform hover:scale-105"
              >
                <MessageCircleMore className="w-5 h-5 text-[#25D366]" />
                Ask about this treatment
              </ActionLink>
              <ActionLink 
                href="/book"
                className="inline-flex items-center justify-center gap-3 bg-white text-[color:var(--ink)] border border-[color:var(--line)] px-8 py-4 rounded-2xl font-bold shadow-sm transition-colors hover:border-[color:var(--accent)]"
              >
                <CalendarDays className="w-5 h-5 text-[color:var(--accent-strong)]" />
                Book Consultation
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ideal For Typographical Hook */}
      <section className="py-24 sm:py-32 bg-[color:var(--background)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent-strong)] mb-8">Who this is for</p>
          <h2 className="font-[family:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl leading-tight text-[color:var(--ink)] max-w-4xl font-medium">
            "{treatment.idealFor}"
          </h2>
        </div>
      </section>

      {/* 3. Bespoke Benefits Grid */}
      <section className="py-24 sm:py-32 bg-[color:var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent-strong)] mb-4">The Benefits</p>
            <h2 className="font-[family:var(--font-display)] text-4xl lg:text-5xl font-bold text-[color:var(--ink)]">Why patients choose this</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatment.benefits.map((benefit, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-[2rem] border border-[color:var(--line)] hover:border-[color:var(--accent)] transition-all hover:shadow-xl">
                <div className="h-12 w-12 rounded-xl bg-[color:var(--accent)]/10 flex items-center justify-center mb-6 text-[color:var(--accent-strong)] group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="text-[color:var(--ink)] font-semibold text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Visual Process Timeline */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent-strong)] mb-4">The Process</p>
            <h2 className="font-[family:var(--font-display)] text-4xl lg:text-5xl font-bold text-[color:var(--ink)]">What your journey looks like</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--accent)] via-[color:var(--line)] to-transparent" />
            
            <div className="space-y-16">
              {treatment.process.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-8 lg:gap-12">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white border-2 border-[color:var(--accent)] flex items-center justify-center text-[color:var(--accent-strong)] font-bold shadow-[0_0_20px_rgba(44,127,189,0.2)]">
                    0{idx + 1}
                  </div>
                  <div className="pt-2 lg:pt-4">
                    <p className="text-xl lg:text-2xl font-bold text-[color:var(--ink)]">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Dark Mode Transition & FAQs */}
      <section className="pt-24 pb-32 sm:pt-32 sm:pb-40 bg-[color:var(--ink)] rounded-t-[3rem] lg:rounded-t-[4rem] relative z-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-[family:var(--font-display)] text-4xl lg:text-5xl font-bold text-white mb-6">Patient FAQs</h2>
            <p className="text-white/60 text-lg">Clear answers to help you feel completely comfortable.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 lg:p-10 border border-white/10 mb-20">
             <FaqAccordion items={treatment.faqs} theme="dark" />
          </div>

          <div className="text-center space-y-8">
            <h2 className="font-[family:var(--font-display)] text-5xl lg:text-7xl font-bold text-white tracking-tight">
              Ready to begin?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ActionLink 
                href={quickWhatsAppMessages.general} 
                external
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold tracking-wide transition-transform hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.3)]"
              >
                Chat on WhatsApp
              </ActionLink>
              <ActionLink 
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-bold tracking-wide transition-colors hover:bg-white/20"
              >
                Book Consultation
              </ActionLink>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
