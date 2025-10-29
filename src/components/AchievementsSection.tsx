'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Trophy, Award, Medal, Users, Calendar, Sparkles, X, ImageIcon } from 'lucide-react';

const achievements = [
  {
    id: 'event-coordinator-techxtreme-2024',
    title: 'Event Coordinator - TechXtreme 2024',
    description: 'MYSTIC6174',
    role: 'Coordinated the organization and execution of MYSTIC6174, a cybersecurity-focused CTF event',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500',
    year: '2024',
    type: 'Leadership',
    category: 'Event Management',
    hasCertificate: true,
    certificatePath: '/certificates/event-coordinator-techxtreme-2024.jpg'
  },
  {
    id: 'core-team-techxtreme-jazba-2024',
    title: 'Core Team Member',
    description: 'TechXtreme 2024 & Jazba 2024',
    role: 'Worked as a core team member contributing to the success of multiple major college events',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    year: '2024',
    type: 'Team Leadership',
    category: 'Event Management',
    hasCertificate: true,
    certificatePath: '/certificates/core-team-member-techxtreme-jazba-2024.jpg'
  },
  {
    id: 'core-team-orientation-graduation-2024',
    title: 'Core Team Member',
    description: 'Orientation/Graduation 2024',
    role: 'Worked as a core team member in organizing and managing the Orientation and Graduation ceremonies',
    icon: Users,
    color: 'from-teal-500 to-cyan-500',
    year: '2024',
    type: 'Team Leadership',
    category: 'Event Management',
    hasCertificate: true,
    certificatePath: '/certificates/core-team-member-orientation-graduation-2024.jpg'
  },
  {
    id: 'head-dept-techxtreme-2025',
    title: 'Head of Department (CE/IT)',
    description: 'TechXtreme 2025',
    role: 'Leading the Computer Engineering/Information Technology department for TechXtreme 2025',
    icon: Award,
    color: 'from-purple-500 to-pink-500',
    year: '2025',
    type: 'Department Head',
    category: 'Leadership',
    hasCertificate: true,
    certificatePath: '/certificates/head-of-department-techxtreme-2025.jpg'
  },
  {
    id: 'zonal-state-achievements',
    title: 'Zonal & State Level Achievements',
    description: 'Quiz, Skit & More',
    role: 'Achieved recognition at Zonal and State levels in various competitions including Quiz and Skit performances',
    icon: Medal,
    color: 'from-green-500 to-emerald-500',
    year: 'School Level',
    type: 'Competitions',
    category: 'Academic Excellence'
  },
  {
    id: 'school-level-achievements',
    title: 'School Level Achievements',
    description: 'Multiple Honors',
    role: 'Received numerous achievements and recognitions during school years across various fields',
    icon: Sparkles,
    color: 'from-indigo-500 to-purple-500',
    year: 'School',
    type: 'Various',
    category: 'Overall Excellence'
  }
];

export default function AchievementsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  const handleAchievementClick = (achievement: typeof achievements[0]) => {
    if ('hasCertificate' in achievement && achievement.hasCertificate && 'certificatePath' in achievement && achievement.certificatePath) {
      setSelectedCertificate(achievement.certificatePath);
      setImageError(false); // Reset error state when opening a new certificate
    }
  };

  return (
    <section id="achievements" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognitions and accomplishments that showcase leadership, teamwork, and excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => ('hasCertificate' in achievement && achievement.hasCertificate) && handleAchievementClick(achievement)}
              className={`group bg-gray-900/50 p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 relative overflow-hidden ${
                'hasCertificate' in achievement && achievement.hasCertificate ? 'cursor-pointer' : ''
              }`}
            >
              {/* Decorative gradient overlay */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full blur-3xl`} />
              
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${achievement.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className="w-6 h-6 text-white" />
              </div>

              {/* Year Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-semibold rounded-full border border-gray-600">
                  {achievement.year}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                {achievement.title}
              </h3>
              
              <p className="text-blue-400 font-semibold mb-3 text-sm">
                {achievement.description}
              </p>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {achievement.role}
              </p>

              {/* Category Tags and Certificate Button Container */}
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-xs rounded-full opacity-80`}>
                    {achievement.type}
                  </span>
                  <span className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600">
                    {achievement.category}
                  </span>
                </div>

                {/* Certificate Indicator */}
                {'hasCertificate' in achievement && achievement.hasCertificate && (
                  <div className="flex items-center justify-start">
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAchievementClick(achievement);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                      suppressHydrationWarning
                    >
                      <ImageIcon className="w-4 h-4" />
                      <span>View Certificate</span>
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
            onClick={() => {
              setSelectedCertificate(null);
              setImageError(false);
            }}
            style={{ backdropFilter: 'blur(10px)' }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-gray-900/95 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => {
                  setSelectedCertificate(null);
                  setImageError(false);
                }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full text-white transition-colors duration-300"
                aria-label="Close certificate"
                suppressHydrationWarning
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Certificate Image */}
              <div className="relative w-full h-full flex items-center justify-center p-8 min-h-[400px]">
                {imageError ? (
                  <div className="flex flex-col items-center justify-center text-center p-8">
                    <ImageIcon className="w-16 h-16 text-gray-500 mb-4" />
                    <p className="text-gray-400 text-lg font-semibold mb-2">
                      Certificate Not Found
                    </p>
                    <p className="text-gray-500 text-sm max-w-md">
                      Please upload the certificate image to: <br />
                      <code className="bg-gray-800 px-2 py-1 rounded text-xs mt-1 inline-block">
                        public/certificates/
                      </code>
                    </p>
                  </div>
                ) : (
                  <img
                    src={selectedCertificate || ''}
                    alt="Certificate"
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                    onError={() => {
                      setImageError(true);
                    }}
                    onLoad={() => {
                      setImageError(false);
                    }}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '3+', label: 'Major Events Led', icon: Trophy, color: 'from-yellow-500 to-orange-500' },
            { number: '2+', label: 'Years Active', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
            { number: 'Multiple', label: 'State Level Wins', icon: Medal, color: 'from-green-500 to-emerald-500' },
            { number: '100%', label: 'Team Dedication', icon: Users, color: 'from-purple-500 to-pink-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 text-center p-6 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} mb-3`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

