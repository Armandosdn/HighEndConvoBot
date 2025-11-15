import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Home, Sparkles, Truck, Building2, Key, Hammer } from "lucide-react";

interface Service {
  icon: typeof Home;
  title: string;
  description: string;
  fullDescription: string;
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Keep your home spotless with our regular cleaning services.",
      fullDescription:
        "Our residential cleaning service covers all areas of your home including kitchens, bathrooms, bedrooms, and living spaces. We use eco-friendly products and professional techniques to ensure a thorough, safe clean every time. Flexible scheduling available weekly, bi-weekly, or monthly.",
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Intensive cleaning that reaches every corner of your space.",
      fullDescription:
        "Our deep cleaning service goes beyond regular maintenance to tackle built-up dirt, grime, and bacteria. Perfect for spring cleaning, special occasions, or when your space needs extra attention. Includes baseboards, ceiling fans, inside appliances, and hard-to-reach areas.",
    },
    {
      icon: Truck,
      title: "Move-In / Move-Out",
      description: "Make your transition smooth with our moving cleaning services.",
      fullDescription:
        "Moving is stressful enough without worrying about cleaning. Our move-in/move-out service ensures your old or new place is spotless. We clean empty spaces thoroughly including inside cabinets, closets, and appliances. Get your security deposit back or start fresh in a pristine home.",
    },
    {
      icon: Building2,
      title: "Office & Commercial",
      description: "Professional cleaning for your business environment.",
      fullDescription:
        "Maintain a clean, professional workspace with our commercial cleaning services. We work around your schedule to minimize disruption. Services include office spaces, restrooms, break rooms, and common areas. Customizable plans for daily, weekly, or monthly service.",
    },
    {
      icon: Key,
      title: "AirBnB / Rental Turnover",
      description: "Quick turnaround cleaning for short-term rentals.",
      fullDescription:
        "Keep your guests happy and reviews glowing with our AirBnB turnover service. We provide fast, thorough cleaning between guests including fresh linens, restocking essentials, and detailed inspections. Same-day service available for last-minute bookings.",
    },
    {
      icon: Hammer,
      title: "Post-Construction",
      description: "Remove dust and debris after renovation or construction work.",
      fullDescription:
        "Construction leaves behind fine dust, debris, and materials that require specialized cleaning. Our post-construction service includes removal of paint splatters, window cleaning, detailed dusting, and floor care. We'll make your newly renovated space move-in ready.",
    },
  ];

  return (
    <>
      <section id="services" className="py-20 bg-background" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" data-testid="text-services-title">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedService(service)}
                    data-testid={`button-learn-more-${index}`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent data-testid="modal-service-details">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedService && <selectedService.icon className="w-8 h-8 text-primary" />}
              {selectedService?.title}
            </DialogTitle>
            <DialogDescription>{selectedService?.fullDescription}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
