"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Quote, Clock, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { CLINICAL_TEAM, TeamMember } from "@/data/team";
import { cn } from "@/lib/utils";

const TIME_SLOTS: Record<string, string[]> = {
  "lead-dentist": ["10:30 AM", "2:00 PM", "4:30 PM"],
  "orthodontic-specialist": ["11:00 AM", "3:15 PM", "5:00 PM"],
  "pediatric-hygiene-lead": ["09:30 AM", "1:30 PM", "4:00 PM"],
};

const SPECIALTIES: Record<string, string[]> = {
  "lead-dentist": ["Implant Surgery", "Smile Makeovers"],
  "orthodontic-specialist": ["Clear Aligners", "Braces"],
  "pediatric-hygiene-lead": ["Preventive Care", "Kids Dental"],
};

export function TeamGrid() {
  const [team, setTeam] = useState<TeamMember[]>(CLINICAL_TEAM);

  useEffect(() => {
    // Check local cache if present (for instant admin preview)
    try {
      const saved = localStorage.getItem("smilehub_team_data");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTeam(parsed);
        }
      }
    } catch (e) {}
  }, []);

  return (
    <>
      <style>{`
        .flip-card {
          perspective: 1000px;
          width: 100%;
          height: 450px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          border-radius: 28px;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 28px;
          overflow: hidden;
        }

        /* Front Face Style */
        .flip-card-front {
          z-index: 2;
          transform: rotateY(0deg);
          background-color: #0b3551;
          color: white;
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: rgba(15, 42, 74, 0.1) 0px 20px 40px -15px;
        }

        .flip-card-front img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.5s ease;
        }

        .flip-card:hover .flip-card-front img {
          transform: scale(1.05);
        }

        /* Back Face Style - Luxury Dark Gradient */
        .flip-card-back {
          transform: rotateY(180deg);
          background: linear-gradient(150deg, #0b3551 0%, #061c2d 100%);
          color: white;
          border: 1.5px solid rgba(56, 189, 248, 0.3);
          box-shadow: rgba(15, 42, 74, 0.3) 0px 30px 60px -15px;
          padding: 1.35rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto items-stretch">
        {team.map((member, index) => (
          <DoctorCard key={member.id} member={member} index={index} />
        ))}
      </div>
    </>
  );
}

function DoctorCard({ member, index }: { member: TeamMember; index: number }) {
  const slots = TIME_SLOTS[member.id] || ["10:00 AM", "2:30 PM", "4:30 PM"];
  const specialties = SPECIALTIES[member.id] || ["General Care", "Consultations"];
  const [selectedSlot, setSelectedSlot] = useState<string>(slots[0]);

  const waBookingUrl = `https://wa.me/94777513451?text=${encodeURIComponent(
    `Hi Smile Hub Dental Care! I would like to book a consultation with ${member.name} (${member.role}) for ${selectedSlot} today.`
  )}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className="flip-card group"
    >
      <div className="flip-card-inner">
        {/* ================= FRONT SIDE (Unflipped Resting View) ================= */}
        <div className="flip-card-front">
          {/* Full Doctor Portrait Image */}
          <img src={member.image} alt={member.name} />

          {/* Top Floating Role Badge */}
          <div className="absolute top-4 left-4 pointer-events-none z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-sky-200 border border-white/20 backdrop-blur-md shadow-md">
              <Sparkles className="h-3 w-3 text-sky-300" />
              <span>{member.role}</span>
            </span>
          </div>

          {/* Bottom Dark Navy Overlay Panel */}
          <div className="absolute bottom-3 left-3 right-3 p-4 rounded-2xl bg-[#0b3551]/90 backdrop-blur-md border border-white/15 text-white flex items-center justify-between gap-3 shadow-xl">
            <div className="min-w-0 flex-1">
              <h3 className="font-display font-bold text-base sm:text-lg leading-tight">
                {member.name}
              </h3>
              <p className="text-[11px] font-medium text-sky-200 truncate mt-0.5">
                {member.title}
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-bold text-sky-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/15 shrink-0">
              <Sparkles className="h-3 w-3 text-sky-300" />
              <span>Hover for Info</span>
            </div>
          </div>
        </div>

        {/* ================= BACK SIDE (Flipped View on Hover) ================= */}
        <div className="flip-card-back">
          {/* Top Header Block: Avatar + Name + Title */}
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-sky-400 shrink-0 shadow-md ring-2 ring-sky-400/20">
              <img src={member.image} alt={member.name} className="h-full w-full object-cover object-top" />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="font-display font-bold text-base text-white leading-tight">
                {member.name}
              </h3>
              <p className="text-[11px] font-semibold text-sky-300 truncate mt-0.5">
                {member.role}
              </p>
            </div>
          </div>

          {/* Middle Body Content - Modern Spacing & Hierarchy */}
          <div className="flex-1 flex flex-col justify-between my-2 space-y-3">
            {/* Bio Summary */}
            <p className="text-xs leading-relaxed text-slate-200/95 font-medium tracking-wide">
              {member.bio}
            </p>

            {/* Specialty Pill Tags */}
            <div className="flex flex-wrap gap-1.5">
              {specialties.map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-sky-500/15 border border-sky-400/25 text-[10px] font-semibold text-sky-200"
                >
                  <CheckCircle2 className="h-2.5 w-2.5 text-sky-300" />
                  <span>{spec}</span>
                </span>
              ))}
            </div>

            {/* Glass Accent Philosophy Quote */}
            <div className="border-l-2 border-sky-400 bg-white/5 pl-3 py-2 text-[11px] italic text-sky-100/90 leading-snug rounded-r-xl">
              "{member.philosophy}"
            </div>

            {/* Modern Time Slot Selector */}
            <div className="space-y-1.5 pt-0.5">
              <div className="flex items-center justify-between text-[10px] font-bold text-sky-300/90 uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-sky-300" /> Select Appointment Slot:
                </span>
              </div>

              <div className="grid grid-cols-3 gap-1.5">
                {slots.map((slot) => {
                  const isSelected = selectedSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSlot(slot);
                      }}
                      className={cn(
                        "py-1.5 px-2 rounded-lg text-[10px] font-bold transition-all border text-center cursor-pointer",
                        isSelected
                          ? "bg-[color:var(--accent-strong)] text-white border-sky-300 shadow-md scale-[1.02]"
                          : "bg-white/5 text-white/80 border-white/10 hover:bg-white/15"
                      )}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Action Button */}
          <div className="pt-2.5 border-t border-white/10">
            <a
              href={waBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs font-bold transition-all shadow-md bg-[color:var(--accent-strong)] hover:bg-white hover:text-[#0b3551] text-white group/btn"
            >
              <MessageCircle className="h-4 w-4 text-[#25d366]" />
              <span>Book {selectedSlot} via WhatsApp</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}


