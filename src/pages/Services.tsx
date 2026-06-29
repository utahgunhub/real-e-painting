import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/interior-painting.jpg";
import {
  Paintbrush,
  PaintBucket,
  Home,
  Building2,
  BookOpen,
  Layers,
  LayoutGrid,
  Bath,
  Ruler,
  Hammer,
  TreePine,
  ArrowRight,
  ClipboardList,
  Palette,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Interior Painting",
    description:
      "Walls, ceilings, doors, and more — a fresh interior coat that transforms any room with clean lines and a flawless finish.",
  },
  {
    icon: PaintBucket,
    title: "Exterior Painting",
    description:
      "Boost curb appeal and protect your home from Utah's sun, snow, and wind with durable, weather-ready exterior coatings.",
  },
  {
    icon: Home,
    title: "Residential Painting",
    description:
      "From single rooms to whole-home makeovers, we treat your house with the care and respect it deserves.",
  },
  {
    icon: Building2,
    title: "Commercial Painting",
    description:
      "Offices, retail, and commercial spaces painted on schedule and with minimal disruption to your business.",
  },
  {
    icon: BookOpen,
    title: "Cabinets & Bookcases",
    description:
      "Refinish and repaint cabinets, bookcases, and built-ins for a like-new look without the cost of replacement.",
  },
  {
    icon: Layers,
    title: "Epoxy",
    description:
      "Tough, attractive epoxy coatings for garages, basements, and floors that stand up to heavy daily use.",
  },
  {
    icon: LayoutGrid,
    title: "Wallpaper",
    description:
      "Professional wallpaper installation and removal for accent walls, patterns, and statement spaces.",
  },
  {
    icon: Bath,
    title: "Countertops & Bathtubs",
    description:
      "Resurfacing for countertops and bathtubs that refreshes worn surfaces and extends their life.",
  },
  {
    icon: Ruler,
    title: "Trim Repair",
    description:
      "Repair and repaint baseboards, crown molding, and trim for crisp, finished detail throughout your space.",
  },
  {
    icon: Hammer,
    title: "Drywall Repair & Texture",
    description:
      "Patch holes, fix cracks, and match texture so your walls look seamless before the first coat goes on.",
  },
  {
    icon: TreePine,
    title: "Wood Staining",
    description:
      "Rich, protective stains for decks, fences, doors, and trim that highlight natural wood grain.",
  },
];

const process = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Free Estimate",
    description: "We visit your space, talk through your goals, and provide a clear, no-obligation quote.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Color & Prep",
    description: "We help with color choices, then carefully prep and protect every surface.",
  },
  {
    icon: Paintbrush,
    step: "03",
    title: "Quality Painting",
    description: "Our crew delivers clean, precise work using premium products built to last.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Final Walkthrough",
    description: "We clean up and walk the project with you to make sure every detail is perfect.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <PageHero
        eyebrow="Our Services"
        title="Complete Painting Services in Utah"
        subtitle="From interior and exterior house painting to cabinets, epoxy, wallpaper, and repairs — Real E Painting freshens up your space, inside and out, for homes and businesses."
        image={heroImage}
        imageAlt="Interior painting project by Real E Painting"
      />

      {/* Services grid */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-purple transition-all duration-300 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-section-alt relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold mb-4 px-4 py-1 bg-primary/10 rounded-full">
              How It Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Simple <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From first call to final walkthrough, we make professional painting easy and stress-free.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {process.map((item) => (
              <motion.div
                key={item.step}
                variants={itemVariants}
                className="relative bg-card rounded-2xl p-8 shadow-card"
              >
                <span className="absolute top-6 right-6 font-display text-4xl font-bold text-primary/10">
                  {item.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why choose strip */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                One Local Crew for <span className="text-gradient">Every Project</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Whether it's a single accent wall or a full commercial repaint, you get the same friendly service, honest pricing, and quality craftsmanship from Real E Painting.
              </p>
              <ul className="space-y-4">
                {[
                  "Free, no-obligation estimates",
                  "Premium products and proper prep",
                  "Residential & commercial experience",
                  "Honest pricing with no surprises",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild variant="cta" size="xl">
                  <Link to="/contact">
                    Get a Free Estimate
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link to="/gallery">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/interior-painting.png"
                alt="Real E Painting crew completing an interior painting project"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -top-4 left-10 w-4 h-20 bg-primary rounded-b-full hidden md:block" />
              <div className="absolute -top-4 left-20 w-3 h-12 bg-primary/70 rounded-b-full hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
