import { Button } from "@/components/ui/button";

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Let's Collaborate with Our Team!
          </h2>
          <Button 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold"
          >
            Contact Us Now
          </Button>
        </div>
      </div>
    </section>
  );
}
