import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Great_Vibes } from "next/font/google";

const signatureFont = Great_Vibes({ subsets: ["latin"], weight: "400" });

interface AboutDoctorProps {
  eyebrow: string;
  name: string;
  role: string;
  quote: React.ReactNode;
  body: React.ReactNode;
  credentials: string[];
  image: string;
  signatureText?: string;
}

export function AboutDoctor({ eyebrow, name, role, quote, body, credentials, image, signatureText }: AboutDoctorProps) {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-white overflow-hidden border-t border-[color:var(--line)]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left: Massive Portrait */}
          <div className="relative w-full lg:w-[50%] xl:w-[45%] aspect-[3/4] sm:aspect-square lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-[color:var(--surface)] shadow-2xl z-0">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover object-[center_top] saturate-[0.95]"
            />
            <div className="absolute inset-0 bg-[color:var(--accent)]/5 mix-blend-color pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/10 to-transparent pointer-events-none" />
            
            {/* Floating Credential Badge */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/80 backdrop-blur-xl border border-white/50 p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex items-center gap-4">
              <div className="bg-[color:var(--accent-strong)] text-white font-bold h-12 w-12 flex items-center justify-center rounded-xl text-xl shadow-inner">
                15+
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-[color:var(--ink)] leading-tight">
                Years Clinical<br/>Excellence
              </div>
            </div>
          </div>

          {/* Right: The Letter / Bio */}
          <div className="relative z-10 w-full lg:w-[55%] xl:w-[60%] lg:-ml-12 mt-8 lg:mt-0 bg-white lg:bg-white/95 lg:backdrop-blur-xl p-8 sm:p-12 lg:p-16 rounded-[2.5rem] shadow-[0_20px_60px_rgba(22,88,138,0.08)] border border-[color:var(--line)]">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--accent-strong)] mb-8">
              {eyebrow}
            </p>
            
            <h2 className="font-[family:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-[color:var(--ink)] mb-8">
              "{quote}"
            </h2>
            
            <div className="text-base sm:text-lg leading-relaxed text-[color:var(--muted)] space-y-6 mb-12">
              {body}
            </div>
            
            <div className="border-t border-[color:var(--line)] pt-10 mb-10">
              <p className={cn(signatureFont.className, "text-5xl md:text-6xl text-[color:var(--accent-strong)] mb-4 -rotate-3 origin-left opacity-90 mix-blend-multiply")}>
                {signatureText || name}
              </p>
              <p className="font-[family:var(--font-display)] text-xl font-semibold text-[color:var(--ink)]">
                {name}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent-deep)] mt-1 font-bold">
                {role}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
              {credentials.map((cred) => (
                <div key={cred} className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[color:var(--surface)] shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--accent-strong)]" />
                  </div>
                  <span className="text-sm font-medium text-[color:var(--ink)]">{cred}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
