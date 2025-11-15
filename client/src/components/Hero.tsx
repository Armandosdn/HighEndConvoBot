import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroImage from "@assets/generated_images/Hero_background_cleaning_scene_9ae9e273.png";

interface HeroProps {
  onScrollToSection?: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = (sectionId: string) => {
    if (onScrollToSection) {
      onScrollToSection(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/50 to-foreground/60" />

      <div
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          data-testid="text-hero-headline"
        >
          Spotless Spaces. Stress-Free Living.
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
          data-testid="text-hero-subheadline"
        >
          Professional residential and commercial cleaning in Tampa with flexible plans and 5-star
          service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => handleClick("contact")}
            data-testid="button-get-quote"
            className="text-lg px-8 py-6"
          >
            Get a Free Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => handleClick("services")}
            data-testid="button-view-services"
            className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
          >
            View Services
          </Button>
        </div>
      </div>

      <Button
        size="lg"
        onClick={() => handleClick("contact")}
        data-testid="button-floating-quote"
        className="fixed bottom-6 right-6 z-50 md:hidden shadow-xl"
      >
        Get a Free Quote
      </Button>
    </section>
  );
}
