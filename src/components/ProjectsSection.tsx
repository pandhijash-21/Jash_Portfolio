'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';

type Project = {
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  github: string;
  live: string;
  status: 'In Progress' | 'Live' | 'Shipped';
  category: string;
};

const projects: Project[] = [
  {
    title: 'Sevayagna NGO Foundation',
    description:
      'Official NGO website with campaign information, volunteer and donation sections, and a Razorpay-powered payment flow for online giving.',
    detailedDescription: `Sevayagna NGO Foundation — Official Website

Developed and deployed the official NGO website using React.js, featuring responsive design, campaign information, and volunteer/donation sections.

Integrated a Razorpay payment gateway to enable secure online donations and improve the donor experience.

The site is live at sewayagnangofoundation.in.`,
    technologies: ['React.js', 'Razorpay', 'Responsive Design'],
    github: '',
    live: 'https://sewayagnangofoundation.in/',
    status: 'Live',
    category: 'NGO Website',
  },
  {
    title: 'Sunshine Business Platform',
    description:
      'Full-stack e-commerce and MLM platform with an admin panel, payment integration, multi-level commissions, and role-based dashboards.',
    detailedDescription: `Sunshine Business Platform (E-Commerce + MLM)

Developed a full-stack e-commerce and MLM platform using React.js and PHP, featuring a comprehensive admin panel for product, user, and business management.

Implemented payment gateway integration, multi-level referral and commission workflows, order management, and role-based dashboards to support scalable business operations.

The platform is live at sunshinebusiness.in.`,
    technologies: ['React.js', 'PHP', 'MySQL', 'Payment Gateway'],
    github: 'https://github.com/pandhijash-21/sunshine',
    live: 'https://sunshinebusiness.in/',
    status: 'Live',
    category: 'E-Commerce + MLM',
  },
  {
    title: 'HRMS',
    description:
      'College HR management system with a dynamic form builder, role-based access, encrypted PII handling, and an employee self-service portal.',
    detailedDescription: `HRMS — College HR Management System

A full-stack College HR Management System built for Gandhinagar University, designed to digitize HR operations for 500+ teaching and non-teaching staff.

Key Features
• Dynamic Form Builder — Admins can add, remove, and reorder custom fields at runtime without code changes or migrations
• Employee Self-Service Portal — Profile updates, document uploads, and personal audit history
• Role-Based Access Control — Employee / HR / Admin permissions enforced at the GraphQL layer
• Sensitive Data Encryption — Field-level AES-256 encryption for Aadhaar, PAN, and bank details
• Audit Trail — Who changed what, when, from which IP, with old and new values
• Document Management — Marksheets, identity scans, certificates via Cloudinary
• Multi-Module Architecture — Personal Info, Education, Leave, Payroll, Attendance, Bank Details, Salary

Tech Stack
Frontend: Next.js 14, TypeScript, Shadcn/ui, Tailwind CSS, Apollo Client, React Hook Form, Zod
Backend: Node.js, Express, Hasura GraphQL, Prisma, Redis, Nodemailer, Cloudinary
Database & Infra: PostgreSQL 15, Docker Compose, JWT + NextAuth.js

Engineering
• EAV pattern for runtime schema extension
• Split between GraphQL (standard ops) and REST (sensitive writes + uploads)
• Soft-delete across removable entities
• Row-level security at Hasura so employees can only query their own records

Status: In development`,
    technologies: ['Next.js', 'Node.js', 'Hasura GraphQL', 'PostgreSQL', 'Prisma', 'TypeScript'],
    github: '',
    live: '',
    status: 'In Progress',
    category: 'HR Management System',
  },
  {
    title: 'Bolibazaar',
    description:
      'Dual-platform marketplace combining e-commerce checkout with live auction rooms, real-time bidding, and payment processing.',
    detailedDescription: `BoliBazaar — E-Commerce & E-Auction Platform

A dual-platform marketplace that combines traditional shopping with live auction functionality.

E-Commerce
• Hierarchical catalog with categories and subcategories
• Cart, wishlist, orders, and user profiles
• Search, filters, and payment processing

Live Auctions
• WebSocket-powered bidding rooms
• Auto-bidding up to cap amounts
• Bid history, countdown timers, and optional entry fees

Auth & Payments
• Email verification and OTP
• Role-based access for admin, seller, and buyer
• Cashfree integration with webhook handling

Tech Stack
Frontend: React 19, Material-UI, React Router, Framer Motion, WebSocket client
Backend: PHP, MySQL, Ratchet WebSocket, PHPMailer
Payments: Cashfree

Status: In development`,
    technologies: ['React', 'PHP', 'MySQL', 'WebSocket', 'Material-UI', 'Cashfree'],
    github: 'https://github.com/pandhijash-21/bolibazaar',
    live: '',
    status: 'In Progress',
    category: 'E-Commerce & E-Auction',
  },
  {
    title: 'Jazba 2k26',
    description:
      'Full-stack festival platform for event browsing, registrations, BillDesk payments, and an admin dashboard with real-time analytics.',
    detailedDescription: `Jazba 2026 — University Cultural Fest Platform

A production-ready web application for managing Jazba 2026, including event browsing, registrations, and secure online payments.

Key Features
• BillDesk payment flow with webhooks and audit trails
• Responsive SPA with React, Vite, Tailwind CSS, and GSAP
• AI-powered OCR microservice (Python/FastAPI, PaddleOCR, Redis queue)
• JWT admin portal with RBAC (Super Admin, Admin, Viewer)
• REST API with Node.js, Express, TypeScript, Prisma, and PostgreSQL
• Dockerized multi-service stack behind Nginx

Tech Stack
Frontend: React 18, Vite, Tailwind CSS, GSAP
Backend: Node.js, Express, TypeScript, Prisma, PostgreSQL
Payments: BillDesk
OCR: Python, FastAPI, PaddleOCR, OpenCV, Redis
Infra: Docker, Docker Compose, Nginx

Status: Deployed for Jazba 2k26`,
    technologies: ['React', 'Node.js', 'FastAPI', 'PostgreSQL', 'Docker', 'BillDesk'],
    github: '',
    live: '',
    status: 'Shipped',
    category: 'Cultural Fest Platform',
  },
  {
    title: 'ICET 2025',
    description:
      'Official conference website for registrations, speaker profiles, research tracks, and programme information.',
    detailedDescription: `ICET 2025 — International Conference Website

Official website for the International Conference on Emerging Technologies 2025, covering tracks, speakers, paper submissions, and participant registrations.

Features
• Conference tracks, topics, and keynotes
• Speaker profiles
• Paper submission guidance
• Online registration
• Day-wise programme
• Responsive layout across devices

Tech Stack: React, HTML5, CSS3, JavaScript, PHP, PHPMailer

The conference site was taken down after the event concluded.`,
    technologies: ['React', 'HTML5', 'CSS3', 'JavaScript', 'PHP'],
    github: '',
    live: '',
    status: 'Shipped',
    category: 'Conference Website',
  },
  {
    title: 'ICETAC',
    description:
      'Web application for an international AI and cyber security conference, covering programme content, forms, and backend integration.',
    detailedDescription: `ICETAC — International Conference Web Application

Platform for the 1st International Conference on Emerging Trends in Artificial Intelligence & Cyber Security.

Work included semantic HTML/CSS, vanilla JavaScript, responsive layouts, PHP form handling, PHPMailer, and a JSON API for frontend-backend communication.

The conference website was taken down after the event concluded.`,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'PHPMailer'],
    github: 'https://github.com/pandhijash-21/icetac',
    live: '',
    status: 'Shipped',
    category: 'Conference Web Application',
  },
  {
    title: 'Operation Codebreaker',
    description:
      'Competitive coding platform with real-time scoring and penalty logic, built for TechXtreme\'25 at Gandhinagar University.',
    detailedDescription: `Operation Codebreaker — Competitive Coding Event

A time-based C programming contest themed around preventing a missile launch. Correct answers add time; mistakes accelerate the countdown.

Features
• Real-time scoring
• Exponential penalties for incorrect attempts
• Auto-skip after 3 failed attempts
• Leaderboard by remaining time and accuracy
• Two knockout rounds

Tech Stack: HTML, CSS, JavaScript, PHP, MySQL

Built for TechXtreme'25 at Gandhinagar University.`,
    technologies: ['MySQL', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    github: 'https://github.com/pandhijash-21/operation-codebreaker',
    live: '',
    status: 'Shipped',
    category: 'Competitive Coding Platform',
  },
  {
    title: 'Mystic 6174',
    description:
      'Capture The Flag game covering cryptography, steganography, and web challenges for TechXtreme\'24.',
    detailedDescription: `Mystic 6174 — Capture The Flag

A cybersecurity CTF with progressive puzzles, flag-based scoring, and a live leaderboard.

Challenge types included cryptography, steganography, web security, logic puzzles, and reverse engineering.

Tech Stack: HTML, CSS, JavaScript

Built for TechXtreme'24 at Gandhinagar University.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/pandhijash-21/mystic-6174',
    live: '',
    status: 'Shipped',
    category: 'Cybersecurity CTF',
  },
];

const statusStyles: Record<Project['status'], string> = {
  Live: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
  'In Progress': 'text-amber-300 bg-amber-500/10 border-amber-500/20',
  Shipped: 'text-gray-300 bg-white/5 border-white/10',
};

function hasUrl(url: string) {
  return Boolean(url) && url !== '#';
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-14 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="section-kicker mb-2">{'// 04. work'}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm">
            Selected product work across enterprise systems, commerce, and campus platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group tech-panel p-6 pl-7 cursor-pointer hover:border-cyan-400/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <p className="text-xs text-gray-500">{project.category}</p>
                <span
                  className={`px-2 py-0.5 font-mono text-[10px] rounded border ${statusStyles[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-200 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="tech-chip"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-400">
                {hasUrl(project.live) && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit
                  </a>
                )}
                {hasUrl(project.github) && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
                <span className="ml-auto text-xs text-gray-500 group-hover:text-gray-300">
                  Details
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://github.com/pandhijash-21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0d1117] rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4 mb-5">
              <div>
                <p className="text-xs text-gray-500 mb-1">{selectedProject.category}</p>
                <h3 className="text-2xl font-semibold text-white">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white p-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-gray-300 leading-relaxed whitespace-pre-line text-sm mb-6">
              {selectedProject.detailedDescription}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs text-gray-300 rounded-md bg-white/5 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {hasUrl(selectedProject.live) && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit website
                </a>
              )}
              {hasUrl(selectedProject.github) && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200"
                >
                  <Github className="w-4 h-4" />
                  View code
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
