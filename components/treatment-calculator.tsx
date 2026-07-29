"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ShieldCheck, HeartPulse, Smile, CheckCircle2, ArrowRight, Calculator, MessageCircle } from "lucide-react";
import { ActionLink } from "./action-link";
import { cn } from "@/lib/utils";

type GoalOption = {
  id: string;
  label: string;
  subtitle: string;
  icon: React.ReactNode;
  estPrice: string;
  monthlyPlan: string;
  inclusions: string[];
  recommendedTreatment: string;
};

const GOALS: GoalOption[] = [
  {
    id: "whiten",
    label: "Brighter, Whiter Smile",
    subtitle: "Lift stubborn stains & brighten tooth shade safely",
    icon: <Sparkles className="h-5 w-5 text-[color:var(--accent-strong)]" />,
    estPrice: "LKR 35,000",
    monthlyPlan: "LKR 5,833 / mo (6 Months 0% Interest)",
    recommendedTreatment: "In-Clinic Laser Teeth Whitening",
    inclusions: [
      "Full clinical isolation & enamel safety protocol",
      "Immediate 3–6 shade brightening in a single visit",
      "Anti-sensitivity enamel soothing serum",
      "Take-home post-whitening care guidance"
    ]
  },
  {
    id: "replace",
    label: "Replace Missing Tooth",
    subtitle: "Permanent, natural-looking implant replacement",
    icon: <HeartPulse className="h-5 w-5 text-rose-600" />,
    estPrice: "LKR 165,000",
    monthlyPlan: "LKR 13,750 / mo (12 Months 0% Interest)",
    recommendedTreatment: "Precision Titanium Dental Implant System",
    inclusions: [
      "3D CBCT bone scan diagnostic planning",
      "Biocompatible titanium post placement",
      "Custom shade porcelain crown restoration",
      "Post-operative healing checkups & care"
    ]
  },
  {
    id: "straighten",
    label: "Straighten Teeth / Aligners",
    subtitle: "Discreet, removable clear aligners",
    icon: <Smile className="h-5 w-5 text-sky-600" />,
    estPrice: "LKR 220,000",
    monthlyPlan: "LKR 18,333 / mo (12 Months 0% Interest)",
    recommendedTreatment: "Smile Hub 3D Clear Aligners Package",
    inclusions: [
      "3D digital setup & transformation simulation",
      "Complete set of custom aligner trays",
      "Bi-weekly doctor progress tracking",
      "Final retention tray set"
    ]
  },
  {
    id: "hygiene",
    label: "Routine Care & Scaling",
    subtitle: "Plaque removal, fresh breath & hygiene check",
    icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
    estPrice: "LKR 6,500",
    monthlyPlan: "Single Session / Pay Per Visit",
    recommendedTreatment: "Professional Scaling & High-Shine Polish",
    inclusions: [
      "Ultrasonic plaque & tartar removal",
      "High-shine enamel polishing",
      "Comprehensive gum health check",
      "Personalized hygiene advice"
    ]
  }
];

export function TreatmentCalculator() {
  const [selectedGoalId, setSelectedGoalId] = useState<string>("whiten");

  const activeGoal = GOALS.find((g) => g.id === selectedGoalId) || GOALS[0];

  const waMessage = `https://wa.me/94777513451?text=${encodeURIComponent(
    `Hi Smile Hub Dental Care! I used your online estimator for "${activeGoal.label}". I would like to get a personalized written estimate and book a consultation.`
  )}`;

  return (
    <div className="w-full max-w-5xl mx-auto rounded-[2.5rem] bg-[color:var(--ink)] p-6 sm:p-10 border border-white/10 shadow-2xl text-white relative overflow-hidden">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(88,204,244,0.15)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle,rgba(44,127,189,0.2)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      {/* Title Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[color:var(--accent-light)] border border-white/10 backdrop-blur-md">
          <Calculator className="h-3.5 w-3.5 text-[color:var(--accent-light)]" />
          <span>Interactive Fee Estimator</span>
        </div>
        <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Calculate Your Custom <span className="font-serif italic font-light text-[color:var(--accent-light)]">Treatment Plan</span>
        </h3>
        <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
          Select your primary treatment goal below to get an instant cost estimate and 0% monthly payment option.
        </p>
      </div>

      {/* Step 1: Goal Select Grid */}
      <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {GOALS.map((goal) => {
          const isSelected = goal.id === selectedGoalId;
          return (
            <button
              key={goal.id}
              type="button"
              onClick={() => setSelectedGoalId(goal.id)}
              className={cn(
                "p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer select-none",
                isSelected
                  ? "bg-white text-[color:var(--ink)] border-white shadow-xl scale-[1.02] ring-4 ring-sky-400/30"
                  : "bg-white/10 text-white border-white/15 hover:bg-white/15"
              )}
            >
              <div>
                <div className={cn(
                  "p-2.5 rounded-xl w-fit mb-3 border",
                  isSelected
                    ? "bg-sky-50 border-sky-100"
                    : "bg-white/10 border-white/10"
                )}>
                  {goal.icon}
                </div>
                <h4 className={cn("font-bold text-sm sm:text-base", isSelected ? "text-[color:var(--ink)]" : "text-white")}>
                  {goal.label}
                </h4>
                <p className={cn("text-xs mt-1.5 leading-relaxed font-medium", isSelected ? "text-[color:var(--muted)]" : "text-white/70")}>
                  {goal.subtitle}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-200/20">
                <span className={cn("text-xs font-extrabold", isSelected ? "text-[color:var(--accent-strong)]" : "text-sky-300")}>
                  {goal.estPrice}
                </span>
                <span className={cn(
                  "h-4 w-4 rounded-full border flex items-center justify-center text-[10px] font-bold",
                  isSelected ? "bg-[color:var(--accent-strong)] text-white border-[color:var(--accent-strong)]" : "border-white/40"
                )}>
                  {isSelected && "✓"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Step 2: Instant Calculated Result Box - HIGH CONTRAST DARK TEXT ON WHITE CARD */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeGoal.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 bg-white text-[color:var(--ink)] border border-white rounded-3xl p-6 sm:p-8 grid gap-8 md:grid-cols-2 items-center shadow-2xl"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent-strong)] block mb-1">
              Estimated Investment Breakdown
            </span>
            <h4 className="font-display text-2xl font-bold text-[color:var(--ink)]">
              {activeGoal.recommendedTreatment}
            </h4>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-[color:var(--ink)]">
                {activeGoal.estPrice}
              </span>
              <span className="text-xs text-[color:var(--muted)] font-semibold">starting rate</span>
            </div>

            {/* Monthly Installment Pill */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-sky-50 px-3.5 py-2 text-xs font-bold text-[color:var(--accent-strong)] border border-sky-100">
              <ShieldCheck className="h-4 w-4 text-[color:var(--accent-strong)]" />
              <span>{activeGoal.monthlyPlan}</span>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--ink)]/60 block">
              Package Includes:
            </span>
            <ul className="space-y-2.5">
              {activeGoal.inclusions.map((inc, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[color:var(--ink)]/90">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--accent-strong)] shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <ActionLink
                href={waMessage}
                external
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[color:var(--accent-strong)] hover:bg-[color:var(--ink)] text-white font-bold py-3.5 px-6 text-xs sm:text-sm shadow-xl transition-all group"
              >
                <MessageCircle className="h-4.5 w-4.5 text-[#25d366]" />
                <span>Send Estimate to WhatsApp</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </ActionLink>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
