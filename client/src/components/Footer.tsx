import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12 border-t" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">PrimeShine Cleaning Co.</h3>
            <p className="text-background/80 mb-2">(555) 123-4567</p>
            <p className="text-background/80 mb-2">contact@primeshinecleaning.com</p>
            <p className="text-background/80">Tampa, Florida</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Services", "Pricing", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="text-left text-background/80 hover:text-background transition-colors"
                  data-testid={`link-footer-${link.toLowerCase()}`}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Business Hours</h4>
            <p className="text-background/80 mb-2">Monday - Friday: 8am - 6pm</p>
            <p className="text-background/80 mb-2">Saturday: 9am - 4pm</p>
            <p className="text-background/80">Sunday: Closed</p>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/80 text-sm">
            © {currentYear} PrimeShine Cleaning Co. All rights reserved.
          </p>
          <Button
            variant="ghost"
            onClick={scrollToTop}
            data-testid="button-back-to-top"
            className="text-background hover:bg-background/10 gap-2"
          >
            Back to Top <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
