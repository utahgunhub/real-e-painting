import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import ServiceFaq from "@/components/services/ServiceFaq";
import RelatedServices from "@/components/services/RelatedServices";
import { Button } from "@/components/ui/button";
import { buildServiceSchema, useSeo } from "@/hooks/useSeo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DoorOpen, Home, Layers, Heart, PawPrint, Sparkles, MessageSquare, Shield } from "lucide-react";

const PATH = "/services/residential-painting";
const TITLE = "Residential Painting in Utah | Real E Painting";
const DESCRIPTION =
  "Friendly residential painters for Utah homeowners. Single rooms to whole-home makeovers, inside and out, with daily cleanup. Free estimates: (435) 777-3508.";

const faqs = [
  {
    question: "Can I stay in my home while you paint?",
    answer:
      "Yes — almost every homeowner does. We work room by room, keep walkways clear, and use low-odor paints so your household can keep running normally.",
  },
  {
    question: "Do you paint both the inside and outside of homes?",
    answer:
      "Yes. We handle interior and exterior painting, plus cabinets, trim, drywall repair, staining, and more, so one crew can take care of your whole home.",
  },
  {
    question: "How do you protect my belongings and floors?",
    answer:
      "Furniture is moved and covered, floors are protected with drop cloths, and fixtures and hardware are masked or removed. We put everything back where it was when we're done.",
  },
  {
    question: "What about pets and kids?",
    answer:
      "Let us know about pets and little ones when you book. We keep doors closed where needed, never leave open paint unattended, and use low- and zero-VOC paints whenever possible.",
  },
  {
    question: "How is pricing determined for a home?",
    answer:
      "Pricing depends on square footage, wall and ceiling height, the condition of surfaces, the number of colors, and how much prep and repair is needed. Your free estimate breaks it down clearly with no hidden fees.",
  },
  {
    question: "Do you help with selling or moving?",
    answer:
      "Yes. A fresh coat of neutral paint is one of the most cost-effective ways to prepare a home for sale or a new move-in. We can work around listing and closing dates.",
  },
];

const schema = buildServiceSchema({
  name: "Residential Painting",
  serviceType: "Residential house painting",
  description: DESCRIPTION,
  path: PATH,
  faqs,
});

const projectSizes = [
  {
    icon: DoorOpen,
    title: "One Room",
    tagline: "Quick refresh",
    copy: "A bedroom, nursery, office, or accent wall. Often finished in a single day so life gets back to normal fast.",
    examples: ["Nursery makeover", "Home office", "Accent wall"],
  },
  {
    icon: Layers,
    title: "A Few Rooms or a Floor",
    tagline: "Most popular",
    copy: "Main living areas, a basement, or an upstairs refresh. We move through the space in a planned order so you always have rooms to use.",
    examples: ["Main floor repaint", "Basement finish", "Kitchen + dining"],
    featured: true,
  },
  {
    icon: Home,
    title: "Whole Home",
    tagline: "Inside & out",
    copy: "A complete interior, exterior, or both. We build a phased schedule so the job is organized from first day to final walkthrough.",
    examples: ["Move-in repaint", "Pre-listing refresh", "Full exterior"],
  },
];

const timeline = [
  {
    when: "Before we start",
    title: "A clear plan",
    copy: "We confirm colors, rooms, and the schedule, and let you know exactly what to clear out ahead of time.",
  },
  {
    when: "Day one",
    title: "Protect everything",
    copy: "Furniture is moved and covered, floors are protected, and hardware is removed before any prep begins.",
  },
  {
    when: "Every day",
    title: "Tidy at the end of the day",
    copy: "We clean up each evening, keep walkways clear, and let you know what's happening the next day.",
  },
  {
    when: "Final day",
    title: "Walkthrough together",
    copy: "We walk every room with you, touch up anything you notice, and put your home back the way we found it.",
  },
];

const promises = [
  { icon: Shield, title: "Respect for your home", copy: "Shoe covers, drop cloths, and careful furniture handling." },
  { icon: PawPrint, title: "Pet & kid aware", copy: "Low-odor paints and closed-off work areas when needed." },
  { icon: MessageSquare, title: "Clear communication", copy: "You always know who's coming and what's next." },
  { icon: Sparkles, title: "Spotless finish", copy: "Daily cleanup and a full clean when we wrap up." },
];

