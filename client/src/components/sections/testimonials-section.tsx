import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "The consulting engagement begins with the consultant or consulting team working closely with the client to understand the client's business, goals, challenges, and objectives.",
    name: "Mrs. Emily Sophia",
    position: "Froxio, CEO",
    initials: "ES"
  },
  {
    id: 2,
    quote: "The specific services offered by business consultants can vary widely depending on the consultant's expertise and the needs of the client. Consultants typically work closely with their clients.",
    name: "Mr. Thomas Robert", 
    position: "Maxcrio, HR",
    initials: "TR"
  },
  {
    id: 3,
    quote: "The information you might include in a Managing Director's profile or information list typically consists of the individual's background, experience, and responsibilities within a company.",
    name: "Mrs. Florence Miyagi",
    position: "Froxio, CEO", 
    initials: "FM"
  },
  {
    id: 4,
    quote: "You can adjust the length and style of the line to match the overall design and formatting of your document. Some other divider options include dashes, stars, or even a graphical element.",
    name: "Mr. Rakhab Uddin",
    position: "Nurio, CEO",
    initials: "RU"
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Happy business client giving testimonial"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          
          <div className="testimonial-container">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <Quote className="text-3xl text-secondary mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Great Consulting!</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {testimonials[currentTestimonial].quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonials[currentTestimonial].initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-gray-600">{testimonials[currentTestimonial].position}</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex space-x-2 justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-secondary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
