import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image: string;
  imageAlt?: string;
}

const PageHero = ({ eyebrow, title, subtitle, image, imageAlt = "" }: PageHeroProps) => {
  return (
    <section className="relative pt-40 pb-28 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {eyebrow && (
            <span className="inline-block text-primary-foreground/90 font-semibold mb-4 px-4 py-1 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-primary-foreground/90">{subtitle}</p>
          )}
        </motion.div>
      </div>

      {/* Bottom paint drip wave (matches home hero) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-20">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full">
          <motion.path
            d="M0 80V40c100 20 100-30 200-10s100 40 200 20 100-50 200-20 100 35 200 15 100-40 200-15 100 25 200 5V80z"
            fill="hsl(var(--background))"
            initial={{ d: "M0 80V80c100 0 100 0 200 0s100 0 200 0 100 0 200 0 100 0 200 0 100 0 200 0 100 0 200 0V80z" }}
            animate={{ d: "M0 80V40c100 20 100-30 200-10s100 40 200 20 100-50 200-20 100 35 200 15 100-40 200-15 100 25 200 5V80z" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
      </div>
    </section>
  );
};

export default PageHero;
