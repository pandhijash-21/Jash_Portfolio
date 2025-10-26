import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import TechStackSection from '@/components/TechStackSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Header />
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
