import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  align?: "left" | "center";
};

export function SectionShell({
  id,
  eyebrow,
  title,
  body,
  className,
  children,
  align = "left"
}: SectionShellProps) {
  const isCentered = align === "center";

  return (
    <section id={id} className={cn("relative py-24 sm:py-32 overflow-hidden", className)}>
      {/* Serenity Wash - Subtle background glow for clinical warmth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(44,127,189,0.03)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(103,198,238,0.05)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "max-w-4xl space-y-6 pb-16",
          isCentered ? "mx-auto text-center" : ""
        )}>
          {eyebrow && (
            <div className={cn("flex items-center gap-3", isCentered ? "justify-center" : "")}>
              <div className="h-px w-8 bg-[color:var(--accent-strong)]/30" />
              <p className="text-xs uppercase tracking-[0.25em] font-bold text-[color:var(--accent-strong)]">
                {eyebrow}
              </p>
              {isCentered && <div className="h-px w-8 bg-[color:var(--accent-strong)]/30" />}
            </div>
          )}
          <h2 className="text-balance font-display text-5xl font-semibold leading-[1.05] text-[color:var(--ink)] sm:text-6xl tracking-tight">
            {title}
          </h2>
          {body && (
            <p className={cn(
              "max-w-2xl text-lg leading-relaxed text-[color:var(--ink)]/60 font-medium",
              isCentered ? "mx-auto" : ""
            )}>
              {body}
            </p>
          )}
        </div>
        <div className="relative z-10 transition-all duration-700">
          {children}
        </div>
      </div>
    </section>
  );
}

