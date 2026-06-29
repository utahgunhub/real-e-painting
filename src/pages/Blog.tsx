import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-painting.jpg";
import { blogPosts as posts } from "@/data/blogPosts";

const categories = ["All", "Interior", "Exterior", "Tips", "Color"];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p !== featured);
  const filtered =
    activeCategory === "All"
      ? rest
      : rest.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />

      <PageHero
        eyebrow="Our Blog"
        title="Painting Tips & Inspiration"
        subtitle="Advice, ideas, and how-tos from Utah's friendly neighborhood painters to help you get the most out of your next project."
        image={heroImage}
        imageAlt="Real E Painting professional painters at work"
      />

      {/* Featured post */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <motion.article
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-card rounded-3xl shadow-card overflow-hidden border border-border"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-64 lg:h-full min-h-[20rem] overflow-hidden group">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                Featured
              </span>
            </div>
            <div className="p-8 lg:py-12 lg:pr-12">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="text-primary font-semibold">{featured.category}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {featured.readTime}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {featured.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6">{featured.excerpt}</p>
              <Button asChild variant="cta" size="lg">
                <Link to={`/blog/${featured.slug}`}>
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Category filter + grid */}
      <section className="pb-20 bg-background">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-section-alt text-foreground hover:bg-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-lg py-12 text-center">
              No posts in this category yet — check back soon!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <motion.article
                  key={post.slug}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block bg-card rounded-2xl shadow-card hover:shadow-purple transition-all duration-300 overflow-hidden border border-border h-full"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Blog;
