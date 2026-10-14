import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import ServiceFaq from "@/components/services/ServiceFaq";
import RelatedServices from "@/components/services/RelatedServices";
import { Button } from "@/components/ui/button";
import { buildServiceSchema, useSeo } from "@/hooks/useSeo";
import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";

const PATH = "/services/cabinet-painting";
const TITLE = "Cabinet Painting & Refinishing in Utah | Real E Painting";
const DESCRIPTION =
  "Kitchen cabinet painting and refinishing in Utah. Give cabinets, vanities, and bookcases a like-new finish without replacement costs. Call (435) 777-3508.";

const faqs = [
  {
    question: "How long does cabinet painting take?",
    answer:
      "Most kitchens take several days from start to finish because doors are removed, prepped, primed, and given multiple coats with proper dry time between each. Your estimate will include a specific timeline for your kitchen.",
  },
  {
    question: "Can I use my kitchen during the project?",
    answer:
      "Yes, with some limits. Cabinet boxes are masked and painted in place while doors and drawer fronts are finished separately, so you'll have access to most of your kitchen for much of the project.",
  },
  {
    question: "Will painted cabinets chip or peel?",
    answer:
      "Not when they're prepped correctly. We degrease, sand, and use a bonding primer followed by hard-curing cabinet enamel made to stand up to daily use.",
  },
  {
    question: "Can you paint oak or stained cabinets?",
    answer:
      "Yes. Oak and other open-grain woods can be painted with the grain visible or filled for a smoother modern look. Stain-blocking primer keeps tannins from bleeding through light colors.",
  },
  {
    question: "Do you replace hardware?",
    answer:
      "We remove and reinstall your existing hardware, or install new knobs and pulls you've picked out. New hardware is an easy way to complete the new look.",
  },
  {
    question: "What else can you refinish besides kitchen cabinets?",
    answer:
      "Bathroom vanities, bookcases, built-in shelving, entertainment centers, laundry and mudroom cabinets, and other wood furniture-style pieces.",
  },
];

const schema = buildServiceSchema({
  name: "Cabinet Painting & Refinishing",
  serviceType: "Cabinet painting and refinishing",
  description: DESCRIPTION,
  path: PATH,
  faqs,
});

const comparison = [
  { label: "Cost", refinish: "A fraction of replacement", replace: "Highest cost option" },
  { label: "Timeline", refinish: "Days", replace: "Weeks, including ordering" },
  { label: "Countertops", refinish: "Stay in place", replace: "Often damaged or replaced" },
  { label: "Kitchen downtime", refinish: "Limited", replace: "Extended" },
  { label: "Waste", refinish: "Minimal", replace: "Old cabinets hauled to landfill" },
];

const pieces = [
  "Kitchen cabinets",
  "Bathroom vanities",
  "Bookcases",
  "Built-in shelving",
  "Entertainment centers",
  "Laundry & mudroom cabinets",
];

const process = [
  { title: "Remove & label", copy: "Doors, drawers, and hardware are removed and labeled so everything goes back exactly where it belongs." },
  { title: "Degrease & clean", copy: "Years of kitchen grease are removed — the most skipped step and the most important one." },
  { title: "Sand & repair", copy: "Surfaces are scuff-sanded, dings are filled, and edges are smoothed." },
  { title: "Prime", copy: "A bonding, stain-blocking primer locks onto the wood so the finish won't peel." },
  { title: "Finish coats", copy: "Multiple coats of hard-curing cabinet enamel for a smooth, durable finish." },
  { title: "Reinstall", copy: "Doors and hardware are reinstalled, adjusted, and the kitchen is cleaned." },
];

const colors = [
  { name: "Classic White", hex: "#f2f0eb" },
  { name: "Warm Greige", hex: "#b8ad9e" },
  { name: "Sage Green", hex: "#8a9a80" },
  { name: "Navy", hex: "#22304a" },
  { name: "Charcoal", hex: "#3a3b3d" },
  { name: "Black", hex: "#141414" },
];

