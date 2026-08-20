'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden pt-28 pb-8 md:pt-32 md:pb-10">
      <ParticlesBackground />

      <div className="relative z-10 px-4 sm:px-6 max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex-shrink-0"
          >
            <div className="hero-frame w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 overflow-hidden rounded-lg">
              <img
                src="/jash-photo.jpg"
                alt="Jash Pandhi"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="text-center md:text-left max-w-2xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="hero-kicker font-mono text-xs mb-3">
              <span className="opacity-60">$</span> whoami
              <span className="opacity-40"> → </span>
              full_stack_developer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-4">
              Jash Pandhi
            </h1>
            <p className="hero-copy text-gray-300 text-[15px] md:text-base leading-relaxed mb-6">
              I build production web and mobile applications — from enterprise CRM, HRMS,
              and ERP systems to commerce platforms with payments, dashboards, and role-based access.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="hero-btn-primary px-5 py-2 rounded-md text-sm font-medium font-mono"
              >
                ./projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="hero-btn-ghost px-5 py-2 rounded-md text-sm font-medium font-mono"
              >
                contact
              </button>
              <a
                href="/resume/jash-pandhi-resume.pdf"
                download="Jash-Pandhi-Resume.pdf"
                className="hero-btn-ghost inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md text-sm font-medium font-mono"
              >
                <Download className="w-4 h-4" />
                resume.pdf
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-3">
              <a
                href="https://github.com/pandhijash-21"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-icon"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jash-pandhi-1032b3291"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-icon"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:pandhijash@gmail.com"
                className="hero-icon"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
