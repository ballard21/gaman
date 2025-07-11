import { Button } from "@/components/ui/button";
import { 
  Search, 
  Lightbulb, 
  Users, 
  BarChart3, 
  Settings, 
  FileText 
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Research and Analysis",
    description: "Gather relevant information through interviews & surveys.",
    icon: Search,
    gradient: "from-primary to-secondary"
  },
  {
    number: "02", 
    title: "Development",
    description: "Generate potential solutions or strategies to address.",
    icon: Lightbulb,
    gradient: "from-secondary to-accent"
  },
  {
    number: "03",
    title: "Management", 
    description: "Provide training and support to help the client's team.",
    icon: Users,
    gradient: "from-accent to-primary"
  },
  {
    number: "04",
    title: "Monitoring",
    description: "Generate potential solutions or strategies to address.",
    icon: BarChart3,
    gradient: "from-primary to-secondary"
  },
  {
    number: "05",
    title: "Implementation",
    description: "Develop a detailed plan outlining the steps, resources.",
    icon: Settings,
    gradient: "from-secondary to-accent"
  },
  {
    number: "06",
    title: "Documentation",
    description: "The consulting engagement, including reports, analysis.",
    icon: FileText,
    gradient: "from-accent to-primary"
  }
];

export default function SolutionApproach() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
            Solution Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            A structured and systematic approach to ensure you provide value.
          </h2>
          <Button 
            onClick={scrollToServices}
            className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg"
          >
            Explore Area
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group card-hover"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300 mb-4">
                {step.description}
              </p>
              <step.icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
