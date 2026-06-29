import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { 
      name: "Interior Painting", 
      path: "/interior-painting",
      dropdown: [
        { name: "Residential Interior", path: "/interior-painting/residential" },
        { name: "Commercial Interior", path: "/interior-painting/commercial" },
        { name: "Cabinet Painting", path: "/interior-painting/cabinets" },
        { name: "Color Consultation", path: "/interior-painting/color-consultation" },
      ]
    },
    { 
      name: "Exterior Painting", 
      path: "/exterior-painting",
      dropdown: [
        { name: "Residential Exterior", path: "/exterior-painting/residential" },
        { name: "Commercial Exterior", path: "/exterior-painting/commercial" },
        { name: "Stucco & Siding", path: "/exterior-painting/stucco-siding" },
        { name: "Deck & Fence Staining", path: "/exterior-painting/deck-fence" },
      ]
    },
    { name: "All Services", path: "/services" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md pt-3 pb-0" : "shadow-sm pt-5 pb-0"
      } relative overflow-visible`}
    >
      {/* Top wave accent */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-0">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="w-full h-10 md:h-12"
        >
          <path
            d="M0 80V40c100 20 100-30 200-10s100 40 200 20 100-50 200-20 100 35 200 15 100-40 200-15 100 25 200 5V80z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      <div className="container-wide flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="/nav-logo.png"
            alt="We Paint Pros logo"
            className="h-14 w-auto md:h-16"
            loading="lazy"
          />
          <span className="sr-only">We Paint Pros</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {link.dropdown ? (
                <button
                  className={`font-medium transition-colors flex items-center gap-1 ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4" />
                </button>
              ) : (
                <button
                  className={`font-medium transition-colors cursor-pointer ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={(e) => e.preventDefault()}
                >
                  {link.name}
                </button>
              )}
              
              {/* Dropdown Menu */}
              {link.dropdown && openDropdown === link.name && (
                <div className="absolute top-full left-0 w-56 z-50 pt-1">
                  <div className="bg-white rounded-lg shadow-lg border border-border py-2 mt-1">
                    {link.dropdown.map((item) => (
                      <button
                        key={item.name}
                        onClick={(e) => e.preventDefault()}
                        className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent hover:text-primary transition-colors cursor-pointer"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg animate-fade-in max-h-[80vh] overflow-y-auto z-50">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      className={`w-full py-3 px-4 font-medium rounded-lg transition-colors flex items-center justify-between ${
                        isActive(link.path)
                          ? "text-primary bg-accent"
                          : "text-foreground"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === link.name && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.dropdown.map((item) => (
                          <button
                            key={item.name}
                            onClick={(e) => e.preventDefault()}
                            className="block w-full text-left py-2 px-4 text-sm text-foreground rounded-lg transition-colors"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={(e) => e.preventDefault()}
                    className={`py-3 px-4 font-medium rounded-lg transition-colors block w-full text-left ${
                      isActive(link.path)
                        ? "text-primary bg-accent"
                        : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Bottom wave accent (matches hero wave shape) */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-0 translate-y-full h-12 md:h-10">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{ transform: "scale(1, -1)" }}
        >
          <path
            d="M0 80V40c100 20 100-30 200-10s100 40 200 20 100-50 200-20 100 35 200 15 100-40 200-15 100 25 200 5V80z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
