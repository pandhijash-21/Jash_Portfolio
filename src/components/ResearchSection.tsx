'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function ResearchSection() {
  return (
    <section id="research" className="py-14 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="section-kicker mb-2">{'// 03. research'}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Research Publication
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          viewport={{ once: true }}
          className="tech-panel pl-6 pr-6 py-6 md:pl-8 md:pr-8"
        >
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 shrink-0">
              <FileText className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <p className="font-mono text-xs text-cyan-400 mb-2">
                GU-JET <span className="text-gray-500">|</span> ISSN 2249-6157
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                Understanding and Addressing Bias in AI – Powered Hiring Systems
              </h3>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
