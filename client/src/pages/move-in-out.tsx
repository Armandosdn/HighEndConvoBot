import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Truck } from "lucide-react";
import { useLocation } from "wouter";

export default function MoveInOut() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Truck className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
              Move-In / Move-Out Cleaning
            </h1>
            <p className="text-xl text-muted-foreground">
              Make your transition smooth with our moving cleaning services
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Moving is stressful enough without worrying about cleaning. Our comprehensive move-in/move-out 
              cleaning service ensures your old or new place is spotless. We clean empty spaces thoroughly, 
              helping you get your security deposit back or start fresh in a pristine home.
            </p>
          </div>

          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Complete Move-Out Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "All rooms deep cleaned top to bottom",
                  "Inside all cabinets and drawers",
                  "Inside all appliances",
                  "Inside closets and storage areas",
                  "All windows cleaned inside and out",
                  "Baseboards and trim wiped down",
                  "Light fixtures and ceiling fans",
                  "Carpets vacuumed thoroughly",
                  "Floors mopped and sanitized",
                  "Bathrooms scrubbed and disinfected",
                  "Kitchen degreased and sanitized",
                  "Remove marks from walls",
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
              <h2 className="text-2xl font-bold mb-6">Why Choose Our Service</h2>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Get your deposit back:</strong> Our thorough cleaning meets landlord expectations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Flexible scheduling:</strong> We work around your moving timeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Same-day service available:</strong> Last-minute bookings accepted</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Move-in ready:</strong> Start fresh in a completely clean space</span>
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
