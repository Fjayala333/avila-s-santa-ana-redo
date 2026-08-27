import logoHd from "../assets/avilas-logo-transparent.png.asset.json";

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
    href: "#our-stories",
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

export const cateringGallery = [
  { src: tray1.url, alt: "Catering enchilada tray with a fresh chicken taco salad" },
  { src: tray2.url, alt: "Party platter with burritos, flautas and tacos" },
  { src: tray3.url, alt: "Full tray of cheese-topped enchiladas in red sauce" },
  { src: tray4.url, alt: "Catering spread with fajitas, salad, enchiladas and flautas" },
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
  groups?: MenuGroup[];
  menus?: Menu[];
};

export const menus: Menu[] = [
  {
    id: "all-day-menu",
    label: "All Day Menu",
    blurb: "\n",
    menus: [
      {
        id: "all-day-food",
        label: "All Day Food",
        blurb: "Appetizers, soups, salads, tacos, enchiladas and family favorites served all day.",
        groups: [
          {
            title: "Appetizers",
            items: [
              { name: "Guacamole Fresco", description: "A chunky blend of ripe avocados, tomatoes, cilantro and onions with a touch of garlic and fresh lime. Topped with pico de gallo and shredded cheese.", price: "16" },
              { name: "Nachos Especiál", description: "Choice of shredded chicken or shredded beef, topped with Salsa Ranchera, melted cheese, sour cream, and guacamole.", price: "19" },
              { name: "Quesadilla", description: "A grande flour tortilla with a blend of cheeses. Served with guacamole and sour cream.", price: "16" },
              { name: "Avila's Appetizer", description: "A combination of bite-size taquitos, flautas, tacos, and quesadillas. Served with guacamole and sour cream.", price: "28" },
              { name: "Ceviche", description: "Wild caught Mazatlán shrimp or white fish marinated in lime juice, tossed with fresh tomatoes, onions, and cilantro. Topped with avocado and served with tostada shells. With wild caught shrimp 25.", price: "23" },
              { name: "Shrimp Cocktail", description: "Succulent shrimp, fresh squeezed lime juice, cilantro, and fresh avocado in a tomato-based Mexican style cocktail.", price: "25" },
            ],
          },
          {
            title: "Botana Platters",
            note: "Served with sliced avocados, fresh tomatoes, onions, jalapeños, pico de gallo, lemon slices, and warm tortillas to make your own tacos! An El Ranchito Original Recipe. Add Mexican rice and beans for 4.",
            items: [
              { name: "Shrimp Botana", description: "Large wild caught Mazatlán shrimp in Avila's special garlic butter sauce.", price: "44" },
              { name: "Fiesta Botana — A Local Favorite", description: "Large wild caught Mazatlán shrimp sautéed in Avila's special garlic butter sauce, delicious crispy chunks of lean pork and grilled chicken.", price: "46" },
            ],
          },
          {
            title: "Soups & Salads",
            items: [
              { name: "Mamá Avila's Soup", description: "An El Ranchito Favorite! A large bowl of chicken breast and rice soup, garnished with fresh avocado, cilantro, onions, and tomatoes. Served with your choice of warm tortillas. A meal in itself! Add a Condiment Plate for 3.5.", price: "17.5" },
              { name: "Tostada", description: "Shredded fresh lettuce on a crispy corn tortilla smothered with beans. Garnished with cheese, pico de gallo, guacamole, and sour cream. Choice of shredded chicken, grilled chicken or shredded beef.", price: "20" },
              { name: "Avila's Soup and Salad", description: "A bowl of our famous Avila's Soup with a fresh green salad. Tortillas served on request.", price: "20" },
              { name: "Grande Taco Salad", description: "A flaky flour tortilla shell filled with lettuce, beans, and your choice of shredded chicken, shredded beef, or grilled chicken. Topped with pico de gallo, cheese, guacamole, and sour cream.", price: "20" },
              { name: "Tacos and Caldo", description: "A cup of our famous Avila's Soup served with two crispy tacos, taquitos, or chicken flautas. Substitute a salad for the cup of soup at no extra charge.", price: "22" },
              { name: "Azteca Chicken Salad", description: "Charbroiled chicken lightly tossed with cilantro-lime dressing, avocado, black beans, and corn relish on crisp lettuce, topped with tortilla crouton strips.", price: "20" },
              { name: "Albondigas Soup", description: "Seasoned meatballs simmered with garden fresh vegetables. Served with your choice of warm tortillas.", price: "17.5" },
              { name: "Grilled Chicken Salad", description: "Seasoned warm grilled chicken, fresh lettuce, tomatoes, cheese, and sliced avocado. Served barbeque style upon request.", price: "20" },
              { name: "Menudo", description: "A traditional homemade beef tripe soup with our special El Ranchito seasoning. Served with your choice of warm tortillas. Saturday and Sunday only.", price: "17.5" },
            ],
          },
          {
            title: "Favoritos",
            items: [
              { name: "Grilled Fiesta Platter", description: "Fresh seasoned mushrooms, bell peppers, onions, zucchini, and tomatoes grilled with your choice of sliced chicken or steak. Topped with black beans. Substitute wild caught shrimp, add 4.", price: "25" },
              { name: "Chingolingas", description: "A flaky pastry filled with chicken served with rice and beans, garnished with guacamole and sour cream. Absolutely delicious!", price: "21" },
              { name: "Mayan Burrito", description: "Filled with shredded chicken and rice. Smothered with Tomatillo salsa and melted cheese. Garnished with sour cream.", price: "21" },
              { name: "Quesadilla Avila", description: "A large grilled flour tortilla filled with a blend of cheeses and shredded chicken or beef, garnished with guacamole and sour cream. Substitute wild caught shrimp, add 4.", price: "21" },
              { name: "Fresco Burrito", description: "Choice of grilled chicken, steak, or white fish, filled with lettuce, salsa fresca, rice, guacamole, cheese, and Tomatillo sauce. Substitute wild caught shrimp, add 4.", price: "21" },
              { name: "Azteca Burrito", description: "Filled with shredded chicken, beef, or chile verde and beans. Smothered with Salsa Ranchera and melted cheese. Garnished with guacamole.", price: "21" },
              { name: "California Chicken", description: "Grilled chicken breast simmered in Tomatillo sauce, topped with Ortega chiles and green onions. Served with Mexican rice and frijoles frescos.", price: "26" },
              { name: "Baja Bowl", description: "Your choice of grilled chicken breast, steak, or white fish over rice and black beans, with salsa fresca, avocado, cilantro, and Tomatillo salsa. Your choice of warm tortillas. Substitute wild caught shrimp, add 4.", price: "21" },
            ],
          },
          {
            title: "Tradicionales",
            note: "Served with Mexican rice and beans with melted cheese. Garnished with guacamole and your choice of warm tortillas. Frijoles frescos or black beans upon request.",
            items: [
              { name: "Carnitas", description: "Delicious chunks of lean pork, marinated in lemon and garlic. Tender and juicy inside, crispy outside.", price: "26" },
              { name: "Steak or Chicken Picado", description: "Tender pieces of steak or chicken breast with bell peppers, savory onions, garden fresh tomatoes, and our special El Ranchito seasoning. Chicken 26, Steak 27.", price: "26" },
              { name: "Shrimp al Mojo de Ajo", description: "Large Mazatlán shrimp sautéed in Avila's special garlic butter sauce.", price: "28" },
              { name: "Carne Asada", description: "Tender sliced U.S.D.A. grilled rib eye steak prepared in the authentic Mexican style.", price: "28" },
              { name: "Camarones a la Diabla", description: "Large wild caught Mazatlán shrimp sautéed in a spicy toasted red chile and garlic sauce.", price: "28" },
              { name: "Pepe's Grill Platter", description: "Steak or chicken breast sliced over a bed of grilled onions on a sizzling skillet, topped with our special blackened Tomatillo salsa! Substitute wild caught shrimp, add 4.", price: "28" },
              { name: "Sizzling Fajitas", description: "A medley of grilled fresh vegetables on a sizzling skillet. Chicken or Steak 27, Large Mazatlán Shrimp 28, Mixed Vegetables 22.", price: "27" },
              { name: "Asada and Shrimp al Mojo de Ajo", description: "Tender sliced U.S.D.A. steak and large wild caught Mazatlán shrimp in Avila's special garlic butter sauce.", price: "28" },
              { name: "Chicken and Mole", description: "Chicken breast simmered in Mamá Avila's Mole sauce, served with sour cream. Absolutely delicious!", price: "26" },
              { name: "Chile Verde", description: "Chunks of lean pork, marinated in a green chile salsa. One of our favorites!", price: "26" },
              { name: "Chile Colorado", description: "Strips of steak simmered to perfection in a tasty red chile salsa.", price: "26" },
              { name: "Camarones Rancheros", description: "Large wild caught Mazatlán shrimp simmered in a tomato-based salsa with fresh bell peppers, tomatoes, and onions.", price: "28" },
            ],
          },
          {
            title: "Combinaciones",
            note: "Create your own combination of Mexico's favorite dishes. Served with Mexican rice and beans with melted cheese. One Item Combo 19 · Two Item Combo 22. Substitute shrimp, add 4 per item.",
            items: [
              { name: "Crispy Taco", description: "Traditional taco filled with shredded chicken or beef, lettuce, pico de gallo, and shredded cheese." },
              { name: "Soft Taco", description: "Grilled chicken, steak, or carnitas on a corn tortilla with pico de gallo, or white fish on a flour tortilla with cabbage and tartar sauce." },
              { name: "Flauta", description: "Flaky flour tortilla rolled with chicken. Served with guacamole and sour cream." },
              { name: "Taquito", description: "One crispy corn tortilla rolled with shredded chicken or beef, with guacamole and sour cream." },
              { name: "Enchilada", description: "Traditional style cheese, chicken, or beef enchilada covered with our authentic red salsa and melted cheese." },
              { name: "Enchilada de Tomatillo", description: "Filled with chicken and covered with Tomatillo Salsa and melted cheese, served with sour cream." },
              { name: "Chile Relleno — House Specialty!", description: "Fresh roasted chile stuffed with cheese, dipped in egg batter. Covered with Salsa Ranchera and melted cheese." },
              { name: "Tamale", description: "Shredded chicken tamale topped with our Tomatillo Salsa and melted cheese." },
              { name: "Guanajuato", description: "Two flautas or taquitos.", price: "19.5" },
            ],
          },
          {
            title: "Local Favorites",
            items: [
              { name: "Enchiladas Camarones Rancheros", description: "Two shrimp enchiladas covered with melted cheese and Ranchera sauce. Served with Mexican rice, beans, and sour cream.", price: "27" },
              { name: "Chimi-Changa", description: "A crispy burrito stuffed with shredded chicken, shredded beef, or chile verde with beans. Topped with sour cream. Served with rice and beans.", price: "21" },
              { name: "Mole Enchiladas", description: "Two chicken enchiladas in our delicious mole sauce. Served with rice, beans and sour cream.", price: "24" },
              { name: "Tacos de Papa", description: "Two crispy potato tacos seasoned with Ortega chilies, topped with lettuce, pico de gallo, and jack cheese. Served with frijoles frescos and rice.", price: "22" },
              { name: "Seafood Tacos", description: "Two tacos filled with wild caught Mazatlán shrimp sautéed in garlic butter, or grilled Mahi Mahi with cabbage, cilantro, and chipotle aioli. Served with rice and black beans.", price: "26" },
              { name: "Veggie Chile Relleno", description: "A fresh grilled pasilla chile stuffed with fresh vegetables, topped with ranchera sauce and jack cheese. Served with rice and frijoles frescos. With grilled chicken, add 2.", price: "21" },
              { name: "Baja Combo", description: "Shrimp enchilada topped with Salsa Ranchera and a fish taco made with fresh tortilla. Served with Mexican rice and salad.", price: "27" },
              { name: "Tampiqueña", description: "Tender U.S.D.A. steak grilled in the authentic Mexican style alongside a delicious cheese enchilada. Served with Mexican rice, beans, and guacamole.", price: "27" },
            ],
          },
          {
            title: "Light Cuisine",
            note: "Buen Provecho to your health! Lean in calories but not in flavor.",
            items: [
              { name: "Low Carb Fajitas", description: "Your choice of chicken or steak grilled with mushrooms, zucchini, bell peppers, tomatoes, and onions. Served with frijoles frescos and a salad. Substitute large wild caught shrimp, add 3.", price: "27" },
              { name: "Light Tostada", description: "Tender grilled chicken and frijoles frescos on a mound of shredded lettuce, topped with tomatoes, low-fat cheese, and guacamole. Light dressing upon request.", price: "20" },
              { name: "Pescado con Vegetables", description: "Lightly seasoned grilled fish served with grilled vegetables and black beans. Great for low carb diets!", price: "26" },
              { name: "Light Enchiladas", description: "Two chicken enchiladas with all white meat chicken and low-fat cheese. Your choice of Tomatillo salsa or salsa roja. Served with frijoles frescos and a salad.", price: "22" },
              { name: "Skinny Tacos", description: "Charbroiled chicken, steak, carnitas, or white fish wrapped in romaine lettuce, topped with pico de gallo and cheese. Served with Mexican rice and black beans.", price: "22" },
            ],
          },
          {
            title: "Breakfast",
            note: "Served with Mexican rice and beans with melted cheese. Frijoles frescos or black beans upon request. Available all day and night!",
            items: [
              { name: "Huevos Rancheros", description: "Two eggs over easy, smothered in Salsa Ranchera and melted cheese.", price: "19" },
              { name: "Steak & Eggs", description: "Delicious grilled U.S.D.A. rib eye steak served with two farm fresh eggs cooked any style. Garnished with guacamole.", price: "24" },
              { name: "Huevos con Chorizo", description: "Farm fresh eggs scrambled with authentic mildly spiced Mexican sausage.", price: "20" },
              { name: "Machaca con Huevos", description: "Eggs scrambled with shredded chicken or beef, fresh bell peppers, onions, and tomatoes.", price: "20" },
              { name: "Breakfast Burrito", description: "Stuffed with chicken or chorizo, salsa fresca, eggs, and rice. Garnished with guacamole and sour cream.", price: "20" },
              { name: "Omelet Mexican Style", description: "Farm fresh eggs scrambled with bell peppers, onions, and tomatoes. Covered in Salsa Ranchera and melted cheese.", price: "19" },
              { name: "Omelet del Mar", description: "Scrambled eggs stuffed with sautéed shrimp, covered in Salsa Ranchera and melted cheese.", price: "24" },
            ],
          },
          {
            title: "A La Carte",
            items: [
              { name: "Crispy Taco", description: "Shredded chicken or beef in a crispy corn tortilla.", price: "8" },
              { name: "Enchilada", description: "Cheese, chicken or beef. Served with your choice of Salsa Roja or Tomatillo Salsa.", price: "9" },
              { name: "Flautas", description: "Flaky flour tortillas rolled with chicken. Served with sour cream and guacamole.", price: "13" },
              { name: "Taquitos", description: "Chicken or beef. Served with sour cream and guacamole.", price: "13" },
              { name: "Soft Taco", description: "Charbroiled chicken, carnitas, steak, or white fish.", price: "8.5" },
              { name: "Chile Relleno", description: "Fresh roasted chile stuffed with cheese, covered with Salsa Ranchera.", price: "13" },
              { name: "Avila's Burger", description: "A juicy cheeseburger topped with fresh avocado, tomato, onions, and lettuce on a toasted bun. Served with curly fries.", price: "20" },
            ],
          },
          {
            title: "Niños y Abuelitos",
            note: "Children under 10. Kids eat free on Wednesdays, 4pm–close — one kid's meal with each adult meal purchased. Not valid on holidays or takeout.",
            items: [
              { name: "Kids Meal", description: "Quesadilla, burrito, taco, enchilada, taquito, or chicken nuggets. Served with Mexican rice and beans or curly fries.", price: "11.5" },
              { name: "Toddler Plate", description: "Chicken, rice, and frijoles frescos.", price: "6.5" },
              { name: "Baby Rice", description: "Our famous rice with chicken broth. Get 'em started young!", price: "4" },
              { name: "Seniors", description: "For seniors 65 and over. Your choice of a taco, enchilada or taquito. Includes rice and beans!", price: "18" },
            ],
          },
          {
            title: "Desserts / Postres",
            items: [
              { name: "Fried Ice Cream", description: "A large scoop of vanilla ice cream covered in flaky crisps, smothered with chocolate syrup and whipped cream.", price: "11.5" },
              { name: "Flan", description: "Caramel custard covered in sweet syrup and topped with whipped cream. Absolutely delicious!", price: "10.5" },
              { name: "Bunuelitos de Mexico", description: "Crisp little Mexican pastries lavished with rich honey and cinnamon, topped with ice cream and peaches.", price: "15.5" },
              { name: "Churros", description: "Cinnamon-sugar covered pastry sticks served with vanilla ice cream topped with chocolate syrup and whipped cream.", price: "12.5" },
            ],
          },
          {
            title: "Beverages",
            note: "Coffee, iced tea, hot tea, and soft drinks — complimentary refills.",
            items: [
              { name: "Soft Drinks", description: "Coca-Cola, Diet Coke, Sprite, Cherry Coke, Ginger Ale, Pibb Xtra, Minute Maid Lemonade, Orange Fanta, Raspberry Iced Tea." },
              { name: "Aguas Frescas", description: "Horchata, Jamaica, Tamarindo. No refills." },
            ],
          },
        ],
      },
      {
        id: "all-day-drinks",
        label: "All Day Drinks",
        blurb: "Our signature margaritas and cocktails, made fresh to order.",
        groups: [
          {
            title: "Local Favorites",
            items: [
              { name: "Cazadores Skinny Margarita", description: "Made with Cazadores Blanco, one of the Avila Family's favorite tequilas. Fresh lime juice and agave nectar.", price: "15" },
              { name: "Tamarindo Chile Margarita", description: "A skinny style margarita made with Cazadores Blanco Tequila and Tamarindo puree with serrano chiles. Tastes like a Mexican candy.", price: "15" },
              { name: "Blood Orange Margarita", description: "Made with Cazadores Tequila Blanco and Blood Orange Margarita mix.", price: "15" },
            ],
          },
          {
            title: "Skinny Cocktails",
            items: [
              { name: "Skinny Jalapeño Margarita", description: "Tanteo Jalapeño Tequila, our signature Skinny Margarita mix, with fresh lime juice, fresh jalapeño and agave nectar. May also be made with Habanero Tequila upon request.", price: "15" },
              { name: "Skinny Cucumber Vodka Margarita", description: "Cucumber Vodka, our signature Skinny Margarita mix, with fresh lime juice, cucumber slices and agave nectar.", price: "15" },
              { name: "Organic Margarita", description: "Senora Leona Organic Blanco Tequila, organic agave nectar, fresh squeezed lime juice and soda water.", price: "16" },
              { name: "Avila's Guava Margarita", description: "Our signature Skinny Margarita made with Cazadores Blanco Tequila, lime juice, agave nectar and 100% guava nectar.", price: "15" },
              { name: "Skinny Coconut Margarita", description: "1800 Coconut Tequila, pineapple juice and our signature Skinny Margarita mix.", price: "15" },
            ],
          },
          {
            title: "Popular Cocktails",
            items: [
              { name: "Patrón Chambord Margarita", description: "Our famous Skinny Margarita made with Patrón Silver. Topped with a splash of Chambord Black Raspberry Liqueur.", price: "16" },
              { name: "Cazadores Pink Cadillac Margarita", description: "Cazadores Silver Tequila, fresh lime juice, agave nectar, and a splash of cranberry juice. Shaken with fresh lemons, limes and oranges. Prepared “Cadillac” style.", price: "15.5" },
              { name: "Victor's Old Fashioned", description: "Maker's Mark Bourbon, old fashioned syrup and bitters.", price: "15" },
              { name: "Mexican Mule", description: "Made with Cazadores Blanco Tequila, fresh lime juice and ginger beer.", price: "15" },
              { name: "Bacardi Mojito", description: "Bacardi Silver Rum, fresh mint leaves, fresh lime juice, simple syrup and soda water. Classic recipe, classic taste.", price: "15" },
              { name: "Sangria", description: "A classic red Sangria made with merlot, brandy and a mixture of juices and fruit.", price: "14.5" },
              { name: "Coronarita", description: "Our famous house margarita topped with a Coronita. Yum!", price: "19" },
              { name: "California Cadillac", description: "Our signature Skinny Margarita made with Cazadores Blanco Tequila, fresh lime juice, and agave nectar, prepared “Cadillac” style.", price: "15.5" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "brunch-menu",
    label: "Brunch Menu",
    blurb: "\n",
    menus: [
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
    ],
  },
  {
    id: "lunch-specials",
    label: "Lunch Specials",
    blurb: "Monday – Friday, 11 AM – 3 PM.",
    menus: [
      {
        id: "lunch-food",
        label: "LUNCH SPECIALS",
        blurb: "Monday – Friday, 11 AM – 3 PM.",
        groups: [
          {
            title: "Lunch Specials",
            items: [
              { name: "Avila's Soup", description: "A large bowl of our famous Avila's Soup. Served with fresh tortillas. Add a fresh green salad for $2.", price: "15" },
              { name: "Grande Taco Salad", description: "A flaky flour tortilla shell filled with lettuce, beans and your choice of shredded chicken, beef or grilled chicken. Topped with pico, cheese, guacamole and sour cream.", price: "17" },
              { name: "Azteca Chicken Salad", description: "Grilled marinated chicken in a cilantro-lime dressing served over a bed of fresh lettuce. Garnished with succulent fresh tomato, sliced avocado, black bean and corn relish. Topped with Mexican corn tortilla crouton chips.", price: "17" },
              { name: "Azteca Burrito", description: "Filled with shredded chicken, chile verde or beef and beans. Smothered with salsa ranchera and melted cheese. Garnished with guacamole.", price: "17" },
              { name: "Chile Relleno Burrito", description: "Filled with a fresh roasted chile stuffed with cheese, frijoles frescos and salsa fresca. Smothered with salsa ranchera and melted cheese. Garnished with guacamole.", price: "17" },
              { name: "Baja Bowl", description: "Your choice of grilled chicken breast, steak or white fish, over rice and black beans, served with salsa fresca, avocado, cilantro and tomatillo salsa. Your choice of warm tortillas. Substitute with wild caught shrimp add $4.", price: "18" },
              { name: "Tacos and Caldo", description: "A small bowl of our famous Avila's soup, served with two crispy tacos, taquitos or chicken flautas.", price: "18" },
              { name: "Jalisco", description: "Your choice of crispy taco, cheese enchilada or a tamale. Served with Mexican rice and beans.", price: "16" },
              { name: "Avocado Tacos", description: "Two soft tacos made with corn tortillas filled with fresh avocado, crisp lettuce, pico de gallo and cheese with a spicy ranch buffalo sauce served on the side. Served with Mexican rice and beans.", price: "17.5" },
              { name: "Light Enchiladas", description: "Two chicken enchiladas specially prepared with all white meat chicken and low-fat cheese. Your choice of salsa tomatillo or salsa roja. Served with frijoles frescos and a salad.", price: "18" },
              { name: "Sizzling Light Chicken Fajitas", description: "Thin strips of chicken sizzled with mushrooms, zucchini, bell peppers, tomatoes, onions and frijoles frescos. Served with salad.", price: "21.5" },
              { name: "Tampiqueña", description: "Tender sliced U.S.D.A. steak grilled in the authentic Mexican style alongside a delicious cheese enchilada. Served with Mexican rice and beans.", price: "22" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "happy-hour",
    label: "Happy Hour",
    blurb: "Cantina only, dine-in only. Monday–Friday, 3 PM – 7 PM. Available with the purchase of a beverage.",
    menus: [
      {
        id: "happy-hour-food",
        label: "Food",
        blurb: "Cantina only. Available with the purchase of a beverage. Dine-in only, 3 PM – 7 PM.",
        groups: [
          {
            title: "Appetizers",
            note: "$10 Menu unless priced",
            items: [
              {
                name: "2 Crispy Tacos",
                description:
                  "Your choice of shredded beef, chicken or potato tacos. For carnitas, grilled chicken or steak add $4.",
                price: "10",
              },
              {
                name: "2 Mini Burritos",
                description:
                  "Your choice of shredded beef and beans, chile verde and beans or chicken and rice burrito.",
                price: "10",
              },
              {
                name: "2 Flautas",
                description: "Shredded chicken or beef served with guacamole.",
                price: "10",
              },
              {
                name: "Nachos",
                description:
                  "Refried beans, salsa Ranchera, melted cheese, guacamole and sour cream. Add shredded chicken or beef $2.",
                price: "12.50",
              },
              {
                name: "Chicken Wings",
                description: "Choose BBQ or spicy sauce, served with assorted vegetables and ranch dressing.",
                price: "15",
              },
              {
                name: "Avila's Appetizer",
                description:
                  "A combination of nachos, small crispy tacos and chingolingas bites, served with guacamole and sour cream.",
                price: "19",
              },
            ],
          },
          {
            title: "Taco Tuesday",
            items: [
              {
                name: "Soft Tacos",
                description:
                  "Your choice of shredded beef, chicken or potato. For carnitas, grilled chicken or steak add $1.50.",
                price: "4.75",
              },
            ],
          },
        ],
      },
      {
        id: "happy-hour-drinks",
        label: "Drinks",
        blurb: "Monday – Friday, 3 PM – 7 PM. Cantina only.",
        groups: [
          {
            title: "Specialty Drinks",
            note: "$2 off during Happy Hour",
            items: [
              {
                name: "Skinny Coconut Margarita",
                description: "1800 Coconut tequila, pineapple juice and our signature skinny mix.",
                price: "15",
              },
              {
                name: "Bacardi Mojito",
                description:
                  "Bacardi silver rum, fresh mint leaves, fresh lime juice, simple syrup and soda water. Classic recipe, classic taste!",
                price: "15",
              },
              {
                name: "Avila's Guava Margarita",
                description:
                  "Our signature skinny margarita made with Cazadores Blanco tequila, fresh lime juice, agave nectar and 100% guava nectar.",
                price: "15",
              },
              {
                name: "Cazadores Skinny Margarita",
                description: "Cazadores Blanco tequila, fresh lime juice and agave nectar.",
                price: "15",
              },
              {
                name: "Skinny Cucumber Vodka Margarita",
                description: "Cucumber vodka, our signature skinny mix and fresh lime juice.",
                price: "15",
              },
            ],
          },
          {
            title: "Draft Beer",
            items: [
              { name: "Avila's House Amber", price: "6" },
              { name: "Modelo Especial, Pacifico & Dos XX Amber", price: "6.75" },
            ],
          },
          {
            title: "Margaritas",
            items: [
              { name: "House Margarita", price: "9" },
              { name: "House Fruit Margarita", price: "10" },
            ],
          },
          {
            title: "Well Drinks",
            items: [{ name: "Well Drinks", description: "Excludes martinis.", price: "8.50" }],
          },
        ],
      },
    ],
  },
];

export const cateringMenu: Menu[] = [
  {
    id: "party-packs",
    label: "Party Packs",
    blurb: "Two crowd-size bundles, ready to order as-is.",
    groups: [
      {
        title: "Packages",
        items: [
          {
            name: "Party Pack — Serves 10",
            price: "120",
            description:
              "10 each of Chicken Chingolinga Bites, Small Beef Tacos, Beef Flautas and Bean & Cheese Burritos, plus 16 oz guacamole, 16 oz salsa and a bag of chips.",
          },
          {
            name: "Family Pack — Serves 15",
            price: "190",
            description:
              "15 each of the same favorites, plus 2 pints salsa, 2 pints guacamole, 2 quarts rice & beans and 2 bags of chips.",
          },
          {
            name: "Azteca Chicken Salad",
            price: "50",
            description:
              "Suggested for 10–15 as a side. Grilled chicken, black beans, corn, red & green peppers, tortilla strips and cilantro-lime dressing.",
          },
        ],
      },
    ],
  },
  {
    id: "by-the-tray",
    label: "By the Tray",
    blurb: "Favoritos by the tray — order exactly what the group wants.",
    groups: [
      {
        title: "Favoritos by the Tray",
        items: [
          { name: "Small Crispy Tacos", price: "35", description: "Shredded beef or chicken, lettuce, pico de gallo and cheese. Per dozen." },
          { name: "Small Burritos, Bean & Cheese", price: "30", description: "Per dozen." },
          { name: "Small Burritos, Chicken & Rice", price: "32", description: "Per dozen." },
          { name: "Chingolinga Bites", price: "30", description: "Crispy flour tortilla stuffed with chicken. 15 bites." },
          { name: "Flautas or Taquitos", price: "30", description: "Choice of shredded beef or chicken. 24 pieces." },
          { name: "Enchiladas", price: "50", description: "Cheese, beef or chicken, with salsa roja, tomatillo or ranchera. Per dozen." },
          { name: "Cheese Quesadillas", price: "30", description: "Per dozen." },
          { name: "Churros", price: "30", description: "Per dozen." },
        ],
      },
    ],
  },
  {
    id: "fajita-bar",
    label: "Fajita Bar",
    blurb: "Order by the tray — half tray, suggested for 10.",
    groups: [
      {
        title: "Fajita & Carnitas Bar",
        items: [
          { name: "Chicken Fajitas", price: "55" },
          { name: "Steak Fajitas", price: "60" },
          { name: "Carnitas", price: "65" },
          {
            name: "Add to Fajitas",
            price: "30",
            description: "Two dozen tortillas, a pint of guacamole, a pint of cheese & pico de gallo.",
          },
          {
            name: "Add to Carnitas",
            price: "30",
            description: "Two dozen tortillas, a pint of guacamole, a pint of salsa negra, cilantro & onion.",
          },
        ],
      },
    ],
  },
  {
    id: "extras",
    label: "Extras",
    blurb: "Round out the order.",
    groups: [
      {
        title: "Extras & Add-Ons",
        items: [
          { name: "Bag of Chips", price: "8" },
          { name: "Guacamole, 8 oz", price: "12" },
          { name: "Guacamole, 16 oz", price: "20" },
          { name: "Our Famous Salsa, 8 oz", price: "6" },
          { name: "Our Famous Salsa, 16 oz", price: "10" },
          { name: "Pico de Gallo, 8 oz", price: "6" },
          { name: "Pico de Gallo, 16 oz", price: "10" },
          { name: "Mexican Rice, 16 oz", price: "8", description: "Serves 2–4." },
          { name: "Mexican Rice, 32 oz", price: "16", description: "Serves 5–8." },
          { name: "Beans, 16 oz", price: "8", description: "Regular, black or whole pinto." },
          { name: "Beans, 32 oz", price: "16", description: "Regular, black or whole pinto." },
          { name: "Plates, Forks & Napkins", price: "0.50 / person" },
          { name: "Disposable Serving Utensils", price: "1.00 each" },
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
