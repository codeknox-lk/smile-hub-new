"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  eventName?: string;
  eventPayload?: Record<string, unknown>;
  external?: boolean;
};

export function ActionLink({
  href,
  children,
  className,
  eventName,
  eventPayload,
  external
}: ActionLinkProps) {
  const isProtocolLink =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:");

  const handleClick = () => {
    if (eventName) {
      trackEvent(eventName, { href, ...eventPayload });
    }
  };

  if (external || isProtocolLink) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        onClick={handleClick}
        className={cn(className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={cn(className)}>
      {children}
    </Link>
  );
}
