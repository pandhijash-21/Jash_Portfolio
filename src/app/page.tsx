import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import TechStackSection from '@/components/TechStackSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CustomCursorWrapper from '@/components/CustomCursorWrapper';

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursorWrapper />
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
