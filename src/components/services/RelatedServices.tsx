import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICE_PAGES } from "@/data/servicePages";

const RelatedServices = ({ currentSlug }: { currentSlug: string }) => {
  const others = SERVICE_PAGES.filter((service) => service.slug !== currentSlug);

  return (
    <section className="py-20 bg-section-alt">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            More Ways We Can <span className="text-gradient">Help</span>
          </h2>
          <Link
            to="/services"
            className="text-primary font-medium hover:text-primary/80 transition-colors"
          >
            View all services →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {others.map((service) => (
            <Link
              key={service.slug}
              to={service.path}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} in Utah by Real E Painting`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-foreground flex items-center justify-between gap-2 mb-1">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 text-primary shrink-0 transition-transform group-hover:rotate-45" />
                </h3>
                <p className="text-sm text-muted-foreground">{service.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
