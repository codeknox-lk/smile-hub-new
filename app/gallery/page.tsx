import { GalleryHero } from "@/components/gallery-hero";
import { GalleryHorizontalScroll } from "@/components/gallery-horizontal-scroll";
import { GalleryCta } from "@/components/gallery-cta";
import { galleryItems, quickWhatsAppMessages } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gallery",
  description:
    "Preview the Smile Hub clinic atmosphere, patient journey touchpoints, and the premium visual system built for real clinic photography.",
  path: "/gallery"
});

export default function GalleryPage() {
  return (
    <>
      <GalleryHero
        eyebrow="Gallery"
        title={
          <>
            Our <span className="font-serif italic font-light text-[color:var(--accent-strong)]">Space.</span>
          </>
        }
        body="A modern, calming environment designed around your comfort and clinical excellence."
        primaryHref={quickWhatsAppMessages.general}
        primaryLabel="Ask about the clinic"
        secondaryHref="/contact"
        secondaryLabel="View contact info"
        images={[
          { src: "/images/clinic-1.png", alt: "Modern Clinic Interior" },
          { src: "/images/patient-1.png", alt: "Happy Patient" },
          { src: "/images/doctor-1.png", alt: "Smile Hub Doctor" },
          { src: "/images/treatments/cosmetic.png", alt: "Cosmetic Dentistry" },
          { src: "/images/why/comfort-care.png", alt: "Comfort Care" },
          { src: "/images/hero-premium-bg.png", alt: "Premium Dental Care" },
          { src: "/images/treatments/preventive.png", alt: "Preventive Care" },
          { src: "/images/why/clinical-standard.png", alt: "Clinical Standard" }
        ]}
      />

      <GalleryHorizontalScroll items={galleryItems} />

      <GalleryCta />
    </>
  );
}
