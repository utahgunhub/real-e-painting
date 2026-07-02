import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

const GallerySection = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

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

  return (
    <section className="py-24 relative overflow-hidden bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and copy */}
        <div 
          ref={ref}
          className={`max-w-xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Utah Painting Gallery
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Browse our gallery of interior and exterior painting projects completed for Utah homeowners and businesses. 
            See the quality craftsmanship and attention to detail that sets Real E Painting apart.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-all duration-300 cursor-pointer group"
          >
            <span className="text-sm font-medium uppercase tracking-wide">VIEW ALL IMAGES</span>
            <div className="w-8 h-8 rounded-full bg-gradient-brand text-primary-foreground flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
            </div>
          </Link>
        </div>
      </div>

      {/* Edge-to-edge carousel */}
      <div 
        className={`mt-12 lg:mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Carousel opts={{ loop: true, align: 'start' }} className="w-full">
          <CarouselContent className="-ml-4">
            {galleryImages.map((src, idx) => (
              <CarouselItem key={idx} className="pl-4 basis-[85%] md:basis-[75%] lg:basis-[70%]">
                <div 
                  className="w-full h-[26rem] md:h-[32rem] lg:h-[36rem] overflow-hidden rounded-2xl cursor-pointer group relative"
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`Utah painting project ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                      <ArrowUpRight className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-gradient-brand hover:opacity-90 text-primary-foreground shadow-xl border-0 w-12 h-12 rounded-full transition-all duration-300 hover:scale-110" />
          <CarouselNext className="right-4 bg-gradient-brand hover:opacity-90 text-primary-foreground shadow-xl border-0 w-12 h-12 rounded-full transition-all duration-300 hover:scale-110" />
        </Carousel>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-transparent">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-card hover:bg-accent p-2 transition-all duration-300 hover:scale-110 border border-border">
            <X className="h-6 w-6 text-foreground" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {selectedImage && (
            <div className="flex items-center justify-center w-full h-full p-4">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
