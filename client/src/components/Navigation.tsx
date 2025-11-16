import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavigationProps {
  onScrollToSection?: (sectionId: string) => void;
}

export default function Navigation({ onScrollToSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    "Residential Cleaning",
    "Deep Cleaning",
    "Move-In / Move-Out",
    "Office & Commercial",
    "AirBnB Turnover",
    "Post-Construction",
  ];

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Pricing", id: "pricing" },
    { label: "About", id: "about" },
    { label: "Reviews", id: "reviews" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (onScrollToSection) {
      onScrollToSection(id);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => handleNavClick("home")}
              className="text-xl sm:text-2xl font-bold text-foreground hover-elevate px-3 py-1 rounded-md"
              data-testid="button-logo"
            >
              PrimeShine
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="ghost"
                  onClick={() => handleNavClick(link.id)}
                  data-testid={`link-nav-${link.id}`}
                  className="text-sm"
                >
                  {link.label}
                </Button>
              ))}
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm gap-1" data-testid="button-services-dropdown">
                    Services
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {services.map((service, index) => (
                    <DropdownMenuItem
                      key={index}
                      onClick={() => handleNavClick("services")}
                      data-testid={`dropdown-service-${index}`}
                    >
                      {service}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-16" data-testid="mobile-menu">
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => handleNavClick(link.id)}
                data-testid={`link-mobile-${link.id}`}
                className="justify-start text-lg py-6"
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="ghost"
              onClick={() => handleNavClick("services")}
              data-testid="link-mobile-services"
              className="justify-start text-lg py-6"
            >
              Services
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
