import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Shield, DollarSign, Clock, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-painting.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
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
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <img
          src={heroImage}
          alt="Professional house painters working on a Utah home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </motion.div>

      {/* Animated Paint Drips */}
      <div className="absolute top-0 left-0 right-0 h-32 z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute top-0 w-8 rounded-b-full ${i % 2 === 0 ? "bg-hero-purple" : "bg-hero-purple-light"}`}
            style={{ left: `${10 + i * 12}%` }}
            initial={{ height: 0 }}
            animate={{ 
              height: [0, 40 + Math.random() * 60, 30 + Math.random() * 40],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container-wide py-32 text-center"
      >
        <motion.div 
          className="max-w-[52rem] mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6"
          >
            Utah's Friendly Neighborhood{" "}
            <span className="text-gradient">Painters</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-primary-foreground/90 mb-8"
          >
            Real E Painting is your local Utah painting contractor — interior, exterior, residential, and commercial services to freshen up your home or business, inside and out.
          </motion.p>

          {/* CTAs with hover effects */}
          <motion.div 
            variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="relative overflow-hidden group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl h-14 px-10 text-lg font-semibold bg-white text-brand-pink hover:bg-white/90 shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span className="relative z-10">Get a Free Estimate</span>
                <motion.div
                  className="absolute inset-0 bg-primary/5"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero-outline" size="xl" asChild>
                <a href="tel:+14357773508">
                  <Phone className="w-5 h-5" />
                  Call (435) 777-3508
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                className="flex items-center gap-2 text-primary-foreground/80"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.15 }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-full glass-dark flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <badge.icon className="w-5 h-5" />
                </motion.div>
                <span className="text-sm font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom paint drip decoration */}
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

export default Hero;
