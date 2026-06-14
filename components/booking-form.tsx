"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { ArrowRight } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  treatment: string;
  message: string;
  email: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  treatment: "",
  message: "",
  email: "",
  website: ""
};

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const response = await fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const payload = (await response.json()) as { message: string };

    if (!response.ok) {
      setStatus("error");
      setFeedback(payload.message);
      return;
    }

    trackEvent("book_form_submit", {
      treatment: form.treatment || "general"
    });
    setStatus("success");
    setFeedback(payload.message);
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-white p-6 sm:p-12 shadow-[0_20px_60px_rgba(23,94,146,0.06)] border border-[color:var(--line)] space-y-6 sm:space-y-8">
      
      {/* Decorative top border line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[color:var(--accent-strong)] to-transparent opacity-20" />

      <div className="grid gap-8 md:grid-cols-2">
        <label className="grid gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-strong)] ml-1">Full Name</span>
          <input
            required
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className="w-full rounded-2xl bg-[color:var(--background)] px-5 py-4 text-[color:var(--ink)] placeholder:text-[color:var(--muted)]/50 ring-1 ring-transparent border border-[color:var(--line)]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-strong)]/20 focus:border-[color:var(--accent-strong)]/50 hover:border-[color:var(--line)]"
            placeholder="e.g. Jane Doe"
          />
        </label>
        <label className="grid gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-strong)] ml-1">Mobile Number</span>
          <input
            required
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            className="w-full rounded-2xl bg-[color:var(--background)] px-5 py-4 text-[color:var(--ink)] placeholder:text-[color:var(--muted)]/50 ring-1 ring-transparent border border-[color:var(--line)]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-strong)]/20 focus:border-[color:var(--accent-strong)]/50 hover:border-[color:var(--line)]"
            placeholder="+94 77 000 0000"
          />
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="grid gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-strong)] ml-1">Email (Optional)</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="w-full rounded-2xl bg-[color:var(--background)] px-5 py-4 text-[color:var(--ink)] placeholder:text-[color:var(--muted)]/50 ring-1 ring-transparent border border-[color:var(--line)]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-strong)]/20 focus:border-[color:var(--accent-strong)]/50 hover:border-[color:var(--line)]"
            placeholder="jane@example.com"
          />
        </label>
        <label className="grid gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-strong)] ml-1">Treatment of Interest</span>
          <input
            value={form.treatment}
            onChange={(event) => setForm((current) => ({ ...current, treatment: event.target.value }))}
            className="w-full rounded-2xl bg-[color:var(--background)] px-5 py-4 text-[color:var(--ink)] placeholder:text-[color:var(--muted)]/50 ring-1 ring-transparent border border-[color:var(--line)]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-strong)]/20 focus:border-[color:var(--accent-strong)]/50 hover:border-[color:var(--line)]"
            placeholder="e.g. Preventive, Cosmetic, Braces..."
          />
        </label>
      </div>

      <label className="hidden">
        Website
        <input
          value={form.website}
          onChange={(event) => setForm((current) => ({ ...current, website: event.target.value }))}
        />
      </label>

      <label className="grid gap-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent-strong)] ml-1">Tell us what you need</span>
        <textarea
          rows={5}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          className="w-full rounded-2xl bg-[color:var(--background)] px-5 py-4 text-[color:var(--ink)] placeholder:text-[color:var(--muted)]/50 ring-1 ring-transparent border border-[color:var(--line)]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-strong)]/20 focus:border-[color:var(--accent-strong)]/50 hover:border-[color:var(--line)] min-h-[160px] resize-y"
          placeholder="Share your symptoms, preferred dates, or any specific questions for our team."
        />
      </label>

      <div className="pt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between border-t border-[color:var(--line)]/30 mt-8">
        <button 
          type="submit" 
          disabled={status === "loading"} 
          className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[color:var(--accent-strong)] px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-[color:var(--accent)] hover:shadow-[0_10px_30px_rgba(23,94,146,0.3)] hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {status === "loading" ? "Sending Request..." : "Send Booking Request"}
          {status !== "loading" && <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />}
        </button>
        <p className="text-[11px] font-semibold tracking-wide text-[color:var(--muted)] text-center sm:text-right max-w-[250px] uppercase">
          Our team will confirm your slot via WhatsApp or call.
        </p>
      </div>

      {feedback ? (
        <div
          className={`mt-6 rounded-2xl px-5 py-4 text-sm font-semibold flex items-center justify-center border ${
            status === "success"
              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
              : "bg-rose-50 text-rose-700 border-rose-200"
          }`}
        >
          {feedback}
        </div>
      ) : null}
    </form>
  );
}
