'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggleSafe from './ThemeToggleSafe';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Research', href: '#research' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech', href: '#tech-stack' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full glass border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="font-mono text-sm cursor-pointer tracking-tight"
              onClick={() => scrollToSection('#home')}
            >
              <span className="text-cyan-400">jash</span>
              <span className="text-gray-600">@</span>
              <span className="text-white">dev</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-3 text-xs font-mono">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                  suppressHydrationWarning
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.a
                href="/resume/jash-pandhi-resume.pdf"
                download="Jash-Pandhi-Resume.pdf"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-3 py-1.5 bg-cyan-400 text-black text-xs font-medium rounded-md hover:bg-cyan-300 transition-colors font-mono"
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
              <ThemeToggleSafe />
            </div>

            {/* Mobile - Menu Button and Theme Toggle */}
            <div className="xl:hidden flex items-center gap-3">
              <ThemeToggleSafe />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="glass p-2 rounded-lg interactive"
                suppressHydrationWarning
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              height: isMobileMenuOpen ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
            className="xl:hidden overflow-hidden"
          >
            <div className="glass-strong rounded-xl mt-4 p-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 py-2 link-hover interactive"
                  suppressHydrationWarning
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.a
                href="/resume/jash-pandhi-resume.pdf"
                download="Jash-Pandhi-Resume.pdf"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                className="flex items-center gap-2 px-4 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors justify-center"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}

