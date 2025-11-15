import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [preselectedService, setPreselectedService] = useState<string>("");

  const handleBookNow = (planName: string) => {
    setPreselectedService(planName);
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navigation onScrollToSection={handleScrollToSection} />
      <Hero onScrollToSection={handleScrollToSection} />
      <TrustBar />
      <ServicesSection />
      <PricingSection onBookNow={handleBookNow} />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection preselectedService={preselectedService} />
      <Footer />
    </div>
  );
}
