'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggleSafe from './ThemeToggleSafe';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech Stack', href: '#tech-stack' },
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
        className="w-full"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-base sm:text-lg md:text-2xl font-bold gradient-text cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              Jash Pandhi
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium link-hover interactive"
                >
                  {item.name}
                </motion.button>
              ))}
              <ThemeToggleSafe />
            </div>

            {/* Mobile - Menu Button and Theme Toggle */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggleSafe />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="glass p-2 rounded-lg interactive"
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
            className="md:hidden overflow-hidden"
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
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}

