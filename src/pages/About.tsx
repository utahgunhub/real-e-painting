import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Debbie Haws",
      role: "Owner / Partner",
      bio: "With over 15 years in the painting industry, Debbie brings exceptional project management and customer service skills. She ensures every project runs smoothly from estimate to final walkthrough.",
    },
    {
      name: "Brandon Sharp",
      role: "Owner / Partner",
      bio: "Brandon leads our crews with 20+ years of hands-on experience. His expertise in surface preparation and product selection ensures lasting, beautiful results on every job.",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in every brushstroke.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Proudly serving Utah families and businesses for over two decades.",
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

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-glow">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              About We Paint Pros
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Utah's trusted painting professionals, serving homes and businesses with pride since 2004.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We Paint Pros was founded with a simple mission: deliver exceptional painting services with honesty, professionalism, and craftsmanship. What started as a small crew has grown into one of Utah's most trusted painting companies.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Over 20 years later, we've painted everything from cozy family homes to major commercial facilities like Cabela's and government buildings. Our reputation is built on doing things right—proper prep, premium products, and meticulous attention to detail.
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

      {/* Team */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Meet Our Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-card rounded-2xl p-8 shadow-card">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6">
                  <span className="text-primary-foreground font-display font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
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
