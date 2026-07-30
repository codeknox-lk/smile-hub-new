"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, MessageCircle, HeartPulse, Smile, Cpu, Check, X, FileText, Clock, Layers, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { ActionLink } from "@/components/action-link";
import { PRICING_CATEGORIES, PRICING_ITEMS, PRICING_FAQS, PricingItem } from "@/data/pricing";
import { quickWhatsAppMessages } from "@/data/site";
import { FaqAccordion } from "@/components/faq-accordion";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  all: <Sparkles className="h-4 w-4 shrink-0" />,
  preventive: <ShieldCheck className="h-4 w-4 shrink-0" />,
  restorative: <HeartPulse className="h-4 w-4 shrink-0" />,
  cosmetic: <Sparkles className="h-4 w-4 shrink-0" />,
  orthodontics: <Smile className="h-4 w-4 shrink-0" />,
  consultation: <Cpu className="h-4 w-4 shrink-0" />,
};

export function PricingTable() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [items, setItems] = useState<PricingItem[]>(PRICING_ITEMS);
  const [selectedBreakdownItem, setSelectedBreakdownItem] = useState<PricingItem | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("smilehub_pricing_data");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setItems(parsed);
        }
      }
    } catch (e) {}
  }, []);

  const filteredItems = activeCategory === "all"
    ? items
    : items.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full space-y-16">
      {/* Category Filter Pills Bar - Clean Luxury Segmented Pills */}
      <div className="flex justify-center w-full px-4">
        <div className="bg-white/80 backdrop-blur-xl p-2 rounded-2xl sm:rounded-full border border-slate-200/80 shadow-xl inline-flex flex-wrap gap-2 justify-center max-w-5xl mx-auto">
          {PRICING_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer select-none whitespace-nowrap shrink-0",
                  isActive
                    ? "bg-[color:var(--accent-strong)] text-white shadow-lg shadow-[color:var(--accent-strong)]/25 scale-[1.03]"
                    : "bg-slate-50/80 text-[color:var(--muted)] hover:text-[color:var(--ink)] hover:bg-slate-100/90 border border-slate-150"
                )}
              >
                <span className={cn("transition-colors", isActive ? "text-white" : "text-[color:var(--accent-strong)]")}>
                  {CATEGORY_ICONS[cat.id] || <Sparkles className="h-4 w-4 shrink-0" />}
                </span>
                <span className="font-bold">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <motion.div
        layout
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="h-full flex flex-col"
            >
              <PricingCard
                item={item}
                onOpenBreakdown={() => setSelectedBreakdownItem(item)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Itemized Fee Breakdown Slide-Over Drawer Modal */}
      <AnimatePresence>
        {selectedBreakdownItem && (
          <FeeBreakdownModal
            item={selectedBreakdownItem}
            onClose={() => setSelectedBreakdownItem(null)}
          />
        )}
      </AnimatePresence>

      {/* 100% Fee Guarantee Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto rounded-[2.5rem] bg-[color:var(--ink)] text-white border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center space-y-5"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(88,204,244,0.15)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="relative z-10 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[color:var(--accent-light)] border border-white/10 backdrop-blur-md shadow-sm">
          <ShieldCheck className="h-4 w-4 text-[color:var(--accent-light)]" />
          <span>100% Transparent Fee Guarantee</span>
        </div>
        <h3 className="relative z-10 font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          No Hidden Fees. No Surprise Charges.
        </h3>
        <p className="relative z-10 text-base text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
          Before any procedure begins, you receive an itemized, written treatment plan detailing exact costs. You are always in complete control of your care.
        </p>
      </motion.div>

      {/* Pricing FAQs Accordion */}
      <div className="max-w-3xl mx-auto pt-4">
        <div className="text-center mb-10">
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-[color:var(--ink)]">
            Frequently Asked <span className="font-serif italic font-light text-[color:var(--accent-strong)]">Questions</span>
          </h3>
          <p className="mt-2 text-base text-[color:var(--muted)] font-medium">Clear answers regarding payment options and estimates.</p>
        </div>
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[color:var(--line)] shadow-lg">
          <FaqAccordion items={PRICING_FAQS} theme="light" />
        </div>
      </div>
    </div>
  );
}

