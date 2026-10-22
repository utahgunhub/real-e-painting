import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Review from "./pages/Review";
import InteriorPainting from "./pages/services/InteriorPainting";
import ExteriorPainting from "./pages/services/ExteriorPainting";
import ResidentialPainting from "./pages/services/ResidentialPainting";
import CommercialPainting from "./pages/services/CommercialPainting";
import CabinetPainting from "./pages/services/CabinetPainting";
import Limewash from "./pages/services/Limewash";
import Plaster from "./pages/services/Plaster";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/interior-painting" element={<InteriorPainting />} />
          <Route path="/services/exterior-painting" element={<ExteriorPainting />} />
          <Route path="/services/residential-painting" element={<ResidentialPainting />} />
          <Route path="/services/commercial-painting" element={<CommercialPainting />} />
          <Route path="/services/cabinet-painting" element={<CabinetPainting />} />
          <Route path="/services/limewash" element={<Limewash />} />
          <Route path="/services/plaster" element={<Plaster />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/review" element={<Review />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
