import logoHd from "@/assets/avilas-wordmark-transparent.png.asset.json";

export const site = {
  name: "Avila's El Ranchito",
  city: "Santa Ana",
  phone: "(714) 547-9129",
  phoneHref: "tel:+17145479129",
  address: "2201 E 1st St, Santa Ana, CA 92705",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Avila%27s+El+Ranchito+2201+E+1st+St+Santa+Ana+CA+92705",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Avila%27s+El+Ranchito+2201+E+1st+St+Santa+Ana+CA+92705&output=embed",
  yelpUrl: "https://www.yelp.com/biz/avilas-el-ranchito-santa-ana",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Avila%27s+El+Ranchito+2201+E+1st+St+Santa+Ana+CA+92705",
  logo: logoHd.url,
};

export const orderingPlatforms = [
  { label: "Pickup (Order Direct)", href: "https://avilassa.hrpos.heartland.us/menu" },
  { label: "Grubhub", href: "http://menus.fyi/12075824" },
  { label: "DoorDash", href: "https://order.online/store/avila's-el-ranchito-santa-ana-35637929/?hideModal=true" },
  { label: "FoodRunners", href: "https://thefoodrunners.com/food-delivery-restaurant/Orange%20County/Orange%20County/Avila's-El-Ranchito/27" },
];

const u = (id: string) => `https://www.avilassantaana.com/lovable-uploads/${id}.png`;

export const heroSlides = [
  { src: u("634901bf-b15e-4128-a203-488a9821ca14"), alt: "Avila family group portrait with multiple generations" },
  { src: u("5cc9cd54-89e3-4020-b85d-1ae1417194b9"), alt: "Avila family founders with their children in formal attire" },
  { src: u("dad8063e-d4dc-4174-a9c8-195da8378c01"), alt: "Avila family celebration with papel picado decorations and a champagne toast" },
];

export const highlightCards = [
  {
    kicker: "Order Online",
    image: u("aeb7c180-d92c-4657-b4de-51beff88b05e"),
    alt: "Crispy tacos filled with fresh ingredients next to a signature margarita",
    text: "Enjoy Mama Avila's authentic recipes at home. Call ahead and we'll have it ready.",
    cta: "Call to Order",
    href: site.phoneHref,
  },
  {
    kicker: "Private Fiesta",
    image: u("db19edcc-ea2d-4713-b43b-19b3b3436e2c"),
    alt: "Private dining room with bamboo ceiling, stone fireplace and long wooden table",
    text: "Several banquet rooms for birthdays, showers, quinceañeras, wedding receptions and office parties.",
    cta: "Plan Your Fiesta",
    href: site.phoneHref,
  },
  {
    kicker: "Our Story",
    image: u("5cc9cd54-89e3-4020-b85d-1ae1417194b9"),
    alt: "Historic portrait of the Avila family founders",
    text: "It started in a kitchen in 1966, with recipes Mama Avila brought from Guanajuato, Mexico.",
    cta: "Read Our Story",
    href: "#our-story",
  },
];

export const diningSlides = [
  { src: u("429c0bce-1ef2-4cd7-8183-185298289842"), alt: "El Ranchito outdoor patio with fire pit table and restaurant sign" },
  { src: u("89e91eef-6a67-4719-a18b-1754f50ebda5"), alt: "Indoor dining area with high ceilings and rustic decor" },
  { src: u("db19edcc-ea2d-4713-b43b-19b3b3436e2c"), alt: "Private dining room with bamboo ceiling and stone fireplace" },
  { src: u("388eb6aa-e353-42a4-a2b0-ecf90732fb7d"), alt: "Dining room with stone fireplace and multiple wooden tables" },
  { src: u("717473c5-0bbd-4290-8fbf-f428475cac70"), alt: "Spacious dining area with bamboo ceiling and view of the fireplace" },
];

export const partyTrays = [
  { src: u("8bcb0208-e35e-42d2-9ee9-07c33b2d4eb1"), alt: "Party tray with tacos, flautas, guacamole and tortillas on a colorful serape" },
  { src: u("3c54d852-2525-4267-bd68-7565d67d8200"), alt: "Party tray featuring tacos, flautas, guacamole and margaritas" },
  { src: u("aece31bc-0746-4502-933d-f16188276018"), alt: "Catering spread with enchiladas, salads, chips and party platters" },
];

