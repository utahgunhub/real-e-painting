import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/socialLinks";
import { SocialIcon } from "@/components/SocialLinks";
import { FEATURED_NAV_SERVICES, OTHER_NAV_SERVICES } from "@/data/servicePages";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

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
    { name: "Contact", path: "/contact" },
  ];

  const servicesActive = location.pathname.startsWith("/services");

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
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 font-medium transition-colors ${
                  servicesActive ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen(true)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3">
                  <div className="rounded-xl border border-border bg-card py-2 shadow-xl">
                    {FEATURED_NAV_SERVICES.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-primary ${
                          location.pathname === item.path ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="mx-4 my-2 border-t border-border" />
                    <p className="px-4 pb-1 pt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Other Services
                    </p>
                    {OTHER_NAV_SERVICES.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="mt-1 block border-t border-border px-4 py-3 text-sm font-semibold text-primary hover:bg-accent"
                    >
                      View all services
                    </Link>
                  </div>
                </div>
              )}
            </div>
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
            <p className="px-4 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Services
            </p>
            {FEATURED_NAV_SERVICES.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2.5 px-4 font-medium rounded-lg transition-colors block ${
                  location.pathname === item.path ? "text-primary bg-accent" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <p className="px-4 pt-4 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Other Services
            </p>
            {OTHER_NAV_SERVICES.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 px-4 text-foreground rounded-lg transition-colors block hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-3 px-4 font-semibold rounded-lg transition-colors block ${
                location.pathname === "/services" ? "text-primary bg-accent" : "text-primary"
              }`}
            >
              View all services
            </Link>
            <div className="my-2 border-t border-border" />
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
