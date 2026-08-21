import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  Hero,
  Highlights,
  OurStory,
  Menus,
  PartyTrays,
  PrivateFiesta,
  SignatureExperience,
  Reviews,
} from "@/components/site/Sections";
import { site, hours, heroSlides } from "@/lib/site-data";

const title = "Avila's El Ranchito Santa Ana | Authentic Mexican Restaurant";
const description =
  "Family owned since 1966. Authentic Mexican food, margaritas, banquet rooms and party trays at Avila's El Ranchito on E 1st St in Santa Ana. Call (714) 547-9129.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroSlides[0]!.src },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroSlides[0]!.src },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Avila's El Ranchito Santa Ana",
          servesCuisine: "Mexican",
          telephone: site.phone,
          image: heroSlides[0]!.src,
          address: {
            "@type": "PostalAddress",
            streetAddress: "2201 E 1st St",
            addressLocality: "Santa Ana",
            addressRegion: "CA",
            postalCode: "92705",
            addressCountry: "US",
          },
          openingHours: hours,
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Highlights />
        <OurStory />
        <Menus />
        <PartyTrays />
        <PrivateFiesta />
        <SignatureExperience />
        <Reviews />
      </main>
      <SiteFooter />
    </div>
  );
}
