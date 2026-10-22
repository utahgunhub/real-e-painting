export interface ServicePageLink {
  slug: string;
  title: string;
  path: string;
  image: string;
  blurb: string;
}

export const SERVICE_PAGES: ServicePageLink[] = [
  {
    slug: "interior-painting",
    title: "Interior Painting",
    path: "/services/interior-painting",
    image: "/interior-painting.png",
    blurb: "Walls, ceilings, doors, and trim with clean lines and a flawless finish.",
  },
  {
    slug: "exterior-painting",
    title: "Exterior Painting",
    path: "/services/exterior-painting",
    image: "/exterior-painting.png",
    blurb: "Durable coatings built for Utah's sun, snow, and wind.",
  },
  {
    slug: "residential-painting",
    title: "Residential Painting",
    path: "/services/residential-painting",
    image: "/gallery/gallery-6.png",
    blurb: "Single rooms to whole-home makeovers, done with care.",
  },
  {
    slug: "commercial-painting",
    title: "Commercial Painting",
    path: "/services/commercial-painting",
    image: "/commercial-painting.png",
    blurb: "Offices, retail, and facilities painted on your schedule.",
  },
  {
    slug: "cabinet-painting",
    title: "Cabinets & Bookcases",
    path: "/services/cabinet-painting",
    image: "/cabinet.png",
    blurb: "Refinished cabinets and built-ins for a fraction of replacement cost.",
  },
  {
    slug: "limewash",
    title: "Limewash",
    path: "/services/limewash",
    image: "/interior-painting.png",
    blurb: "A breathable mineral finish with soft color and natural depth.",
  },
  {
    slug: "plaster",
    title: "Plaster",
    path: "/services/plaster",
    image: "/gallery/gallery-10.png",
    blurb: "Smooth or textured plaster that gives walls a handcrafted finish.",
  },
];

export const FEATURED_NAV_SERVICES = [
  { name: "Interior Painting", path: "/services/interior-painting" },
  { name: "Exterior Painting", path: "/services/exterior-painting" },
  { name: "Residential Painting", path: "/services/residential-painting" },
  { name: "Commercial Painting", path: "/services/commercial-painting" },
  { name: "Cabinet Staining", path: "/services/cabinet-painting" },
  { name: "Plaster", path: "/services/plaster" },
  { name: "Lime Wash", path: "/services/limewash" },
] as const;

export const OTHER_NAV_SERVICES = [
  { name: "Epoxy", path: "/services#epoxy" },
  { name: "Wallpaper", path: "/services#wallpaper" },
  { name: "Countertops & Bathtubs", path: "/services#countertops" },
  { name: "Trim Repair", path: "/services#trim-repair" },
  { name: "Drywall Repair & Texture", path: "/services#drywall" },
  { name: "Wood Staining", path: "/services#wood-staining" },
] as const;

export const getServicePath = (title: string) =>
  SERVICE_PAGES.find((service) => service.title === title)?.path;