const CabinetPainting = () => {
  useSeo({ title: TITLE, description: DESCRIPTION, path: PATH, image: "/cabinet.png", jsonLd: schema });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero: image left, copy right */}
        <section className="pt-36 md:pt-40 pb-20 bg-section-alt">
          <div className="container-wide grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/cabinet.png"
                alt="Freshly painted kitchen cabinets in a Utah home"
                className="w-full aspect-square object-cover rounded-[2rem]"
              />
              <div className="absolute -bottom-6 right-6 bg-card border border-border rounded-2xl px-6 py-4 shadow-xl">
                <p className="font-display text-2xl font-bold text-gradient">Refinish</p>
                <p className="text-sm text-muted-foreground">don't replace</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/services" className="hover:text-primary">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Cabinets & Bookcases</span>
              </nav>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Cabinet Painting & <span className="text-gradient">Refinishing</span> in Utah
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Refinish and repaint cabinets, bookcases, and built-ins for a like-new look without the
                cost of replacement. Same layout, same countertops — a whole new kitchen.
              </p>
              <Button asChild variant="cta" size="xl">
                <Link to="/contact">Get a Cabinet Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 bg-background">
          <div className="container-wide max-w-5xl">
            <div className="text-center mb-12">
              <span className="eyebrow-pill">Refinish vs. Replace</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why most Utah homeowners refinish
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                If your cabinet boxes are solid and you like the layout, refinishing gives you the new
                look without the demolition.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="grid grid-cols-3 bg-card text-sm md:text-base font-display font-bold">
                <div className="p-4 md:p-5 text-muted-foreground" />
                <div className="p-4 md:p-5 bg-gradient-brand text-primary-foreground text-center">Refinishing</div>
                <div className="p-4 md:p-5 text-foreground text-center">Replacing</div>
              </div>
              {comparison.map((row) => (
                <div key={row.label} className="grid grid-cols-3 border-t border-border text-sm md:text-base">
                  <div className="p-4 md:p-5 font-semibold text-foreground">{row.label}</div>
                  <div className="p-4 md:p-5 text-center text-foreground bg-brand-blue/10 flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-brand-pink shrink-0 hidden sm:block" />
                    {row.refinish}
                  </div>
                  <div className="p-4 md:p-5 text-center text-muted-foreground flex items-center justify-center gap-2">
                    <X className="w-4 h-4 shrink-0 hidden sm:block" />
                    {row.replace}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we refinish */}
        <section className="py-20 bg-section-alt">
          <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow-pill">Not Just Kitchens</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Cabinets, bookcases & built-ins
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Any solid wood or MDF cabinetry in your home can get the same factory-smooth treatment.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {pieces.map((piece) => (
                  <div key={piece} className="bg-card border border-border rounded-xl px-4 py-3 text-foreground font-medium">
                    {piece}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/gallery/gallery-1.png"
                alt="White shaker kitchen cabinets painted by Real E Painting"
                className="rounded-2xl w-full h-80 object-cover"
                loading="lazy"
              />
              <img
                src="/gallery/gallery-6.png"
                alt="White upper cabinets and two-tone navy island in a Utah kitchen"
                className="rounded-2xl w-full h-80 object-cover mt-12"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <div className="max-w-2xl mb-12">
              <span className="eyebrow-pill">Our Process</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Six steps to a factory-smooth finish
              </h2>
              <p className="text-muted-foreground text-lg">
                Cabinet painting is detail work. Skipping any step is what makes DIY cabinets chip — we
                never skip.
              </p>
            </div>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
              {process.map((step, index) => (
                <li key={step.title} className="bg-card p-8">
                  <span className="font-display text-5xl font-bold text-gradient">{index + 1}</span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-4 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Colors */}
        <section className="py-20 bg-section-alt">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow-pill">Color Inspiration</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Popular cabinet colors right now
              </h2>
              <p className="text-muted-foreground text-lg">
                Timeless whites, warm neutrals, or a bold two-tone island — we'll help you pick a color
                that fits your home.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {colors.map((color) => (
                <div key={color.name} className="bg-card border border-border rounded-2xl p-3">
                  <div
                    className="aspect-[3/4] rounded-xl border border-white/10 mb-3"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="font-semibold text-foreground text-sm">{color.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceFaq
          heading={<>Cabinet painting <span className="text-gradient">questions</span></>}
          faqs={faqs}
        />
        <RelatedServices currentSlug="cabinet-painting" />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default CabinetPainting;
