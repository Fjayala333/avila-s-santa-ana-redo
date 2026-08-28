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
import {
  site,
  diningSlides,
  banquetMenus,
  beverageOptions,
  banquetAddOns,
  banquetPolicies,
} from "@/lib/site-data";
import banquetLongTable from "@/assets/IMG_0560.jpg.asset.json";
import banquetRoomWide from "@/assets/IMG_0562.jpg.asset.json";
import buffetSetup from "@/assets/IMG_2045.jpg.asset.json";
import fiestaBuffet from "@/assets/IMG_2053.jpg.asset.json";
import diningRoomFireplace from "@/assets/Avila_sSantaAna-41.jpg.asset.json";
import diningRoomWide from "@/assets/Avila_sSantaAna-42.jpg.asset.json";

const eventPhotos = [
  { src: banquetLongTable.url, alt: "Banquet room set with a long table and floral centerpieces" },
  { src: banquetRoomWide.url, alt: "Private banquet room ready for a seated celebration" },
  { src: buffetSetup.url, alt: "Buffet line with chafing dishes and fresh floral décor" },
  { src: fiestaBuffet.url, alt: "Festive buffet setup with piñatas and serape runners" },
  { src: diningRoomFireplace.url, alt: "Warm dining room with traditional fireplace and Mexican folk art" },
  { src: diningRoomWide.url, alt: "Spacious dining room with woven chairs and rustic wood ceilings" },
];


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
          <div className="mx-auto max-w-5xl px-4 py-16 text-center lg:py-24">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Banquets &amp; Private Events
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] text-foreground sm:text-5xl">
              Weddings, Quinceañeras &amp; Every Fiesta In Between
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Since 1966, Avila's El Ranchito has hosted the celebrations that matter — birthdays,
              anniversaries, showers, wedding receptions, celebrations of life and office parties.
              Full menus, buffet packages and beverage options below.
            </p>
            <a
              href={site.phoneHref}
              className="cta cta-glow mt-8 inline-flex rounded-sm bg-primary px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90"
            >
              Call to Book: {site.phone}
            </a>
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
          <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
            <SectionHeading kicker="See the Space" title="Indoor Patio &amp; Banquet Rooms">
              A quick look at where your celebration will happen.
            </SectionHeading>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-start">
              <div className="grid grid-cols-2 gap-3">
                <Reveal className="img-zoom-host shine-host col-span-2 overflow-hidden rounded-sm">
                  <img
                    src={diningSlides[2]!.src}
                    alt={diningSlides[2]!.alt}
                    loading="lazy"
                    className="img-zoom aspect-[16/9] w-full object-cover"
                  />
                </Reveal>
                <Reveal delay={120} className="img-zoom-host shine-host overflow-hidden rounded-sm">
                  <img
                    src={diningSlides[0]!.src}
                    alt={diningSlides[0]!.alt}
                    loading="lazy"
                    className="img-zoom aspect-[4/3] w-full object-cover"
                  />
                </Reveal>
                <Reveal delay={220} className="img-zoom-host shine-host overflow-hidden rounded-sm">
                  <img
                    src={diningSlides[3]!.src}
                    alt={diningSlides[3]!.alt}
                    loading="lazy"
                    className="img-zoom aspect-[4/3] w-full object-cover"
                  />
                </Reveal>
              </div>
              <Reveal delay={160} className="rounded-sm border border-border bg-card p-7 shadow-xl">
                <FiestaChatInquiry />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
          <SectionHeading kicker="From Our Fiestas" title="Set the Table, Set the Scene">
            Real events at Avila's El Ranchito Santa Ana — banquet seating and buffet setups.
          </SectionHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {eventPhotos.map((photo, i) => (
              <Reveal
                key={photo.src}
                delay={i * 120}
                className="img-zoom-host shine-host group overflow-hidden rounded-sm"
              >
                <figure className="relative">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="img-zoom aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 font-sans text-xs font-bold uppercase tracking-widest text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {photo.alt}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
