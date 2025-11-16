import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Hammer } from "lucide-react";
import { useLocation } from "wouter";

export default function PostConstruction() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Hammer className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
              Post-Construction Cleaning
            </h1>
            <p className="text-xl text-muted-foreground">
              Remove dust and debris after renovation or construction work
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Construction and renovation projects leave behind fine dust, debris, and materials that require 
              specialized cleaning. Our post-construction cleaning service transforms your newly renovated space 
              into a move-in ready, spotless environment. We have the expertise and equipment to handle even the 
              toughest construction cleanup jobs.
            </p>
          </div>

          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Specialized Construction Cleanup</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Fine dust removal from all surfaces",
                  "Window and glass deep cleaning",
                  "Paint splatter and residue removal",
                  "Floor scrubbing and polishing",
                  "Debris and material removal",
                  "Cabinet interior and exterior cleaning",
                  "Light fixture and ceiling fan cleaning",
                  "Air vent and duct cleaning",
                  "Baseboard and trim detailing",
                  "Bathroom fixture polishing",
                  "Kitchen appliance cleaning",
                  "Final walk-through inspection",
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
              <h2 className="text-2xl font-bold mb-6">Our Process</h2>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Initial assessment:</strong> We evaluate the scope of work needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Heavy debris removal:</strong> Clear out large materials and trash</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Deep cleaning:</strong> Multiple passes to remove all construction dust</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Detail work:</strong> Final touches to ensure perfection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Move-in ready:</strong> Space is completely clean and safe to occupy</span>
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
