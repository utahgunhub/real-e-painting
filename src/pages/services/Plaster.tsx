import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import ServiceFaq from "@/components/services/ServiceFaq";
import RelatedServices from "@/components/services/RelatedServices";
import { Button } from "@/components/ui/button";
import { buildServiceSchema, useSeo } from "@/hooks/useSeo";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const PATH = "/services/plaster";
const TITLE = "Plaster Walls in Utah | Real E Painting";
const DESCRIPTION =
  "Plaster finishes and repairs for Utah homes. Smooth walls, skip trowel, and textured plaster with a handcrafted look. Free estimates: (435) 777-3508.";

const faqs = [
  {
    question: "Do you repair plaster or only apply new finishes?",
    answer:
      "Both. We patch cracks, holes, and failed spots, then blend the repair so it disappears. We also apply new plaster finishes when you want texture or a smoother wall.",
  },
  {
    question: "Can you match the texture already on my walls?",
    answer:
      "Yes. Matching texture is part of a good repair. We sample the existing finish and work the patch until it blends before any paint goes on.",
  },
  {
    question: "What is the difference between plaster and drywall mud?",
    answer:
      "Drywall mud is for taping seams and small patches. Plaster is a harder, thicker finish used for texture, old wall repair, and decorative surfaces. We use the material the wall actually needs.",
  },
  {
    question: "Can plaster go over drywall?",
    answer:
      "Yes. A skim coat or a textured plaster finish can go over sound drywall. Loose paper, water damage, and big holes get repaired first.",
  },
  {
    question: "Will the wall be ready to paint?",
    answer:
      "Yes. After the plaster cures we sand where needed, prime, and paint, or leave a decorative finish if that is what you asked for. One crew can take it from repair to final color.",
  },
  {
    question: "How long does plaster take to dry in Utah?",
    answer:
      "Thin skim coats can be ready the next day. Thicker repairs and decorative finishes need more time, and dry Utah air often helps. Your estimate includes the wait so we do not paint too soon.",
  },
];

const schema = buildServiceSchema({
  name: "Plaster",
  serviceType: "Plaster finishes and repair",
  description: DESCRIPTION,
  path: PATH,
  faqs,
});

const finishes = [
  {
    id: "smooth",
    name: "Smooth skim",
    detail: "A thin coat that levels waves, patches, and rough spots so paint looks even.",
  },
  {
    id: "skip",
    name: "Skip trowel",
    detail: "A hand troweled texture with soft arcs. Good for feature walls and older Utah homes.",
  },
  {
    id: "match",
    name: "Texture match",
    detail: "We copy the texture already on the wall so a repair does not show after paint.",
  },
  {
    id: "venetian",
    name: "Polished plaster",
    detail: "A tighter, burnished finish with depth. A quieter alternative to high gloss paint.",
  },
];

const reasons = [
  "Cracks at corners, windows, and ceiling lines",
  "Holes from hardware, doors, and old fixtures",
  "Water stains and soft spots after a leak",
  "Texture that was scraped and never replaced",
  "Walls that look wavy under a new light color",
  "A feature wall that needs more than paint",
];

const Plaster = () => {
  const [active, setActive] = useState(finishes[0].id);
  const current = finishes.find((finish) => finish.id === active) ?? finishes[0];

  useSeo({ title: TITLE, description: DESCRIPTION, path: PATH, image: "/gallery/gallery-10.png", jsonLd: schema });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative pt-36 md:pt-44 pb-20 overflow-hidden">
          <img
            src="/gallery/gallery-10.png"
            alt="Finished interior wall and trim by Real E Painting"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative container-wide">
            <div className="max-w-xl ml-auto bg-background/95 border border-border rounded-3xl p-8 md:p-10">
              <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-5">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/services" className="hover:text-primary">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Plaster</span>
              </nav>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4">
                Plaster <span className="text-gradient">finishes</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Smooth or textured plaster that gives walls depth, character, and a handcrafted feel beyond standard paint.
              </p>
              <Button asChild variant="cta" size="xl">
                <Link to="/contact">Get a Plaster Estimate</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container-wide grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <span className="eyebrow-pill">Choose a finish</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                The texture should fit the room
              </h2>
              <div className="flex flex-col">
                {finishes.map((finish) => (
                  <button
                    key={finish.id}
                    type="button"
                    onClick={() => setActive(finish.id)}
                    className={cn(
                      "text-left border-b border-border py-4 font-display text-2xl font-bold transition-colors",
                      active === finish.id ? "text-primary" : "text-foreground hover:text-primary"
                    )}
                  >
                    {finish.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 bg-card border border-border rounded-3xl p-8 md:p-12 flex items-end min-h-[18rem]">
              <div>
                <p className="text-sm uppercase tracking-widest text-brand-pink font-semibold mb-3">
                  {current.name}
                </p>
                <p className="text-2xl md:text-3xl font-display text-foreground leading-snug">
                  {current.detail}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-section-alt">
          <div className="container-wide">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow-pill">Repair or refinish</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                When a wall needs more than paint
              </h2>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reasons.map((reason) => (
                <li key={reason} className="bg-card border border-border rounded-2xl p-6 text-foreground">
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container-wide grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Find the damage", copy: "We check for movement, moisture, and loose material before we cover anything." },
              { step: "02", title: "Build it back", copy: "Patches, skim coats, or a full finish, matched to the wall you already have." },
              { step: "03", title: "Prime and paint", copy: "Once the plaster is ready, we prime and paint so the repair disappears." },
            ].map((item) => (
              <div key={item.step} className="border border-border rounded-2xl p-8">
                <p className="font-display text-5xl font-bold text-gradient mb-4">{item.step}</p>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <ServiceFaq
          heading={<>Plaster <span className="text-gradient">questions</span></>}
          faqs={faqs}
        />
        <RelatedServices currentSlug="plaster" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Plaster;
