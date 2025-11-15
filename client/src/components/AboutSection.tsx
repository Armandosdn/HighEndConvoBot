import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Leaf, Clock, Shield, DollarSign } from "lucide-react";

export default function AboutSection() {
  const whyChooseUs = [
    { icon: UserCheck, text: "Vetted & trained cleaners" },
    { icon: Leaf, text: "Eco-friendly products available" },
    { icon: Clock, text: "Reliable scheduling" },
    { icon: Shield, text: "Fully insured" },
    { icon: DollarSign, text: "Transparent pricing" },
  ];

  return (
    <section id="about" className="py-20 bg-background" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" data-testid="text-about-title">
              About PrimeShine
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At PrimeShine Cleaning Co., we believe everyone deserves to come home to a spotless
              space. For over 5 years, we've been serving the Tampa community with professional,
              reliable cleaning services that exceed expectations.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our mission is simple: deliver exceptional cleaning services with integrity,
              professionalism, and attention to detail. We treat every home and office as if it
              were our own, ensuring your complete satisfaction with every visit.
            </p>
            <Badge variant="secondary" className="text-base px-4 py-2">
              Locally owned in Tampa, FL
            </Badge>
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6" data-testid="text-why-choose-title">
              Why Choose Us
            </h3>
            <div className="space-y-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start gap-4" data-testid={`why-choose-item-${index}`}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="font-semibold text-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
