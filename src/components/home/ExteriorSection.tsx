import { Check } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import exteriorImage from "@/assets/exterior-painting.jpg";

const WelcomeSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const values = [
    "Trusted Utah painting contractor for homes & businesses",
    "Superior products with proper surface preparation",
    "Interior, exterior, residential & commercial painting",
    "Cabinets, epoxy, wallpaper, drywall repair & more",
    "Honest pricing with no hidden fees or surprises",
    "We treat every Utah project like it's our own home",
  ];

  return (
    <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
      <div className="container-wide relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with parallax */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-xl"
              style={{ y: imageY }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={exteriorImage}
                alt="Exterior house painting project in Utah"
                className="w-full h-auto"
              />
              {/* Animated overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
            
            {/* Floating Badge with count */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-purple-lg p-6 hidden md:block"
              initial={{ scale: 0, rotate: -10 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <motion.div 
                className="font-display text-3xl font-bold text-brand-pink mb-1"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                1000's
              </motion.div>
              <div className="text-sm text-muted-foreground">Projects & Counting</div>
            </motion.div>

            {/* Paint drip decoration */}
            <motion.div
              className="absolute -top-4 left-10 w-4 h-20 bg-brand-blue rounded-b-full"
              initial={{ height: 0 }}
              animate={isInView ? { height: 80 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <motion.div
              className="absolute -top-4 left-20 w-3 h-12 bg-brand-pink/80 rounded-b-full"
              initial={{ height: 0 }}
              animate={isInView ? { height: 48 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="eyebrow-pill"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring" }}
            >
              About Us
            </motion.span>
            
            <motion.h2 
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Utah's Friendly Neighborhood <span className="text-gradient">Painters</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Real E Painting serves homeowners and businesses across Utah with interior painting, exterior painting, cabinet refinishing, epoxy coatings, wallpaper, and more. Whether it's a single room or a full property refresh, we bring friendly service and quality craftsmanship to every job.
            </motion.p>

            <ul className="space-y-4">
              {values.map((value, index) => (
                <motion.li 
                  key={value} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-brand-blue/15 flex items-center justify-center shrink-0 mt-0.5"
                    whileHover={{ scale: 1.2, backgroundColor: "hsl(var(--primary))" }}
                  >
                    <Check className="w-3.5 h-3.5 text-brand-pink" />
                  </motion.div>
                  <span className="text-foreground">{value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
