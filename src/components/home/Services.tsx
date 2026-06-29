import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import ParallaxCard from "@/components/ParallaxCard";

const Services = () => {

  const services = [
    {
      title: "Interior Painting",
      label: "Interior Painting",
      imageSrc: "/interior-painting.png",
      href: "/interior-painting",
    },
    {
      title: "Exterior Painting",
      label: "Exterior Painting",
      imageSrc: "/exterior-painting.png",
      href: "/exterior-painting",
    },
    {
      title: "Cabinet Painting",
      label: "Cabinet Painting",
      imageSrc: "/cabinet.png",
      href: "/interior-painting/cabinets",
    },
    {
      title: "Commercial Painting",
      label: "Commercial Painting",
      imageSrc: "/commercial-painting.png",
      href: "/services",
    },
  ];

  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden bg-section-alt">
      <div className="container-wide mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary font-semibold mb-4 px-4 py-1 bg-primary/10 rounded-full">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-display mb-6">
            Complete Painting <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From residential touch-ups to large commercial projects, we deliver exceptional results with every brushstroke.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {services.map((service, index) => (
            <ParallaxCard key={service.title} index={index}>
              <div className="relative cursor-pointer">
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
                      <div className="absolute -right-2 -top-6 md:-right-3 md:-top-7 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-primary/90">
                        <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxCard>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-10 md:mt-12 text-center">
          <Button
            size="lg"
            className="px-8 py-6 text-base md:text-lg rounded-full"
            onClick={(e) => e.preventDefault()}
          >
            See All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
