import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, CheckCircle } from "lucide-react";

const slides = [
  {
    category: "Business Consulting",
    title: "Unlocking Your Business's Potential With Innovative Consulting",
    description: "The primary goal of business consulting is to help organizations improve their performance, solve specific problems, and achieve their strategic objectives.",
    successRate: "90%",
    icon: TrendingUp
  },
  {
    category: "Strategy Consulting", 
    title: "Strategic Growth Solutions for Modern Businesses",
    description: "We provide comprehensive strategic consulting to help businesses navigate complex challenges and achieve sustainable growth in competitive markets.",
    successRate: "85%",
    icon: TrendingUp
  },
  {
    category: "Digital Transformation",
    title: "Leading Digital Innovation in Business Operations", 
    description: "Transform your business with cutting-edge digital solutions that streamline operations and enhance customer experiences.",
    successRate: "92%",
    icon: TrendingUp
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-[80vh] flex items-center relative overflow-hidden mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: "url('data:image/svg+xml,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"%23ffffff\" fill-opacity=\"0.1\"><circle cx=\"30\" cy=\"30\" r=\"1.5\"/></g></svg>')",
          backgroundSize: '60px 60px'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-6 slide-in">
              <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                {slides[currentSlide].category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight fade-in">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed fade-in">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-in">
              <Button 
                onClick={scrollToServices}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold"
              >
                Explore More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex items-center text-white">
                <CheckCircle className="text-white mr-3 h-6 w-6" />
                <span className="text-lg">Success Rate {slides[currentSlide].successRate}</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 bg-white bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-white text-2xl font-bold mb-2">
                    {slides[currentSlide].category}
                  </div>
                  <div className="text-white text-lg opacity-80">
                    Excellence in Consulting
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
