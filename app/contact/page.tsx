import { Mail, MapPinned, MessageCircleMore, Phone } from "lucide-react";
import { ActionLink } from "@/components/action-link";
import { MapCard } from "@/components/map-card";
import { ContactHero } from "@/components/contact-hero";
import { SectionShell } from "@/components/section-shell";
import { FaqAccordion } from "@/components/faq-accordion";
import { quickWhatsAppMessages, siteSettings } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import { formatPhoneForTel } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Contact Smile Hub",
  description:
    "Find Smile Hub on Peradeniya Road, Kandy and contact the clinic by WhatsApp, phone, or email.",
  path: "/contact"
});

const contactFaqs = [
  {
    question: "Is there parking available near the clinic?",
    answer: "Yes, there is limited street parking available on Peradeniya Road. Because traffic in Kandy can be busy during peak hours, we recommend arriving 10-15 minutes early to secure a spot.",
  },
  {
    question: "Do you accept insurance?",
    answer: "We work with several major insurance providers. Please contact us via WhatsApp with your insurance details prior to your appointment so we can confirm your coverage.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring a valid ID, any relevant medical history or previous dental X-rays, and your insurance card if applicable. Arriving a few minutes early to fill out any necessary forms is also appreciated.",
  },
  {
    question: "Do you take emergency walk-ins?",
    answer: "We always try to accommodate dental emergencies during our normal business hours. If you are in severe pain, please call or WhatsApp us immediately so we can prepare for your arrival.",
  }
];

export default function ContactPage() {
  return (
    <>
      <ContactHero
        eyebrow="Get in Touch"
        title={
          <>
            We're here to help you smile with <span className="font-serif italic font-light text-[color:var(--accent-strong)]">confidence.</span>
          </>
        }
        body="Whether you have a question about a specific treatment, need help finding our clinic, or want to schedule your next visit, our friendly team is just a message or a call away."
        primaryHref={quickWhatsAppMessages.general}
        primaryLabel="Message on WhatsApp"
        secondaryHref={siteSettings.googleMapsUrl}
        secondaryLabel="Get directions"
        image="/images/clinic-1.png"
        imageAlt="Smile Hub Clinic Reception"
      />

      <SectionShell
        eyebrow="Reach the clinic"
        title={
          <>
            Find us in Kandy or reach out <span className="font-serif italic font-light text-[color:var(--accent-strong)]">instantly.</span>
          </>
        }
        body="Conveniently located on Peradeniya Road. Drop by for a consultation, or reach out to our friendly team via WhatsApp, phone, or email to schedule your visit."
      >
        <MapCard />

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          {/* WhatsApp Card - Highly Emphasized */}
          <ActionLink
            href={quickWhatsAppMessages.general}
            external
            eventName="contact_whatsapp_click"
            className="surface-card flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/10 hover:border-green-200 transition-all duration-300"
          >
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[#25D366]/10 text-[#25D366] group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
              <MessageCircleMore className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#25D366]">WhatsApp</p>
              <p className="mt-1 text-sm sm:text-base font-bold text-[color:var(--ink)] truncate">{siteSettings.phonePrimary}</p>
            </div>
          </ActionLink>

          <a href={`tel:${formatPhoneForTel(siteSettings.phoneSecondary)}`} className="surface-card flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition-all duration-300">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[color:var(--sand-strong)] text-[color:var(--accent-strong)] group-hover:scale-110 group-hover:bg-[color:var(--accent-strong)] group-hover:text-white transition-all duration-300">
              <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div className="min-w-0">
              <p className="section-kicker">Call</p>
              <p className="mt-1 text-sm sm:text-base font-bold text-[color:var(--ink)] truncate">{siteSettings.phoneSecondary}</p>
            </div>
          </a>

          <a href={`mailto:${siteSettings.emailPrimary}`} className="surface-card flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition-all duration-300">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[color:var(--sand-strong)] text-[color:var(--accent-strong)] group-hover:scale-110 group-hover:bg-[color:var(--accent-strong)] group-hover:text-white transition-all duration-300">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div className="min-w-0">
              <p className="section-kicker">Email</p>
              <p className="mt-1 text-sm sm:text-base font-bold text-[color:var(--ink)] truncate">{siteSettings.emailPrimary}</p>
            </div>
          </a>

          <ActionLink href={siteSettings.googleMapsUrl} external className="surface-card flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition-all duration-300">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[color:var(--sand-strong)] text-[color:var(--accent-strong)] group-hover:scale-110 group-hover:bg-[color:var(--accent-strong)] group-hover:text-white transition-all duration-300">
              <MapPinned className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div className="min-w-0">
              <p className="section-kicker">Location</p>
              <p className="mt-1 text-sm sm:text-base font-bold text-[color:var(--ink)]">Open map and directions</p>
            </div>
          </ActionLink>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Common Questions"
        title={
          <>
            Frequently Asked <span className="font-serif italic font-light text-[color:var(--accent-strong)]">Questions</span>
          </>
        }
        body="Find quick answers to common questions about parking, insurance, and appointments before you visit."
      >
        <div className="mx-auto max-w-3xl mt-8">
          <FaqAccordion items={contactFaqs} />
        </div>
      </SectionShell>
    </>
  );
}
