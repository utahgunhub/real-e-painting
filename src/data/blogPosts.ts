export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-you-repaint-your-utah-home",
    title: "How Often Should You Repaint Your Utah Home?",
    excerpt:
      "Utah's intense sun, dry air, and temperature swings take a toll on paint. Here's how to know when it's time for a fresh coat inside and out.",
    category: "Tips",
    date: "June 12, 2026",
    readTime: "5 min read",
    image: "/gallery/gallery-1.png",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "A fresh coat of paint is one of the most affordable ways to protect and refresh your home — but how do you know when it's actually time to repaint? Here in Utah, our climate plays a big role. Intense high-altitude sun, dry air, and dramatic temperature swings between seasons can wear paint down faster than you might expect.",
      },
      {
        type: "heading",
        text: "Exterior Paint: Every 5 to 10 Years",
      },
      {
        type: "paragraph",
        text: "Most Utah homes need their exterior repainted every 5 to 10 years, depending on the siding material, the quality of the previous paint job, and how much direct sun the home gets. South- and west-facing walls take the most UV damage and often fade or chalk first.",
      },
      {
        type: "paragraph",
        text: "Watch for these signs that your exterior is due for a refresh:",
      },
      {
        type: "list",
        items: [
          "Fading or chalky color, especially on sun-exposed walls",
          "Cracking, peeling, or bubbling paint",
          "Gaps in caulk or exposed, weathered wood",
          "Stucco hairline cracks letting in moisture",
        ],
      },
      {
        type: "heading",
        text: "Interior Paint: Every 5 to 7 Years",
      },
      {
        type: "paragraph",
        text: "Interior paint lasts longer since it's protected from the elements, but high-traffic areas wear faster. Hallways, kids' rooms, kitchens, and bathrooms tend to need attention sooner thanks to scuffs, moisture, and cleaning. Ceilings can often go a decade or more.",
      },
      {
        type: "heading",
        text: "When in Doubt, Get a Free Estimate",
      },
      {
        type: "paragraph",
        text: "If your home is showing any of these signs — or you simply want a new look — Real E Painting offers free, no-obligation estimates. We'll walk your property, assess the surfaces, and give you an honest recommendation on what needs attention now versus what can wait.",
      },
    ],
  },
  {
    slug: "interior-vs-exterior-paint-whats-the-difference",
    title: "Interior vs. Exterior Paint: What's the Difference?",
    excerpt:
      "Not all paint is created equal. Learn why using the right product for each surface protects your investment and looks better longer.",
    category: "Interior",
    date: "June 2, 2026",
    readTime: "4 min read",
    image: "/gallery/gallery-2.png",
    content: [
      {
        type: "paragraph",
        text: "At first glance, a gallon of interior paint and a gallon of exterior paint look identical. But what's inside the can is engineered very differently — and using the wrong one can cost you down the road.",
      },
      {
        type: "heading",
        text: "Exterior Paint Is Built to Weather",
      },
      {
        type: "paragraph",
        text: "Exterior paints contain additives and flexible resins that let them expand and contract as temperatures swing — critical in Utah, where a single day can go from freezing to warm. They also include UV blockers and mildewcides to resist fading and growth from sun and moisture.",
      },
      {
        type: "heading",
        text: "Interior Paint Is Built for Living Spaces",
      },
      {
        type: "paragraph",
        text: "Interior paint prioritizes a smooth finish, easy cleaning, and low odor. Modern low-VOC interior paints release far fewer fumes, making them safer for enclosed rooms. They're formulated to resist scuffs and stand up to regular wiping without breaking down.",
      },
      {
        type: "heading",
        text: "Why You Shouldn't Mix Them Up",
      },
      {
        type: "list",
        items: [
          "Interior paint used outdoors will fade, crack, and fail quickly",
          "Exterior paint indoors can release more fumes and isn't designed for the finish you want inside",
          "The right product in the right place simply lasts longer and looks better",
        ],
      },
      {
        type: "paragraph",
        text: "Choosing the correct product is part of the value a professional brings. At Real E Painting, we match the right paint and finish to every surface so your project holds up for years.",
      },
    ],
  },
  {
    slug: "choosing-the-perfect-color-palette",
    title: "Choosing the Perfect Color Palette for Your Space",
    excerpt:
      "From warm neutrals to bold accents, here's how to pick colors that fit your home's light, style, and personality.",
    category: "Color",
    date: "May 21, 2026",
    readTime: "6 min read",
    image: "/gallery/gallery-4.png",
    content: [
      {
        type: "paragraph",
        text: "Color sets the entire mood of a room, yet choosing it is where many homeowners freeze up. The good news: with a simple, step-by-step approach, you can land on a palette you'll love for years.",
      },
      {
        type: "heading",
        text: "Start With What Stays",
      },
      {
        type: "paragraph",
        text: "Look at the things you aren't changing — flooring, countertops, large furniture, and fixed finishes. Pull your palette from those undertones so everything feels intentional and cohesive rather than fighting for attention.",
      },
      {
        type: "heading",
        text: "Pay Attention to Light",
      },
      {
        type: "paragraph",
        text: "Utah gets a lot of bright, natural light, and it changes a color dramatically throughout the day. North-facing rooms read cooler, while south-facing rooms feel warm and bright. Always test colors in the actual room before committing.",
      },
      {
        type: "heading",
        text: "Use the 60-30-10 Rule",
      },
      {
        type: "list",
        items: [
          "60% — a dominant neutral for walls and large surfaces",
          "30% — a secondary color for furniture, cabinetry, or an accent wall",
          "10% — a bold pop in décor, trim, or a feature piece",
        ],
      },
      {
        type: "heading",
        text: "Always Sample First",
      },
      {
        type: "paragraph",
        text: "Paint large swatches on a few walls and live with them for a couple of days. Colors shift against your lighting and existing finishes, and a sample saves you from repainting a whole room.",
      },
      {
        type: "paragraph",
        text: "Not sure where to start? Real E Painting helps with color consultation as part of our process, so you can feel confident before the first coat goes on.",
      },
    ],
  },
  {
    slug: "benefits-of-professional-cabinet-refinishing",
    title: "The Benefits of Professional Cabinet Refinishing",
    excerpt:
      "Refinishing your cabinets costs a fraction of replacement and delivers a stunning, like-new kitchen. Here's what to expect.",
    category: "Interior",
    date: "May 9, 2026",
    readTime: "5 min read",
    image: "/gallery/gallery-5.png",
    content: [
      {
        type: "paragraph",
        text: "Dated cabinets can make an entire kitchen feel old — but ripping them out and replacing them is expensive and disruptive. Cabinet refinishing gives you that fresh, modern look for a fraction of the cost.",
      },
      {
        type: "heading",
        text: "A Fraction of the Cost of Replacement",
      },
      {
        type: "paragraph",
        text: "New custom cabinetry can run tens of thousands of dollars. Refinishing your existing, structurally sound cabinets delivers a dramatic transformation at a small percentage of that price — making it one of the highest-return updates in any kitchen.",
      },
      {
        type: "heading",
        text: "Why Professional Results Matter",
      },
      {
        type: "paragraph",
        text: "Cabinets take more abuse than almost any surface in your home. Without proper cleaning, sanding, priming, and a durable topcoat, DIY finishes chip and peel fast. A professional process ensures a smooth, hard-wearing finish that stands up to daily use.",
      },
      {
        type: "list",
        items: [
          "Thorough degreasing and surface prep for lasting adhesion",
          "Smooth, even coats with minimal brush marks",
          "Durable finishes that resist chips, moisture, and wear",
          "A clean, contained work process that protects your home",
        ],
      },
      {
        type: "paragraph",
        text: "Whether you want crisp white shaker cabinets or a rich, modern tone, Real E Painting can refinish your cabinets and built-ins to look like new.",
      },
    ],
  },
  {
    slug: "epoxy-floors-durable-beauty",
    title: "Epoxy Floors: Durable Beauty for Garages & More",
    excerpt:
      "Epoxy coatings turn dull concrete into a tough, easy-to-clean surface. Discover where epoxy shines around your property.",
    category: "Tips",
    date: "April 28, 2026",
    readTime: "4 min read",
    image: "/gallery/gallery-6.png",
    content: [
      {
        type: "paragraph",
        text: "If your garage floor is stained, dusty, or cracked, an epoxy coating can completely transform it. Epoxy bonds to concrete to create a smooth, glossy, and incredibly durable surface that's built to last.",
      },
      {
        type: "heading",
        text: "Tough Enough for Daily Use",
      },
      {
        type: "paragraph",
        text: "Epoxy resists oil, chemicals, hot tires, and heavy impact — the exact things that destroy bare concrete. Once cured, it's easy to sweep and wipe clean, so spills and dirt don't stand a chance.",
      },
      {
        type: "heading",
        text: "More Than Just Garages",
      },
      {
        type: "list",
        items: [
          "Garage floors that look showroom-clean",
          "Basements and workshops that resist moisture and dust",
          "Utility and laundry rooms that wipe clean easily",
          "Commercial spaces that need a tough, professional finish",
        ],
      },
      {
        type: "heading",
        text: "Prep Is Everything",
      },
      {
        type: "paragraph",
        text: "A long-lasting epoxy floor depends on proper surface preparation — cleaning, etching or grinding, and repairing cracks before coating. Skipping these steps is the number one reason DIY epoxy fails. Real E Painting handles the full process so your floor cures hard and stays beautiful.",
      },
    ],
  },
  {
    slug: "prepping-your-exterior-for-utah-winters",
    title: "Prepping Your Home's Exterior for Utah Winters",
    excerpt:
      "A quality exterior paint job is your first line of defense against snow and moisture. Learn how to prep before the cold hits.",
    category: "Exterior",
    date: "April 14, 2026",
    readTime: "5 min read",
    image: "/gallery/gallery-7.png",
    content: [
      {
        type: "paragraph",
        text: "Utah winters are beautiful, but snow, ice, and freeze-thaw cycles are hard on a home's exterior. A well-maintained, properly painted exterior is your best defense against moisture damage when the temperature drops.",
      },
      {
        type: "heading",
        text: "Seal Out Moisture Before the Freeze",
      },
      {
        type: "paragraph",
        text: "Water is the enemy. When it seeps into cracks and then freezes, it expands and widens the damage. Inspect your siding, trim, and stucco for cracks and gaps, and make sure caulking around windows and doors is intact before winter arrives.",
      },
      {
        type: "heading",
        text: "Time It Right",
      },
      {
        type: "paragraph",
        text: "Exterior paint needs mild, dry conditions to cure properly — generally above 50°F. That makes late summer and early fall the ideal window in Utah to repaint before the cold sets in. Painting too late in the season risks a finish that won't bond correctly.",
      },
      {
        type: "heading",
        text: "A Pre-Winter Checklist",
      },
      {
        type: "list",
        items: [
          "Inspect and repair cracks in siding, trim, and stucco",
          "Re-caulk gaps around windows, doors, and joints",
          "Clean off dirt, mildew, and chalking",
          "Touch up or repaint worn, sun-faded surfaces",
        ],
      },
      {
        type: "paragraph",
        text: "Want your home buttoned up before the first snow? Schedule a free estimate with Real E Painting and we'll help protect your exterior all winter long.",
      },
    ],
  },
];

export const getPostBySlug = (slug?: string) =>
  blogPosts.find((post) => post.slug === slug);
