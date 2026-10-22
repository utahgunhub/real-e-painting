import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import ServiceFaq from "@/components/services/ServiceFaq";
import RelatedServices from "@/components/services/RelatedServices";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buildServiceSchema, useSeo } from "@/hooks/useSeo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";

const PATH = "/services/interior-painting";
const TITLE = "Interior House Painting in Utah | Real E Painting";
const DESCRIPTION =
  "Interior painting for Utah homes and businesses — walls, ceilings, doors, and trim with careful prep and a flawless finish. Free estimates: (435) 777-3508.";

const faqs = [
  {
    question: "How long does it take to paint a room?",
    answer:
      "Most standard bedrooms or living rooms take one day, including prep, two coats, and cleanup. Rooms with high ceilings, heavy repairs, or dramatic color changes can take a little longer — your estimate will spell out the timeline.",
  },
  {
    question: "Do I need to move my furniture before you arrive?",
    answer:
      "Clear out small items, décor, and anything fragile. We move larger furniture to the center of the room, cover it completely, and put everything back when we finish.",
  },
  {
    question: "Which paint sheen should I use for each room?",
    answer:
      "Flat or matte hides imperfections on ceilings and low-traffic walls. Eggshell is a great all-around choice for living areas and bedrooms. Satin holds up to scrubbing in kitchens, kids' rooms, and hallways. Semi-gloss is best for trim, doors, and bathrooms.",
  },
  {
    question: "Is the paint safe for kids and pets?",
    answer:
      "We use low-VOC and zero-VOC interior paints whenever possible, which keeps odors low and lets you use the room again much sooner.",
  },
  {
    question: "Do you repair drywall before painting?",
    answer:
      "Yes. Nail pops, dents, cracks, and small holes are patched and sanded before painting. Larger drywall damage and texture matching are also available as part of the same project.",
  },
  {
    question: "Can you help me choose colors?",
    answer:
      "Absolutely. We bring color samples, talk through your lighting and furnishings, and can apply test swatches on the wall so you can see the color in your own space before committing.",
  },
];

const schema = buildServiceSchema({
  name: "Interior Painting",
  serviceType: "Interior house painting",
  description: DESCRIPTION,
  path: PATH,
  faqs,
});

const rooms = [
  {
    id: "living",
    label: "Living Areas",
    heading: "Living rooms, family rooms & dens",
    copy:
      "The rooms you spend the most time in deserve colors that feel right morning and night. We pay attention to how Utah's bright natural light moves through your space and recommend finishes that look even and rich in every light.",
    items: ["Accent and feature walls", "Vaulted and two-story walls", "Fireplace surrounds and mantels", "Built-in shelving"],
  },
  {
    id: "kitchen",
    label: "Kitchens",
    heading: "Kitchens & dining rooms",
    copy:
      "Kitchens take a beating from steam, grease, and fingerprints. We degrease surfaces before painting and use scrubbable, stain-resistant finishes so your walls stay clean and fresh for years.",
    items: ["Degreasing and surface prep", "Scrubbable satin finishes", "Backsplash-adjacent walls", "Cabinet painting available"],
  },
  {
    id: "bedrooms",
    label: "Bedrooms",
    heading: "Bedrooms & nurseries",
    copy:
      "Calm, restful color with low-odor paint so you can sleep in the room the same night. For nurseries and kids' rooms, we use zero-VOC options and durable finishes that wipe clean.",
    items: ["Low- and zero-VOC paint", "Closets and closet doors", "Wipeable kids' room finishes", "Ceiling refresh"],
  },
  {
    id: "baths",
    label: "Bathrooms",
    heading: "Bathrooms & laundry rooms",
    copy:
      "Humidity is the enemy of paint in bathrooms. We use moisture- and mildew-resistant coatings and seal trim and edges carefully so peeling and bubbling don't come back.",
    items: ["Mildew-resistant paint", "Semi-gloss trim and doors", "Vanity and cabinet painting", "Ceiling stain blocking"],
  },
  {
    id: "stairs",
    label: "Stairs & Halls",
    heading: "Stairwells, hallways & entryways",
    copy:
      "High walls, tight corners, and constant traffic make stairwells and halls tricky to do well. We bring the right ladders and staging, and we use tougher finishes where hands and bags brush the walls every day.",
    items: ["Two-story stairwells", "Railings, spindles, and treads", "Entry doors and trim", "High-traffic scuff-resistant finishes"],
  },
];

const sheens = [
  { name: "Flat / Matte", use: "Ceilings, low-traffic walls", shine: 10 },
  { name: "Eggshell", use: "Living rooms, bedrooms", shine: 30 },
  { name: "Satin", use: "Kitchens, halls, kids' rooms", shine: 50 },
  { name: "Semi-Gloss", use: "Trim, doors, bathrooms", shine: 75 },
];

