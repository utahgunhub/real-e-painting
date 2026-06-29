import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import WelcomeSection from "@/components/home/ExteriorSection";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GallerySection from "@/components/home/InteriorSection";
import Projects from "@/components/home/Projects";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WelcomeSection />
        <Services />
        <WhyChooseUs />
        <GallerySection />
        <Projects />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
