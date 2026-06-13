import { ActionLink } from "@/components/action-link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="section-kicker">Page not found</p>
      <h1 className="font-display text-5xl text-[color:var(--ink)]">
        That page has been moved into the new Smile Hub structure.
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
        The WordPress URLs are being replaced with a cleaner, faster navigation system. Use the links below to continue.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <ActionLink href="/" className="button-primary">
          Go home
        </ActionLink>
        <ActionLink href="/book" className="button-secondary">
          Book a consultation
        </ActionLink>
      </div>
    </section>
  );
}

