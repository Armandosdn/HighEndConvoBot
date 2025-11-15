import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingSectionProps {
  onBookNow?: (plan: string) => void;
}

export default function PricingSection({ onBookNow }: PricingSectionProps) {
  const plans = [
    {
      name: "Basic Maintenance",
      tagline: "Perfect for regular upkeep",
      price: "$99",
      features: [
        "General dusting and vacuuming",
        "Kitchen and bathroom cleaning",
        "Trash removal",
        "Up to 2 bedrooms",
      ],
    },
    {
      name: "Standard Deep Clean",
      tagline: "Our most popular option",
      price: "$199",
      features: [
        "Everything in Basic",
        "Inside appliances",
        "Baseboards and ceiling fans",
        "Window cleaning",
        "Up to 4 bedrooms",
        "Eco-friendly products",
      ],
      popular: true,
    },
    {
      name: "Premium VIP Plan",
      tagline: "The ultimate cleaning experience",
      price: "$349",
      features: [
        "Everything in Standard",
        "Carpet deep cleaning",
        "Upholstery cleaning",
        "Priority scheduling",
        "Unlimited bedrooms",
        "Dedicated cleaning team",
      ],
    },
  ];

  const handleBookNow = (planName: string) => {
    if (onBookNow) {
      onBookNow(planName);
    } else {
      const element = document.getElementById("contact");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-card" data-testid="section-pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" data-testid="text-pricing-title">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our satisfaction guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover-elevate ${plan.popular ? "border-primary border-2" : ""}`}
              data-testid={`card-pricing-${index}`}
            >
              {plan.popular && (
                <Badge
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                  data-testid="badge-most-popular"
                >
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.tagline}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold" data-testid={`text-price-${index}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">starting at</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handleBookNow(plan.name)}
                  data-testid={`button-book-now-${index}`}
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
