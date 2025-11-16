import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Building2 } from "lucide-react";
import { useLocation } from "wouter";

export default function CommercialCleaning() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Building2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
              Office & Commercial Cleaning
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional cleaning for your business environment
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-foreground text-lg leading-relaxed mb-6">
              A clean workspace is essential for productivity, employee health, and making a great impression 
              on clients. Our commercial cleaning services are customized to meet the unique needs of your business, 
              with flexible scheduling to minimize disruption to your operations.
            </p>
          </div>

          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Commercial Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Office spaces and workstations",
                  "Conference rooms and meeting areas",
                  "Reception and waiting areas",
                  "Break rooms and kitchenettes",
                  "Restroom deep cleaning",
                  "Floor care and maintenance",
                  "Window and glass cleaning",
                  "Trash removal and recycling",
                  "Carpet vacuuming and care",
                  "Common area maintenance",
                  "Stairwell and hallway cleaning",
                  "Sanitization of high-touch surfaces",
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
              <h2 className="text-2xl font-bold mb-6">Flexible Business Solutions</h2>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>After-hours service:</strong> We clean when you're closed to avoid disruption</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Daily, weekly, or monthly plans:</strong> Choose the frequency that fits your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Customizable services:</strong> We adapt to your specific requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Professional & reliable:</strong> Consistent quality you can count on</span>
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
