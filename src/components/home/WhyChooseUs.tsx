import { Award, Clock, Shield, DollarSign } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionProgress, setSectionProgress] = useState(0);
  const [hasBeenFilled, setHasBeenFilled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;

        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        if (sectionBottom < 0) {
          setSectionProgress(0);
          setHasBeenFilled(false);
        } else if (sectionTop > windowHeight) {
          if (hasBeenFilled) {
            setSectionProgress(1);
          } else {
            setSectionProgress(0);
          }
        } else {
          // Calculate how much the section has scrolled into view
          // Start when section is 50% into viewport, finish when fully scrolled through
          const scrollStart = windowHeight * 0.5; // Start when section top is at 50% of viewport
          const scrollRange = windowHeight * 0.6; // Continue for 60% of viewport height
          
          const scrolled = windowHeight - sectionTop;
          const rawProgress = (scrolled - scrollStart) / scrollRange;
          const newProgress = Math.max(0, Math.min(1, rawProgress));

          if (newProgress >= 1) {
            setHasBeenFilled(true);
          }

          if (hasBeenFilled) {
            setSectionProgress(1);
          } else {
            setSectionProgress(newProgress);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasBeenFilled]);

  const reasons = [
    {
      icon: DollarSign,
      title: "Best ROI",
      description: "Biggest impact for the least amount of money",
    },
    {
      icon: Award,
      title: "Adds Value",
      description: "Increases home value and curb appeal",
    },
    {
      icon: Shield,
      title: "Protection",
      description: "Prevents mold and protects from elements",
    },
    {
      icon: Clock,
      title: "Fast Results",
      description: "Quick transformation, minimal disruption",
    },
  ];

  const paintingProgress = sectionProgress;

  return (
    <section ref={sectionRef} className="relative py-16 overflow-hidden bg-background">
      {/* Gradient sweep effect */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: isClient
            ? `linear-gradient(to right, 
                rgba(82, 134, 253, 0.18) 0%, 
                rgba(82, 134, 253, 0.18) ${paintingProgress * 100}%, 
                hsl(0 0% 0%) ${paintingProgress * 100}%, 
                hsl(0 0% 0%) 100%)`
            : "hsl(0 0% 0%)",
        }}
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why <span className="text-gradient">Repaint</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              A fresh coat of paint is one of the smartest investments you can make for your Utah home. Known as "The Least Expensive Remodel Out There!" painting delivers exceptional value for homeowners across the state.
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              Whether you're updating your home's appearance, protecting your investment from Utah's sun and weather, or preparing for a sale, professional house painting provides both beauty and lasting protection.
            </p>
            <p className="text-muted-foreground text-lg">
              From sealing out moisture to staying current with color trends, a quality paint job transforms your space while adding lasting value to your property.
            </p>
          </div>

          {/* Right Grid - 4 cards, 2 per row */}
          <div className="grid grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex flex-col p-4 rounded-xl bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-lg icon-accent flex items-center justify-center mb-3">
                  <reason.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
