import { Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="/Gaman_Consulting_1752183905303.png" 
              alt="Gaman Consulting Logo" 
              className="h-14 w-auto mb-6 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-6">
              Professional business consulting services to help organizations improve their performance and achieve strategic objectives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors duration-300">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-secondary transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-secondary transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-secondary transition-colors duration-300"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="text-gray-300 hover:text-secondary transition-colors duration-300"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-secondary transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">Health Care Consulting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">Marketing Research</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">Technology Consulting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">Human Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">Finance Consulting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">International Business</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="text-secondary mr-3 h-5 w-5" />
                <span className="text-gray-300">Sun-Tue (9:00 am-7:00 pm)</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-secondary mr-3 h-5 w-5" />
                <a 
                  href="mailto:info@gamanconsulting.com" 
                  className="text-gray-300 hover:text-secondary transition-colors duration-300"
                >
                  info@gamanconsulting.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="text-secondary mr-3 h-5 w-5" />
                <a 
                  href="tel:+916567865301" 
                  className="text-gray-300 hover:text-secondary transition-colors duration-300"
                >
                  +91 656 786 53
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Gaman Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
