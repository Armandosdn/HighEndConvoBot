import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Key } from "lucide-react";
import { useLocation } from "wouter";

export default function AirbnbCleaning() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Key className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
              AirBnB / Rental Turnover
            </h1>
            <p className="text-xl text-muted-foreground">
              Quick turnaround cleaning for short-term rentals
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Keep your guests happy and your reviews glowing with our specialized AirBnB turnover service. 
              We understand the unique demands of short-term rentals and provide fast, thorough cleaning between 
              guests. Our reliable service ensures your property is always guest-ready.
            </p>
          </div>

          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Turnover Cleaning Includes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Strip and remake all beds",
                  "Fresh linen and towel setup",
                  "Bathroom deep clean and restock",
                  "Kitchen cleaning and sanitizing",
                  "Vacuum and mop all floors",
                  "Dust all surfaces and furniture",
                  "Empty all trash and replace bags",
                  "Check and restock essentials",
                  "Spot clean walls and doors",
                  "Clean mirrors and glass",
                  "Inspection for damages",
                  "Photo documentation available",
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
              <h2 className="text-2xl font-bold mb-6">Why Hosts Choose Us</h2>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Same-day turnarounds:</strong> Fast service for back-to-back bookings</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Consistent quality:</strong> Every guest gets a 5-star clean space</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Flexible scheduling:</strong> We work around your booking calendar</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Damage reporting:</strong> We notify you of any issues found</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Volume discounts:</strong> Special rates for multiple properties</span>
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
