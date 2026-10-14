import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceFaqProps {
  heading: React.ReactNode;
  intro?: string;
  faqs: FaqItem[];
  className?: string;
}

const ServiceFaq = ({ heading, intro, faqs, className }: ServiceFaqProps) => (
  <section className={cn("py-20 bg-background", className)}>
    <div className="container-wide max-w-4xl">
      <div className="text-center mb-10">
        <span className="eyebrow-pill">FAQ</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          {heading}
        </h2>
        {intro && <p className="text-muted-foreground text-lg">{intro}</p>}
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`faq-${index}`}
            className="bg-card border border-border rounded-xl px-6"
          >
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default ServiceFaq;
