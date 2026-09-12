import Hero from '@/components/hero/Hero';
import AboutSection from '@/components/about/AboutSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import CapabilitiesSection from '@/components/capabilities/CapabilitiesSection';
import ServicesSection from '@/components/services/ServicesSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import FaqSection from '@/components/faq/FaqSection';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <CapabilitiesSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
