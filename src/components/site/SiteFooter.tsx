import { site, hours } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a
            href="#top"
            className="group relative inline-flex items-center justify-center rounded-sm p-3 ring-1 ring-inset ring-primary/25 transition-all duration-500 hover:ring-primary/60"
          >
            <span
              aria-hidden
              className="absolute inset-0 rounded-sm bg-primary/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
            />
            <img
              src={site.logo}
              alt="Avila's El Ranchito"
              className="relative h-24 w-auto brightness-110 drop-shadow-[0_6px_18px_oklch(0_0_0/45%)] transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/70">
            Family owned, family operated and family loved since 1966.
          </p>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
        </div>

        <div>
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">Contact</h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-ink-foreground/80">
            <p>{site.address}</p>
            <p>
              <a href={site.phoneHref} className="hover:text-accent">
                {site.phone}
              </a>
            </p>
            <p>
              <a href="mailto:avilascatering@gmail.com" className="hover:text-accent">
                avilascatering@gmail.com
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">Opening hours</h2>
          <ul className="mt-4 space-y-1.5 text-sm text-ink-foreground/80">
            {hours.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Subscribe to our newsletter
          </h2>
          <form
            className="mt-4 flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email"
              className="rounded-sm border border-ink-foreground/25 bg-transparent px-3 py-2 text-sm placeholder:text-ink-foreground/50 focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="cta rounded-sm bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-ink-foreground/15">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-ink-foreground/60">
          © 2026 Avila's El Ranchito Santa Ana • All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
