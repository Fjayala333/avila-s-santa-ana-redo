import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  SectionHeading,
  MenuGroups,
  FiestaChatInquiry,
} from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  site,
  diningSlides,
  banquetMenus,
  beverageOptions,
  banquetAddOns,
  banquetPolicies,
  fiestaBentoImages,
} from "@/lib/site-data";

function BentoTile({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    let timer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            timer = setTimeout(() => setVisible(true), delay);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [delay]);

  return (
    <figure
      ref={ref as React.Ref<HTMLElement>}
      className={cn("bento-reveal", visible && "bento-reveal-in", className)}
    >
      {children}
    </figure>
  );
}

const bentoPos = [
  "lg:col-start-3 lg:col-span-2 lg:row-start-1 lg:row-span-1",
  "lg:col-start-5 lg:col-span-2 lg:row-start-1 lg:row-span-2",
  "lg:col-start-3 lg:col-span-1 lg:row-start-2 lg:row-span-1",
  "lg:col-start-4 lg:col-span-1 lg:row-start-2 lg:row-span-1",
  "lg:col-start-1 lg:col-span-1 lg:row-start-3 lg:row-span-1",
  "lg:col-start-2 lg:col-span-2 lg:row-start-3 lg:row-span-2",
  "lg:col-start-4 lg:col-span-2 lg:row-start-3 lg:row-span-1",
  "lg:col-start-6 lg:col-span-1 lg:row-start-3 lg:row-span-2",
  "lg:col-start-4 lg:col-span-1 lg:row-start-4 lg:row-span-1",
  "lg:col-start-5 lg:col-span-1 lg:row-start-4 lg:row-span-1",
  "lg:col-start-1 lg:col-span-1 lg:row-start-4 lg:row-span-1",
];

const kenBurnsCells = new Set([1, 5, 7]);

function FiestaBentoHero() {
  return (
    <div className="grid grid-cols-2 auto-rows-[10rem] gap-3 lg:grid-cols-6 lg:auto-rows-[9rem]">
      <div className="animate-float relative col-span-2 flex min-h-[10rem] flex-col justify-center overflow-hidden rounded-sm bg-ink p-6 text-ink-foreground lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2 lg:min-h-0 lg:p-8">
        <div
          aria-hidden="true"
          className="animate-blob pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-primary/25 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="animate-blob pointer-events-none absolute -bottom-12 -left-8 size-36 rounded-full bg-primary/15 blur-2xl"
          style={{ animationDelay: "2.5s" }}
        />
        <p className="relative font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary">Since 1966</p>
        <h1 className="relative mt-3 font-display text-2xl leading-[1.15] sm:text-3xl">
          Weddings, Quinceañeras &amp; Every Fiesta In Between
        </h1>
      </div>
      {fiestaBentoImages.map((photo, i) => (
        <BentoTile
          key={photo.src}
          delay={i * 80}
          className={`img-zoom-host shine-host tilt-host relative overflow-hidden rounded-sm ${bentoPos[i] ?? ""}`}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className={`img-zoom h-full w-full object-cover ${kenBurnsCells.has(i) ? "animate-ken-burns" : ""}`}
          />
          {"caption" in photo && photo.caption ? (
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 font-sans text-xs font-bold uppercase tracking-widest text-ink-foreground">
              {photo.caption}
            </figcaption>
          ) : null}
        </BentoTile>
      ))}
    </div>
  );
}


function BeverageAndAddOnsAccordion() {
  return (
    <div className="mx-auto mt-10 max-w-2xl">
      <details open className="group border-b border-border">
        <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-display text-lg text-foreground">
          Beverage Options
          <span aria-hidden="true" className="font-sans text-xl text-primary transition-transform group-open:rotate-45">
            +
          </span>
        </summary>
        <div className="flex flex-col gap-4 pb-5">
          {beverageOptions.map((option) => (
            <div key={option.name}>
              <p className="text-sm font-bold text-foreground">{option.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{option.description}</p>
            </div>
          ))}
        </div>
      </details>
      <details className="group border-b border-border">
        <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-display text-lg text-foreground">
          Sweet Endings &amp; Add-Ons
          <span aria-hidden="true" className="font-sans text-xl text-primary transition-transform group-open:rotate-45">
            +
          </span>
        </summary>
        <div className="flex flex-col gap-4 pb-5">
          {banquetAddOns.map((item) => (
            <div key={item.name}>
              <p className="text-sm font-bold text-foreground">
                {item.name} — <span className="text-primary">${item.price}</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}

const title = "Banquets & Private Events | Avila's El Ranchito Santa Ana";
const description =
  "Book your wedding, quinceañera, birthday or office party at Avila's El Ranchito in Santa Ana. Limited menus, buffet packages, beverage options and banquet pricing.";

export const Route = createFileRoute("/fiestas-celebrations")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/fiestas-celebrations" },
      { property: "og:image", content: diningSlides[2]!.src },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: diningSlides[2]!.src },
    ],
    links: [{ rel: "canonical", href: "/fiestas-celebrations" }],
  }),
  component: FiestasCelebrationsPage,
});

function FiestasCelebrationsPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <section className="bg-secondary/60">
          <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
            <FiestaBentoHero />

            <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
              <Reveal className="card-motion rounded-sm border border-border bg-card p-6 text-center">
                <p className="text-lg text-primary">✦</p>
                <h3 className="mt-2 font-display text-lg text-foreground">Three Rooms</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  From the patio to the Grand Hall, seats 10 to 80.
                </p>
              </Reveal>
              <Reveal delay={100} className="card-motion rounded-sm border border-border bg-card p-6 text-center">
                <p className="text-lg text-primary">✦</p>
                <h3 className="mt-2 font-display text-lg text-foreground">Full Service</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Menus, buffets, and beverage packages for any size.
                </p>
              </Reveal>
              <Reveal delay={200} className="card-motion rounded-sm border border-border bg-card p-6 text-center">
                <p className="text-lg text-primary">✦</p>
                <h3 className="mt-2 font-display text-lg text-foreground">Since 1966</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Three generations of the Avila family, hosting yours.
                </p>
              </Reveal>
            </div>

            <div className="mx-auto mt-10 max-w-2xl text-center">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Since 1966, Avila's El Ranchito has hosted the celebrations that matter — birthdays,
                anniversaries, showers, wedding receptions, celebrations of life and office parties.
                Full menus, buffet packages and beverage options below.
              </p>
              <a
                href={site.phoneHref}
                className="cta cta-glow mt-6 inline-flex rounded-sm bg-primary px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90"
              >
                Call to Book: {site.phone}
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 lg:py-24">
          <SectionHeading kicker="Good to Know" title="Banquet Information">
            A few things to plan around before your event.
          </SectionHeading>
          <Reveal className="mx-auto mt-10 max-w-2xl rounded-sm bg-secondary p-7 sm:p-10">
            <ul className="flex flex-col gap-4">
              {banquetPolicies.map((policy) => (
                <li key={policy} className="flex gap-3 text-sm leading-relaxed text-foreground">
                  <span aria-hidden="true" className="mt-0.5 text-primary">
                    &bull;
                  </span>
                  <span>{policy}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section className="bg-secondary/60">
          <div className="mx-auto max-w-5xl px-4 py-16 lg:py-24">
            <SectionHeading kicker="Choose Your Package" title="Limited Menus &amp; Buffets">
              Limited menus for parties of 35 or less. Buffet packages for parties of 35 or more.
            </SectionHeading>
            <Reveal>
              <Tabs defaultValue={banquetMenus[0]!.id} className="mt-10">
                <TabsList className="mx-auto flex h-auto w-fit flex-wrap justify-center">
                  {banquetMenus.map((menu) => (
                    <TabsTrigger
                      key={menu.id}
                      value={menu.id}
                      className="text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/15 hover:text-accent-foreground hover:shadow-sm data-[state=active]:hover:translate-y-0"
                    >
                      {menu.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {banquetMenus.map((menu) => (
                  <TabsContent key={menu.id} value={menu.id} className="mt-8">
                    <div className="animate-fade-up rounded-sm border border-border bg-card p-6 sm:p-8">
                      <p className="text-center text-sm text-muted-foreground">{menu.blurb}</p>
                      {menu.groups ? <MenuGroups groups={menu.groups} /> : null}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 lg:py-24">
          <SectionHeading kicker="Cheers" title="Beverage &amp; Add-Ons">
            Choose how your guests will drink to the occasion, and round out the menu.
          </SectionHeading>
          <Reveal>
            <BeverageAndAddOnsAccordion />
          </Reveal>
        </section>

        <section className="bg-secondary/60">
          <div className="mx-auto max-w-5xl px-4 py-16 lg:py-24">
            <SectionHeading kicker="Start Planning" title="Book Your Celebration">
              Answer a few quick questions and our events team will reach out.
            </SectionHeading>
            <Reveal className="mt-10 flex justify-center">
              <FiestaChatInquiry />
            </Reveal>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
