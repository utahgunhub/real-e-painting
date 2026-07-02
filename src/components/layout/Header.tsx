import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/socialLinks";
import { SocialIcon } from "@/components/SocialLinks";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { name: "All Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const linkClass = (path: string) =>
    `font-medium transition-colors ${
      isActive(path) ? "text-primary" : "text-foreground hover:text-primary"
    }`;

  const socialLinkClass =
    "text-foreground hover:text-primary transition-colors p-1.5 rounded-full hover:bg-accent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ${
        isScrolled ? "shadow-md shadow-black/40 pt-3 pb-0" : "shadow-sm shadow-black/20 pt-5 pb-0"
      } relative overflow-visible border-b border-border`}
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
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/real-e-logo.png"
            alt="Real E Painting logo"
            className="h-16 w-auto sm:h-[4.5rem] md:h-20"
            loading="lazy"
          />
          <span className="font-display font-bold text-lg sm:text-xl md:text-2xl text-foreground leading-tight">
            Real E Painting
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className={linkClass(link.path)}>
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 border-l border-border pl-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClass}
                aria-label={`Follow Real E Painting on ${social.name} (${social.handle})`}
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile: social icons + menu button */}
        <div className="flex items-center gap-1 lg:hidden">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
              aria-label={`Follow Real E Painting on ${social.name} (${social.handle})`}
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
          <button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg shadow-black/40 animate-fade-in max-h-[80vh] overflow-y-auto z-50">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 px-4 font-medium rounded-lg transition-colors block ${
                  isActive(link.path) ? "text-primary bg-accent" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border px-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <SocialIcon icon={social.icon} />
                  <span>
                    {social.name}{" "}
                    <span className="text-muted-foreground text-sm">{social.handle}</span>
                  </span>
                </a>
              ))}
            </div>
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
