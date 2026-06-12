import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Cpu,
  Heart,
  MapPin,
  MapPinned,
  MessageCircleMore,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star
} from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { HeroModernHealth } from "@/components/hero-modern-health";
import { MapCard } from "@/components/map-card";
import { ReviewCarousel } from "@/components/review-carousel";
import { SectionShell } from "@/components/section-shell";
import {
  doctors,
  galleryItems,
  homepageSections,
  quickWhatsAppMessages,
  siteSettings,
  treatments,
  trustHighlights
} from "@/data/site";
import { getReviewSnapshot } from "@/lib/reviews";
import { createMetadata } from "@/lib/seo";
import { cn, formatPhoneForTel } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Smile Hub Premium Dental Care",
  path: "/"
});

const quickSignals = [
  "5.0 Google rating",
  "Peradeniya Road, Kandy",
  "WhatsApp-first appointments"
];

export default async function HomePage() {
  const reviewSnapshot = await getReviewSnapshot();

  return (
    <>
      <HeroModernHealth reviewSnapshot={reviewSnapshot} />



      <SectionShell
        eyebrow="Clinical Excellence"
        title="Guided Pathways to Your Best Smile"
        body="Experience a new standard of dental care where every procedure is mapped out with clarity, comfort, and clinical precision. Your journey to health and aesthetics starts here."
        align="center"
      >
        <div className="hide-scrollbar flex lg:grid snap-x snap-mandatory lg:snap-none gap-8 overflow-x-auto lg:overflow-visible pb-8 lg:grid-cols-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {treatments.map((treatment) => (
            <article
              key={treatment.slug}
              className="group relative min-w-[90%] sm:min-w-[48%] lg:min-w-0 snap-center overflow-hidden rounded-[3rem] border border-white/10 bg-black shadow-2xl aspect-[16/11] flex flex-col justify-end p-8 lg:p-12 lg:pb-14 text-center"
            >
              {/* Cinematic Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={treatment.image} 
                  alt={treatment.shortTitle} 
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Dark Clinical Overlay for contrast */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-700 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              </div>

              {/* Content Layer */}
              <div className="relative z-20 w-full flex flex-col items-center pt-10">
                <div className="inline-flex rounded-full bg-white/10 backdrop-blur-md px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-white/90 border border-white/20">
                  {treatment.category}
                </div>
                <h2 className="mt-6 font-[family:var(--font-display)] text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight max-w-[85%]">
                  {treatment.shortTitle}
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/60 max-w-lg line-clamp-2">
                  {treatment.summary}
                </p>
                
                {/* Benefits reveal on hover */}
                <div className="hidden lg:block overflow-hidden pointer-events-none w-full">
                  <div className="max-h-0 group-hover:max-h-[200px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                    <div className="mt-10 flex flex-col items-center gap-4 text-white/50">
                      {treatment.benefits.slice(0, 3).map((benefit, bIdx) => (
                        <div 
                          key={benefit} 
                          className="flex items-center justify-center gap-3 transition-transform duration-700 delay-[100ms] group-hover:translate-y-0 translate-y-6"
                          style={{ transitionDelay: `${bIdx * 80 + 200}ms` }}
                        >
                          <div className="shrink-0 h-5 w-5 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <CheckCircle2 className="h-3 w-3 text-[color:var(--accent)]" />
                          </div>
                          <p className="text-xs font-medium tracking-tight leading-none">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 w-full flex items-center justify-center">
                  <ActionLink
                    href={`/treatments/${treatment.slug}`}
                    className="inline-flex items-center gap-3 text-sm font-bold text-white transition-all hover:gap-6 group/link"
                  >
                    <span>Begin Your Treatment Journey</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-2" />
                  </ActionLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Real Results"
        title="Transformative dental care that speaks for itself."
        body="Swipe to see the difference our restorative and cosmetic treatments make. Transparency builds confidence before you book."
        className="bg-white/46"
        align="center"
      >
        <div className="mx-auto max-w-2xl px-2">
          <BeforeAfterSlider 
            beforeImage="/images/results/whitening-before.png" 
            afterImage="/images/results/whitening-after.png" 
            beforeLabel="Before Treatment" 
            afterLabel="After Whitening" 
          />
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Why Smile Hub"
        title="Clinical authority centered on patient comfort."
        body="We focus on clear paths to health, not complex jargon or unnecessary procedures."
        className="bg-white"
        align="center"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Main Value Prop - Bento Hero */}
          <article className="lg:col-span-7 group relative overflow-hidden rounded-[3.5rem] border border-white/10 bg-[#050505] p-10 lg:p-14 shadow-2xl transition-all duration-700 hover:-translate-y-2">
            {/* Background Image with Cinematic Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/why/clinical-standard.png" 
                alt="Clinical Standard" 
                className="h-full w-full object-cover opacity-30 transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
            </div>

            <div className="relative z-20">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl text-white ring-1 ring-white/20">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="mt-10 font-[family:var(--font-display)] text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-md">
                The Clinical Standard
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-zinc-100 max-w-xl font-medium drop-shadow-sm">
                Smile Hub prioritizes evidence-based dentistry and patient education. Every plan is explained in plain language, ensuring you're a partner in your own care journey.
              </p>
              
              <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Philosophy</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-100 drop-shadow-sm">Patient-led care</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Tech</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-100 drop-shadow-sm">Digital-first safety</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Standard</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-100 drop-shadow-sm">Clinical Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Feature Grid - Bento Complement */}
          <div className="lg:col-span-5 grid gap-4 sm:grid-cols-2">
            {trustHighlights.map((item, idx) => {
              const Icon = {
                Heart,
                Cpu,
                Smartphone,
                MapPin
              }[item.icon as string] || Heart;

              return (
                <article 
                  key={item.title} 
                  className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050505] p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="h-full w-full object-cover opacity-25 transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                  </div>

                  <div className="relative z-20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl text-white ring-1 ring-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[color:var(--accent)] group-hover:rotate-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-6 font-bold text-zinc-100 tracking-tight drop-shadow-sm">{item.title}</h4>
                    <p className="mt-2 text-xs leading-5 text-zinc-300 font-medium drop-shadow-sm">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="reviews"
        eyebrow="Google reviews"
        title="Real trust signals belong in a polished layout, not a pasted widget."
        body="The review area keeps the live rating highly visible while turning featured reviews into a swipe-friendly deck that feels more premium on mobile."
        align="center"
      >
        <ReviewCarousel snapshot={reviewSnapshot} />
      </SectionShell>

      <SectionShell
        eyebrow="Clinic atmosphere"
        title="Designed for clarity and patient calm."
        body="A preview of the spaces where our clinical team provides gentle, expert care."
        className="bg-white/46"
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-12 md:grid-rows-2 h-auto md:h-[600px]">
          {/* Main Hero Shot */}
          <article className="md:col-span-7 md:row-span-2 group relative overflow-hidden rounded-[3rem] border border-[color:var(--line)] bg-white shadow-sm">
            <img src="/images/clinic-1.png" alt="Clinical Suite" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-10 left-10 right-10 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Featured Space</p>
              <h3 className="mt-2 font-[family:var(--font-display)] text-2xl font-bold text-white">Modern Clinical Suite</h3>
            </div>
          </article>

          {/* Secondary Shots */}
          <article className="md:col-span-5 md:row-span-1 group relative overflow-hidden rounded-[3rem] border border-[color:var(--line)] bg-white shadow-sm">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(166,224,246,0.92)_0%,rgba(255,255,255,0.96)_100%)] h-full w-full" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <p className="section-kicker">Patient Focus</p>
              <h3 className="mt-2 text-xl font-bold text-[color:var(--ink)]">Comfort-First Consultations</h3>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)]">Spaces designed for clear communication.</p>
            </div>
          </article>

          <div className="md:col-span-5 md:row-span-1 grid grid-cols-2 gap-6">
            <article className="group relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white shadow-sm">
              <div className="absolute inset-0 bg-[color:var(--accent-light)] h-full w-full opacity-40" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="text-[9px] font-bold uppercase tracking-widest text-[color:var(--accent-deep)]">Tech</p>
                <h4 className="mt-1 text-sm font-bold text-[color:var(--ink)]">Digital Diagnostics</h4>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white shadow-sm">
              <div className="absolute inset-0 bg-slate-100 h-full w-full" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="text-[9px] font-bold uppercase tracking-widest text-[color:var(--accent-deep)]">Clinic</p>
                <h4 className="mt-1 text-sm font-bold text-[color:var(--ink)]">Reception Welcome</h4>
              </div>
            </article>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Clinical Team"
        title="Expertise you can talk to."
        body="Our team combines clinical precision with a gentle, patient-first philosophy."
        align="center"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Doctor 1 */}
          <article className="group relative overflow-hidden rounded-[3rem] border border-[color:var(--line)] bg-white p-6 shadow-sm transition-all hover:shadow-xl">
            <div className="grid gap-8 md:grid-cols-[200px_1fr]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <img src="/images/doctor-1.png" alt="Clinical Lead" className="absolute inset-0 h-full w-full object-cover grayscale transition-all group-hover:grayscale-0" />
              </div>
              <div className="flex flex-col justify-center py-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[color:var(--accent-deep)]">
                  <Star className="h-3 w-3 fill-current" />
                  <span>{doctors[0]?.role}</span>
                </div>
                <h3 className="mt-4 font-[family:var(--font-display)] text-3xl font-bold text-[color:var(--ink)]">
                  {doctors[0]?.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)] line-clamp-2">
                  Focused on clear patient guidance and gentle, evidence-based care.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {doctors[0]?.specialties.slice(0, 3).map((s) => (
                    <span key={s} className="rounded-full bg-slate-50 px-3 py-1 text-[10px] font-bold text-[color:var(--ink)] border border-slate-100 uppercase tracking-wider">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Doctor 2 / Value Prop */}
          <article className="rounded-[3.5rem] bg-[color:var(--ink)] p-10 text-white flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/40">Clinical Philosophy</p>
            <h3 className="mt-6 font-[family:var(--font-display)] text-4xl font-bold leading-tight">
              Evidence-based care for every smile.
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-white/60 max-w-md">
              We don't just treat teeth; we guide patients through a lifecycle of health with transparent planning and cutting-edge diagnostics.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-bold font-[family:var(--font-display)]">5000+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Successful Cases</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-[family:var(--font-display)]">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Digital Workflow</p>
              </div>
            </div>
          </article>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Visit Smile Hub"
        title="Directions, hours, and quick actions without forcing extra taps."
        body="The final conversion layer keeps map, phone, and WhatsApp obvious, especially on smaller screens."
        className="bg-white/46"
      >
        <MapCard />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <ActionLink
            href={quickWhatsAppMessages.general}
            external
            className="surface-card flex items-center justify-between"
            eventName="home_contact_whatsapp_click"
          >
            <span>
              <p className="section-kicker">WhatsApp</p>
              <p className="mt-2 text-xl font-semibold text-[color:var(--ink)]">Chat instantly</p>
            </span>
            <MessageCircleMore className="h-5 w-5 text-[color:var(--accent-deep)]" />
          </ActionLink>
          <a href={`tel:${formatPhoneForTel(siteSettings.phonePrimary)}`} className="surface-card flex items-center justify-between">
            <span>
              <p className="section-kicker">Call now</p>
              <p className="mt-2 text-xl font-semibold text-[color:var(--ink)]">{siteSettings.phonePrimary}</p>
            </span>
            <Phone className="h-5 w-5 text-[color:var(--accent-deep)]" />
          </a>
          <ActionLink href="/contact" className="surface-card flex items-center justify-between" eventName="home_contact_map_click">
            <span>
              <p className="section-kicker">Find us</p>
              <p className="mt-2 text-xl font-semibold text-[color:var(--ink)]">Open map and directions</p>
            </span>
            <MapPinned className="h-5 w-5 text-[color:var(--accent-deep)]" />
          </ActionLink>
        </div>
      </SectionShell>
    </>
  );
}

