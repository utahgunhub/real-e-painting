import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Shield, DollarSign, Clock } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-painting.jpg";
import { LeadForm } from "@/components/LeadForm";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const trustBadges = [
    { icon: Clock, text: "Free Utah Estimates" },
    { icon: Shield, text: "Quality Guaranteed" },
    { icon: DollarSign, text: "Residential & Commercial" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(100vh-120px)] flex items-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <img
          src={heroImage}
          alt="Professional house painters working on a Utah home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </motion.div>

      <motion.div className="relative z-10 container-wide py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left — headline & CTAs */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6"
            >
              Utah's Friendly Neighborhood{" "}
              <span className="text-gradient">Painters</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Real E Painting is your local Utah painting contractor — interior, exterior,
              residential, and commercial services to freshen up your home or business, inside and
              out.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="xl"
                className="bg-white text-brand-pink hover:bg-white/90 shadow-lg border-0"
              >
                <a href="tel:+14357773508">
                  <Phone className="w-5 h-5" />
                  Call (435) 777-3508
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-primary-foreground/80"
                >
                  <div className="w-10 h-10 rounded-full glass-dark flex items-center justify-center shrink-0">
                    <badge.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full max-w-lg mx-auto lg:max-w-none lg:mx-0"
          >
            <div className="rounded-2xl bg-card/95 backdrop-blur-md shadow-2xl border border-border/40 p-6 md:p-8">
              <LeadForm variant="compact" idPrefix="hero" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-20 pointer-events-none">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full">
          <motion.path
            d="M0 80V40c100 20 100-30 200-10s100 40 200 20 100-50 200-20 100 35 200 15 100-40 200-15 100 25 200 5V80z"
            fill="hsl(var(--background))"
            initial={{
              d: "M0 80V80c100 0 100 0 200 0s100 0 200 0 100 0 200 0 100 0 200 0 100 0 200 0 100 0 200 0V80z",
            }}
            animate={{
              d: "M0 80V40c100 20 100-30 200-10s100 40 200 20 100-50 200-20 100 35 200 15 100-40 200-15 100 25 200 5V80z",
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
