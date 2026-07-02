import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { SocialLinks } from "@/components/SocialLinks";
import { Phone, Mail, Clock } from "lucide-react";
import heroImage from "@/assets/exterior-painting.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <PageHero
        eyebrow="Contact Us"
        title="Get Your Free Utah Painting Estimate"
        subtitle="Tell us about your interior or exterior painting project and we'll get back to you within 24 hours with a detailed, no-obligation quote for your Utah home or business."
        image={heroImage}
        imageAlt="Exterior painting project by Real E Painting"
      />

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl icon-accent flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+14357773508" className="text-muted-foreground hover:text-primary transition-colors">
                      (435) 777-3508
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Call or text anytime</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl icon-accent flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:real.e.painting@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      real.e.painting@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl icon-accent flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <p className="text-muted-foreground">
                      Mon - Fri: 7:00 AM - 6:00 PM<br />
                      Sat: By Appointment<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Follow Us</h3>
                  <SocialLinks variant="list" />
                </div>
              </div>

              {/* Quick Response */}
              <div className="mt-8 p-6 bg-accent rounded-xl">
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Quick Response Promise
                </h3>
                <p className="text-sm text-muted-foreground">
                  We return all estimate requests within 24 hours. Need faster? Give us a call and speak directly with our team.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl shadow-card p-8 md:p-10">
                <LeadForm variant="full" idPrefix="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
