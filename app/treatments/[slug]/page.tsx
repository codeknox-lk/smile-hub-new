import { CheckCircle2, ArrowRight, MessageCircleMore, CalendarDays, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/faq-accordion";
import { ActionLink } from "@/components/action-link";
import { quickWhatsAppMessages, treatments } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { ScrollingFeatureShowcase } from "@/components/ui/interactive-scrolling-story-component";

const processImagesBySlug: Record<string, string[]> = {
  "preventive-care": [
    "/images/doctor-1.png",
    "/images/treatments/preventive.png",
    "/images/clinic-1.png",
    "/images/why/clinical-standard.png"
  ],
  "restorative-care": [
    "/images/doctor-1.png",
    "/images/treatments/restorative.png",
    "/images/clinic-1.png",
    "/images/why/comfort-care.png"
  ],
  "cosmetic-dentistry": [
    "/images/doctor-1.png",
    "/images/treatments/cosmetic.png",
    "/images/results/whitening-after.png",
    "/images/why/clinical-standard.png"
  ],
  "orthodontics": [
    "/images/doctor-1.png",
    "/images/treatments/orthodontics.png",
    "/images/clinic-1.png",
    "/images/why/comfort-care.png"
  ]
};

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

const renderTitleWithSerif = (title: string, accentColor: string = "text-[color:var(--accent-strong)]") => {
  const words = title.split(" ");
  if (words.length <= 1) return title;
  const lastWord = words.pop();
  return (
    <span>
      {words.join(" ")}{" "}
      <span className={`font-serif italic font-light ${accentColor}`}>
        {lastWord}
      </span>
    </span>
  );
};

export default async function TreatmentDetailPage({ params }: TreatmentDetailPageProps) {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) {
    notFound();
  }

  // Highlight helper for typewriter words based on slug
  const getHighlightedWords = (slug: string, text: string) => {
    return text.split(" ").map((w) => {
      const cleanWord = w.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"]/g, "");
      let isHighlighted = false;

      if (slug === "preventive-care") {
        isHighlighted = ["healthier", "gums", "teeth", "maintenance"].includes(cleanWord);
      } else if (slug === "restorative-care") {
        isHighlighted = ["damaged", "painful", "function", "restored"].includes(cleanWord);
      } else if (slug === "cosmetic-dentistry") {
        isHighlighted = ["whitening", "enhancement", "confidence"].includes(cleanWord);
      } else if (slug === "orthodontics") {
        isHighlighted = ["crowding", "spacing", "alignment", "straighter"].includes(cleanWord);
      }

      return {
        text: w,
        className: isHighlighted 
          ? "text-[color:var(--accent-strong)]" 
          : "text-[color:var(--ink)]/80"
      };
    });
  };

  const words = getHighlightedWords(slug, treatment.idealFor);

  const getStepDescription = (index: number, slug: string) => {
    const descriptions: Record<string, string[]> = {
      "preventive-care": [
        "We begin with a comprehensive visual assessment of your teeth and gums, checking for any early signs of issues in a calm, non-judgmental environment.",
        "A gentle cleaning removes plaque and tartar buildup, finishing with a polish to leave your teeth feeling fresh and clean.",
        "If necessary, we use low-exposure digital radiographs to detect hidden issues between teeth or beneath the gumline.",
        "We summarize our findings and discuss a simple, personalized care routine or treatment plan in plain language."
      ],
      "restorative-care": [
        "We focus on the area of discomfort or damage, using visual checks and diagnostics to determine the exact cause.",
        "We explain your options (fillings, crowns, etc.) and discuss the process, timelines, and outcomes clearly before starting.",
        "The procedure is carried out with a gentle touch, prioritizing your comfort and pain management at every stage.",
        "We provide clear written instructions and advice to support a smooth recovery and ensure long-term stability."
      ],
      "cosmetic-dentistry": [
        "We discuss your smile goals, take photos, and review your overall oral health to build a balanced treatment path.",
        "We evaluate your current tooth shade, shape, and alignment to design a result that feels natural and matches your facial details.",
        "We perform the cosmetic enhancements (whitening, veneers, etc.) with clinical precision and comfort-focused techniques.",
        "We guide you on how to protect your results and maintain a bright, fresh smile for years to come."
      ],
      "orthodontics": [
        "We assess your teeth alignment, spacing, and bite harmony to see if braces or aligners are the right fit.",
        "We take detailed impressions or scans to plan the precise movement of your teeth step-by-step.",
        "We fit the orthodontic appliance and explain how it works, how to clean it, and what to expect during adjustment.",
        "We schedule regular progress checks and guide you on post-treatment retainers to secure your straight new smile."
      ]
    };
    return (descriptions[slug] || [])[index] || "Our team guides you through each step of this phase with gentle care, reassurance, and clear explanations.";
  };

  const processSlides = treatment.process.map((step, idx) => {
    const images = processImagesBySlug[slug] || [];
    const bgColors = [
      "#f3f9fe", // Light Serenity Blue
      "#eaf5fc", // Soft Ice Blue
      "#eef7fd", // Soft Clinical Teal
      "#f5fbfe"  // Crisp Ice White
    ];
    return {
      title: step,
      description: getStepDescription(idx, slug),
      image: images[idx] || "/images/clinic-1.png",
      bgColor: bgColors[idx % bgColors.length],
      textColor: "#0b3551"
    };
  });

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
            <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] font-bold text-[color:var(--ink)] leading-[0.95] tracking-tight mb-8">
              {renderTitleWithSerif(treatment.title)}
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
          <div className="text-left max-w-5xl">
            <TypewriterEffect 
              words={words} 
              className="text-left font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium"
              showCursor={false}
            />
          </div>
        </div>
      </section>

      {/* 3. Bespoke Benefits Grid */}
      <section className="py-24 sm:py-32 bg-[color:var(--background)] relative">
        {/* Subtle background wash for clinical warmth */}
        <div className="absolute top-12 left-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(88,204,244,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent-strong)] mb-4">The Benefits</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[color:var(--ink)]">
              Why patients <span className="font-serif italic font-light text-[color:var(--accent-strong)]">choose this</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatment.benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white/70 backdrop-blur-md p-8 rounded-[2.2rem] border border-[color:var(--line)] hover:border-[color:var(--accent)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(23,94,146,0.12)] flex flex-col justify-between"
              >
                {/* Decorative Serif Number in Top-Right */}
                <div 
                  style={{ top: "24px", right: "32px" }}
                  className="absolute font-serif italic text-5xl font-light text-[color:var(--accent-strong)]/20 select-none group-hover:text-[color:var(--accent-strong)]/30 transition-colors duration-500"
                >
                  0{idx + 1}
                </div>

                <div>
                  <div className="h-12 w-12 rounded-2xl bg-[color:var(--accent)]/10 border border-[color:var(--line)] flex items-center justify-center mb-8 text-[color:var(--accent-strong)] group-hover:scale-110 group-hover:bg-[color:var(--accent-strong)] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(19,111,155,0.3)] transition-all duration-500">
                    <CheckCircle2 className="w-5 h-5 transition-transform duration-500" />
                  </div>
                  <p className="text-[color:var(--ink)] font-semibold text-lg leading-relaxed pr-6">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Visual Process Timeline */}
      <section className="bg-white relative">
        <ScrollingFeatureShowcase slides={processSlides} />
      </section>

      {/* 5. Dark Mode Transition & FAQs */}
      <section className="pt-24 pb-32 sm:pt-32 sm:pb-40 bg-[color:var(--ink)] rounded-t-[3rem] lg:rounded-t-[4rem] relative z-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              Patient <span className="font-serif italic font-light text-[color:var(--accent)]">FAQs</span>
            </h2>
            <p className="text-white/60 text-lg">Clear answers to help you feel completely comfortable.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 lg:p-10 border border-white/10 mb-20">
             <FaqAccordion items={treatment.faqs} theme="dark" />
          </div>

          <div className="text-center space-y-8">
            <h2 className="font-display text-5xl lg:text-7xl font-bold text-white tracking-tight">
              Ready to <span className="font-serif italic font-light text-[color:var(--accent)]">begin?</span>
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
