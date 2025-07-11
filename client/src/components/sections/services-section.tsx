import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Health Care Consulting",
    description: "Health and care consulting refers to the practice of providing expert advice and guidance.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=592&h=839",
    alt: "Healthcare consulting team reviewing medical data"
  },
  {
    title: "Marketing Research Consulting", 
    description: "Helping clients improve their marketing and sales strategies to increase revenue and market share.",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=987",
    alt: "Marketing research team analyzing market data and trends"
  },
  {
    title: "Technology Consulting",
    description: "Providing financial advice, including cost reduction strategies, financial planning.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=582&h=482",
    alt: "Technology consulting with modern server infrastructure"
  },
  {
    title: "Human Resource Consulting",
    description: "Health and care consulting refers to the practice of providing expert advice and guidance.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=592&h=839",
    alt: "Human resources consulting team in strategic meeting"
  },
  {
    title: "Finance Consulting",
    description: "Providing financial advice, including cost reduction strategies, financial planning, and risk management.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=987",
    alt: "Finance consulting with financial charts and data analysis"
  },
  {
    title: "International Business Consulting",
    description: "Health and care consulting refers to the practice of providing expert advice and guidance.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=582&h=482",
    alt: "International business consulting with global network connections"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Our Cover Area
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Conduct market research to understand industry trends, competition, and customer behavior.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group card-hover"
            >
              <img 
                src={service.image}
                alt={service.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <button className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 font-medium">
                  View More 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
