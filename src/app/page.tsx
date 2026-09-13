import Hero from '@/components/hero/Hero';
import AboutSection from '@/components/about/AboutSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import CapabilitiesSection from '@/components/capabilities/CapabilitiesSection';
import ServicesSection from '@/components/services/ServicesSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import FaqSection from '@/components/faq/FaqSection';
import Footer from '@/components/footer/Footer';
import PinnedLayoutWrapper from '@/components/layout/PinnedLayoutWrapper';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* 1. Full Width Hero Section */}
      <Hero />

      {/* 2. Pinned Sidebar + Main Portfolio Sections */}
      <PinnedLayoutWrapper>
        <AboutSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <ServicesSection />
        <TestimonialsSection />
        <FaqSection />
        <Footer />
      </PinnedLayoutWrapper>
    </main>
  );
}
