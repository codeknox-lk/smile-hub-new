import { Clock3, MapPinned, Navigation } from "lucide-react";
import { siteSettings } from "@/data/site";
import { ActionLink } from "./action-link";

export function MapCard() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="surface-card overflow-hidden p-0">
        <iframe
          title="Smile Hub map"
          src="https://www.google.com/maps?q=Smile%20Hub%20Premium%20Dental%20Care%2C%20Kandy&z=16&output=embed"
          className="h-[320px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="surface-card">
        <div className="grid gap-6">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--sand-strong)] text-[color:var(--ink)]">
              <MapPinned className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--muted)]">Address</p>
              <p className="mt-2 text-base leading-7 text-[color:var(--ink)]">
                {siteSettings.addressLines.join(", ")}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--sand-strong)] text-[color:var(--ink)]">
              <Clock3 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--muted)]">Hours</p>
              <div className="mt-2 space-y-2">
                {siteSettings.serviceHours.map((item) => (
                  <p key={item.label} className="text-base text-[color:var(--ink)]">
                    <span className="font-medium">{item.label}:</span> {item.value}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <ActionLink
            href={siteSettings.googleMapsUrl}
            external
            eventName="map_directions_click"
            className="button-primary justify-center w-full"
          >
            <Navigation className="h-4 w-4" />
            Get directions
          </ActionLink>
        </div>
      </div>
    </div>
  );
}

