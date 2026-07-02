import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ParallaxCard from "@/components/ParallaxCard";

const Services = () => {

  const services = [
    {
      title: "Interior Painting",
      label: "Interior Painting",
      imageSrc: "/interior-painting.png",
      href: "/services",
    },
    {
      title: "Exterior Painting",
      label: "Exterior Painting",
      imageSrc: "/exterior-painting.png",
      href: "/services",
    },
    {
      title: "Residential Painting",
      label: "Residential Painting",
      imageSrc: "/interior-painting.png",
      href: "/services",
    },
    {
      title: "Commercial Painting",
      label: "Commercial Painting",
      imageSrc: "/commercial-painting.png",
      href: "/services",
    },
  ];

  const additionalServices = [
    "Cabinets & Bookcases",
    "Epoxy",
    "Wallpaper",
    "Countertops & Bathtubs",
    "Trim Repair",
    "Drywall Repair & Texture",
    "Wood Staining",
  ];

  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden bg-section-alt">
      <div className="container-wide mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="eyebrow-pill">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-display mb-6">
            Utah Painting <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From cabinet painting and epoxy floors to full interior and exterior house painting, Real E Painting delivers complete solutions for Utah homes and commercial properties.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {services.map((service, index) => (
            <ParallaxCard key={service.title} index={index}>
              <Link to={service.href} className="relative block cursor-pointer">
                <div 
                  className="relative z-10 group rounded-[28px] overflow-hidden shadow-card hover:shadow-xl transition-all duration-500"
                >
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="h-[240px] md:h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Subtle gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                  {/* Label pill */}
                  <div className="absolute bottom-6 right-6 w-1/2 min-w-[250px]">
                    <div className="relative">
                      <div className="bg-white text-primary rounded-2xl px-3 py-1.5 md:px-4 md:py-2 shadow-2xl select-none">
                        <span className="block whitespace-nowrap leading-tight font-semibold text-base md:text-lg tracking-wide">
                          {service.label ?? service.title}
                        </span>
                      </div>
                      <div className="absolute -right-2 -top-6 md:-right-3 md:-top-7 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-brand text-primary-foreground flex items-center justify-center shadow-xl transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ParallaxCard>
          ))}
        </div>

        {/* Additional services */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {additionalServices.map((service) => (
            <span
              key={service}
              className="px-4 py-2 rounded-full bg-card text-foreground text-sm font-medium border border-border"
            >
              {service}
            </span>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-10 md:mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="px-8 py-6 text-base md:text-lg rounded-full"
          >
            <Link to="/services">See All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
