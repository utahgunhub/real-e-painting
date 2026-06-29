import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/exterior-painting.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for reaching out!",
      description: "We'll get back to you within 24 hours with your free estimate.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
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
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:real.e.painting@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      real.e.painting@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
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
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Request Your Free Estimate
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll prepare a detailed quote for your project.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(435) 555-0123"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="interior">Interior Painting</option>
                      <option value="exterior">Exterior Painting</option>
                      <option value="residential">Residential Painting</option>
                      <option value="commercial">Commercial Painting</option>
                      <option value="cabinets">Cabinets & Bookcases</option>
                      <option value="epoxy">Epoxy</option>
                      <option value="wallpaper">Wallpaper</option>
                      <option value="countertops">Countertops & Bathtubs</option>
                      <option value="trim">Trim Repair</option>
                      <option value="drywall">Drywall Repair & Texture</option>
                      <option value="staining">Wood Staining</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project - square footage, number of rooms, timeline, any special requirements..."
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" variant="cta" size="xl" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Submit Request
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    By submitting, you agree to receive communication about your estimate. We never share your info.
                  </p>
                </form>
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
