import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import ServiceFaq from "@/components/services/ServiceFaq";
import RelatedServices from "@/components/services/RelatedServices";
import { Button } from "@/components/ui/button";
import { buildServiceSchema, useSeo } from "@/hooks/useSeo";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Store,
  UtensilsCrossed,
  GraduationCap,
  Warehouse,
  Building,
  Moon,
  CalendarDays,
  LayoutPanelLeft,
  FileText,
  ArrowRight,
} from "lucide-react";

const PATH = "/services/commercial-painting";
const TITLE = "Commercial Painting Contractor in Utah | Real E Painting";
const DESCRIPTION =
  "Commercial painting for Utah offices, retail, restaurants, and facilities, with after-hours and phased scheduling. Request a bid: (435) 777-3508.";

const faqs = [
  {
    question: "Can you paint after business hours?",
    answer:
      "Yes. We offer evening, overnight, and weekend scheduling so your staff and customers aren't disrupted. Many retail and office projects are completed entirely outside business hours.",
  },
  {
    question: "Do you work with property managers and general contractors?",
    answer:
      "Yes. We work directly with owners, property managers, HOAs, and general contractors, and we can coordinate with other trades on tenant improvements and turnovers.",
  },
  {
    question: "Can you paint an occupied building?",
    answer:
      "Absolutely. We phase work by area, use low-odor products, and keep exits, walkways, and signage clear so the building stays safe and usable throughout the project.",
  },
  {
    question: "What commercial surfaces do you paint?",
    answer:
      "Drywall, concrete block, metal doors and frames, railings, exterior stucco and siding, and more. We also apply epoxy and coatings for floors in garages, shops, and commercial spaces.",
  },
  {
    question: "How do I get a commercial bid?",
    answer:
      "Call or send a request with the property address, approximate square footage, and your timeline. We'll schedule a walkthrough and send a written, itemized bid.",
  },
  {
    question: "Do you handle tenant turnovers?",
    answer:
      "Yes. We can turn units and suites quickly with consistent, approved colors so spaces are ready to show and lease.",
  },
];

const schema = buildServiceSchema({
  name: "Commercial Painting",
  serviceType: "Commercial painting contractor",
  description: DESCRIPTION,
  path: PATH,
  faqs,
});

const industries = [
  { icon: Briefcase, name: "Offices", copy: "Suites, lobbies, conference rooms, and break rooms." },
  { icon: Store, name: "Retail", copy: "Storefronts and sales floors refreshed around store hours." },
  { icon: UtensilsCrossed, name: "Restaurants", copy: "Dining rooms and back-of-house with scrubbable finishes." },
  { icon: GraduationCap, name: "Schools & Churches", copy: "Classrooms, halls, and gyms scheduled around breaks." },
  { icon: Warehouse, name: "Warehouses & Shops", copy: "Block walls, steel, and floor coatings for working spaces." },
  { icon: Building, name: "Multi-Unit & HOA", copy: "Unit turnovers, common areas, and building exteriors." },
];

const scheduling = [
  {
    icon: Moon,
    title: "After Hours",
    copy: "Evening and overnight crews so your doors open to a finished space in the morning.",
  },
  {
    icon: CalendarDays,
    title: "Weekends",
    copy: "Concentrated weekend work for offices and businesses closed on Saturday and Sunday.",
  },
  {
    icon: LayoutPanelLeft,
    title: "Phased by Area",
    copy: "One department, floor, or wing at a time so the rest of the building stays open.",
  },
];

const bidIncludes = [
  "On-site walkthrough with the decision-maker",
  "Itemized scope by area and surface",
  "Product specifications and color schedule",
  "Proposed schedule and work hours",
  "Protection and safety plan for occupied spaces",
  "Single point of contact for the whole project",
];

const CommercialPainting = () => {
  useSeo({ title: TITLE, description: DESCRIPTION, path: PATH, image: "/commercial-painting.png", jsonLd: schema });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Stacked hero: headline row + wide banner */}
        <section className="pt-36 md:pt-40 pb-12 bg-background">
          <div className="container-wide">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-primary">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Commercial Painting</span>
            </nav>
            <div className="grid lg:grid-cols-12 gap-8 items-end mb-10">
              <h1 className="lg:col-span-7 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Commercial Painting <span className="text-gradient">on Your Schedule</span>
              </h1>
              <div className="lg:col-span-5">
                <p className="text-lg text-muted-foreground mb-6">
                  Offices, retail, and commercial spaces painted on schedule and with minimal disruption
                  to your business — by a Utah crew that shows up when we say we will.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="cta" size="lg">
                    <Link to="/contact">Request a Commercial Bid</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+14357773508">(435) 777-3508</a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden border border-border">
              <img
                src="/commercial-painting.png"
                alt="Commercial interior painting project in Utah"
                className="w-full h-64 md:h-[460px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
                  {["After-hours & weekend crews", "Itemized written bids", "Occupied-building safe"].map((point) => (
                    <p key={point} className="font-semibold border-l-2 border-brand-pink pl-3">
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-section-alt">
          <div className="container-wide">
            <div className="max-w-2xl mb-12">
              <span className="eyebrow-pill">Industries</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Spaces we paint across Utah
              </h2>
              <p className="text-muted-foreground text-lg">
                Every commercial property has different hours, traffic, and standards. We plan each job
                around how your space actually operates.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="flex gap-5 bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                    <industry.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground">{industry.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scheduling */}
        <section className="py-20 bg-background">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow-pill">Minimal Disruption</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Scheduling that keeps you open
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {scheduling.map((option, index) => (
                <div key={option.title} className="relative bg-card border border-border rounded-2xl p-8 overflow-hidden">
                  <span className="absolute -right-2 -top-6 font-display text-[7rem] font-bold text-foreground/5 leading-none select-none">
                    {index + 1}
                  </span>
                  <option.icon className="w-9 h-9 text-brand-pink mb-6" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">{option.title}</h3>
                  <p className="text-muted-foreground">{option.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bid includes + floor callout */}
        <section className="py-20 bg-section-alt">
          <div className="container-wide grid lg:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
              <FileText className="w-10 h-10 text-brand-pink mb-6" />
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                What's in every commercial bid
              </h2>
              <ul className="space-y-4">
                {bidIncludes.map((item) => (
                  <li key={item} className="flex gap-3 text-foreground">
                    <span className="mt-2 w-2 h-2 rounded-full bg-gradient-brand shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-3xl overflow-hidden min-h-[420px] flex items-end">
              <img
                src="/gallery/gallery-9.png"
                alt="Stained and sealed concrete floor in a Utah commercial building"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="relative p-8 md:p-10">
                <p className="text-xs uppercase tracking-widest text-brand-pink font-semibold mb-2">
                  Beyond the walls
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                  Floor coatings & epoxy
                </h3>
                <p className="text-white/80 mb-6 max-w-md">
                  Durable, great-looking floors for lobbies, shops, garages, and high-traffic commercial
                  spaces — handled by the same crew painting your walls.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-brand-pink transition-colors"
                >
                  Explore all services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ServiceFaq
          heading={<>Commercial painting <span className="text-gradient">FAQ</span></>}
          intro="Common questions from Utah business owners, property managers, and contractors."
          faqs={faqs}
        />
        <RelatedServices currentSlug="commercial-painting" />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default CommercialPainting;
