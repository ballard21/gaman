import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Information Technology (IT)",
    category: "Technology", 
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=582&h=482",
    alt: "Information Technology project with digital transformation solutions"
  },
  {
    id: 2,
    title: "International Business",
    category: "Business",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=987", 
    alt: "International business expansion project with global strategy"
  },
  {
    id: 3,
    title: "Marketing Research",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=592&h=839",
    alt: "Marketing research project with data analytics and consumer insights"
  },
  {
    id: 4,
    title: "Human Resources",
    category: "Business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=582&h=482",
    alt: "Human resources transformation project with team collaboration"
  },
  {
    id: 5,
    title: "Finance Consulting",
    category: "Consulting",
    image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=987",
    alt: "Finance consulting project with financial optimization strategies"
  },
  {
    id: 6,
    title: "Digital Innovation",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=592&h=839",
    alt: "Technology innovation consulting project with modern development practices"
  }
];

const filters = [
  { id: "all", label: "All" },
  { id: "technology", label: "Technology" },
  { id: "business", label: "Business" },
  { id: "marketing", label: "Marketing" },
  { id: "consulting", label: "Consulting" }
];

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "technology": return "bg-primary bg-opacity-10 text-primary";
    case "business": return "bg-primary bg-opacity-10 text-primary";
    case "marketing": return "bg-primary bg-opacity-10 text-primary";
    case "consulting": return "bg-primary bg-opacity-10 text-primary";
    default: return "bg-gray-100 text-gray-600";
  }
};

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.toLowerCase() === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
            Cover Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Conduct market research to understand industry competition.
          </h2>
          <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg">
            Explore Portfolio
          </Button>
        </div>
        
        {/* Portfolio Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                activeFilter === filter.id
                  ? "portfolio-filter active bg-primary text-white"
                  : "bg-gray-200 text-gray-900 hover:bg-primary hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group card-hover"
            >
              <img 
                src={item.image}
                alt={item.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${getCategoryColor(item.category)}`}>
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <button className="inline-flex items-center text-secondary hover:text-primary transition-colors duration-300 font-medium">
                  Explore More 
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
