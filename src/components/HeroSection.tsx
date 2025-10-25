'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import ParticlesBackground from './ParticlesBackground';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Rotating greetings
  const greetings = ['hi', 'namaste', 'bonjour'];
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting(prev => {
        const currentIndex = greetings.indexOf(prev);
        const nextIndex = (currentIndex + 1) % greetings.length;
        return greetings[nextIndex];
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-bg opacity-50" />
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          {/* Name and Photo Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-6">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative order-1 md:order-1"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full glass-strong border-4 border-blue-500/30 overflow-hidden shadow-2xl">
                <img 
                  src="/jash-photo.jpg" 
                  alt="Jash Pandhi" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </motion.div>

            {/* Greeting and Name */}
            <motion.div 
              className="text-center md:text-left order-2 md:order-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Rotating Greetings */}
              <motion.div 
                className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium mb-3 sm:mb-2 h-8 sm:h-10 md:h-12 flex items-center justify-center md:justify-start"
                key={currentGreeting}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_100%] bg-[position:0%_50%] bg-clip-text text-transparent">
                  {currentGreeting},
                </span>
              </motion.div>
              
              {/* Name */}
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold relative group cursor-pointer leading-tight"
                whileHover={{ scale: 1.02 }}
              >
                <span className="relative inline-block">
                  <span 
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] bg-[position:0%_50%] group-hover:bg-[position:100%_50%] bg-clip-text text-transparent transition-all duration-700 ease-out"
                    style={{
                      backgroundSize: '200% 100%',
                      backgroundPosition: '0% 50%',
                      transition: 'background-position 0.6s ease-out'
                    }}
                  >
                    i'm Jash Pandhi
                  </span>
                  
                  {/* Soft neon glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-xl rounded-lg -z-10 opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1.05,
                      filter: "blur(20px)"
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  
                  {/* Additional subtle glow layers */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-blue-400/10 blur-2xl rounded-lg -z-20 opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1.1,
                      filter: "blur(30px)"
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Text shadow glow */}
                  <motion.div
                    className="absolute inset-0 text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold opacity-0 group-hover:opacity-30 -z-5"
                    initial={{ opacity: 0 }}
                    whileHover={{ 
                      opacity: 0.3,
                      textShadow: "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(147, 51, 234, 0.3)"
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    i'm Jash Pandhi
                  </motion.div>
                </span>
              </motion.h1>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4"
          >
            
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
          >
            Problem Solver • Innovator • Tech Visionary
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          >
            Crafting digital experiences that bridge the gap between imagination and reality. 
            Passionate about building scalable solutions and pushing the boundaries of what's possible.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto glass-strong px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white border-2 border-blue-500 hover:border-blue-400 transition-all duration-300 neon-blue btn-hover interactive"
            suppressHydrationWarning
          >
            Hire Me
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto glass px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 btn-hover interactive"
            suppressHydrationWarning
          >
            View Projects
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex justify-center gap-6 mb-20"
        >
          <motion.a
            href="https://github.com/pandhijash-21"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="glass p-4 rounded-full hover:neon-blue transition-all duration-300 icon-hover interactive"
          >
            <Github className="w-6 h-6 text-white" />
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/jash-pandhi-1032b3291"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="glass p-4 rounded-full hover:neon-purple transition-all duration-300 icon-hover interactive"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </motion.a>
          
          <motion.a
            href="mailto:pandhijash@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="glass p-4 rounded-full hover:neon-cyan transition-all duration-300 icon-hover interactive"
          >
            <Mail className="w-6 h-6 text-white" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator - positioned outside main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-xs md:text-sm mb-2 font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
