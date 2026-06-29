import { Star, Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clients = [
    { name: "Cabela's", logo: "/customers/cabellas.png" },
    { name: "J.Crew", logo: "/customers/j-crew.png" },
    { name: "Tiffany & Co.", logo: "/customers/tiffany.png" },
    { name: "Provo Regional Hospital", logo: "/customers/provo-regional.png" },
    { name: "Utah Correctional Facilities", logo: "/customers/utah-corrections.png" },
    { name: "SLCC Trade School Homes", logo: "/customers/slcc.png" },
    { name: "Davis Monthan AFB", logo: "/customers/davis-monthan.png" },
    { name: "Bob Hope Theater", logo: "/customers/bob-hope.png" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

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
            Our Customers
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From retail giants to government facilities, we've delivered exceptional painting services to some of the biggest names across the country.
          </p>
        </motion.div>

        {/* Client Logos/Names */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 15px 30px -10px rgba(129, 57, 180, 0.2)"
              }}
              className="bg-card rounded-xl p-6 flex items-center justify-center group cursor-pointer relative overflow-hidden"
            >
              {/* Hover paint effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                style={{ borderRadius: "inherit" }}
              />
              
              <div className="text-center relative z-10 w-full">
                <motion.div
                  className="h-16 flex items-center justify-center mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain transition-all duration-300"
                  />
                </motion.div>
                <span className="font-display font-semibold text-foreground text-sm">
                  {client.name}
                </span>
              </div>

              {/* Corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-12 h-12 bg-primary/10 rounded-bl-3xl"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                style={{ originX: 1, originY: 0 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
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
