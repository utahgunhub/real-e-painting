import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import ServiceFaq from "@/components/services/ServiceFaq";
import RelatedServices from "@/components/services/RelatedServices";
import { Button } from "@/components/ui/button";
import { buildServiceSchema, useSeo } from "@/hooks/useSeo";
import { Link } from "react-router-dom";
import { CloudSnow, Droplets, Leaf, Sun, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const PATH = "/services/exterior-painting";
const TITLE = "Exterior House Painting in Utah | Real E Painting";
const DESCRIPTION =
  "Exterior painting built for Utah's sun, snow, and wind. Siding, stucco, trim, decks, and fences finished with durable coatings. Free estimates: (435) 777-3508.";

const faqs = [
  {
    question: "When is the best time to paint a house exterior in Utah?",
    answer:
      "Late spring through early fall is ideal. Most exterior paints need surface and air temperatures above roughly 35–50°F (depending on the product) and dry conditions while they cure. We schedule around forecasts so freezes and storms don't affect your finish.",
  },
  {
    question: "How long does an exterior paint job last in Utah?",
    answer:
      "With proper prep and quality coatings, most exteriors last many years. South- and west-facing walls fade faster because of Utah's high-altitude sun, so we use UV-resistant paints and pay extra attention to those sides.",
  },
  {
    question: "Can you paint stucco?",
    answer:
      "Yes. Stucco needs breathable masonry coatings and careful crack repair so moisture can escape. We clean, patch, and use products made specifically for stucco and masonry.",
  },
  {
    question: "Do I need to be home while you paint?",
    answer:
      "No. Most homeowners go about their day as usual. We'll just need access to exterior outlets and a water spigot, and we'll let you know which doors or windows to avoid on certain days.",
  },
  {
    question: "Do you stain decks and fences too?",
    answer:
      "Yes. We stain and seal decks, fences, pergolas, and wood doors, and we can do it as part of your exterior paint project or on its own.",
  },
  {
    question: "What does exterior prep include?",
    answer:
      "Washing, scraping loose paint, sanding edges, replacing failed caulk, spot-priming bare wood, and protecting landscaping, windows, and walkways. Prep is what makes exterior paint last through Utah winters.",
  },
];

const schema = buildServiceSchema({
  name: "Exterior Painting",
  serviceType: "Exterior house painting",
  description: DESCRIPTION,
  path: PATH,
  faqs,
});

const seasons = [
  {
    icon: Sun,
    season: "Summer",
    threat: "Intense high-altitude UV",
    defense:
      "UV-resistant acrylic coatings and fade-resistant colors, with extra attention on south- and west-facing walls.",
  },
  {
    icon: Leaf,
    season: "Fall",
    threat: "Wide day-to-night temperature swings",
    defense:
      "Flexible paints and fresh caulk that expand and contract with the house instead of cracking.",
  },
  {
    icon: CloudSnow,
    season: "Winter",
    threat: "Snow, ice, and freeze-thaw cycles",
    defense:
      "Sealed joints and properly primed bare wood so water can't get under the paint and freeze.",
  },
  {
    icon: Droplets,
    season: "Spring",
    threat: "Snowmelt, runoff, and wind",
    defense:
      "Thorough washing, mildew treatment, and well-bonded coatings on siding, fascia, and lower trim.",
  },
];

const surfaces = [
  { name: "Siding", detail: "Wood, fiber cement, vinyl-safe, and aluminum" },
  { name: "Stucco & Masonry", detail: "Breathable coatings with crack repair" },
  { name: "Trim, Fascia & Soffits", detail: "Crisp lines and sealed joints" },
  { name: "Doors & Garage Doors", detail: "Durable finishes that resist sun fade" },
  { name: "Decks & Fences", detail: "Stain, sealer, or solid-color coatings" },
  { name: "Railings & Metal", detail: "Rust treatment and direct-to-metal paint" },
];

type MonthStatus = "ideal" | "workable" | "off";
const months: { label: string; status: MonthStatus }[] = [
  { label: "Jan", status: "off" },
  { label: "Feb", status: "off" },
  { label: "Mar", status: "off" },
  { label: "Apr", status: "workable" },
  { label: "May", status: "ideal" },
  { label: "Jun", status: "ideal" },
  { label: "Jul", status: "ideal" },
  { label: "Aug", status: "ideal" },
  { label: "Sep", status: "ideal" },
  { label: "Oct", status: "workable" },
  { label: "Nov", status: "off" },
  { label: "Dec", status: "off" },
];

const monthStyles: Record<MonthStatus, string> = {
  ideal: "bg-gradient-brand text-primary-foreground",
  workable: "bg-brand-blue/25 text-foreground",
  off: "bg-card text-muted-foreground border border-border",
};

const warningSigns = [
  "Peeling, flaking, or bubbling paint",
  "Chalky residue when you rub the siding",
  "Faded color on sun-facing walls",
  "Cracked or missing caulk around windows and trim",
  "Bare or graying wood on trim, decks, or fences",
  "Mildew or dark staining near the ground",
];

const ExteriorPainting = () => {
  useSeo({ title: TITLE, description: DESCRIPTION, path: PATH, image: "/exterior-painting.png", jsonLd: schema });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Full-bleed hero */}
        <section className="relative min-h-[85vh] flex items-end overflow-hidden">
          <img
            src="/exterior-painting.png"
            alt="Freshly painted exterior of a Utah home"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
          <div className="relative z-10 container-wide w-full pb-16 md:pb-20 pt-40">
            <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-6">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Exterior Painting</span>
            </nav>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-4xl mb-6">
              Exterior Painting Built for <span className="text-gradient">Utah Weather</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mb-8">
              Boost curb appeal and protect your home from Utah's sun, snow, and wind with durable,
              weather-ready exterior coatings applied by a local crew that knows the climate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="cta" size="xl">
                <Link to="/contact">Schedule an Exterior Estimate</Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <a href="tel:+14357773508">Call (435) 777-3508</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Seasons */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-10 mb-12">
              <div className="lg:col-span-1">
                <span className="eyebrow-pill">Four-Season Protection</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  What Utah does to your paint
                </h2>
              </div>
              <p className="lg:col-span-2 text-muted-foreground text-lg self-end">
                Utah homes deal with intense high-altitude sun, big temperature swings, and months of
                snow. Paint that looks fine in a mild climate can fail here in a few seasons. We choose
                products and prep methods for each threat.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {seasons.map((item) => (
                <div key={item.season} className="bg-card p-8">
                  <item.icon className="w-8 h-8 text-brand-pink mb-6" />
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {item.season}
                  </p>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">{item.threat}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-medium">Our defense: </span>
                    {item.defense}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Surfaces with mosaic */}
        <section className="py-20 bg-section-alt">
          <div className="container-wide grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="eyebrow-pill">Surfaces We Paint</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Every inch of the outside
              </h2>
              <dl className="divide-y divide-border border-y border-border">
                {surfaces.map((surface) => (
                  <div key={surface.name} className="py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <dt className="font-display font-semibold text-lg text-foreground">{surface.name}</dt>
                    <dd className="text-muted-foreground sm:text-right">{surface.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/gallery/gallery-4.png"
                alt="Repainted gray siding and deck railings on a mountain home in Utah"
                className="col-span-2 rounded-2xl w-full h-72 object-cover"
                loading="lazy"
              />
              <img
                src="/gallery/gallery-2.png"
                alt="Exterior siding and deck painted on a Utah hillside home"
                className="rounded-2xl w-full h-56 object-cover"
                loading="lazy"
              />
              <img
                src="/gallery/gallery-7.png"
                alt="Freshly stained backyard deck and railing in Utah"
                className="rounded-2xl w-full h-56 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Calendar */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="eyebrow-pill">Planning Your Project</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Utah exterior painting season
              </h2>
              <p className="text-muted-foreground text-lg">
                Exterior paint needs warm, dry days to cure properly. Spring and summer slots fill
                quickly, so booking early gets you the best dates.
              </p>
            </div>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-2 mb-6">
              {months.map((month) => (
                <div
                  key={month.label}
                  className={cn("rounded-xl py-5 text-center font-semibold text-sm", monthStyles[month.status])}
                >
                  {month.label}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-gradient-brand" /> Ideal conditions
              </span>
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-brand-blue/25" /> Weather-dependent
              </span>
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-card border border-border" /> Great time for interior projects
              </span>
            </div>
          </div>
        </section>

        {/* Warning signs */}
        <section className="py-20 bg-gradient-cta">
          <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AlertTriangle className="w-10 h-10 text-brand-pink mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Signs your exterior needs paint
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Waiting too long turns a repaint into a repair job. If you see any of these, it's time
                for a free inspection.
              </p>
              <Button asChild size="xl" className="bg-white text-brand-pink hover:bg-white/90">
                <Link to="/contact">Request a Free Inspection</Link>
              </Button>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {warningSigns.map((sign) => (
                <li key={sign} className="bg-white/10 border border-white/15 rounded-xl p-5 text-white">
                  {sign}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ServiceFaq
          heading={<>Exterior painting <span className="text-gradient">FAQ</span></>}
          faqs={faqs}
        />
        <RelatedServices currentSlug="exterior-painting" />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default ExteriorPainting;
