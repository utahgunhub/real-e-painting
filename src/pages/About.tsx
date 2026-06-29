import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/home/CTASection";
import { Award, Users, Target, Heart } from "lucide-react";
import heroImage from "@/assets/hero-painting.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in every brushstroke.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Proudly serving Utah families and businesses with friendly, reliable painting services.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Attention to detail that sets us apart from the competition.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest pricing, clear communication, and promises we keep.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <PageHero
        eyebrow="About Us"
        title="About Real E Painting"
        subtitle="Utah's friendly neighborhood painters — trusted for interior and exterior house painting, cabinet work, epoxy, and more."
        image={heroImage}
        imageAlt="Real E Painting professional painters at work"
      />

      {/* Story */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Real E Painting was built on a simple idea: bring friendly, professional painting services to Utah neighborhoods. Whether you need interior house painting in a single room or a full exterior refresh, our local crew is here to help.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From cabinets and countertops to epoxy floors, wallpaper, drywall repair, and wood staining, we offer a full range of residential and commercial painting services across Utah. Every project gets careful prep, quality products, and the respect your home or business deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-section-alt">
        <div className="container-wide">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
