import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/site/Reveal";
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
    <Reveal className="mx-auto max-w-3xl text-center">
      {kicker ? (
        <p className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-primary">{kicker}</p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{children}</p> : null}
    </Reveal>
  );
}

export function Hero() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer: ReturnType<typeof setInterval> | undefined;
    if (!reduce) {
      timer = setInterval(() => api.scrollNext(), 5000);
    }

    return () => {
      api.off("select", onSelect);
      if (timer) clearInterval(timer);
    };
  }, [api]);

  return (
    <section className="bg-secondary/60">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <div className="text-center lg:text-left">
          <p className="animate-fade-up font-sans text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Since 1966
          </p>
          <h1
            className="animate-fade-up mt-4 font-display text-4xl leading-[1.1] text-foreground sm:text-5xl"
            style={{ animationDelay: "220ms" }}
          >
            Family Owned, Family Operated and Family Loved since 1966
          </h1>
          <p
            className="animate-fade-up mt-6 text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "320ms" }}
          >
            Avila's El Ranchito in Santa Ana was built by Victor Avila in 1983 and is still run by him today
            with the help of long-time General Manager Karen Edwards. Authentic Mexican cuisine in the heart of
            Santa Ana, served with love and tradition.
          </p>
          <div className="animate-fade-up mt-8 flex flex-wrap justify-center gap-3 lg:justify-start" style={{ animationDelay: "420ms" }}>
            <a
              href={site.phoneHref}
              className="cta rounded-sm bg-primary px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90"
            >
              Call to Order
            </a>
            <a
              href="#menus"
              className="cta rounded-sm border border-foreground/25 px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background"
            >
              View Menus
            </a>
          </div>
        </div>

        <div className="animate-fade-up animate-float" style={{ animationDelay: "300ms" }}>
          <Carousel opts={{ loop: true }} setApi={setApi} className="w-full">
            <CarouselContent>
              {heroSlides.map((slide, i) => (
                <CarouselItem key={slide.src}>
                  <div className="img-zoom-host relative rounded-sm shadow-xl">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className={cn(
                        "aspect-[4/3] w-full rounded-sm object-cover",
                        current === i && "animate-ken-burns",
                      )}
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4 pt-12">
                      <p
                        key={`${slide.src}-${current === i}`}
                        className={cn(
                          "font-sans text-xs font-bold uppercase tracking-[0.2em] text-ink-foreground",
                          current === i && "animate-fade-up",
                        )}
                      >
                        {slide.alt}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 transition-transform hover:scale-110" />
            <CarouselNext className="right-3 transition-transform hover:scale-110" />
          </Carousel>

          <div className="mt-4 flex justify-center gap-2">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "h-2 rounded-full bg-foreground/25 transition-all duration-500",
                  current === i ? "w-8 bg-primary" : "w-2 hover:bg-foreground/50",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Highlights() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
      <div className="grid gap-8 md:grid-cols-3">
        {highlightCards.map((card, i) => (
          <Reveal as="article" key={card.kicker} delay={i * 140} className="flex flex-col">
            <h2 className="font-display text-2xl text-foreground">{card.kicker}</h2>
            <div className="img-zoom-host mt-4 rounded-sm">
              <img
                src={card.image}
                alt={card.alt}
                loading="lazy"
                className="img-zoom aspect-[4/3] w-full rounded-sm object-cover"
              />
            </div>
            <p className="mt-4 grow text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            <a
              href={card.href}
              className="cta mt-5 inline-flex w-fit rounded-sm bg-primary px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90"
            >
              {card.cta}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function OurStory() {
  return (
    <section id="our-story" className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <Reveal>
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
        </Reveal>
        <Reveal delay={180} className="img-zoom-host rounded-sm">
          <img
            src={heroSlides[0]!.src}
            alt={heroSlides[0]!.alt}
            loading="lazy"
            className="img-zoom aspect-[4/3] w-full rounded-sm object-cover"
          />
        </Reveal>
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
      <Reveal>
        <Tabs defaultValue={menus[0]!.id} className="mt-10">
          <TabsList className="mx-auto flex h-auto w-fit flex-wrap justify-center">
            {menus.map((menu) => (
              <TabsTrigger
                key={menu.id}
                value={menu.id}
                className="text-xs font-bold uppercase tracking-widest transition-all"
              >
                {menu.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {menus.map((menu) => (
            <TabsContent key={menu.id} value={menu.id} className="mt-8">
              <div className="animate-fade-up rounded-sm border border-border bg-card p-8">
                <p className="text-center text-sm text-muted-foreground">{menu.blurb}</p>
                <ul className="mx-auto mt-6 max-w-2xl divide-y divide-border">
                  {menu.items.map((item, i) => (
                    <li
                      key={item}
                      className="animate-fade-up py-3 text-center font-display text-lg text-foreground"
                      style={{ animationDelay: `${100 + i * 70}ms` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Reveal>
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
          {partyTrays.map((tray, i) => (
            <Reveal key={tray.src} delay={i * 140} className="img-zoom-host lift rounded-sm">
              <img
                src={tray.src}
                alt={tray.alt}
                loading="lazy"
                className="img-zoom aspect-[4/3] w-full rounded-sm object-cover"
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-10 text-center">
          <p className="font-display text-xl text-foreground">Ready to make your event unforgettable?</p>
          <a
            href={site.phoneHref}
            className="cta mt-4 inline-flex rounded-sm bg-primary px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90"
          >
            Call to Order: {site.phone}
          </a>
        </Reveal>
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
      <Reveal>
        <Carousel opts={{ loop: true, align: "start" }} className="mt-10">
          <CarouselContent>
            {diningSlides.map((slide) => (
              <CarouselItem key={slide.src} className="md:basis-1/2 lg:basis-1/3">
                <figure>
                  <div className="img-zoom-host rounded-sm">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      loading="lazy"
                      className="img-zoom aspect-[4/3] w-full rounded-sm object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs text-muted-foreground">{slide.alt}</figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2 transition-transform hover:scale-110" />
          <CarouselNext className="-right-2 transition-transform hover:scale-110" />
        </Carousel>
      </Reveal>
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
        <Reveal>
          <Carousel opts={{ loop: true, align: "start" }} className="mt-10">
            <CarouselContent>
              {experience.map((item) => (
                <CarouselItem key={item.src} className="sm:basis-1/2 lg:basis-1/4">
                  <figure className="img-zoom-host lift rounded-sm bg-card">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="img-zoom aspect-square w-full object-cover"
                    />
                    <figcaption className="p-4 text-center font-display text-lg text-foreground">
                      {item.title}
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 transition-transform hover:scale-110" />
            <CarouselNext className="-right-2 transition-transform hover:scale-110" />
          </Carousel>
        </Reveal>
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
      <Reveal>
        <Carousel opts={{ loop: true, align: "start" }} className="mt-10">
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3">
                <blockquote className="lift flex h-full flex-col rounded-sm border border-border bg-card p-6">
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
          <CarouselPrevious className="-left-2 transition-transform hover:scale-110" />
          <CarouselNext className="-right-2 transition-transform hover:scale-110" />
        </Carousel>
      </Reveal>
      <Reveal delay={120} className="mt-10 text-center">
        <p className="text-muted-foreground">Have you dined with us? We'd love to hear about your experience!</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="cta rounded-sm bg-primary px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90"
          >
            Leave a Google Review
          </a>
          <a
            href={site.yelpUrl}
            target="_blank"
            rel="noreferrer"
            className="cta rounded-sm border border-foreground/25 px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background"
          >
            Review on Yelp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
