'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Info } from 'lucide-react';
import { useState } from 'react';

const ongoingProjects = [
  {
    title: 'HRMS',
    description: 'Developing a full-stack College HR Management System with dynamic form builder, role-based access control, encrypted sensitive data handling, and self-service employee portal using Next.js, Node.js, Hasura GraphQL, PostgreSQL, and Prisma.',
    detailedDescription: `HRMS — College HR Management System

Project Overview
A full-stack College HR Management System built for Gandhinagar University, designed to digitize and streamline all HR operations for 500+ teaching and non-teaching staff members.

🚀 Key Features
• Dynamic Form Builder — Admins can add, remove, and reorder custom fields across any module at runtime without any code changes or database migrations
• Employee Self-Service Portal — Employees can log in, view their profile, update personal information (pending HR approval), upload documents, and track their own audit history
• Role-Based Access Control — Three-tier permission system (Employee / HR / Admin) with row-level and column-level enforcement at the GraphQL layer
• Sensitive Data Encryption — Field-level AES-256 encryption for Aadhaar numbers, PAN numbers, and bank account details, never exposed through the GraphQL surface
• Audit Trail — Every change to any sensitive record logs who changed it, when, from which IP, and what the old and new values were
• Document Management — Sem-wise marksheet uploads, identity document scans, certificates, photo and signature storage via Cloudinary
• Academic Qualification Tracking — Structured education history from SSC through PhD with per-semester marksheet uploads and HR verification workflow
• Multi-Module Architecture — Modular design covering Personal Info, Education, Leave, Payroll, Attendance, Bank Details, and Salary Management

🛠️ Tech Stack

Frontend:
• Next.js 14 with App Router and TypeScript
• Shadcn/ui component library with Tailwind CSS
• Apollo Client for GraphQL data fetching
• React Hook Form + Zod for form validation
• Axios for sensitive REST API calls

Backend:
• Node.js with Express and TypeScript
• Dual-API architecture — Hasura GraphQL for standard operations, Express REST for encrypted/sensitive operations
• Prisma ORM for schema management and migrations
• Redis for session caching and lookup tables
• Nodemailer for transactional emails
• Multer + Cloudinary for file upload pipeline

Database & Infrastructure:
• PostgreSQL 15 with field-level encryption
• Hasura GraphQL Engine for auto-generated APIs and permissions
• Docker Compose for local orchestration of all services
• JWT + NextAuth.js for authentication and session management
• bcrypt for password hashing

🔐 Security Highlights
The system handles highly sensitive government identity data (Aadhaar, PAN) for college staff on an unsecured campus network. All sensitive fields are AES-256 encrypted at the Express layer before reaching the database. Hasura column-level permissions ensure encrypted columns are never queryable via GraphQL regardless of role. Every write to sensitive tables triggers an append-only audit log entry with masked values.

⚙️ Engineering Highlights
• Designed an EAV (Entity-Attribute-Value) pattern for the dynamic field system, allowing runtime schema extension without migrations
• Architected a clean separation between GraphQL (reads + non-sensitive writes) and REST (sensitive writes + file uploads) within the same application
• Implemented soft-delete across all removable entities — no data is ever permanently deleted, preserving full history
• Row-level security enforced at the Hasura layer ensures employees can only query their own records regardless of how the frontend constructs queries
• Append-only service book and audit log tables with no UPDATE or DELETE permissions on any role

Status: 🔄 In Development
This project demonstrates enterprise-grade full-stack architecture, security-first design for sensitive PII data, and the ability to build complex multi-role systems with dynamic runtime configurability.`,
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'Node.js', 'Hasura GraphQL', 'PostgreSQL', 'Prisma', 'TypeScript', 'Redis', 'Docker'],
    github: '#',
    live: '#',
    status: 'ongoing',
    category: 'HR Management System'
  },
  {
    title: 'Bolibazaar',
    description: 'A comprehensive dual-platform marketplace combining traditional e-commerce shopping with live auction functionality.',
    detailedDescription: `BoliBazaar - E-Commerce & E-Auction Platform

Project Overview
BoliBazaar is a comprehensive dual-platform marketplace that combines traditional e-commerce shopping with live auction functionality. It's designed as a modern web application that allows users to both purchase products directly and participate in real-time bidding auctions for unique items.

Key Features & Functionality

🛒 E-Commerce Features
• Product Catalog Management: Hierarchical category system with master categories and subcategories
• Shopping Cart & Wishlist: Full cart functionality with persistent storage
• Order Management: Complete order lifecycle from placement to delivery tracking
• User Profiles: Comprehensive user management with shipping addresses
• Search & Filter: Advanced product search and filtering capabilities
• Payment Integration: Secure payment processing with multiple payment methods

🔨 Live Auction System
• Real-time Bidding: WebSocket-powered live auction rooms with instant bid updates
• Auto-bidding System: Intelligent system bidders that automatically place bids up to cap amounts
• Auction Management: Admin dashboard for creating and managing auction products
• Bid History: Complete tracking of all bids with timestamps and user information
• Auction Timer: Real-time countdown timers for auction end times
• Entry Fee System: Optional entry fees for premium auctions

🔐 Security & Authentication
• Email Verification: Secure email verification system with token-based authentication
• OTP System: Multi-factor authentication with OTP verification for login and registration
• Password Security: Secure password hashing and reset functionality
• Role-based Access: Admin, seller, and buyer role management

💳 Payment Processing
• Cashfree Integration: Complete payment gateway integration with webhook handling
• Multiple Payment Methods: Support for UPI, cards, net banking, and wallets
• Order Tracking: Real-time payment status updates and order management
• Webhook Processing: Automated payment confirmation and order status updates

Technology Stack

Frontend Technologies:
• React 19.1.0: Modern React with hooks and functional components
• Material-UI (MUI): Professional UI component library with theming
• React Router: Client-side routing and navigation
• Framer Motion: Smooth animations and transitions
• Context API: State management for user authentication and cart
• WebSocket Client: Real-time communication for auction features

Backend Technologies:
• PHP: Server-side logic and API endpoints
• MySQL: Relational database with comprehensive schema design
• WebSocket Server: Ratchet PHP WebSocket server for real-time features
• PHPMailer: Email service integration for notifications and verification
• Composer: PHP dependency management

Payment & External Services:
• Cashfree Payment Gateway: Complete payment processing solution
• SMTP Email Service: Gmail/Outlook integration for email notifications
• WebSocket Protocol: Real-time bidirectional communication

Mobile App Integration:
The project includes a separate mobile application that provides:
• Cross-platform Compatibility: Native mobile experience for both iOS and Android
• Real-time Notifications: Push notifications for auction updates and bid alerts
• Mobile-optimized UI: Touch-friendly interface for bidding and shopping
• Offline Capabilities: Cached data for browsing when offline
• Mobile Payment Integration: Optimized payment flows for mobile devices

Technical Highlights:
• Real-time Features: Live auction rooms with WebSocket-powered bidding
• Security Implementation: Token-based authentication and SQL injection prevention
• Scalability Features: Modular architecture and database optimization
• Payment Webhooks: Asynchronous payment processing for better performance

Project Impact:
This project demonstrates expertise in full-stack development, real-time web applications, payment gateway integration, security best practices, mobile development, and complex database design.

Status: 🚧 In Development - Links will be provided once project goes live`,
    image: '/api/placeholder/600/400',
    technologies: ['React 19.1.0', 'PHP', 'MySQL', 'WebSocket', 'Material-UI', 'Cashfree'],
    github: 'https://github.com/pandhijash-21/bolibazaar',
    live: '#',
    status: 'ongoing',
    category: 'E-Commerce & E-Auction Platform'
  }
];

