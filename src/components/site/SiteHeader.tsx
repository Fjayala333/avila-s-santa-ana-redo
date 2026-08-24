import { MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site-data";

const nav = [
  { label: "Home", href: "#top" },
  { label: "Our Story", href: "#our-story" },
  { label: "Menus", href: "#menus" },
  { label: "Party Trays", href: "#party-trays" },
  { label: "Private Fiesta", href: "#private-fiesta" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header id="top">
      <div className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-2 text-xs tracking-wide sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            <a href={site.phoneHref} className="inline-flex items-center gap-1.5 hover:text-accent">
              <Phone className="size-3.5" aria-hidden="true" />
              {site.phone}
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent"
            >
              <MapPin className="size-3.5" aria-hidden="true" />
              {site.address}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="rounded-sm border border-ink-foreground/40 px-3 py-1 font-semibold uppercase tracking-widest transition-colors hover:bg-ink-foreground hover:text-ink"
            >
              Order Online
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-primary px-3 py-1 font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              Directions
            </a>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-50 border-b border-ink-foreground/15 bg-ink/95 text-ink-foreground backdrop-blur supports-[backdrop-filter]:bg-ink/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-4 lg:flex-row lg:justify-between">
          <a href="#top" className="shrink-0">
            <img
              src={site.logo}
              alt="Avila's El Ranchito Santa Ana"
              className="h-16 w-auto transition-transform duration-500 hover:scale-105"
            />
          </a>
          <nav aria-label="Main">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans text-sm font-semibold uppercase tracking-widest text-ink-foreground/85">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative inline-block transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-accent hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
