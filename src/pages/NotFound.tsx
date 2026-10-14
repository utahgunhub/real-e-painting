import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSeo } from "@/hooks/useSeo";

const NotFound = () => {
  const location = useLocation();

  useSeo({
    title: "Page Not Found | Real E Painting",
    description: "The page you're looking for doesn't exist. Head back to Real E Painting to explore our Utah painting services.",
    path: location.pathname,
    noindex: true,
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
