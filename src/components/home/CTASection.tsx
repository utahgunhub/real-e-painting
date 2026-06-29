import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary-glow relative overflow-hidden" ref={ref}>
      {/* Animated background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating circles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-foreground/5"
            style={{
              width: 100 + Math.random() * 300,
              height: 100 + Math.random() * 300,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Paint drips from top */}
        <div className="absolute top-0 left-0 right-0 flex justify-around">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="w-6 bg-primary-foreground/10 rounded-b-full"
              initial={{ height: 0 }}
              animate={isInView ? { height: 40 + Math.random() * 80 } : {}}
              transition={{ delay: i * 0.15, duration: 1 }}
            />
          ))}
        </div>
      </div>

      <div className="container-wide relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Schedule Your Free Estimate Today
          </motion.h2>
          
          <motion.p 
            className="text-primary-foreground/90 text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Ready to transform your space? Get a detailed, no-obligation estimate within 24 hours. Our team is standing by to help bring your vision to life.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="hero-outline"
                size="xl"
                className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 group flex items-center justify-center gap-2"
                onClick={(e) => e.preventDefault()}
              >
                <MessageCircle className="w-5 h-5" />
                Request Free Quote
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Button>
            </motion.div>
            
            <motion.div
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto flex items-center justify-center gap-2" onClick={(e) => e.preventDefault()}>
                <motion.span
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Phone className="w-5 h-5" />
                </motion.span>
                Call 385-831-1065
              </Button>
            </motion.div>
          </motion.div>

          {/* Response Promise */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-primary-foreground/70 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            {[
              "Estimates returned within 24 hours",
              "Friendly live help",
              "No pressure, no obligation"
            ].map((item, index) => (
              <motion.span
                key={item}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <motion.span
                  className="text-primary-foreground"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: index * 0.3 }}
                >
                  ✓
                </motion.span>
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16">
          <motion.path
            d="M0 80V50c150 30 300-20 450 10s300-25 450 5 150 15 300-10v25z"
            fill="hsl(var(--foreground))"
            initial={{ d: "M0 80V80c150 0 300 0 450 0s300 0 450 0 150 0 300 0v0z" }}
            animate={{ d: "M0 80V50c150 30 300-20 450 10s300-25 450 5 150 15 300-10v25z" }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
      </div>
    </section>
  );
};

export default CTASection;
