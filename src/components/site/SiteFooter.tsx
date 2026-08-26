import { site, hours } from "../../lib/site-data";
import logoAsset from "../../assets/avilas-logo-transparent.png.asset.json";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a
            href="#top"
            className="group relative inline-flex flex-col items-center justify-center rounded-sm px-5 py-4 text-center ring-1 ring-inset ring-primary/25 transition-all duration-500 hover:ring-primary/60"
          >
            <span
              aria-hidden
              className="absolute inset-0 rounded-sm bg-primary/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
            />
            <img
              src={logoAsset.url}
              alt="Avila's El Ranchito"
              className="relative h-14 w-auto transition-transform duration-700 ease-out group-hover:scale-105 md:h-16"
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
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open directions to Avila's El Ranchito in Google Maps"
            className="mt-4 block overflow-hidden rounded-sm ring-1 ring-ink-foreground/15 transition-opacity hover:opacity-90"
          >
            <iframe
              src={site.mapsEmbedUrl}
              title="Map showing Avila's El Ranchito location"
              loading="lazy"
              className="h-40 w-full grayscale"
              style={{ border: 0, pointerEvents: "none" }}
              aria-hidden="true"
              tabIndex={-1}
            />
          </a>
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
