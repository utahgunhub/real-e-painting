import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sendReviewFeedback } from "@/lib/emailjs";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Loader2, Star } from "lucide-react";
import { useState } from "react";

const GOOGLE_REVIEWS_URL = "https://g.page/r/CSazShIPJzxvEAE/review";

const emptyFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const Review = () => {
  const { toast } = useToast();
  const [rating, setRating] = useState<number | null>(null);
  const [showLowRatingForm, setShowLowRatingForm] = useState(false);
  const [formData, setFormData] = useState(emptyFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStarClick = (value: number) => {
    setRating(value);
    if (value >= 4) {
      window.location.assign(GOOGLE_REVIEWS_URL);
      return;
    }
    setShowLowRatingForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === null || rating > 3) return;

    setIsSubmitting(true);
    try {
      await sendReviewFeedback({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        rating,
        message: formData.message,
      });

      toast({
        title: "Thank you for your feedback",
        description: "A member of our team will follow up with you soon.",
      });
      setFormData(emptyFormData);
      setShowLowRatingForm(false);
      setRating(null);
    } catch {
      toast({
        title: "Something went wrong",
        description:
          "We couldn't send your message. Please try again or call (435) 777-3508.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-10">
            <span className="eyebrow-pill mb-6 inline-block">We appreciate you</span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              How did we <span className="text-gradient">do?</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Your experience matters. If Real E Painting worked on your home or business, a quick
              rating helps other Utah customers — and honest feedback helps us stay sharp.
            </p>
          </div>

          <Card className="shadow-card border-border bg-card">
            <CardHeader className="text-center pb-2">
              <CardTitle className="font-display text-xl sm:text-2xl">
                Rate your experience
              </CardTitle>
              <CardDescription className="text-base max-w-lg mx-auto pt-2">
                Tap the stars that match your experience. Four or five stars will take you to
                Google to leave a public review.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8 pb-8">
              <div className="rounded-2xl border border-border bg-accent/30 p-6 sm:p-8">
                <div
                  className="flex justify-center gap-1 sm:gap-2 mb-3"
                  role="group"
                  aria-label="Rate your experience from 1 to 5 stars"
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handleStarClick(value)}
                      className="p-2 sm:p-3 rounded-xl transition-all hover:scale-110 hover:bg-background/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                      aria-label={`${value} star${value === 1 ? "" : "s"}`}
                    >
                      <Star
                        className={`w-11 h-11 sm:w-14 sm:h-14 transition-colors ${
                          rating !== null && value <= rating
                            ? "fill-brand-pink text-brand-pink"
                            : "text-muted-foreground/35"
                        }`}
                        strokeWidth={rating !== null && value <= rating ? 0 : 1.25}
                      />
                    </button>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  {rating === null
                    ? "Select 1 to 5 stars"
                    : rating >= 4
                      ? "Thanks! Redirecting you to Google…"
                      : "Thank you — tell us how we can improve below."}
                </p>
              </div>

              {showLowRatingForm && rating !== null && rating <= 3 && (
                <div className="border-t border-border pt-8 space-y-6 text-left">
                  <div className="h-1 rounded-full bg-gradient-brand" />
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                      Let us make it right
                    </h2>
                    <p className="text-muted-foreground mt-2 text-sm sm:text-base leading-relaxed">
                      We're sorry we missed the mark. Share what happened and we'll reach out
                      personally — usually within one business day.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="mt-1.5 h-11"
                          autoComplete="given-name"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="mt-1.5 h-11"
                          autoComplete="family-name"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1.5 h-11"
                        autoComplete="email"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1.5 h-11"
                        autoComplete="tel"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">What can we improve? *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1.5 resize-y min-h-[120px]"
                        placeholder="Project address or details help us look up your job."
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        "Send feedback"
                      )}
                    </Button>
                  </form>
                </div>
              )}

              <p className="text-center text-sm text-muted-foreground">
                Prefer to browse?{" "}
                <Link
                  to="/"
                  className="text-primary font-medium underline underline-offset-4 hover:text-primary/80"
                >
                  Back to home
                </Link>{" "}
                or{" "}
                <Link
                  to="/gallery"
                  className="text-primary font-medium underline underline-offset-4 hover:text-primary/80"
                >
                  see our work
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Review;
