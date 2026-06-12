import type { MetadataRoute } from "next";
import { treatments } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/book",
    "/contact",
    "/faq",
    "/gallery",
    "/treatments"
  ];

  return [
    ...routes.map((route) => ({
      url: `https://smilehub.lk${route}`,
      lastModified: new Date()
    })),
    ...treatments.map((treatment) => ({
      url: `https://smilehub.lk/treatments/${treatment.slug}`,
      lastModified: new Date()
    }))
  ];
}

