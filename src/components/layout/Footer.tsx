import { Link } from "react-router-dom";
import { Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/real-e-logo.png"
                alt="Real E Painting logo"
                className="h-24 w-auto sm:h-28 md:h-32"
                loading="lazy"
              />
              <span className="sr-only">Real E Painting</span>
            </div>
            <p className="text-primary-foreground/70 mb-6">
              Utah's trusted painting contractor for interior and exterior house painting, cabinet refinishing, epoxy, wallpaper, and more. Serving homes and businesses across the state.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/real_e_painting_llc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Real E Painting on Instagram"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@realepaintingllc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Real E Painting on TikTok"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Interior Painting",
                "Exterior Painting",
                "Residential Painting",
                "Commercial Painting",
                "Cabinets & Bookcases",
                "Epoxy",
                "Wallpaper",
                "Countertops & Bathtubs",
                "Trim Repair",
                "Drywall Repair & Texture",
                "Wood Staining",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-left"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "All Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-left"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+14357773508"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  (435) 777-3508
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:real.e.painting@gmail.com"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  real.e.painting@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Mon - Fri: 7:00 AM - 6:00 PM<br />
                  Sat: By Appointment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Real E Painting. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button onClick={(e) => e.preventDefault()} className="text-primary-foreground/50 hover:text-primary transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={(e) => e.preventDefault()} className="text-primary-foreground/50 hover:text-primary transition-colors cursor-pointer">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
