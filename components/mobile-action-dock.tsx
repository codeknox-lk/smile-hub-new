"use client";

import { CalendarDays, MapPinned, MessageCircleMore, Phone } from "lucide-react";
import { quickWhatsAppMessages, siteSettings } from "@/data/site";
import { formatPhoneForTel } from "@/lib/utils";
import { ActionLink } from "./action-link";

export function MobileActionDock() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
      <div className="grid grid-cols-4 overflow-hidden rounded-[1.8rem] border border-white/20 bg-white/10 shadow-[0_22px_70px_rgba(0,0,0,0.15)] backdrop-blur-md">
        <ActionLink
          href={quickWhatsAppMessages.general}
          external
          eventName="dock_whatsapp_click"
          className="dock-link !text-white"
        >
          <MessageCircleMore className="h-5 w-5" />
          <span>WhatsApp</span>
        </ActionLink>
        <a href={`tel:${formatPhoneForTel(siteSettings.phonePrimary)}`} className="dock-link !text-white">
          <Phone className="h-5 w-5" />
          <span>Call</span>
        </a>
        <ActionLink href={siteSettings.bookingUrl} eventName="dock_book_click" className="dock-link !text-white">
          <CalendarDays className="h-5 w-5" />
          <span>Book</span>
        </ActionLink>
        <ActionLink
          href={siteSettings.googleMapsUrl}
          external
          eventName="dock_map_click"
          className="dock-link !text-white"
        >
          <MapPinned className="h-5 w-5" />
          <span>Map</span>
        </ActionLink>
      </div>
    </div>
  );
}

