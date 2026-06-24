import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
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
import { AnimatedCounter } from "@/components/animated-counter";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { HeroModernHealth } from "@/components/hero-modern-health";
import { MapCard } from "@/components/map-card";
import { ReviewCarousel } from "@/components/review-carousel";
import { SectionShell } from "@/components/section-shell";
import { TreatmentsStickyStack } from "@/components/treatments-sticky-stack";
import { ClinicAtmosphereReveal } from "@/components/clinic-atmosphere-reveal";
import { SmileHubStandard } from "@/components/smile-hub-standard";
import { EliteSuiteBanner } from "@/components/elite-suite-banner";
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



      <TreatmentsStickyStack treatments={treatments} />

      <SectionShell
        eyebrow="Real Results"
        title={
          <>
            Transformative dental care <br className="hidden md:block" />
            <span className="font-serif italic font-light text-[color:var(--accent)]">that speaks for itself.</span>
          </>
        }
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
        title={
          <>
            Clinical authority centered <br className="hidden md:block" />
            <span className="font-serif italic font-light text-[color:var(--accent)]">on patient comfort.</span>
          </>
        }
        body="We focus on clear paths to health, not complex jargon or unnecessary procedures."
        className="bg-white"
        align="center"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Main Value Prop - Bento Hero */}
          <article className="lg:col-span-7 group relative overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] border border-[color:var(--line)] bg-[color:var(--ink)] p-6 sm:p-10 lg:p-14 shadow-2xl transition-all duration-700 hover:-translate-y-2 flex flex-col justify-end">
            {/* Background Image with Deep Ink Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/why/clinical-standard.png" 
                alt="Clinical Standard" 
                className="h-full w-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--ink)] via-[color:var(--ink)]/80 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/90 via-[color:var(--ink)]/20 to-transparent z-10" />
            </div>

            <div className="relative z-20">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl text-white ring-1 ring-white/20">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-6 sm:mt-8 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.05] tracking-tight">
                The Clinical Standard
              </h3>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-white/80 max-w-xl font-medium">
                Smile Hub prioritizes evidence-based dentistry and patient education. Every plan is explained in plain language, ensuring you're a partner in your own care journey.
              </p>
              
              <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent-light)]" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Philosophy</p>
                    <p className="mt-1 text-sm font-semibold text-white">Patient-led care</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent-light)]" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Tech</p>
                    <p className="mt-1 text-sm font-semibold text-white">Digital-first safety</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent-light)]" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Standard</p>
                    <p className="mt-1 text-sm font-semibold text-white">Clinical Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="lg:col-span-5 grid gap-4 sm:grid-cols-2">
            {trustHighlights.map((item, idx) => {
              const isAccent = idx === 2; // "Mobile booking" is the accent card
              const Icon = {
                Heart,
                Cpu,
                Smartphone,
                MapPin
              }[item.icon as string] || Heart;

              return (
                <article 
                  key={item.title} 
                  className={cn(
                    "group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between border",
                    isAccent 
                      ? "bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent-strong)] border-transparent text-white shadow-lg shadow-[color:var(--accent)]/20" 
                      : "bg-white border-[color:var(--line)] text-[color:var(--ink)]"
                  )}
                >
                  {/* Top Row: Icon & Number */}
                  <div className="flex items-start justify-between relative z-20">
                    <div className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                      isAccent ? "bg-white/20 text-white" : "bg-slate-50 text-[color:var(--accent-strong)] group-hover:bg-[color:var(--accent-light)]/20"
                    )}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className={cn(
                      "font-serif italic text-3xl font-light",
                      isAccent ? "text-white/40" : "text-[color:var(--accent)]/30"
                    )}>
                      0{idx + 1}
                    </div>
                  </div>

                  <div className="relative z-20 mt-8 sm:mt-12">
                    <h4 className={cn(
                      "font-bold tracking-tight text-base sm:text-lg",
                      isAccent ? "text-white" : "text-[color:var(--ink)]"
                    )}>
                      {item.title}
                    </h4>
                    <p className={cn(
                      "mt-1.5 sm:mt-2 text-xs leading-relaxed font-medium",
                      isAccent ? "text-white/90" : "text-[color:var(--muted)]"
                    )}>
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="reviews"
        eyebrow="Patient Experiences"
        title={
          <>
            Care that leaves a <br className="hidden md:block" />
            <span className="font-serif italic font-light text-[color:var(--accent)]">lasting impression.</span>
          </>
        }
        body="Read what our patients have to say. We pride ourselves on delivering comfortable, transparent, and transformative dental care."
        align="center"
      >
        <ReviewCarousel snapshot={reviewSnapshot} />
      </SectionShell>

      <SectionShell
        eyebrow="Clinical Spaces"
        title="Redefining Premium Dental Care in Kandy"
        body="Experience dentistry reimagined. We have transformed the traditional dental visit into a premium, calming experience. Step into our modern Kandy dental clinic, where unparalleled clinical precision meets absolute comfort and strict cross-infection control."
        className="bg-white/46"
        align="center"
      >
        <div className="space-y-16 lg:space-y-24">
          <ClinicAtmosphereReveal />
          <SmileHubStandard />
          <EliteSuiteBanner />
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Clinical Team"
        title={
          <>
            Expertise you <br className="hidden md:block" />
            <span className="font-serif italic font-light text-[color:var(--accent)]">can talk to.</span>
          </>
        }
        body="Our team combines clinical precision with a gentle, patient-first philosophy."
        align="center"
      >
        <div className="relative mt-20 pt-8 lg:pt-24 max-w-6xl mx-auto flex flex-col lg:block px-4 lg:px-0">
          {/* Bottom Layer: The Navy Banner */}
          <article className="relative z-0 rounded-[3rem] lg:rounded-[4rem] bg-[color:var(--ink)] px-8 pb-12 pt-24 lg:px-20 lg:pb-20 lg:pt-36 -mt-16 lg:mt-0 text-white flex flex-col lg:flex-row lg:items-end justify-between gap-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--ink)] to-black opacity-50 pointer-events-none" />
            
            <div className="relative z-10 max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-[color:var(--accent-light)]">Clinical Philosophy</p>
              <h3 className="mt-6 font-display text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
                Evidence-based care for every smile.
              </h3>
              <p className="mt-8 text-base lg:text-lg leading-relaxed text-white/70">
                We don't just treat teeth; we guide patients through a lifecycle of health with transparent planning and cutting-edge diagnostics.
              </p>
            </div>
            
            <div className="relative z-10 grid grid-cols-2 gap-8 lg:gap-12 lg:min-w-[300px] border-t border-white/10 lg:border-t-0 lg:border-l pt-10 lg:pt-0 lg:pl-12">
              <div>
                <p className="text-5xl lg:text-6xl font-black font-display text-[color:var(--accent-light)]"><AnimatedCounter value={5} />k<span className="text-3xl lg:text-4xl text-white/40">+</span></p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-3 font-bold">Successful Cases</p>
              </div>
              <div>
                <p className="text-5xl lg:text-6xl font-black font-display text-[color:var(--accent-light)]"><AnimatedCounter value={100} /><span className="text-3xl lg:text-4xl text-white/40">%</span></p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-3 font-bold">Digital Workflow</p>
              </div>
            </div>
          </article>

          {/* Top Layer: Overlapping Doctor Card */}
          <article className="relative lg:absolute lg:top-0 left-0 right-0 lg:left-16 w-full lg:w-[600px] z-10 order-first lg:order-none group overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-[color:var(--line)] bg-white/90 backdrop-blur-xl p-4 md:p-5 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
            <div className="grid grid-cols-[100px_1fr] md:grid-cols-[180px_1fr] gap-4 md:gap-6 items-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] md:rounded-[1.5rem] w-[100px] md:w-auto">
                <img src="/images/doctor-1.png" alt="Clinical Lead" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center py-1 md:py-2 pr-2 md:pr-4">
                <div className="inline-flex items-center gap-1.5 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-deep)]">
                  <Star className="h-2.5 w-2.5 md:h-3 md:w-3 fill-current" />
                  <span>{doctors[0]?.role}</span>
                </div>
                <h3 className="mt-1.5 md:mt-3 font-display text-lg md:text-2xl lg:text-3xl font-bold text-[color:var(--ink)] tracking-tight">
                  {doctors[0]?.name}
                </h3>
                <p className="mt-1 md:mt-3 text-[10px] md:text-xs lg:text-sm leading-normal md:leading-relaxed text-[color:var(--muted)] line-clamp-2 font-medium">
                  Focused on clear patient guidance and gentle, evidence-based care.
                </p>
                <div className="mt-2 md:mt-5 flex flex-wrap gap-1 md:gap-1.5">
                  {doctors[0]?.specialties.slice(0, 3).map((s, idx) => (
                    <span key={s} className={`rounded-full bg-slate-50 px-2 py-0.5 md:px-2.5 md:py-1 text-[8px] md:text-[9px] font-bold text-[color:var(--ink)] border border-slate-100 uppercase tracking-wider ${idx === 2 ? 'hidden sm:inline-block' : 'inline-block'}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </SectionShell>

      <section className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--ink)] mt-20 lg:mt-32 rounded-t-[3rem] lg:rounded-t-[4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[color:var(--accent-light)]/50" />
              <p className="text-xs uppercase tracking-[0.25em] font-bold text-[color:var(--accent-light)]">
                Visit Smile Hub
              </p>
            </div>
            <h2 className="text-balance font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl tracking-tight">
              Ready to begin your <br className="hidden md:block" />
              <span className="font-serif italic font-light text-[color:var(--accent)]">smile journey?</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 font-medium">
              Our clinic is conveniently located on Peradeniya Road with easy parking. Reach out via WhatsApp or phone to schedule your consultation.
            </p>
          </div>

          {/* Map and Contacts Grid */}
          <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
            {/* The Map */}
            <div className="relative h-[400px] lg:h-auto min-h-[400px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                title="Smile Hub map"
                src="https://www.google.com/maps?q=Smile%20Hub%20Premium%20Dental%20Care%2C%20Kandy&z=16&output=embed"
                className="absolute inset-0 h-full w-full border-0 opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
            </div>

            {/* Contact Directory */}
            <div className="flex flex-col gap-4">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 lg:p-10 h-full flex flex-col justify-center">
                <div className="flex items-start gap-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[color:var(--accent-light)]">
                    <MapPinned className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold">Address</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/90 font-medium">
                      951, 1st Floor, Art Lanka Building, Peradeniya Road, Kandy, Opposite Damro Showroom
                    </p>
                  </div>
                </div>
                
                <div className="mt-10 pt-10 border-t border-white/10">
                  <div className="flex items-start gap-5">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[color:var(--accent-light)]">
                      <Clock3 className="h-5 w-5" />
                    </span>
                    <div className="w-full">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold">Hours</p>
                      <ul className="mt-4 space-y-4 text-sm text-white/80">
                        <li className="flex justify-between items-center gap-4 border-b border-white/5 pb-3">
                          <span className="font-semibold text-white">Tue - Sat</span> 
                          <span>5:00 PM – 7:00 PM</span>
                        </li>
                        <li className="flex justify-between items-center gap-4 border-b border-white/5 pb-3">
                          <span className="font-semibold text-white">Sunday</span> 
                          <span>9:00 AM – 2:00 PM</span>
                        </li>
                        <li className="flex justify-between items-center gap-4">
                          <span className="font-semibold text-white/50">Monday</span> 
                          <span className="text-white/50">Closed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Cards Grid */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <ActionLink
              href={quickWhatsAppMessages.general}
              external
              className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 lg:p-8 flex items-center justify-between transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
              eventName="home_contact_whatsapp_click"
            >
              <span>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">WhatsApp</p>
                <p className="mt-1.5 text-lg font-bold text-white group-hover:text-[color:var(--accent-light)] transition-colors">Chat instantly</p>
              </span>
              <MessageCircleMore className="h-6 w-6 text-white/40 group-hover:text-[color:var(--accent-light)] transition-colors" />
            </ActionLink>

            <a href={`tel:${formatPhoneForTel(siteSettings.phonePrimary)}`} className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 lg:p-8 flex items-center justify-between transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
              <span>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Call now</p>
                <p className="mt-1.5 text-lg font-bold text-white group-hover:text-[color:var(--accent-light)] transition-colors">{siteSettings.phonePrimary}</p>
              </span>
              <Phone className="h-6 w-6 text-white/40 group-hover:text-[color:var(--accent-light)] transition-colors" />
            </a>

            <ActionLink href="/contact" className="group relative overflow-hidden bg-[color:var(--accent)] border border-transparent rounded-[2rem] p-6 lg:p-8 flex items-center justify-between transition-all duration-300 hover:brightness-110 hover:-translate-y-1 shadow-lg shadow-[color:var(--accent)]/20" eventName="home_contact_map_click">
              <span>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Find us</p>
                <p className="mt-1.5 text-lg font-bold text-white">Open map & directions</p>
              </span>
              <MapPinned className="h-6 w-6 text-white" />
            </ActionLink>
          </div>

        </div>
      </section>
    </>
  );
}

