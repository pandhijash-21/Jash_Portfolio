'use client';

import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ThemeToggleSafe() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    setMounted(true);
    // Check initial theme from DOM
    const isLight = document.documentElement.classList.contains('light');
    setTheme(isLight ? 'light' : 'dark');

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const isLightNow = document.documentElement.classList.contains('light');
      setTheme(isLightNow ? 'light' : 'dark');
    });

    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    return () => observer.disconnect();
  }, []);

  const handleToggle = () => {
    const html = document.documentElement;
    const newTheme = html.classList.contains('light') ? 'dark' : 'light';
    html.classList.remove('light', 'dark');
    html.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) {
    return (
      <div className="glass p-3 rounded-full">
        <div className="w-5 h-5" />
      </div>
    );
  }

  const isLight = theme === 'light';

  return (
    <motion.button
      onClick={handleToggle}
      className="glass p-3 rounded-full hover:neon-blue transition-all duration-300 icon-hover interactive relative overflow-hidden group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isLight ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex items-center justify-center"
      >
        {isLight ? (
          <Sun className="w-5 h-5" style={{ color: '#1a1a2e' }} />
        ) : (
          <Moon className="w-5 h-5" style={{ color: 'white' }} />
        )}
      </motion.div>
    </motion.button>
  );
}

