import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "interior", label: "Interior Painting" },
  { value: "exterior", label: "Exterior Painting" },
  { value: "residential", label: "Residential Painting" },
  { value: "commercial", label: "Commercial Painting" },
  { value: "cabinets", label: "Cabinets & Bookcases" },
  { value: "epoxy", label: "Epoxy" },
  { value: "wallpaper", label: "Wallpaper" },
  { value: "countertops", label: "Countertops & Bathtubs" },
  { value: "trim", label: "Trim Repair" },
  { value: "drywall", label: "Drywall Repair & Texture" },
  { value: "staining", label: "Wood Staining" },
  { value: "other", label: "Other" },
];

interface LeadFormProps {
  variant?: "compact" | "full";
  className?: string;
  idPrefix?: string;
}

export const LeadForm = ({
  variant = "compact",
  className,
  idPrefix = "lead",
}: LeadFormProps) => {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isCompact = variant === "compact";

  return (
    <div className={cn(className)}>
      {isCompact ? (
        <div className="mb-5">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
            Get Your Free Estimate
          </h2>
          <p className="text-sm text-muted-foreground">
            Fill out the form and we'll respond within 24 hours.
          </p>
        </div>
      ) : (
        <>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Request Your Free Estimate
          </h2>
          <p className="text-muted-foreground mb-8">
            Fill out the form below and we'll prepare a detailed quote for your project.
          </p>
        </>
      )}

      <form onSubmit={handleSubmit} className={cn("space-y-4", !isCompact && "space-y-6")}>
        <div className={cn("grid gap-4", !isCompact && "md:grid-cols-2 md:gap-6")}>
          <div>
            <label
              htmlFor={`${idPrefix}-name`}
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Full Name *
            </label>
            <Input
              id={`${idPrefix}-name`}
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              required
              className={isCompact ? "h-11 bg-background" : "h-12"}
            />
          </div>
          <div>
            <label
              htmlFor={`${idPrefix}-phone`}
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Phone Number *
            </label>
            <Input
              id={`${idPrefix}-phone`}
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(435) 555-0123"
              required
              className={isCompact ? "h-11 bg-background" : "h-12"}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-email`}
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Email Address *
          </label>
          <Input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className={isCompact ? "h-11 bg-background" : "h-12"}
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-service`}
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Service Needed
          </label>
          <select
            id={`${idPrefix}-service`}
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={cn(
              "w-full px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
              isCompact ? "h-11 text-sm" : "h-12"
            )}
          >
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-message`}
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Project Details{isCompact ? "" : ""}
          </label>
          <Textarea
            id={`${idPrefix}-message`}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={
              isCompact
                ? "Brief description of your project..."
                : "Tell us about your project - square footage, number of rooms, timeline, any special requirements..."
            }
            rows={isCompact ? 3 : 5}
            className="resize-none bg-background"
          />
        </div>

        <Button type="submit" variant="cta" size={isCompact ? "lg" : "xl"} className="w-full">
          <Send className="w-5 h-5 mr-2" />
          {isCompact ? "Request Free Quote" : "Submit Request"}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          By submitting, you agree to receive communication about your estimate. We never share your info.
        </p>
      </form>
    </div>
  );
};