export const experience = [
  { src: u("551a51b9-0ac9-4ff0-99b2-7d989cb5fbbb"), title: "Signature Cocktails", alt: "Refreshing orange drink with Avila's El Ranchito branding" },
  { src: u("ef84b864-082c-4546-9752-de94d6257b21"), title: "Specialty Margaritas", alt: "Spicy red margarita with chili salt rim and lime" },
  { src: u("7dd58dad-a9be-4ca8-a245-07fe6d134ea0"), title: "Refreshing Beverages", alt: "Three colorful drinks on a metal table" },
  { src: u("27607ffa-b2a9-4573-a3f4-26788f2c19b3"), title: "Authentic Mexican Cuisine", alt: "Variety of authentic Mexican dishes and drinks" },
  { src: u("3b7df14d-b99e-4a76-bd60-b088f1a35ca7"), title: "Homemade Soups", alt: "Chicken soup with fresh vegetables and herbs" },
  { src: u("503ff9ab-390e-4670-833e-e97319d55620"), title: "Cozy Outdoor Dining", alt: "Outdoor dining area with fire pit and El Ranchito sign" },
  { src: u("a3be50dc-364a-4135-9274-e34b4c5c70d1"), title: "Warm Interior Ambiance", alt: "Interior dining room with fireplace and rustic decor" },
  { src: u("45f6ffc9-5292-4179-8ff0-2132b3b45c3c"), title: "Authentic Seafood Specialties", alt: "Grilled seafood platter with rice, vegetables and traditional sides" },
];

export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
};

export type MenuGroup = {
  title: string;
  note?: string;
  items: MenuItem[];
};

export type Menu = {
  id: string;
  label: string;
  blurb: string;
  groups: MenuGroup[];
};

