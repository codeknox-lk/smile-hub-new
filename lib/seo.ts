import type { Metadata } from "next";

const siteUrl = "https://smilehub.lk";
const defaultTitle = "Smile Hub Premium Dental Care";
const defaultDescription =
  "Premium dental care in Kandy with a warm, modern clinic experience, expert treatment planning, and fast WhatsApp-first booking.";

export function createMetadata({
  title,
  description = defaultDescription,
  path = "/"
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title === defaultTitle ? title : `${title} | ${defaultTitle}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: fullTitle,
      description,
      url: new URL(path, siteUrl).toString(),
      siteName: defaultTitle,
      locale: "en_LK",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description
    }
  };
}

export const siteMeta = {
  siteUrl,
  defaultTitle,
  defaultDescription
};

