import { Award, Users, Shield, CheckCircle } from "lucide-react";

export default function TrustBar() {
  const highlights = [
    { icon: Award, text: "5+ Years Experience" },
    { icon: Users, text: "100+ Happy Clients" },
    { icon: Shield, text: "Licensed & Insured" },
    { icon: CheckCircle, text: "100% Satisfaction Guarantee" },
  ];

  return (
    <section className="bg-card py-12 border-y" data-testid="section-trust-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3"
              data-testid={`trust-item-${index}`}
            >
              <item.icon className="w-10 h-10 text-primary" />
              <p className="font-semibold text-sm sm:text-base text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
