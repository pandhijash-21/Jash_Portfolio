import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ResearchSection from '@/components/ResearchSection';
import ProjectsSection from '@/components/ProjectsSection';
import TechStackSection from '@/components/TechStackSection';
import AchievementsSection from '@/components/AchievementsSection';
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
      <ExperienceSection />
      <ResearchSection />
      <ProjectsSection />
      <TechStackSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
