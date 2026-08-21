import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  site,
  heroSlides,
  highlightCards,
  diningSlides,
  partyTrays,
  experience,
  reviews,
  menus,
} from "@/lib/site-data";

function SectionHeading({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? (
        <p className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-primary">{kicker}</p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{children}</p> : null}
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-primary">Since 1966</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-foreground sm:text-5xl">
            Family Owned, Family Operated and Family Loved since 1966
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Avila's El Ranchito in Santa Ana was built by Victor Avila in 1983 and is still run by him today
            with the help of long-time General Manager Karen Edwards. Authentic Mexican cuisine in the heart of
            Santa Ana, served with love and tradition.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="rounded-sm bg-primary px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              Call to Order
            </a>
            <a
              href="#menus"
              className="rounded-sm border border-foreground/25 px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              View Menus
            </a>
          </div>
        </div>

        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.src}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="aspect-[4/3] w-full rounded-sm object-cover shadow-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3" />
          <CarouselNext className="right-3" />
        </Carousel>
      </div>
    </section>
  );
}

export function Highlights() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
      <div className="grid gap-8 md:grid-cols-3">
        {highlightCards.map((card) => (
          <article key={card.kicker} className="flex flex-col">
            <h2 className="font-display text-2xl text-foreground">{card.kicker}</h2>
            <img
              src={card.image}
              alt={card.alt}
              loading="lazy"
              className="mt-4 aspect-[4/3] w-full rounded-sm object-cover"
            />
            <p className="mt-4 grow text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            <a
              href={card.href}
              className="mt-5 inline-flex w-fit rounded-sm bg-primary px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              {card.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function OurStory() {
  return (
    <section id="our-story" className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-accent">Our History</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">Established in 1983</h2>
          <p className="mt-6 leading-relaxed text-ink-foreground/80">
            It all started back in the kitchen in 1966, when the Avila family came to the United States from
            Guanajuato, Mexico. Mama brought her delicious family recipes. Today Avila's El Ranchito is still
            family-owned, family-operated, and family-loved.
          </p>
          <p className="mt-4 leading-relaxed text-ink-foreground/80">
            Victor Avila built this location in 1983 and still operates it today with the help of his long-time
            General Manager, Karen Edwards. Featuring several banquet rooms, Avila's hosts milestone birthday
            parties, anniversary celebrations, bridal showers, intimate wedding receptions, quinceañera
            celebrations, celebration of life memorials, and happy hour office parties.
          </p>
        </div>
        <img
          src={heroSlides[0].src}
          alt={heroSlides[0].alt}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-sm object-cover"
        />
      </div>
    </section>
  );
}

export function Menus() {
  return (
    <section id="menus" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
      <SectionHeading kicker="Eat With Us" title="Our Menus">
        Mama Avila's recipes, made fresh every day in Santa Ana.
      </SectionHeading>
      <Tabs defaultValue={menus[0].id} className="mt-10">
        <TabsList className="mx-auto flex h-auto w-fit flex-wrap justify-center">
          {menus.map((menu) => (
            <TabsTrigger key={menu.id} value={menu.id} className="text-xs font-bold uppercase tracking-widest">
              {menu.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {menus.map((menu) => (
          <TabsContent key={menu.id} value={menu.id} className="mt-8">
            <div className="rounded-sm border border-border bg-card p-8">
              <p className="text-center text-sm text-muted-foreground">{menu.blurb}</p>
              <ul className="mx-auto mt-6 max-w-2xl divide-y divide-border">
                {menu.items.map((item) => (
                  <li key={item} className="py-3 text-center font-display text-lg text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

export function PartyTrays() {
  return (
    <section id="party-trays" className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeading kicker="To Go" title="Party Trays & Catering">
          Perfect for your next celebration. Our party trays feature authentic Mexican favorites that bring the
          El Ranchito experience to your special events.
        </SectionHeading>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {partyTrays.map((tray) => (
            <img
              key={tray.src}
              src={tray.src}
              alt={tray.alt}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="font-display text-xl text-foreground">Ready to make your event unforgettable?</p>
          <a
            href={site.phoneHref}
            className="mt-4 inline-flex rounded-sm bg-primary px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Call to Order: {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function PrivateFiesta() {
  return (
    <section id="private-fiesta" className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
      <SectionHeading kicker="Private Fiesta" title="Indoor Patio & Banquet Rooms">
        Planning a wedding, birthday, quinceañera, reunion, or business meeting? With authentic Mexican cuisine
        and impeccable service, we turn any gathering into a memorable fiesta.
      </SectionHeading>
      <Carousel opts={{ loop: true, align: "start" }} className="mt-10">
        <CarouselContent>
          {diningSlides.map((slide) => (
            <CarouselItem key={slide.src} className="md:basis-1/2 lg:basis-1/3">
              <figure>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-sm object-cover"
                />
                <figcaption className="mt-2 text-xs text-muted-foreground">{slide.alt}</figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-2" />
        <CarouselNext className="-right-2" />
      </Carousel>
    </section>
  );
}

export function SignatureExperience() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeading kicker="Taste It" title="Our Signature Experience">
          Mouth-watering Mexican cuisine and signature drinks prepared with family recipes.
        </SectionHeading>
        <Carousel opts={{ loop: true, align: "start" }} className="mt-10">
          <CarouselContent>
            {experience.map((item) => (
              <CarouselItem key={item.src} className="sm:basis-1/2 lg:basis-1/4">
                <figure className="overflow-hidden rounded-sm bg-card">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                  <figcaption className="p-4 text-center font-display text-lg text-foreground">
                    {item.title}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2" />
          <CarouselNext className="-right-2" />
        </Carousel>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
      <SectionHeading kicker="Reviews" title="What Our Customers Say">
        Hear from the families and food lovers who make El Ranchito their home away from home.
      </SectionHeading>
      <Carousel opts={{ loop: true, align: "start" }} className="mt-10">
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3">
              <blockquote className="flex h-full flex-col rounded-sm border border-border bg-card p-6">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {review.source}
                </p>
                <p className="mt-4 grow leading-relaxed text-foreground">“{review.quote}”</p>
                <footer className="mt-5 text-sm text-muted-foreground">
                  {review.name} · {review.when}
                </footer>
              </blockquote>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-2" />
        <CarouselNext className="-right-2" />
      </Carousel>
      <div className="mt-10 text-center">
        <p className="text-muted-foreground">Have you dined with us? We'd love to hear about your experience!</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm bg-primary px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Leave a Google Review
          </a>
          <a
            href={site.yelpUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-foreground/25 px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Review on Yelp
          </a>
        </div>
      </div>
    </section>
  );
}