export const menus: Menu[] = [
  {
    id: "brunch-food",
    label: "Brunch Food",
    blurb: "Served weekends. All Mexican dishes come with your choice of rice and beans or fresh fruit.",
    groups: [
      {
        title: "Mexican Dishes",
        note: "All Mexican dishes are served with your choice of rice and beans or fresh fruit.",
        items: [
          {
            name: "Quesadilla Egg-celente",
            description:
              "A giant flour tortilla stuffed with scrambled eggs, cheese, avocado, Ortega chiles and tomatoes. Garnished with guacamole and sour cream.",
            price: "20",
          },
          {
            name: "Breakfast Burrito",
            description:
              "Stuffed with chicken or chorizo, salsa fresca, eggs and rice. Garnished with guacamole and sour cream.",
            price: "20",
          },
          {
            name: "Huevos con Chorizo",
            description: "Farm fresh eggs scrambled with authentic mildly spiced Mexican sausage.",
            price: "20",
          },
          {
            name: "Machaca con Huevos",
            description:
              "Eggs scrambled with shredded chicken or beef, fresh bell peppers, onions and tomatoes. Served with warm tortillas.",
            price: "20",
          },
          {
            name: "Huevos Rancheros",
            description: "Two eggs over easy, smothered in salsa ranchera and melted cheese.",
            price: "19",
          },
          {
            name: "Breakfast Tacos",
            description:
              "Crispy or soft tacos filled with your choice of chorizo, shredded beef or shredded chicken, cooked with eggs and pico de gallo. Topped with cheese.",
            price: "20",
          },
          {
            name: "Mexican Chilaquiles",
            description:
              "Corn tortilla strips sautéed in a crisp toasted red chile and garlic sauce. Served with two fresh eggs any style.",
            price: "19",
          },
          {
            name: "Omelet Mexican Style",
            description:
              "Farm fresh eggs scrambled with bell peppers, onions and tomatoes. Covered in salsa ranchera and melted cheese.",
            price: "19",
          },
          {
            name: "Steak & Eggs",
            description:
              "Delicious grilled carne asada served with two farm fresh eggs cooked any style. Served with warm tortillas.",
            price: "24",
          },
          {
            name: "Menudo",
            description: "Served with all of the trimmings.",
            price: "17.5",
          },
        ],
      },
      {
        title: "Kids Breakfast",
        note: "Served with your choice of rice and beans, French fries or fresh fruit. 11.5",
        items: [
          {
            name: "Mini Egg Quesadilla",
            description: "Kids quesadilla filled with scrambled eggs and cheese.",
            price: "11.5",
          },
          {
            name: "Mini Breakfast Burrito",
            description: "Kids mini burrito filled with eggs and cheese.",
            price: "11.5",
          },
        ],
      },
    ],
  },
  {
    id: "brunch-drinks",
    label: "Brunch Drinks",
    blurb: "Mimosas, micheladas and the margaritas our family is known for.",
    groups: [
      {
        title: "Breakfast Drinks",
        items: [
          {
            name: "Champagne or Mimosa",
            description: "Add pomegranate or guava for 50¢.",
            price: "7",
          },
          {
            name: "Absolut Peppar Bloody Mary",
            description: "Our own delicious house recipe!",
            price: "11.5",
          },
          {
            name: "Mexican Michelada",
            description:
              "A Tajín rimmed pint glass, half filled with fresh lime juice, michelada mix and ice. Served with a Modelo Especial draft.",
            price: "9",
          },
        ],
      },
      {
        title: "Skinny Cocktails",
        items: [
          {
            name: "Cazadores Skinny Margarita",
            description:
              "Made with Cazadores Blanco, one of the Avila family's favorite tequilas, fresh lime juice and agave nectar.",
            price: "15",
          },
          {
            name: "Organic Margarita",
            description:
              "Señora Leona organic blanco tequila, organic agave nectar, fresh squeezed lime juice and soda water.",
            price: "16",
          },
          {
            name: "Skinny Cucumber Vodka Margarita",
            description:
              "Cucumber vodka, our signature skinny margarita mix made with fresh lime juice, cucumber slices and agave nectar.",
            price: "15",
          },
          {
            name: "Avila's Guava Margarita",
            description:
              "Our signature skinny margarita made with Cazadores Blanco tequila, lime juice, agave nectar and 100% guava nectar.",
            price: "15",
          },
          {
            name: "Skinny Coconut Margarita",
            description: "1800 Coconut tequila, pineapple juice and our signature skinny margarita mix.",
            price: "15",
          },
        ],
      },
      {
        title: "Popular Cocktails",
        items: [
          {
            name: "Patrón Chambord Margarita",
            description:
              "Our famous skinny margarita made with Patrón Silver, topped with a splash of Chambord black raspberry liqueur.",
            price: "16",
          },
          {
            name: "Bacardi Mojito",
            description:
              "Bacardi Silver rum, fresh mint leaves, fresh lime juice, simple syrup and soda water. Classic recipe, classic taste.",
            price: "15",
          },
          {
            name: "Cazadores Pink Cadillac Margarita",
            description:
              "Cazadores Silver tequila, fresh lime juice, agave nectar and a splash of cranberry juice. Shaken with fresh lemons, limes and oranges. Prepared \"Cadillac\" style.",
            price: "15.5",
          },
          {
            name: "Sangria",
            description: "A classic red sangria made with merlot, brandy and a mixture of juices and fruit.",
            price: "14.5",
          },
          {
            name: "Victor's Old Fashioned",
            description: "Maker's Mark bourbon, old fashioned syrup and bitters.",
            price: "15",
          },
          {
            name: "Coronarita",
            description: "Our famous house margarita topped with a Coronita. Yum!",
            price: "19",
          },
          {
            name: "Mexican Mule",
            description: "Made with Cazadores Blanco tequila, fresh lime juice and ginger beer.",
            price: "15",
          },
          {
            name: "California Cadillac",
            description:
              "Our signature skinny margarita made with Cazadores Blanco tequila, fresh lime juice and agave nectar, prepared \"Cadillac\" style.",
            price: "15.5",
          },
        ],
      },
    ],
  },
];


export const hours = [
  "Sunday 11 AM–9 PM",
  "Monday 11 AM–9 PM",
  "Tuesday 11 AM–9 PM",
  "Wednesday 11 AM–9 PM",
  "Thursday 11 AM–9 PM",
  "Friday 11 AM–10 PM",
  "Saturday 11 AM–10 PM",
];