function PricingCard({
  item,
  onOpenBreakdown,
}: {
  item: PricingItem;
  onOpenBreakdown: () => void;
}) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="group relative rounded-[2.5rem] bg-white p-3.5 sm:p-4 border border-slate-200/80 shadow-[0_15px_45px_rgba(15,42,74,0.06)] hover:shadow-[0_25px_60px_rgba(15,42,74,0.14)] transition-all duration-500 flex flex-col justify-between h-full"
    >
      {/* 1. Inner Image Container with Ultra-Rounded Squircle Corners */}
      <div className="relative h-64 w-full overflow-hidden rounded-[2.2rem] bg-slate-100 shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 gap-2">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[color:var(--ink)] shadow-sm">
            {item.categoryLabel}
          </span>
          {item.popular && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--accent-strong)] text-white px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider shadow-md border border-white/20">
              <Sparkles className="h-3 w-3 text-sky-200" />
              <span>Most Requested</span>
            </span>
          )}
        </div>
      </div>

      {/* 2. Card Body Content (Matching Reference Title, Subtitle, Price Tag, & Pill Actions) */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-display text-2xl font-bold text-[color:var(--ink)] tracking-tight">
            {item.name}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-[color:var(--muted)] mt-1.5 leading-relaxed">
            {item.description}
          </p>

          {/* Price & Tag Line (Matching reference layout) */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-[color:var(--ink)]">
              <Tag className="h-4 w-4 text-[color:var(--accent-strong)]" />
              <span>starting <strong className="text-xl font-extrabold text-[color:var(--ink)]">{item.startingPrice}</strong></span>
            </div>
            {item.period ? (
              <span className="text-[11px] font-semibold text-[color:var(--muted)]">/ {item.period}</span>
            ) : (
              <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-150 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Guaranteed
              </span>
            )}
          </div>

          {/* Highlights List */}
          <div className="mt-4 space-y-2">
            {item.inclusions.map((inc, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[color:var(--ink)]/90">
                <CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--accent-strong)] shrink-0" />
                <span className="leading-snug">{inc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Bottom Action Bar (Matching Reference Pill CTA + Circle Drawer Button) */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2.5">
          <ActionLink
            href={quickWhatsAppMessages.general}
            external
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full py-3.5 px-4 text-xs sm:text-sm font-bold bg-[color:var(--ink)] hover:bg-[color:var(--accent-strong)] text-white shadow-md hover:shadow-xl transition-all duration-300 group/btn"
          >
            <MessageCircle className="h-4 w-4 text-[#25d366]" />
            <span>Inquire via WhatsApp</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
          </ActionLink>

          <button
            type="button"
            onClick={onOpenBreakdown}
            title="View Package Breakdown"
            className="h-11 w-11 rounded-full border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-150 hover:text-[color:var(--ink)] flex items-center justify-center shrink-0 transition-all cursor-pointer shadow-sm"
          >
            <FileText className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function FeeBreakdownModal({
  item,
  onClose,
}: {
  item: PricingItem;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl max-h-[85vh] sm:max-h-[88vh] rounded-3xl bg-white shadow-2xl border border-slate-200/80 flex flex-col my-auto overflow-hidden"
      >
        {/* Sticky Header with Title, Badges, & Close Button */}
        <div className="p-5 sm:p-7 pb-4 border-b border-slate-100 flex items-start justify-between gap-4 shrink-0 bg-white/95 backdrop-blur-md">
          <div className="space-y-1.5 min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-sky-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[color:var(--accent-strong)] border border-sky-100/80">
                {item.categoryLabel}
              </span>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50/80 px-2.5 py-0.5 rounded-full border border-emerald-100">
                <ShieldCheck className="h-3.5 w-3.5" /> Guaranteed Price
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-[color:var(--ink)] leading-tight tracking-tight">
              {item.name}
            </h3>
            <p className="text-xs sm:text-sm text-[color:var(--muted)] font-medium leading-relaxed">
              {item.description}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="h-9 w-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer shrink-0 mt-0.5"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-5 flex-1">
          {/* Price & Installment Highlight */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-sky-50/30 border border-slate-200/80 flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--muted)] block">
                Investment Rate
              </span>
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-[color:var(--ink)]">
                {item.startingPrice}
              </span>
            </div>
            <span className="text-xs font-bold text-[color:var(--accent-strong)] bg-white px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-sm shrink-0">
              0% Interest Available
            </span>
          </div>

          {/* Step-by-Step Clinical Journey Breakdown */}
          <div className="space-y-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[color:var(--ink)]/70 block">
              Step-by-Step Clinical Process Included:
            </span>

            <div className="space-y-2.5">
              {item.inclusions.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-150/80 hover:bg-slate-50 transition-colors"
                >
                  <div className="h-6 w-6 rounded-full bg-[color:var(--accent-strong)] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    {index + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-bold text-[color:var(--ink)]">{step}</p>
                    <p className="text-[11px] text-[color:var(--muted)] font-medium mt-0.5 leading-normal">
                      Performed using 3D digital technology under sterile, pain-free protocol.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Footer with Action Buttons */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/90 backdrop-blur-md flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors cursor-pointer text-center"
          >
            Close Breakdown
          </button>
          <ActionLink
            href={`https://wa.me/94777513451?text=${encodeURIComponent(
              `Hi Smile Hub! I viewed the itemized breakdown for "${item.name}" (${item.startingPrice}). I would like to book a consultation.`
            )}`}
            external
            className="flex-1 py-3 px-5 rounded-2xl bg-[color:var(--accent-strong)] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-[color:var(--ink)] transition-all shadow-md cursor-pointer"
          >
            <MessageCircle className="h-4 w-4 text-[#25d366]" />
            <span>Book via WhatsApp</span>
          </ActionLink>
        </div>
      </motion.div>
    </motion.div>
  );
}
