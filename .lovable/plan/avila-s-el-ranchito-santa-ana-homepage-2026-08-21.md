# Avila's El Ranchito — Santa Ana homepage

Recreate the layout and feel of avilasnewportbeach.com, but with Avila's Santa Ana content, photos, and contact details pulled from avilassantaana.com.

## What gets built

A single homepage at `/` with the Newport Beach page structure:

1. **Top utility bar** — phone `(714) 547-9129`, address `2201 E 1st St, Santa Ana, CA 92705`, plus "Order Online" / "DoorDash" buttons.
2. **Header** — Avila's El Ranchito logo, nav (Home, Menus, Our Story, Private Fiesta, Contact).
3. **Hero** — full-width photo with the headline "Family Owned, Family Operated and Family Loved since 1966" and Santa Ana intro copy: established 1983, built by Victor Avila, still operated today with GM Karen Edwards.
4. **Three-card row** — Order Online / Private Fiesta / Our Story, each with photo, short blurb, and button (same pattern as Newport).
5. **Menu tabs** — All Day Menu, Brunch Menu, Happy Hour Menu (tabbed section, content placeholders until menus are supplied).
6. **Party Trays & Catering** — image + copy from Santa Ana, "Call to Order" CTA.
7. **Private Fiesta / banquet rooms** — banquet room copy (birthdays, anniversaries, bridal showers, quinceañeras, celebrations of life, office parties) with the indoor patio & dining photo grid.
8. **Signature experience gallery** — captioned carousel of cocktails, margaritas, cuisine, soups, patio, seafood.
9. **Reviews** — Google/Yelp testimonial carousel from the Santa Ana site, with "Leave a Google Review" and "Review on Yelp" links.
10. **Footer** — logo, contact block, quick links, opening hours, newsletter signup form (visual only), copyright.

## Design

Mexican-restaurant palette in the Avila's spirit — deep terracotta/rust red, warm cream, charcoal, gold accents — defined as semantic tokens in `src/styles.css`. Display serif for headings, clean sans for body. Warm, generous section spacing like the Newport site rather than a generic template look.

## Images

Reuse the Santa Ana site's existing photos by URL (`avilassantaana.com/lovable-uploads/...`) so the page ships with real, correct imagery. You can replace them with uploads later.

## Open items (using placeholders unless you provide them)

- Online ordering / DoorDash URLs for Santa Ana — buttons will link to the phone number until provided.
- Opening hours and contact email for Santa Ana.
- Menu PDFs or item lists for the menu tabs.

## Technical notes

- TanStack Start route at `src/routes/index.tsx`, replacing the placeholder, with page sections split into components under `src/components/`.
- Carousels via the existing `embla`-based shadcn carousel; no new backend, no database.
- SEO head metadata on the route: title, description, og/twitter tags, canonical, plus `Restaurant` JSON-LD with the Santa Ana address, phone, and hours.
- Newsletter form is presentational only in this pass; wire-up would need Lovable Cloud.
