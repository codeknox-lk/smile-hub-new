"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  theme?: "light" | "dark";
};

export function FaqAccordion({ items, theme = "light" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`group rounded-[1.6rem] border overflow-hidden transition-colors ${
              theme === "dark" 
                ? "border-white/10 bg-white/5 hover:bg-white/10" 
                : "border-[color:var(--line)] bg-white/80 shadow-[0_16px_35px_rgba(23,94,146,0.06)]"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`flex w-full items-center justify-between gap-4 text-left text-lg font-bold cursor-pointer px-5 py-4 ${
                theme === "dark" ? "text-white" : "text-[color:var(--ink)]"
              }`}
            >
              <span>{item.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className={`text-2xl flex-shrink-0 ${
                  theme === "dark" ? "text-white/60" : "text-[color:var(--muted)]"
                }`}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className={`px-5 pb-5 leading-relaxed ${
                    theme === "dark" ? "text-white/70" : "text-[color:var(--muted)]"
                  }`}>
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
