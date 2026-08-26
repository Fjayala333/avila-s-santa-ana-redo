# Avila's Santa Ana Redo — Guidelines

## Components

The design system exports these components — import them from `@ws-hwlxw4alqar0lhh66tzo/8d6c3926-2131-4e70-a439-8e496cb794a4` and compose them before building anything from scratch:

`AccessibilityWidget`, `Button`, `CarouselContent`, `CarouselItem`, `CarouselNext`, `CarouselPrevious`, `Carousel`, `Hero`, `Highlights`, `Menus`, `OurStory`, `PartyTrays`, `PrivateFiesta`, `Reveal`, `Reviews`, `SignatureExperience`, `SiteFooter`, `SiteHeader`, `TabsContent`, `TabsList`, `TabsTrigger`, `Tabs`

Per-component details (import stanzas, props, variants, examples) live in `.lovable/rules/libraries/{slug}/components.md` — on disk, not auto-loaded. Read that file or the component source when the name alone isn't enough.

## Theme Files

The design system's theme is delivered through the following files. The author's original source files carry the full wiring the design system needs — variable declarations, framework-specific directives, provider objects, etc. — and are the canonical import target.

- `@ws-hwlxw4alqar0lhh66tzo/8d6c3926-2131-4e70-a439-8e496cb794a4/styles.css` (source — preferred import)
- `@ws-hwlxw4alqar0lhh66tzo/8d6c3926-2131-4e70-a439-8e496cb794a4/dist/tokens.css` (auto-generated flat list of CSS custom properties — a raw-values fallback only; does NOT carry framework-specific wiring that the source files above provide)

