import { ArrowUpRight, Clock3, MessageCircleMore, Phone } from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { ActionLink } from "@/components/action-link";
import { BookHero } from "@/components/book-hero";
import { SectionShell } from "@/components/section-shell";
import { quickWhatsAppMessages, siteSettings } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import { formatPhoneForTel } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Book an Appointment",
  description:
    "Book a consultation with Smile Hub through WhatsApp, call, or the appointment request form.",
  path: "/book"
});

const quickActions = [
  { label: "General consultation", href: quickWhatsAppMessages.general },
  { label: "Pain relief / urgent help", href: quickWhatsAppMessages.pain },
  { label: "Braces or orthodontics", href: quickWhatsAppMessages.braces },
  { label: "Cosmetic dentistry", href: quickWhatsAppMessages.cosmetic }
];

export default function BookPage() {
  return (
    <>
      <BookHero
        primaryHref={quickWhatsAppMessages.general}
        secondaryHref="#booking-form"
        quickActions={quickActions}
      />

      <SectionShell
        id="booking-form"
        eyebrow="Detailed Request"
        title={
          <>
            Prefer to submit a detailed <span className="font-serif italic font-light text-[color:var(--accent-strong)]">request?</span>
          </>
        }
        body="Fill out the form below with your preferred dates, and our reception team will contact you to confirm your booking."
        className="bg-white/46"
      >
        <BookingForm />
      </SectionShell>
    </>
  );
}
