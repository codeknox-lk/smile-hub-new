import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ActionLink } from "@/components/action-link";
import type { TreatmentPage } from "@/data/site";

interface TreatmentsStickyStackProps {
  treatments: TreatmentPage[];
}

export function TreatmentsStickyStack({ treatments }: TreatmentsStickyStackProps) {
  return (
    <section className="relative w-full bg-[color:var(--background)] pt-24 pb-12 lg:pt-40 lg:pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* Intro Section - Sticky so it stays in the background as cards scroll over it */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-32">
           <div className="flex items-center gap-3 mb-6">
             <div className="h-[2px] w-8 lg:w-12 bg-[color:var(--accent-strong)]" />
             <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-[color:var(--accent-strong)]">
               Clinical Excellence
             </p>
             <div className="h-[2px] w-8 lg:w-12 bg-[color:var(--accent-strong)]" />
           </div>
           <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-[color:var(--ink)] mb-6 text-balance">
             Guided Pathways <br/>
             <span className="font-serif italic font-light text-[color:var(--accent)]">to Your Best Smile</span>
           </h2>
           <p className="text-base lg:text-lg text-[color:var(--muted)] font-medium max-w-2xl">
             Experience a new standard of dental care where every procedure is mapped out with clarity, comfort, and clinical precision. Your journey to health and aesthetics starts here.
           </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative w-full z-10 pb-8 lg:pb-12">
          {treatments.map((treatment, index) => {
            return (
              <div 
                key={treatment.slug}
                className="sticky w-full rounded-t-[2rem] lg:rounded-t-[3rem] rounded-b-xl lg:rounded-b-3xl overflow-hidden shadow-[0_-20px_40px_rgba(0,0,0,0.1)] bg-white border-t border-x border-[color:var(--line)] group flex flex-col mb-0 top-[calc(5rem+calc(var(--index)*3.5rem))] lg:top-[calc(15vh+calc(var(--index)*4rem))] h-[calc(70dvh-calc(var(--index)*3.5rem))] lg:h-[calc(85vh-calc(var(--index)*4rem))] transform-gpu"
                style={{ 
                  '--index': index,
                } as React.CSSProperties}
              >
                {/* 
                  The "Tab" Header 
                  Responsive height: 3.5rem (56px) on mobile, 4rem (64px) on desktop.
                  Must precisely match the rem multipliers in the top-[calc(...)] offset above.
                */}
                <div className="h-[3.5rem] lg:h-[4rem] w-full bg-white/95 backdrop-blur-md flex items-center px-5 lg:px-12 shrink-0 border-b border-[color:var(--line)] z-30 relative">
                   <span className="text-[color:var(--accent-strong)] font-bold font-display text-lg lg:text-2xl mr-3 lg:mr-4">
                     0{index + 1}
                   </span>
                   <h3 className="text-[color:var(--ink)] font-bold uppercase tracking-[0.1em] lg:tracking-[0.2em] text-[10px] lg:text-sm truncate">
                     {treatment.category}
                   </h3>
                </div>
                
                {/* The Full Bleed Image Body */}
                <div className="relative w-full flex-grow flex flex-col justify-end overflow-hidden">
                   <img 
                     src={treatment.image} 
                     alt={treatment.shortTitle}
                     className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20 lg:via-black/60 lg:to-black/10 z-10" />
                   <div className="absolute inset-0 bg-black/10 transition-colors duration-700 z-10" />
                   
                   {/* Content */}
                   <div className="relative z-20 p-5 pb-8 sm:p-8 lg:p-14 flex flex-col items-start w-full transform transition-transform duration-700 lg:group-hover:-translate-y-2">
                     <h3 className="font-display text-xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-[100%] lg:max-w-[90%]">
                       {treatment.shortTitle}
                     </h3>
                     
                     <p className="mt-3 lg:mt-4 text-xs sm:text-base lg:text-lg leading-relaxed text-white/80 max-w-xl line-clamp-2 sm:line-clamp-none">
                       {treatment.summary}
                     </p>
                     
                     {/* Benefits Grid - Hidden on smallest phones to save space, visible on sm+ */}
                     <div className="mt-4 lg:mt-8 hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 w-full max-w-2xl">
                       {treatment.benefits.slice(0, 4).map((benefit) => (
                         <div key={benefit} className="flex items-center gap-3">
                           <div className="shrink-0 h-4 w-4 lg:h-6 lg:w-6 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                             <CheckCircle2 className="h-2.5 w-2.5 lg:h-3.5 lg:w-3.5 text-[color:var(--accent)]" />
                           </div>
                           <p className="text-xs lg:text-sm font-medium tracking-tight text-white/90">{benefit}</p>
                         </div>
                       ))}
                     </div>
   
                     <div className="mt-6 lg:mt-10 w-full pt-5 lg:pt-8 border-t border-white/20 pb-6 lg:pb-0">
                       <ActionLink
                         href={`/treatments/${treatment.slug}`}
                         className="inline-flex items-center gap-2 lg:gap-3 text-xs lg:text-base font-bold text-white transition-all hover:gap-4 lg:hover:gap-6 group/link"
                       >
                         <span>Begin Your Treatment Journey</span>
                         <ArrowRight className="h-3 w-3 lg:h-5 lg:w-5 text-[color:var(--accent)] transition-transform group-hover/link:translate-x-2" />
                       </ActionLink>
                     </div>
                   </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
