import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import ServiceFaq from "@/components/services/ServiceFaq";
import RelatedServices from "@/components/services/RelatedServices";
import { Button } from "@/components/ui/button";
import { buildServiceSchema, useSeo } from "@/hooks/useSeo";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const PATH = "/services/limewash";
const TITLE = "Limewash Finishes in Utah | Real E Painting";
const DESCRIPTION =
  "Limewash for Utah homes. A breathable mineral finish with soft color and natural depth on walls, brick, and plaster. Free estimates: (435) 777-3508.";

const faqs = [
  {
    question: "What is limewash?",
    answer:
      "Limewash is a mineral coating made from lime and natural pigment. It soaks into the surface instead of sitting on top like regular paint, which gives walls a soft, cloudy color that shifts a little in the light.",
  },
  {
    question: "Can you limewash drywall?",
    answer:
      "Yes. Drywall needs the right primer so the wash bonds and the color stays even. We prep and prime first, then apply the wash in thin coats until the depth looks right.",
  },
  {
    question: "Is limewash only for old or rustic homes?",
    answer:
      "No. It looks at home in modern rooms too. Soft whites, warm stone colors, and muted greens all work in new construction and updated Utah homes.",
  },
  {
    question: "Can limewash go on the exterior?",
    answer:
      "Yes, on masonry, brick, and stucco that can breathe. It is not the right coating for vinyl siding or sealed surfaces. We will tell you if your exterior is a good fit.",
  },
  {
    question: "How do you clean a limewashed wall?",
    answer:
      "A soft cloth and mild soap is enough for most marks. Limewash is not a high scrub finish, so we talk through traffic and kids before we recommend it for a room.",
  },
  {
    question: "How many coats does limewash take?",
    answer:
      "Most walls need two or three thin washes. Each coat changes the color a little, and we stop when the room looks even without losing the natural variation.",
  },
];

const schema = buildServiceSchema({
  name: "Limewash",
  serviceType: "Limewash finishes",
  description: DESCRIPTION,
  path: PATH,
  faqs,
});

const washes = [
  { name: "Chalk White", hex: "#efeae2" },
  { name: "Warm Stone", hex: "#d7c7b0" },
  { name: "Clay", hex: "#c4a48a" },
  { name: "Sage", hex: "#9aa892" },
  { name: "Slate", hex: "#8d9396" },
];

const differences = [
  {
    label: "Regular paint",
    points: ["Sits on the surface", "One even color", "Best when you want a flat, uniform wall"],
  },
  {
    label: "Limewash",
    points: ["Soaks into the wall", "Soft color with natural variation", "Best when you want depth and a mineral look"],
  },
];

const surfaces = [
  { name: "Interior drywall", detail: "Primed first so the wash bonds and the color stays true." },
  { name: "Brick and masonry", detail: "A natural match. The wash settles into the texture of the brick." },
  { name: "Plaster", detail: "Limewash and plaster work together. We can do both on the same wall." },
  { name: "Exterior masonry", detail: "Breathable coatings for brick and stucco that can handle Utah weather." },
];

const steps = [
  "We look at the wall and test a small area so you can see the color in your light.",
  "Surfaces are cleaned, repaired, and primed when the material needs it.",
  "Thin washes go on by hand. Each coat is lighter than a full coat of paint.",
  "We stop when the depth looks right, then walk the room with you.",
];

const Limewash = () => {
  useSeo({ title: TITLE, description: DESCRIPTION, path: PATH, image: "/interior-painting.png", jsonLd: schema });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-36 md:pt-44 pb-16 bg-background">
          <div className="container-wide grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/services" className="hover:text-primary">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Lime Wash</span>
              </nav>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-[0.95] mb-6">
                Lime Wash <span className="text-gradient">in Utah</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
                A breathable mineral finish with soft, matte color and natural depth. A timeless look that ages beautifully on walls, brick, and plaster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="cta" size="xl">
                  <Link to="/contact">Get a Limewash Estimate</Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <a href="tel:+14357773508">
                    <Phone className="w-5 h-5" />
                    (435) 777-3508
                  </a>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-5 gap-2">
              {washes.map((wash) => (
                <div key={wash.name} className="flex flex-col gap-2">
                  <div className="h-40 md:h-64 rounded-2xl border border-white/10" style={{ backgroundColor: wash.hex }} />
                  <p className="text-xs text-muted-foreground text-center">{wash.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-section-alt">
          <div className="container-wide">
            <div className="max-w-2xl mb-12">
              <span className="eyebrow-pill">Paint or limewash</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Same wall. A different finish.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {differences.map((column, index) => (
                <div
                  key={column.label}
                  className={`rounded-3xl p-8 md:p-10 border ${
                    index === 1 ? "bg-gradient-cta border-transparent text-white" : "bg-card border-border"
                  }`}
                >
                  <h3 className={`font-display text-2xl font-bold mb-6 ${index === 1 ? "text-white" : "text-foreground"}`}>
                    {column.label}
                  </h3>
                  <ul className="space-y-4">
                    {column.points.map((point) => (
                      <li key={point} className={index === 1 ? "text-white/90" : "text-muted-foreground"}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
            <img
              src="/interior-painting.png"
              alt="Interior walls finished by Real E Painting in Utah"
              className="w-full h-[28rem] object-cover rounded-[2rem]"
            />
            <div>
              <span className="eyebrow-pill">Where it belongs</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Surfaces we limewash
              </h2>
              <dl className="divide-y divide-border border-y border-border">
                {surfaces.map((surface) => (
                  <div key={surface.name} className="py-5">
                    <dt className="font-display font-semibold text-lg text-foreground">{surface.name}</dt>
                    <dd className="text-muted-foreground mt-1">{surface.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="py-20 bg-section-alt">
          <div className="container-wide max-w-4xl">
            <span className="eyebrow-pill">How we apply it</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
              Thin coats, not one heavy coat
            </h2>
            <ol className="space-y-6">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-6 items-start">
                  <span className="font-display text-4xl font-bold text-gradient w-12 shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-lg text-foreground pt-2">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ServiceFaq
          heading={<>Limewash <span className="text-gradient">questions</span></>}
          faqs={faqs}
        />
        <RelatedServices currentSlug="limewash" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Limewash;
