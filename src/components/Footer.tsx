'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-10 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {currentYear} Jash Pandhi
        </p>
        <div className="flex gap-3">
          <a
            href="https://github.com/pandhijash-21"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-white/10 hover:border-white/25 hover:bg-white/5 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4 text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/jash-pandhi-1032b3291"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-white/10 hover:border-white/25 hover:bg-white/5 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 text-gray-300" />
          </a>
          <a
            href="mailto:pandhijash@gmail.com"
            className="p-2 rounded-lg border border-white/10 hover:border-white/25 hover:bg-white/5 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 text-gray-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}