const completedProjects = [
  {
    title: 'Sunshine',
    description: 'A full-stack e-commerce platform built with modern technologies, featuring both a web application and a separately developed mobile app — now live in production.',
    detailedDescription: `Sunshine — E-Commerce Platform

Project Overview
Sunshine is a full-stack e-commerce platform built with modern technologies, featuring a complete web application and a separately developed native mobile app, now live and serving real customers.

🚀 Key Features
• User Authentication — Secure login/register system with session management
• Product Catalog — Browse products with categories and search
• Shopping Cart — Add to cart and checkout functionality
• Order Management — Complete order processing and tracking system
• Admin Dashboard — Backend management interface for products and orders
• Payment Integration — Secure payment processing with gateway integration
• Mobile App — Native mobile application for iOS and Android

🛠️ Tech Stack

Frontend:
• React.js with modern hooks
• Styled Components for styling
• React Router for navigation
• Vite for build tooling

Backend:
• PHP with RESTful APIs
• MySQL database
• JWT authentication
• Payment gateway integration

📱 Mobile Application
The platform includes a separately developed native mobile application for iOS and Android, fully integrated with the admin panel and backend systems.

🎯 Development Highlights
• Full-stack development from database design to deployment
• Modern React architecture with context management
• Secure authentication and payment processing
• Comprehensive admin management system
• Mobile app development with native iOS and Android integration

Status: ✅ Complete and Production-Ready
The platform is live at sunshinebusiness.in and serving real users.`,
    image: '/api/placeholder/600/400',
    technologies: ['React', 'PHP', 'MySQL', 'JavaScript', 'Styled Components', 'Vite'],
    github: 'https://github.com/pandhijash-21/sunshine',
    live: 'https://sunshinebusiness.in/',
    status: 'completed',
    category: 'E-commerce Platform'
  },
  {
    title: 'Jazba 2k26',
    description: 'A production-ready, full-stack web application designed to manage end-to-end operations for "Jazba 2026", a university cultural festival.',
    detailedDescription: `Jazba 2026 — University Cultural Fest Platform

📝 Short Descriptive Summary
A production-ready, full-stack web application designed to manage end-to-end operations for "Jazba 2026", a university cultural festival. The platform streamlines event browsing, user registrations, and secure online payments while providing administrators with a comprehensive dashboard to manage data and track real-time analytics. It features a modern, animated user interface and a robust microservices architecture, including a custom AI-powered OCR service.

✨ Key Features
• Seamless Registration & Payment Flow: Integrated with the BillDesk payment gateway to facilitate smooth and secure transaction flows for event registrations, complete with webhook handlers and full audit trails.
• Modern, Dynamic UI: Built a highly responsive Single Page Application (SPA) using React and Vite, styled with Tailwind CSS, and enriched with GSAP animations for a premium user experience.
• AI-Powered OCR Microservice: Developed a dedicated, asynchronous Python/FastAPI microservice utilizing PaddleOCR and OpenCV to process image data efficiently via a Redis task queue (RQ).
• Admin Dashboard & RBAC: Engineered a secure, JWT-authenticated admin portal with Role-Based Access Control (Super Admin, Admin, Viewer) to manage events, participants, and monitor real-time festival analytics.
• Scalable Backend Architecture: Designed a RESTful API using Node.js, Express, and TypeScript, communicating with a PostgreSQL database managed via Prisma ORM for type-safe, reliable queries.
• Containerized Deployment: Fully containerized the multi-service stack (Frontend, Backend, OCR API, Worker, DB, Cache) using Docker and Docker Compose for seamless orchestration and deployment behind an Nginx reverse proxy.

🛠️ Technical Stack
Frontend: React 18, Vite, Tailwind CSS, GSAP, React Router v6, Axios
Backend: Node.js, Express, TypeScript, Prisma ORM, PostgreSQL, JSON Web Tokens (JWT)
Payment Gateway: BillDesk API
OCR / AI Microservice: Python, FastAPI, PaddleOCR, OpenCV, spaCy, Redis, RQ (Redis Queue)
Infrastructure & DevOps: Docker, Docker Compose, Nginx

Status: ✅ Successfully Deployed for Jazba 2k26`,
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'FastAPI', 'PostgreSQL', 'Docker', 'BillDesk'],
    github: '',
    live: '',
    status: 'completed',
    category: 'Cultural Fest Platform'
  },
  {
    title: 'ICET 2025',
    description: 'Official website for the International Conference on Emerging Technologies 2025, built to manage registrations, publish schedules, and showcase speakers and research tracks.',
    detailedDescription: `ICET 2025 — International Conference Website

Project Overview
The official website for the International Conference on Emerging Technologies (ICET) 2025, developed to serve as the primary platform for conference information, paper submissions, speaker profiles, and participant registrations.

🚀 Key Features
• Conference Information — Complete details about tracks, topics, and keynotes
• Speaker Profiles — Dedicated pages for keynote and invited speakers
• Paper Submission — Guidance and links for research paper submissions
• Registration System — Online registration for delegates and presenters
• Schedule & Programme — Detailed day-wise conference programme
• Responsive Design — Accessible across all device sizes

🛠️ Tech Stack
• React — Frontend component library for dynamic user interfaces
• HTML5 / CSS3 — Semantic structure and responsive layouts
• JavaScript — Interactive UI elements and dynamic content
• PHP — Server-side form handling and backend logic
• PHPMailer — Transactional email for registrations and confirmations

Status: ✅ Successfully Deployed for ICET 2025

Note: The conference website has been taken down as the event has concluded.`,
    image: '/api/placeholder/600/400',
    technologies: ['React', 'HTML5', 'CSS3', 'JavaScript', 'PHP'],
    github: '',
    live: '',
    status: 'completed',
    category: 'Conference Website'
  },
  {
    title: 'ICETAC',
    description: 'A comprehensive web application for the 1st International Conference on Emerging Trends in Artificial Intelligence & Cyber Security, demonstrating expertise in modern web development and backend integration.',
    detailedDescription: `ICETAC - International Conference Web Application

Project Overview
ICETAC is a comprehensive web application developed for the "1st International Conference on Emerging Trends in Artificial Intelligence & Cyber Security". This project demonstrates expertise in modern web development, responsive design, and backend integration, serving as a professional platform for international academic collaboration.

Technical Skills Demonstrated

Frontend Development:
• Modern HTML5/CSS3: Semantic markup with advanced CSS features (Grid, Flexbox, Custom Properties)
• Vanilla JavaScript: ES6+ features, DOM manipulation, async/await, fetch API
• Responsive Design: Mobile-first approach with breakpoints for all device sizes
• Component Architecture: Modular, reusable components (navbar, footer)
• CSS Architecture: Organized stylesheets with variables, animations, and modern design patterns
• Performance Optimization: Efficient loading, optimized assets, progressive enhancement

Backend Development:
• PHP Development: Server-side processing, form handling, email integration
• API Development: RESTful JSON API for frontend-backend communication
• Database Integration: File-based data storage and logging systems
• Security Implementation: Input validation, XSS protection, CORS handling
• Error Handling: Comprehensive logging and user feedback systems

Full-Stack Integration:
• AJAX Implementation: Asynchronous form submission without page reload
• Form Processing: Complete contact form with validation and email delivery
• Component Loading: Dynamic content loading using JavaScript fetch API
• Cross-Origin Requests: Proper CORS implementation for API communication

Key Technical Decisions:
• Component Architecture: Chose modular HTML components for maintainability
• Vanilla JavaScript: Avoided frameworks for better performance and learning
• CSS Custom Properties: Implemented design system for consistency
• Progressive Enhancement: Ensured functionality without JavaScript
• Mobile-First: Responsive design starting from mobile devices

Code Quality & Best Practices:

Frontend Excellence:
• Semantic HTML: Proper use of HTML5 semantic elements
• Accessibility: ARIA labels, keyboard navigation, proper contrast
• Performance: Optimized images, efficient CSS, minimal JavaScript
• Cross-browser Compatibility: Modern browser support with fallbacks
• Code Organization: Clean, commented, and maintainable code structure

Backend Excellence:
• Security: Input sanitization, validation, and error handling
• Error Management: Comprehensive logging and user feedback
• API Design: RESTful endpoints with proper HTTP status codes
• Documentation: Well-commented code with clear functionality

Technical Challenges Solved:

1. Dynamic Component Loading
Challenge: Loading navigation and footer components across multiple pages
Solution: Implemented JavaScript fetch API with error handling
Skills: Async JavaScript, DOM manipulation, error handling

2. Contact Form Integration
Challenge: Secure form processing with email delivery and validation
Solution: PHP backend with PHPMailer, client-side validation, and backup systems
Skills: Full-stack integration, security implementation, user experience

3. Responsive Design System
Challenge: Consistent design across all devices and screen sizes
Solution: CSS custom properties, mobile-first approach, flexible layouts
Skills: CSS Grid/Flexbox, responsive design principles, design systems

4. Performance Optimization
Challenge: Fast loading times and smooth user experience
Solution: Optimized assets, efficient CSS, progressive enhancement
Skills: Performance optimization, modern web standards

Portfolio-Relevant Achievements:

Technical Proficiency:
• Languages: HTML5, CSS3, JavaScript (ES6+), PHP
• Frameworks/Libraries: PHPMailer, Font Awesome, Google Fonts
• Tools: Composer (PHP dependency management)
• Concepts: RESTful APIs, CORS, Progressive Enhancement, Component Architecture

Development Skills:
• Full-Stack Development: Complete frontend and backend implementation
• Responsive Design: Mobile-first, cross-device compatibility
• Security Implementation: Input validation, XSS protection, secure form handling
• Performance Optimization: Efficient loading, optimized assets
• Code Organization: Modular, maintainable, and scalable code structure

Project Management:
• Component Architecture: Reusable, maintainable code structure
• Error Handling: Comprehensive logging and user feedback systems
• Documentation: Well-commented code and clear functionality
• Testing: Cross-browser compatibility and responsive testing

Business Impact:
• Professional Conference Platform: Enabled international academic collaboration
• User Experience: Intuitive navigation and clear information hierarchy
• Accessibility: Inclusive design for all users
• Scalability: Modular architecture for easy maintenance and updates

Technologies Used:
• Frontend: HTML5, CSS3, JavaScript (ES6+), Font Awesome, Google Fonts
• Backend: PHP, PHPMailer, JSON API
• Tools: Composer, Git, Modern development practices
• Design: CSS Grid, Flexbox, Custom Properties, Animations

Status: ✅ Successfully deployed for ICETAC Conference

Note: The conference website has been taken down as the event has concluded. A comprehensive project walkthrough video will be shared soon showcasing the full-stack implementation and technical features.`,
    image: '/api/placeholder/600/400',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'PHPMailer', 'Font Awesome'],
    github: 'https://github.com/pandhijash-21/icetac',
    live: '#',
    status: 'completed',
    category: 'Conference Web Application'
  },
  {
    title: 'Operation Codebreaker',
    description: 'A high-intensity competitive coding event platform themed around preventing a nuclear missile launch, developed for TechXtreme\'25 at Gandhinagar University.',
    detailedDescription: `Operation Codebreaker - Competitive Coding Event Platform

Project Overview
Operation Codebreaker is a high-intensity competitive coding event themed around preventing a nuclear missile launch. Teams race against time to solve C programming challenges where every right answer adds precious seconds and every mistake accelerates disaster. Penalties grow with repeated errors, pushing participants to think fast and think smart.

This project powered TechXtreme'25 at Gandhinagar University, delivering real-time scoring, a dynamic timer system, and seamless event management through an engaging web interface.

Key Features
• Real-time time-based scoring system
• Exponential penalty mechanism for incorrect attempts
• Automatic question skipping after 3 failed attempts
• Leaderboard based on remaining time and accuracy
• Smooth contest flow across two knockout rounds

Team Structure
• 2 participants per team
• C-language only challenge

Event Management
• Developed for college tech fest TechXtreme'25
• Hosted at Gandhinagar University
• Real-time event coordination and management
• Seamless participant experience

Technology Stack
• MySQL: Database management for questions, scores, and leaderboards
• HTML: Frontend structure and layout
• CSS: Styling and responsive design
• JavaScript: Interactive features and real-time updates
• PHP: Backend logic and server-side processing

Technical Implementation
• Real-time scoring system with dynamic updates
• Penalty calculation algorithm for incorrect attempts
• Automatic question progression logic
• Leaderboard ranking system
• Event flow management for knockout rounds

Project Impact
This project demonstrates expertise in:
• Event management system development
• Real-time web application architecture
• Competitive programming platform design
• Database design for scoring systems
• User experience optimization for high-pressure environments

Status: ✅ Successfully deployed for TechXtreme'25

Note: The competitive coding event has concluded. A detailed walkthrough video showcasing the real-time scoring system and technical implementation will be shared soon.`,
    image: '/api/placeholder/600/400',
    technologies: ['MySQL', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    github: 'https://github.com/pandhijash-21/operation-codebreaker',
    live: '#',
    status: 'completed',
    category: 'Competitive Coding Platform'
  },
  {
    title: 'Mystic 6174',
    description: 'A cybersecurity-focused Capture The Flag (CTF) game designed to test participants\' hacking instincts and puzzle-solving skills for TechXtreme\'24 at Gandhinagar University.',
    detailedDescription: `Mystic 6174 - Capture The Flag (CTF) Event

Project Overview
Mystic 6174 was a cybersecurity-focused CTF game designed to test participants' hacking instincts and puzzle-solving skills. Players confronted a series of cryptic digital challenges where every solved clue revealed a hidden flag. The event blended logic, cybersecurity awareness, and playful trickery, creating a thrilling experience for TechXtreme'24 at Gandhinagar University.

Core Highlights
• Progressive puzzle challenges with increasing difficulty
• Flag-based scoring system for competitive gameplay
• Cryptography, steganography, and web-based clues
• Engaging hacker-style user interface design
• Competitive real-time race to the top leaderboard

Event Structure
• Multi-level challenge progression
• Hidden flags scattered throughout puzzles
• Real-time scoring and leaderboard updates
• Time-based competitive elements
• Progressive difficulty scaling

Technical Implementation
• Interactive puzzle interfaces
• Dynamic scoring system
• Real-time leaderboard updates
• Responsive design for all devices
• Secure flag validation system

Challenge Categories
• Cryptography: Encryption and decryption puzzles
• Steganography: Hidden messages in images and files
• Web Security: Browser-based hacking challenges
• Logic Puzzles: Mathematical and algorithmic problems
• Reverse Engineering: Code analysis and debugging

User Experience Features
• Intuitive hacker-themed interface
• Progressive difficulty curve
• Real-time feedback and hints
• Competitive leaderboard system
• Mobile-responsive design

Security Considerations
• Secure flag validation
• Input sanitization and validation
• Protection against common web vulnerabilities
• Safe challenge environment for learning

Event Management
• Developed for TechXtreme'24 at Gandhinagar University
• Real-time event coordination and monitoring
• Participant engagement and support
• Technical troubleshooting during live event

Technology Stack
• HTML: Semantic structure and accessibility
• CSS: Responsive design and hacker-themed styling
• JavaScript: Interactive puzzles and real-time updates

Development Skills Demonstrated
• Frontend Development: Interactive web interfaces
• Game Design: Engaging puzzle mechanics
• User Experience: Intuitive navigation and feedback
• Security Awareness: Safe CTF environment design
• Event Management: Live event coordination

Project Impact
This project demonstrates expertise in:
• Cybersecurity education and awareness
• Interactive game development
• Real-time web applications
• Event management and coordination
• Creative problem-solving in web development

Status: ✅ Successfully deployed for TechXtreme'24

Note: The CTF event has concluded. A detailed walkthrough video showcasing the puzzle mechanics and technical implementation will be shared soon.`,
    image: '/api/placeholder/600/400',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/pandhijash-21/mystic-6174',
    live: '#',
    status: 'completed',
    category: 'Cybersecurity CTF Game'
  }
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'ongoing' | 'completed'>('ongoing');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const ProjectCard = ({ project, index, badgeColor, badgeText }: { 
    project: any, 
    index: number, 
    badgeColor: string, 
    badgeText: string 
  }) => {
    // Safety check for project object
    if (!project || !project.title) {
      return null;
    }

  return (
        <motion.div
      key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
      onClick={() => {
        console.log('Card clicked, project:', project.title);
        setSelectedProject(project);
      }}
      className={`group relative glass rounded-2xl overflow-hidden card-hover interactive cursor-pointer ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 lg:h-64 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-30">💻</div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="glass p-3 rounded-full hover:neon-purple transition-all duration-300 icon-hover interactive"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300 text-hover">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
      </div>

      {/* Badge */}
      <div className="absolute top-4 right-4">
        <span className={`px-3 py-1 ${badgeColor} text-white text-xs font-semibold rounded-full`}>
          {badgeText}
        </span>
      </div>
    </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 px-6 relative">
      {/* Debug indicator */}
      {selectedProject && (
        <div className="fixed top-4 left-4 bg-red-500 text-white p-2 rounded z-[10000]">
          Modal State: {selectedProject.title}
        </div>
      )}
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my ongoing and completed work
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="glass rounded-2xl p-2 flex gap-2">
            <motion.button
              onClick={() => setActiveTab('ongoing')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'ongoing'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              suppressHydrationWarning
            >
              Ongoing Projects
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('completed')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'completed'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              suppressHydrationWarning
            >
              Completed Projects
            </motion.button>
                </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeTab === 'ongoing' ? (
            ongoingProjects.length > 0 ? (
              ongoingProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  badgeColor="bg-gradient-to-r from-green-500 to-emerald-500"
                  badgeText="Ongoing"
                />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="text-6xl mb-4 opacity-30">🚧</div>
                <h3 className="text-2xl font-bold text-gray-400 mb-2">No Ongoing Projects</h3>
                <p className="text-gray-500">Projects will be added here soon!</p>
              </div>
            )
          ) : (
            completedProjects.length > 0 ? (
              completedProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  badgeColor="bg-gradient-to-r from-purple-500 to-blue-500"
                  badgeText="Completed"
                />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="text-6xl mb-4 opacity-30">✅</div>
                <h3 className="text-2xl font-bold text-gray-400 mb-2">No Completed Projects</h3>
                <p className="text-gray-500">Completed projects will be added here soon!</p>
                </div>
            )
              )}
            </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/pandhijash-21"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 glass-strong px-8 py-4 rounded-full text-lg font-semibold text-white border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 btn-hover interactive"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
          style={{ backdropFilter: 'none' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900/95 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <motion.button
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
              >
                <ExternalLink className="w-6 h-6 rotate-45" />
              </motion.button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Project Overview</h4>
                <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Detailed Description</h4>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {selectedProject.detailedDescription}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies?.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Category</h4>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                  {selectedProject.category}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
