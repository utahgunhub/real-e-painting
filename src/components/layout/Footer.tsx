import { Link } from "react-router-dom";
import { Phone, Mail, Clock } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { SOCIAL_LINKS } from "@/data/socialLinks";

const Footer = () => {
  return (
    <footer className="bg-black text-primary-foreground border-t border-border">
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
            <SocialLinks className="mb-4" />
            <div className="space-y-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  {social.name} {social.handle}
                </a>
              ))}
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
              {SOCIAL_LINKS.map((social) => (
                <li key={social.name} className="flex items-center gap-3">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {social.name} {social.handle}
                  </a>
                </li>
              ))}
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
