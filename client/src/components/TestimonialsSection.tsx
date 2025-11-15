import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Martinez",
      rating: 5,
      quote:
        "PrimeShine transformed my home! Their attention to detail is incredible and the team is always professional and friendly. I wouldn't trust anyone else with my cleaning needs.",
    },
    {
      name: "Michael Chen",
      rating: 5,
      quote:
        "As a busy professional, having PrimeShine handle my office cleaning has been a game-changer. They're reliable, thorough, and work around our schedule perfectly.",
    },
    {
      name: "Jennifer Wilson",
      rating: 5,
      quote:
        "I use PrimeShine for my AirBnB turnovers and they never disappoint. Fast, efficient, and my guests always comment on how spotless everything is. Highly recommend!",
    },
    {
      name: "David Thompson",
      rating: 5,
      quote:
        "The deep cleaning service exceeded my expectations. They tackled areas I didn't even think about. My house has never looked better!",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      quote:
        "Professional, punctual, and thorough. PrimeShine made our move-out so much easier. We got our full security deposit back thanks to their excellent work!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="py-20 bg-card" data-testid="section-testimonials">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" data-testid="text-testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from our happy customers
          </p>
        </div>

        <div className="relative">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <p
                className="text-lg md:text-xl text-center text-foreground mb-6 min-h-[120px]"
                data-testid="text-testimonial-quote"
              >
                "{testimonials[currentIndex].quote}"
              </p>
              <p className="text-center font-semibold text-foreground" data-testid="text-testimonial-name">
                {testimonials[currentIndex].name}
              </p>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted"
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