const ResidentialPainting = () => {
  useSeo({ title: TITLE, description: DESCRIPTION, path: PATH, image: "/gallery/gallery-6.png", jsonLd: schema });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Centered statement hero */}
        <section className="bg-gradient-cta pt-40 md:pt-48 pb-20 md:pb-28 text-center">
          <div className="container-wide max-w-4xl">
            <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-8">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Residential Painting</span>
            </nav>
            <Heart className="w-10 h-10 text-brand-pink mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Residential Painting for <span className="text-gradient">Utah Homes</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10">
              From single rooms to whole-home makeovers, we treat your house with the care and respect
              it deserves — like it's our own neighborhood, because it is.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-white text-brand-pink hover:bg-white/90">
                <Link to="/contact">Get a Free Home Estimate</Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/gallery">See Homes We've Painted</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Project sizes */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow-pill">Any Size Project</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Small refresh or full makeover
              </h2>
              <p className="text-muted-foreground text-lg">
                No job is too small, and big ones get a plan. Here's what each kind of project looks like.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {projectSizes.map((size) => (
                <div
                  key={size.title}
                  className={
                    size.featured
                      ? "relative rounded-3xl p-[2px] bg-gradient-brand md:-translate-y-4"
                      : "relative rounded-3xl p-[1px] bg-border"
                  }
                >
                  <div className="h-full bg-card rounded-[calc(1.5rem-2px)] p-8 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <size.icon className="w-9 h-9 text-brand-pink" />
                      <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                        {size.tagline}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">{size.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-1">{size.copy}</p>
                    <div className="flex flex-wrap gap-2">
                      {size.examples.map((example) => (
                        <span key={example} className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-section-alt">
          <div className="container-wide grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 lg:sticky lg:top-32 self-start">
              <span className="eyebrow-pill">Living Through a Paint Job</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                What it's like having us in your home
              </h2>
              <p className="text-muted-foreground text-lg">
                Painting shouldn't take over your life. Here's how a typical residential project flows.
              </p>
            </div>
            <ol className="lg:col-span-3 relative border-l-2 border-border ml-3 space-y-10">
              {timeline.map((step, index) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="pl-8 relative"
                >
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gradient-brand" />
                  <p className="text-xs uppercase tracking-widest text-brand-pink font-semibold mb-1">
                    {step.when}
                  </p>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.copy}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        {/* Photo mosaic */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Recent <span className="text-gradient">home projects</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[560px]">
              <img
                src="/gallery/gallery-6.png"
                alt="Utah kitchen with freshly painted white cabinets and navy island"
                className="col-span-2 md:row-span-2 w-full h-80 md:h-full object-cover rounded-2xl"
                loading="lazy"
              />
              <img
                src="/gallery/gallery-4.png"
                alt="Repainted exterior of a Utah mountain home"
                className="w-full h-48 md:h-full object-cover rounded-2xl"
                loading="lazy"
              />
              <img
                src="/gallery/gallery-10.png"
                alt="White painted entry door and trim in a Utah home"
                className="w-full h-48 md:h-full object-cover rounded-2xl"
                loading="lazy"
              />
              <img
                src="/gallery/gallery-5.png"
                alt="Painted stairwell with dark stained treads"
                className="col-span-2 w-full h-72 md:h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Promises */}
        <section className="py-20 bg-section-alt">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Our promise to Utah homeowners
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {promises.map((promise) => (
                <div key={promise.title} className="text-center">
                  <div className="w-16 h-16 rounded-2xl icon-accent flex items-center justify-center mx-auto mb-5">
                    <promise.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">{promise.title}</h3>
                  <p className="text-muted-foreground text-sm">{promise.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceFaq
          heading={<>Homeowner <span className="text-gradient">questions</span></>}
          intro="Everything you might want to know before inviting a painting crew into your home."
          faqs={faqs}
        />
        <RelatedServices currentSlug="residential-painting" />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default ResidentialPainting;
