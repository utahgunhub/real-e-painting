import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/home/CTASection";
import { motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import heroImage from "@/assets/exterior-painting.jpg";

const galleryImages = [
  "/gallery/gallery-1.png",
  "/gallery/gallery-2.png",
  "/gallery/gallery-4.png",
  "/gallery/gallery-5.png",
  "/gallery/gallery-6.png",
  "/gallery/gallery-7.png",
  "/gallery/gallery-8.png",
  "/gallery/gallery-9.png",
  "/gallery/gallery-10.png",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Header />

      <PageHero
        eyebrow="Our Work"
        title="Utah Painting Gallery"
        subtitle="Browse interior and exterior painting projects completed for Utah homeowners and businesses. See the craftsmanship and attention to detail that sets Real E Painting apart."
        image={heroImage}
        imageAlt="Exterior painting project by Real E Painting"
      />

      {/* Masonry grid */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {galleryImages.map((src, idx) => (
              <motion.div
                key={src}
                className="mb-6 break-inside-avoid"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(src)}
                  className="group relative w-full overflow-hidden rounded-2xl shadow-card hover:shadow-purple transition-all duration-300 cursor-pointer block"
                >
                  <img
                    src={src}
                    alt={`Utah painting project ${idx + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                      <ZoomIn className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-transparent">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-white/90 hover:bg-white p-2 transition-all duration-300 hover:scale-110">
            <X className="h-6 w-6 text-gray-900" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {selectedImage && (
            <div className="flex items-center justify-center w-full h-full p-4">
              <img
                src={selectedImage}
                alt="Real E Painting project"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Gallery;
