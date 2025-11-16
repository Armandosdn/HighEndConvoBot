import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { useLocation } from "wouter";

export default function DeepCleaning() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
              Deep Cleaning
            </h1>
            <p className="text-xl text-muted-foreground">
              Intensive cleaning that reaches every corner of your space
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Our deep cleaning service goes far beyond regular maintenance cleaning. We tackle built-up dirt, 
              grime, and bacteria in areas that are often overlooked. Perfect for spring cleaning, special occasions, 
              or when your space needs extra attention.
            </p>
          </div>

          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "All standard cleaning services",
                  "Baseboards and trim cleaning",
                  "Ceiling fans and light fixtures",
                  "Inside oven and refrigerator",
                  "Cabinet fronts and interiors",
                  "Window cleaning (interior)",
                  "Behind and under furniture",
                  "Detailed grout cleaning",
                  "Air vent cleaning",
                  "Door frames and handles",
                  "Switch plates and outlets",
                  "Blinds and window treatments",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">When You Need Deep Cleaning</h2>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Before or after major events and holidays</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Seasonal spring or fall cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Before listing your home for sale</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>After renovation or construction work</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button 
              size="lg" 
              onClick={() => setLocation("/#contact")}
              data-testid="button-get-quote"
              className="text-lg px-8 py-6"
            >
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
