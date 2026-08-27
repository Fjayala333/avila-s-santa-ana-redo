import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Reveal } from "./Reveal";
import { cn } from "../../lib/utils";
import {
  site,
  heroSlides,
  highlightCards,
  diningSlides,
  partyTrays,
  cateringGallery,
  experience,
  menus,
  cateringMenu,
  type MenuGroup,
} from "../../lib/site-data";

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
    <section className="relative overflow-hidden bg-secondary/60">
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -bottom-32 -right-16 size-[28rem] rounded-full bg-accent/20 blur-3xl"
        style={{ animationDelay: "3s" }}
      />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
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
              className="cta cta-glow rounded-sm bg-primary px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90"
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

      <div
        aria-hidden="true"
        className="animate-bounce pointer-events-none absolute inset-x-0 bottom-4 z-10 hidden justify-center text-foreground/40 lg:flex"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

export function Highlights() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
      <div className="grid gap-8 md:grid-cols-3">
        {highlightCards.map((card, i) => (
          <Reveal
            as="article"
            key={card.kicker}
            delay={i * 160}
            className="card-motion group flex flex-col rounded-sm p-1"
          >
            <h2 className="underline-grow group-hover:underline-grow-active w-fit font-display text-2xl text-foreground">
              {card.kicker}
            </h2>
            <div className="img-zoom-host shine-host mt-5 rounded-sm ring-1 ring-foreground/5 transition-shadow duration-500 group-hover:ring-primary/30">
              <img
                src={card.image}
                alt={card.alt}
                loading="lazy"
                className="img-zoom aspect-[4/3] w-full rounded-sm object-cover"
              />
            </div>
            <p className="mt-4 grow text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
              {card.text}
            </p>
            <a
              href={card.href}
              className="cta mt-5 inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90"
            >
              {card.cta}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
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
        <div>
          <Reveal>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-accent">Our History</p>
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">Established in 1983</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 leading-relaxed text-ink-foreground/80">
              It all started back in the kitchen in 1966, when the Avila family came to the United States from
              Guanajuato, Mexico. Mama brought her delicious family recipes. Today Avila's El Ranchito is still
              family-owned, family-operated, and family-loved.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-4 leading-relaxed text-ink-foreground/80">
              Victor Avila built this location in 1983 and still operates it today with the help of his long-time
              General Manager, Karen Edwards. Featuring several banquet rooms, Avila's hosts milestone birthday
              parties, anniversary celebrations, bridal showers, intimate wedding receptions, quinceañera
              celebrations, celebration of life memorials, and happy hour office parties.
            </p>
          </Reveal>
        </div>
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

function MenuGroups({ groups }: { groups: MenuGroup[] }) {
  return (
    <div className="mx-auto mt-8 max-w-3xl space-y-10">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="text-center font-display text-2xl text-foreground">{group.title}</h3>
          {group.note ? (
            <p className="mt-1 text-center text-xs uppercase tracking-widest text-muted-foreground">{group.note}</p>
          ) : null}
          <ul className="mt-5 divide-y divide-border">
            {group.items.map((item, i) => (
              <li
                key={item.name}
                className="animate-fade-up py-4"
                style={{ animationDelay: `${100 + i * 60}ms` }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-lg text-foreground">{item.name}</span>
                  <span className="h-px flex-1 border-b border-dotted border-border" />
                  {item.price ? (
                    <span className="font-sans text-sm font-semibold text-accent-foreground">${item.price}</span>
                  ) : null}
                </div>
                {item.description ? (
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function Menus() {
  const firstMenu = menus[0]!;
  const firstNested = firstMenu.menus?.[0] ?? firstMenu;
  const [activeMenu, setActiveMenu] = useState(firstMenu.id);
  const [activeSubMenu, setActiveSubMenu] = useState(firstNested.id);

  const handleMenuChange = (value: string) => {
    setActiveMenu(value);
    const menu = menus.find((m) => m.id === value);
    const nested = menu?.menus?.[0];
    if (nested) {
      setActiveSubMenu(nested.id);
    }
  };

  return (
    <section id="menus" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
      <SectionHeading kicker="Eat With Us" title="Our Menus">
        Mama Avila's recipes, made fresh every day in Santa Ana.
      </SectionHeading>
      <Reveal>
        <Tabs value={activeMenu} onValueChange={handleMenuChange} className="mt-10">
          <TabsList className="mx-auto flex h-auto w-fit flex-wrap justify-center gap-1 rounded-full bg-background/60 p-1.5 shadow-sm">
            {menus.map((menu) => (
              <TabsTrigger
                key={menu.id}
                value={menu.id}
                onMouseEnter={() => handleMenuChange(menu.id)}
                className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-accent/15 hover:text-accent-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:ring-2 data-[state=active]:ring-primary/70"
              >
                {menu.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {menus.map((menu) => (
            <TabsContent key={menu.id} value={menu.id} className="mt-8">
              <div className="animate-fade-up max-h-[85vh] overflow-y-auto rounded-sm border border-border bg-card p-6 sm:p-8">
                <p className="text-center text-sm text-muted-foreground">{menu.blurb}</p>
                {menu.groups ? (
                  <MenuGroups groups={menu.groups} />
                ) : menu.menus ? (
                  <Tabs value={activeSubMenu} onValueChange={setActiveSubMenu} className="mt-6">
                    <TabsList className="mx-auto flex h-auto w-fit flex-wrap justify-center gap-1 rounded-full bg-background/60 p-1.5 shadow-sm">
                      {menu.menus.map((sub) => (
                        <TabsTrigger
                          key={sub.id}
                          value={sub.id}
                          onMouseEnter={() => setActiveSubMenu(sub.id)}
                          className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-accent/15 hover:text-accent-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:ring-2 data-[state=active]:ring-primary/70"
                        >
                          {sub.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {menu.menus.map((sub) => (
                      <TabsContent key={sub.id} value={sub.id} className="mt-6">
                        <p className="text-center text-sm text-muted-foreground">{sub.blurb}</p>
                        {sub.groups ? <MenuGroups groups={sub.groups} /> : null}
                      </TabsContent>
                    ))}
                  </Tabs>
                ) : null}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Reveal>
    </section>
  );
}

export function PartyTrays() {
  const galleryImages = [partyTrays[1]!, ...cateringGallery];
  const [activeTab, setActiveTab] = useState(cateringMenu[0]!.id);

  return (
    <section id="party-trays" className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <SectionHeading kicker="To Go" title="Party Trays & Catering">
          Perfect for your next celebration. Order by the tray, or start with a ready-made package.
        </SectionHeading>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {galleryImages.map((item, i) => (
            <Reveal
              key={item.src}
              delay={i * 120}
              as="figure"
              className="group img-zoom-host shine-host lift relative overflow-hidden rounded-sm shadow-lg ring-1 ring-foreground/5 transition-all duration-500 hover:ring-primary/40"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="img-zoom aspect-[4/3] w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/85 to-transparent p-3 pt-8 text-center text-xs font-bold uppercase tracking-widest text-ink-foreground transition-transform duration-500 ease-out group-hover:translate-y-0">
                {item.alt}
              </figcaption>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-10">
            <TabsList className="mx-auto flex h-auto w-fit flex-wrap justify-center gap-1 rounded-full bg-background/60 p-1.5 shadow-sm">
              {cateringMenu.map((menu) => (
                <TabsTrigger
                  key={menu.id}
                  value={menu.id}
                  onMouseEnter={() => setActiveTab(menu.id)}
                  className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-accent/15 hover:text-accent-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:ring-2 data-[state=active]:ring-primary/70"
                >
                  {menu.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {cateringMenu.map((menu) => (
              <TabsContent key={menu.id} value={menu.id} className="mt-8">
                <div className="animate-fade-up rounded-sm border border-border bg-card p-6 sm:p-8">
                  <p className="text-center text-sm text-muted-foreground">{menu.blurb}</p>
                  {menu.groups ? <MenuGroups groups={menu.groups} /> : null}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>

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

const fiestaEventTypes = [
  "Birthday",
  "Quinceañera",
  "Wedding Reception",
  "Anniversary",
  "Bridal or Baby Shower",
  "Celebration of Life",
  "Office Party",
  "Other",
];

function confettiBurst(x: number, y: number) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = ["var(--color-primary)", "oklch(0.55 0.16 28)", "oklch(0.55 0.13 150)"];
  for (let i = 0; i < 18; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    const angle = Math.random() * Math.PI * 2;
    const dist = 60 + Math.random() * 90;
    const size = 5 + Math.random() * 5;
    piece.style.left = `${x}px`;
    piece.style.top = `${y}px`;
    piece.style.width = `${size}px`;
    piece.style.height = `${size}px`;
    piece.style.background = colors[i % colors.length]!;
    piece.style.borderRadius = i % 2 === 0 ? "999px" : "2px";
    piece.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    piece.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
    piece.style.setProperty("--rot", `${(Math.random() * 360).toFixed(0)}deg`);
    document.body.appendChild(piece);
    piece.addEventListener("animationend", () => piece.remove());
  }
}

function FiestaBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-fade-up w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-secondary px-4 py-3 text-sm text-foreground">
      {children}
    </div>
  );
}

function FiestaChatInquiry() {
  const [eventType, setEventType] = useState<string | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const showDetails = eventType !== null;
  const detailsComplete = date !== "" && time !== "" && guests !== "";
  const showContact = showDetails && detailsComplete;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (btn) {
      const r = btn.getBoundingClientRect();
      confettiBurst(r.left + r.width / 2, r.top + r.height / 2);
    }
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-3">
      <div>
        <h3 className="font-display text-2xl text-foreground">Plan Your Fiesta</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Answer a few quick questions and we'll follow up within one business day.
        </p>
      </div>

      <FiestaBubble>Hi! What are we celebrating? 🎉</FiestaBubble>
      <div className="animate-fade-up flex flex-wrap gap-2" style={{ animationDelay: "120ms" }}>
        {fiestaEventTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setEventType(type)}
            className={cn(
              "rounded-full border px-3.5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
              eventType === type
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-foreground hover:border-primary hover:text-primary",
            )}
          >
            {type}
          </button>
        ))}
      </div>

      {showDetails ? (
        <>
          <FiestaBubble>When's the big day, what time, and how many guests?</FiestaBubble>
          <div className="animate-fade-up ml-auto flex w-[85%] min-w-0 flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="min-w-0 flex-1 rounded-sm border border-border bg-card px-3 py-2 text-sm focus:border-primary focus:outline-none"
              />
              <input
                type="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-24 rounded-sm border border-border bg-card px-3 py-2 text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <input
              type="number"
              min={1}
              required
              placeholder="Number of guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full rounded-sm border border-border bg-card px-3 py-2 text-sm focus:border-primary focus:outline-none"
            />
          </div>
        </>
      ) : null}

      {showContact && !submitted ? (
        <>
          <FiestaBubble>Last thing — how do we reach you?</FiestaBubble>
          <form
            onSubmit={handleSubmit}
            className="animate-fade-up ml-auto flex w-[85%] min-w-0 flex-col gap-2"
          >
            <input
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-sm border border-border bg-card px-3 py-2 text-sm focus:border-primary focus:outline-none"
            />
            <div className="flex gap-2">
              <input
                type="tel"
                placeholder="Phone or email"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="min-w-0 flex-1 rounded-sm border border-border bg-card px-3 py-2 text-sm focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="cta shrink-0 rounded-sm bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90"
              >
                Send
              </button>
            </div>
          </form>
        </>
      ) : null}

      {submitted ? (
        <FiestaBubble>
          Got it{name.trim() ? `, ${name.trim().split(" ")[0]}` : ""} — we'll text you back within one
          business day. ¡Gracias!
        </FiestaBubble>
      ) : null}
    </div>
  );
}

export function PrivateFiesta() {
  const [hero, sideA, sideB] = diningSlides;

  return (
    <section id="private-fiesta" className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
      <SectionHeading kicker="WHERE FAMILY COMES TOGETHER" title="Outdoor Patio & Banquet Rooms">
        Planning a wedding, birthday, quinceañera, reunion, or business meeting? With authentic Mexican cuisine
        and impeccable service, we turn any gathering into a memorable fiesta.
      </SectionHeading>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-start">
        <div className="grid grid-cols-2 gap-3">
          <Reveal className="img-zoom-host shine-host col-span-2 overflow-hidden rounded-sm">
            <img
              src={hero!.src}
              alt={hero!.alt}
              loading="lazy"
              className="img-zoom aspect-[16/9] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="img-zoom-host shine-host overflow-hidden rounded-sm">
            <img
              src={sideA!.src}
              alt={sideA!.alt}
              loading="lazy"
              className="img-zoom aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={220} className="img-zoom-host shine-host overflow-hidden rounded-sm">
            <img
              src={sideB!.src}
              alt={sideB!.alt}
              loading="lazy"
              className="img-zoom aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
        <Reveal delay={160} className="rounded-sm border border-border bg-card p-7 shadow-xl">
          <FiestaChatInquiry />
        </Reveal>
      </div>
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
                  <figure className="img-zoom-host shine-host lift rounded-sm bg-card">
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
      <SectionHeading kicker="Reviews" title="What Our Guests Are Saying">
        Real reviews from real guests, straight from Google and Yelp.
      </SectionHeading>
      <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
        <Reveal>
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="lift group flex flex-col items-center gap-3 rounded-sm border border-border bg-card p-8 text-center"
          >
            <div className="flex gap-1 text-primary" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-5 fill-current transition-transform duration-300 group-hover:scale-110"
                  style={{ transitionDelay: `${i * 40}ms` }}
                />
              ))}
            </div>
            <p className="font-display text-xl text-foreground">Read our Google Reviews</p>
            <p className="text-sm text-muted-foreground">See what guests say on Google</p>
            <span className="cta mt-2 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-widest text-primary-foreground group-hover:opacity-90">
              View on Google
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </a>
        </Reveal>
        <Reveal delay={140}>
          <a
            href={site.yelpUrl}
            target="_blank"
            rel="noreferrer"
            className="lift group flex flex-col items-center gap-3 rounded-sm border border-border bg-card p-8 text-center"
          >
            <div className="flex gap-1 text-primary" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-5 fill-current transition-transform duration-300 group-hover:scale-110"
                  style={{ transitionDelay: `${i * 40}ms` }}
                />
              ))}
            </div>
            <p className="font-display text-xl text-foreground">Read our Yelp Reviews</p>
            <p className="text-sm text-muted-foreground">See what guests say on Yelp</p>
            <span className="cta mt-2 inline-flex items-center gap-2 rounded-sm border border-foreground/25 px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-widest text-foreground group-hover:bg-foreground group-hover:text-background">
              View on Yelp
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </a>
        </Reveal>
      </div>
      <Reveal delay={120} className="mt-10 text-center">
        <p className="text-muted-foreground">Have you dined with us? We'd love to hear about your experience!</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href={site.googleReviewsUrl}
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
