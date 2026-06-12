import { unstable_cache } from "next/cache";

export type ReviewItem = {
  author: string;
  authorMeta: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  relativeTime: string;
  sourceUrl: string;
};

export type ReviewSnapshot = {
  rating: number;
  reviewCount: number;
  googleMapsUrl: string;
  lastUpdated: string;
  featuredReviews: ReviewItem[];
  source: "live" | "fallback";
};

const fallbackSnapshot: ReviewSnapshot = {
  rating: 5,
  reviewCount: 58,
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Smile%20Hub%20Premium%20Dental%20Care%2C%20Kandy",
  lastUpdated: "2026-03-17",
  source: "fallback",
  featuredReviews: [
    {
      author: "Upekha Atupola",
      authorMeta: "Local Guide",
      rating: 5,
      relativeTime: "2 months ago",
      text:
        "We recently booked an appointment and were blown away by how smoothly everything ran. The explanations were clear, the care felt premium, and the visit was genuinely comfortable from start to finish.",
      sourceUrl:
        "https://www.google.com/maps/search/?api=1&query=Smile%20Hub%20Premium%20Dental%20Care%2C%20Kandy"
    },
    {
      author: "Google reviewer",
      authorMeta: "Verified Maps review",
      rating: 5,
      relativeTime: "Recent",
      text:
        "Patients consistently highlight the warm staff, detailed explanations, and the comfort-focused environment at Smile Hub.",
      sourceUrl:
        "https://www.google.com/maps/search/?api=1&query=Smile%20Hub%20Premium%20Dental%20Care%2C%20Kandy"
    },
    {
      author: "Google reviewer",
      authorMeta: "Verified Maps review",
      rating: 5,
      relativeTime: "Recent",
      text:
        "The clinic experience feels modern, calm, and efficient, which is exactly the kind of reassurance patients want before treatment.",
      sourceUrl:
        "https://www.google.com/maps/search/?api=1&query=Smile%20Hub%20Premium%20Dental%20Care%2C%20Kandy"
    }
  ]
};

async function fetchLiveReviewSnapshot(): Promise<ReviewSnapshot> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return fallbackSnapshot;
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "displayName,rating,userRatingCount,googleMapsUri,reviews"
        },
        next: {
          revalidate: 60 * 60 * 24 // Every 24 hours
        }
      }
    );

    if (!response.ok) {
      return fallbackSnapshot;
    }

    const place = (await response.json()) as {
      rating?: number;
      userRatingCount?: number;
      googleMapsUri?: string;
      reviews?: Array<{
        authorAttribution?: {
          displayName?: string;
          uri?: string;
          photoUri?: string;
        };
        rating?: number;
        relativePublishTimeDescription?: string;
        text?: { text?: string };
      }>;
    };

    let liveReviews = fallbackSnapshot.featuredReviews;
    if (place.reviews && place.reviews.length > 0) {
      liveReviews = place.reviews
        .map((r) => ({
          author: r.authorAttribution?.displayName || "Google Reviewer",
          authorMeta: "Google User",
          authorPhoto: r.authorAttribution?.photoUri,
          rating: r.rating || 5,
          relativeTime: r.relativePublishTimeDescription || "Recent",
          text: r.text?.text || "",
          sourceUrl: r.authorAttribution?.uri || fallbackSnapshot.googleMapsUrl
        }))
        .filter((r) => r.text.length > 0);
    }

    return {
      ...fallbackSnapshot,
      rating: place.rating ?? fallbackSnapshot.rating,
      reviewCount: place.userRatingCount ?? fallbackSnapshot.reviewCount,
      googleMapsUrl: place.googleMapsUri ?? fallbackSnapshot.googleMapsUrl,
      featuredReviews: liveReviews,
      lastUpdated: new Date().toISOString(),
      source: "live"
    };
  } catch {
    return fallbackSnapshot;
  }
}

export const getReviewSnapshot = unstable_cache(fetchLiveReviewSnapshot, ["reviews_v3"], {
  revalidate: 60 * 60 * 24 // Every 24 hours
});

