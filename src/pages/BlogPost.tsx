import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/home/CTASection";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
        image={post.image}
        imageAlt={post.title}
      />

      <article className="py-16 bg-background">
        <div className="container-narrow max-w-3xl">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="text-primary font-semibold">{post.category}</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>

          {/* Body */}
          <div className="space-y-6">
            {post.content.map((block, idx) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={idx}
                    className="font-display text-2xl md:text-3xl font-bold text-foreground pt-4"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={idx} className="space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span className="text-muted-foreground text-lg leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p
                  key={idx}
                  className="text-muted-foreground text-lg leading-relaxed"
                >
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="py-16 bg-section-alt">
        <div className="container-wide">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10">
            More Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((item) => (
              <motion.div
                key={item.slug}
                whileHover={{ y: -6 }}
                className="group"
              >
                <Link
                  to={`/blog/${item.slug}`}
                  className="block bg-card rounded-2xl shadow-card hover:shadow-purple transition-all duration-300 overflow-hidden border border-border"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default BlogPost;
