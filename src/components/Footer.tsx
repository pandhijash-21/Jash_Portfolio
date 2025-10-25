'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/pandhijash-21',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/jash-pandhi-1032b3291',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:pandhijash@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="relative py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <motion.h3 
              className="text-2xl font-bold mb-4 relative group cursor-pointer inline-block glitch-text"
              whileHover={{ 
                scale: 1.05,
                textShadow: [
                  "0 0 0px transparent",
                  "2px 0 0px #00ffff, -2px 0 0px #ff00ff",
                  "0 0 0px transparent"
                ]
              }}
              transition={{ duration: 0.3 }}
            >
              Jash Pandhi
              
              {/* Glitch layers */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Cyan layer */}
                <span className="absolute inset-0 text-cyan-400 opacity-0 group-hover:opacity-70 transition-opacity duration-200 glitch-layer-cyan">
                  Jash Pandhi
                </span>
                
                {/* Magenta layer */}
                <span className="absolute inset-0 text-pink-400 opacity-0 group-hover:opacity-70 transition-opacity duration-200 glitch-layer-magenta">
                  Jash Pandhi
                </span>
                
                {/* Glitch noise overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-200 glitch-noise">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
                </div>
              </div>
            </motion.h3>
            
            <p className="text-gray-400 leading-relaxed">
              Crafting digital experiences that bridge the gap between imagination and reality.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Tech Stack', 'Contact'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  whileHover={{ scale: 1.05 }}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 link-hover interactive w-fit mx-auto"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://github.com/pandhijash-21"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/50 p-3 rounded-full hover:bg-blue-500/30 hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-600 hover:border-blue-400"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/jash-pandhi-1032b3291"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/50 p-3 rounded-full hover:bg-purple-500/30 hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-600 hover:border-purple-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              
              <a
                href="mailto:pandhijash@gmail.com"
                className="bg-gray-800/50 p-3 rounded-full hover:bg-cyan-500/30 hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-600 hover:border-cyan-400"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Jash Pandhi. All rights reserved.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of coffee</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
