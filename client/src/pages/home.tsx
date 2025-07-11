import Navigation from "@/components/layout/navigation";
import HeaderBanner from "@/components/layout/header-banner";
import HeroSection from "@/components/sections/hero-section";
import SolutionApproach from "@/components/sections/solution-approach";
import AboutSection from "@/components/sections/about-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ServicesSection from "@/components/sections/services-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import TeamSection from "@/components/sections/team-section";
import NewsSection from "@/components/sections/news-section";
import CTASection from "@/components/sections/cta-section";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeaderBanner />
      <HeroSection />
      <SolutionApproach />
      <AboutSection />
      <TestimonialsSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <NewsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
