import { useEffect, useState } from "react";
import { ChevronDown, MapPin, Phone } from "lucide-react";
import logoAsset from "../../assets/avilas-logo-transparent.png.asset.json";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ScrollProgress } from "./ScrollProgress";
import { site, orderingPlatforms } from "../../lib/site-data";
import { cn } from "../../lib/utils";

const nav = [
  { label: "Home", href: "#top" },
  { label: "Our Story", href: "#our-story" },
  { label: "Menus", href: "#menus" },
  { label: "Party Trays", href: "#party-trays" },
  { label: "FIESTAS & CELEBRATIONS", href: "#private-fiesta" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="top" className="sticky top-0 z-50">
      <ScrollProgress />
      <div
        className={cn(
          "overflow-hidden bg-ink text-ink-foreground transition-[max-height,opacity] duration-500 ease-in-out",
          scrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100",
        )}
      >
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
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1.5 rounded-sm border border-ink-foreground/40 px-3 py-1 font-semibold uppercase tracking-widest transition-colors hover:bg-ink-foreground hover:text-ink focus-visible:outline-none">
                Order Online
                <ChevronDown className="size-3.5" aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {orderingPlatforms.map((platform) => (
                  <DropdownMenuItem key={platform.href} asChild>
                    <a href={platform.href} target="_blank" rel="noreferrer">
                      {platform.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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

      <div
        className={cn(
          "border-b border-ink-foreground/15 bg-ink/95 text-ink-foreground backdrop-blur transition-shadow duration-500 supports-[backdrop-filter]:bg-ink/80",
          scrolled && "shadow-[0_8px_30px_-12px_oklch(0_0_0/50%)]",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 lg:flex-row lg:justify-between",
            "transition-[padding] duration-500 ease-in-out",
            scrolled ? "py-2" : "py-4",
          )}
        >
          <a href="#top" className="group shrink-0">
            <img
              src={logoAsset.url}
              alt="Avila's El Ranchito"
              className={cn(
                "w-auto transition-all duration-500 ease-in-out group-hover:scale-105",
                scrolled ? "h-11" : "h-16 md:h-20",
              )}
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
