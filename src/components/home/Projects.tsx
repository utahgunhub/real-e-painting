import { Star, Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-section-alt relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.05) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-wide relative z-10" ref={ref}>
        {/* Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block text-primary font-semibold mb-4 px-4 py-1 bg-primary/10 rounded-full"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Testimonials
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Utah homeowners and businesses trust Real E Painting for interior and exterior house painting done right — with quality results they can count on.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            {
              initial: "J",
              name: "Jenny",
              text: "We'll call you again for some interior jobs too! Thank You!",
            },
            {
              initial: "J",
              name: "J. Griffiths",
              text: "Please use us as a referral anytime! We'd love to sing your praises to others!",
            },
            {
              initial: "A",
              name: "Albert",
              text: "You did a great job! You are the best to work with!",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-card p-6 rounded-xl shadow-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-sm">
                    {testimonial.initial}
                  </span>
                </div>
                <span className="font-semibold text-foreground">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
