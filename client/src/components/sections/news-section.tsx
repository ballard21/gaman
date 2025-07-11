import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const newsItems = [
  {
    title: "Consulting Industry Adapts to the Changing Business Landscape.",
    category: "Consulting",
    date: "03 April, 2023",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Business consulting industry adapting to changing landscape"
  },
  {
    title: "Tech-Driven Disruption: How Consulting Firms Are Embracing Innovation.",
    category: "Consulting", 
    date: "03 April, 2023",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Technology disruption in consulting with innovation and digital transformation"
  },
  {
    title: "The Future of Strategy Consulting: Insights from Industry Leaders.",
    category: "Consulting",
    date: "03 April, 2023", 
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Future of strategy consulting with industry leaders discussing trends"
  },
  {
    title: "The Role of AI and Data Analytics in Modern Consulting.",
    category: "Consulting",
    date: "03 April, 2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "AI and data analytics transforming modern consulting practices"
  }
];

export default function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
            News & Insight
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            The latest news and insights in the field of business consulting.
          </h2>
          <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg">
            Explore More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group card-hover"
            >
              <img 
                src={item.image}
                alt={item.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-1 text-secondary" />
                    <span className="text-secondary">{item.category}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <button className="inline-flex items-center text-secondary hover:text-primary transition-colors duration-300 font-medium">
                  Read More 
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
