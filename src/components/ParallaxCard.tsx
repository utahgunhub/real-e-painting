import { useRef, useEffect, useState } from "react";

interface ParallaxCardProps {
  children: React.ReactNode;
  index: number;
}

const ParallaxCard = ({ children, index }: ParallaxCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number | null>(null);
  const hasConnectedRef = useRef(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const updateParallax = () => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const cardTop = rect.top;
      
      // Super tight range - complete animation very quickly
      // Start when card is 85% down viewport, finish when at 60%
      const startPoint = windowHeight * 0.85;
      const endPoint = windowHeight * 0.6;
      const range = startPoint - endPoint;
      
      const progress = Math.max(0, Math.min(1, (startPoint - cardTop) / range));
      
      // Once connected (progress = 1), stay connected
      if (progress >= 1) {
        hasConnectedRef.current = true;
      }
      
      const finalProgress = hasConnectedRef.current ? 1 : progress;
      
      // Left cards (even index: 0, 2) come from left, right cards (odd index: 1, 3) come from right
      const isLeftCard = index % 2 === 0;
      const maxOffset = 200; // Start from way out
      const translateX = isLeftCard 
        ? (1 - finalProgress) * -maxOffset // Start left, move right
        : (1 - finalProgress) * maxOffset;  // Start right, move left

      // Apply transform directly without triggering re-render
      card.style.transform = `translateX(${translateX}px)`;
    };

    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Schedule update on next frame for smooth animation
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax(); // Initial call
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [index, isMobile]);

  return (
    <div
      ref={cardRef}
      style={{
        // Add will-change for GPU acceleration on desktop only
        willChange: isMobile ? "auto" : "transform",
        // Smooth transition for the transform
        transition: "transform 0.1s linear",
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxCard;
