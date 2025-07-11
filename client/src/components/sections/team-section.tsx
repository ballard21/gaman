import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const teamMembers = [
  {
    name: "Mr. Daniel Scoot",
    position: "Health Consultant",
    phone: "+91 656 786 53",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=592&h=839",
    alt: "Professional headshot of Mr. Daniel Scoot, Health Consultant"
  },
  {
    name: "Mrs. Emily Sophia", 
    position: "Senior Consultant",
    phone: "+91 656 786 53",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=582&h=482",
    alt: "Professional headshot of Mrs. Emily Sophia, Senior Consultant"
  },
  {
    name: "Mrs. Abigail Grace",
    position: "Senior Consultant", 
    phone: "+91 656 786 53",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=987",
    alt: "Professional headshot of Mrs. Abigail Grace, Senior Consultant"
  },
  {
    name: "Mr. Michael David",
    position: "Health Consultant",
    phone: "+91 656 786 53", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=592&h=839",
    alt: "Professional headshot of Mr. Michael David, Health Consultant"
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Our People
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Excellent Service Provided by Our Superb Consultant.
          </h2>
          <Button className="bg-primary hover:bg-primary/90 text-white hover:shadow-lg">
            Explore People
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group card-hover"
            >
              <img 
                src={member.image}
                alt={member.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1 hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-3">{member.position}</p>
                <a 
                  href={`tel:${member.phone}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {member.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
