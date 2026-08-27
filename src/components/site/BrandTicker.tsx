const phrases = [
  "Family Owned Since 1966",
  "Authentic Mexican Cuisine",
  "Handmade Tortillas Daily",
  "Santa Ana, California",
  "Signature Margaritas",
  "Private Fiesta Rooms",
];

export function BrandTicker() {
  const items = [...phrases, ...phrases];

  return (
    <div className="overflow-hidden border-y border-border bg-ink py-3 text-ink-foreground">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap motion-reduce:animate-none">
        {items.map((phrase, i) => (
          <span
            key={`${phrase}-${i}`}
            className="flex items-center gap-10 font-sans text-xs font-bold uppercase tracking-[0.28em]"
          >
            {phrase}
            <span aria-hidden="true" className="text-primary">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
