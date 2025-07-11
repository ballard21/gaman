import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-lg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/Gaman_Consulting_1752183905303.png" 
              alt="Gaman Consulting Logo" 
              className="h-16 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-900 hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-900 hover:text-primary transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-900 hover:text-primary transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-900 hover:text-primary transition-colors duration-300 font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-900 hover:text-primary transition-colors duration-300 font-medium"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-900 hover:text-primary transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </div>
          
          {/* Desktop Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-primary hover:bg-primary/90 text-white hover:shadow-lg">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:+916567865301">Call Now</a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg border-t">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-900 hover:text-primary transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-900 hover:text-primary transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-900 hover:text-primary transition-colors duration-300 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left text-gray-900 hover:text-primary transition-colors duration-300 font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block w-full text-left text-gray-900 hover:text-primary transition-colors duration-300 font-medium"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-900 hover:text-primary transition-colors duration-300 font-medium"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-gray-200">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+916567865301">Call Now</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