const prepSteps = [
  "Furniture moved and fully covered; floors protected with drop cloths",
  "Outlet and switch covers removed; fixtures masked",
  "Holes, dents, and cracks patched and sanded smooth",
  "Glossy surfaces scuff-sanded so new paint grips",
  "Stains and water marks sealed with blocking primer",
  "Edges caulked for crisp, gap-free lines at trim",
];

const InteriorPainting = () => {
  useSeo({ title: TITLE, description: DESCRIPTION, path: PATH, image: "/interior-painting.png", jsonLd: schema });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Split hero */}
        <section className="pt-36 md:pt-40 pb-16 md:pb-24">
          <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/services" className="hover:text-primary">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Interior Painting</span>
              </nav>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Interior Painting <span className="text-gradient">in Utah</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Walls, ceilings, doors, and more — a fresh interior coat that transforms any room with
                clean lines and a flawless finish. Real E Painting handles every room in your home,
                from a single accent wall to a full interior repaint.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="cta" size="xl">
                  <Link to="/contact">Get a Free Interior Estimate</Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <a href="tel:+14357773508">
                    <Phone className="w-5 h-5" />
                    (435) 777-3508
                  </a>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-6 relative">
              <img
                src="/interior-painting.png"
                alt="Freshly painted interior walls and trim in a Utah home"
                className="w-full aspect-[4/5] md:aspect-[5/4] lg:aspect-[4/5] object-cover rounded-[2rem] border border-border"
              />
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-background/90 backdrop-blur border border-border rounded-2xl px-5 py-4">
                <p className="text-xs uppercase tracking-wider text-brand-pink font-semibold mb-1">
                  Every interior project includes
                </p>
                <p className="text-sm text-foreground">Full prep · Two coats · Daily cleanup · Final walkthrough</p>
              </div>
            </div>
          </div>
        </section>

        {/* Room by room */}
        <section className="py-20 bg-section-alt">
          <div className="container-wide">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow-pill">Room by Room</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Every room has different needs
              </h2>
              <p className="text-muted-foreground text-lg">
                A bathroom and a living room shouldn't get the same paint. Here's how we approach the
                spaces in your home.
              </p>
            </div>

            <Tabs defaultValue="living">
              <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-8 justify-start">
                {rooms.map((room) => (
                  <TabsTrigger
                    key={room.id}
                    value={room.id}
                    className="rounded-full border border-border bg-card px-5 py-2 data-[state=active]:bg-gradient-brand data-[state=active]:text-primary-foreground data-[state=active]:border-transparent"
                  >
                    {room.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {rooms.map((room) => (
                <TabsContent key={room.id} value={room.id}>
                  <div className="grid md:grid-cols-2 gap-8 bg-card border border-border rounded-2xl p-8 md:p-10">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                        {room.heading}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{room.copy}</p>
                    </div>
                    <ul className="space-y-3 self-center">
                      {room.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-foreground">
                          <span className="w-7 h-7 rounded-full icon-accent flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Sheen guide */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow-pill">Finish Guide</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choosing the right sheen
              </h2>
              <p className="text-muted-foreground text-lg">
                Sheen changes how a color looks and how well it cleans. We'll recommend the right one
                for each surface.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sheens.map((sheen, index) => (
                <motion.div
                  key={sheen.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-card border border-border rounded-2xl p-5 flex flex-col"
                >
                  <div className="h-24 rounded-xl mb-4 bg-[hsl(273_45%_30%)] relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-white to-transparent"
                      style={{ opacity: sheen.shine / 220 }}
                    />
                  </div>
                  <h3 className="font-display font-bold text-foreground">{sheen.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{sheen.use}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Prep */}
        <section className="py-20 bg-section-alt">
          <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
              <img
                src="/gallery/gallery-10.png"
                alt="Freshly painted front door and trim inside a Utah entryway"
                className="rounded-2xl w-full h-72 md:h-96 object-cover"
                loading="lazy"
              />
              <img
                src="/gallery/gallery-5.png"
                alt="Painted stair risers and refinished treads in a Utah home"
                className="rounded-2xl w-full h-72 md:h-96 object-cover mt-10"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="eyebrow-pill">Our Prep Standard</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Prep is the paint job
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                A flawless finish comes from what happens before the first coat. Every Real E interior
                project follows the same checklist.
              </p>
              <ol className="space-y-4">
                {prepSteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-display font-bold text-brand-pink w-8 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <ServiceFaq
          heading={<>Interior painting <span className="text-gradient">questions</span></>}
          intro="Answers to what Utah homeowners ask us most before an interior project."
          faqs={faqs}
        />
        <RelatedServices currentSlug="interior-painting" />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default InteriorPainting;
