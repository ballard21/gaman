import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Counter from "@/components/ui/counter";
import { TrendingUp } from "lucide-react";

export default function AboutSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              GAMAN CONSULTING
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
              Empowering Businesses Through Strategic Excellence and Innovation
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At Gaman Consulting, we are a premier business consulting firm dedicated to transforming organizations through strategic insight, operational excellence, and innovative solutions. With over a decade of experience across diverse industries, we partner with businesses of all sizes to navigate complex challenges and achieve sustainable growth.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our team of seasoned consultants brings deep expertise in strategy development, digital transformation, process optimization, and organizational change management. We believe that every business has untapped potential, and our mission is to unlock that potential through data-driven insights and proven methodologies.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From startups seeking rapid scaling to established enterprises pursuing digital transformation, we provide tailored solutions that deliver measurable results. Our collaborative approach ensures that knowledge transfer is seamless, empowering your team to sustain long-term success.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Core Values</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Excellence</h5>
                    <p className="text-sm text-gray-600">Delivering exceptional results through rigorous analysis and strategic thinking.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Innovation</h5>
                    <p className="text-sm text-gray-600">Embracing cutting-edge solutions and creative problem-solving approaches.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Integrity</h5>
                    <p className="text-sm text-gray-600">Maintaining transparency and ethical practices in all client relationships.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Partnership</h5>
                    <p className="text-sm text-gray-600">Building long-term relationships based on mutual trust and shared success.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-white hover:shadow-lg"
              >
                About More
              </Button>
              <div className="flex items-center space-x-2">
                <span className="text-gray-900">Review On</span>
                <Badge variant="secondary" className="bg-gray-900 text-white hover:bg-gray-800">
                  Clutch (50 reviews)
                </Badge>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Gaman Consulting?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Proven Track Record of Success</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Industry-Leading Expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Data-Driven Decision Making</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Comprehensive Cost Optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Sustainable Growth Strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">End-to-End Implementation Support</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <Counter targetValue={70} className="text-3xl font-bold text-primary mb-2" />
                <span className="text-sm text-gray-600">+</span>
                <p className="text-sm text-gray-600 mt-1">Professional Experts</p>
              </div>
              <div className="text-center">
                <Counter targetValue={20} className="text-3xl font-bold text-primary mb-2" />
                <span className="text-sm text-gray-600">+</span>
                <p className="text-sm text-gray-600 mt-1">Projects Complete</p>
              </div>
              <div className="text-center">
                <Counter targetValue={16} className="text-3xl font-bold text-primary mb-2" />
                <span className="text-sm text-gray-600">+</span>
                <p className="text-sm text-gray-600 mt-1">World-wide Clients</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=592&h=839" 
              alt="Professional business consultation meeting"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <TrendingUp className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Success Rate</p>
                  <p className="text-2xl font-bold text-secondary">90%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
