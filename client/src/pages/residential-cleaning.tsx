import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function ResidentialCleaning() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Home className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
              Residential Cleaning
            </h1>
            <p className="text-xl text-muted-foreground">
              Keep your home spotless with our regular cleaning services
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Our residential cleaning service is designed to keep your home clean, healthy, and inviting. 
              We understand that your home is your sanctuary, and we treat it with the care and respect it deserves.
            </p>
          </div>

          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Dusting all surfaces and furniture",
                  "Vacuuming carpets and rugs",
                  "Mopping hard floors",
                  "Kitchen cleaning and sanitizing",
                  "Bathroom deep cleaning",
                  "Trash removal and replacement",
                  "Making beds and tidying rooms",
                  "Window sill cleaning",
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
              <h2 className="text-2xl font-bold mb-6">Flexible Scheduling</h2>
              <p className="text-muted-foreground mb-4">
                We offer flexible scheduling options to fit your lifestyle:
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Weekly cleaning:</strong> Perfect for busy households and families</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Bi-weekly cleaning:</strong> Our most popular option for regular maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Monthly cleaning:</strong> Ideal for smaller homes or light use properties</span>
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
