'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS with your public key
      emailjs.init('BH15GPgBg-Uu5JOEf');

      // Send email using EmailJS
      const result = await emailjs.send(
        'portfolio_website',
        'template_4qbdbc9',
        {
          to_email: 'pandhijash@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email
        }
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'pandhijash@gmail.com',
      link: 'mailto:pandhijash@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9638930589',
      link: 'tel:+919638930589',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Ahmedabad, Gujarat',
      link: '#',
    }
  ];

  return (
    <section id="contact" className="py-14 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="section-kicker mb-2">{'// 07. contact'}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
            Get in touch
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm">
            For roles, collaborations, or a project conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="tech-panel p-6 md:p-7 pl-7"
          >
            <h3 className="font-mono text-xs text-cyan-400 mb-6">send_message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/50 p-4 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-all duration-300"
                    placeholder="Your name"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/50 p-4 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                    suppressHydrationWarning
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800/50 p-4 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  placeholder="What's this about?"
                  suppressHydrationWarning
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-gray-800/50 p-4 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  suppressHydrationWarning
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full p-3.5 rounded-lg text-sm font-medium text-black flex items-center justify-center gap-2 transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-white hover:bg-gray-100'
                }`}
                suppressHydrationWarning
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-300 text-center"
                >
                  Message sent. I will get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-300 text-center"
                >
                  Could not send the message. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="tech-panel p-6 pl-7">
              <h3 className="font-mono text-xs text-cyan-400 mb-5">details</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors"
                  >
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <info.icon className="w-5 h-5 text-sky-300" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{info.title}</div>
                      <div className="text-gray-400">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="tech-panel p-6 pl-7">
              <h3 className="font-mono text-xs text-cyan-400 mb-5">elsewhere</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/pandhijash-21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-white/10 hover:border-white/25 hover:bg-white/5 transition-colors"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/jash-pandhi-1032b3291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-white/10 hover:border-white/25 hover:bg-white/5 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                
                <a
                  href="mailto:pandhijash@gmail.com"
                  className="p-3 rounded-lg border border-white/10 hover:border-white/25 hover:bg-white/5 transition-colors"
                >
                  <Mail className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="tech-panel p-6 pl-7"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-white font-medium">Open to opportunities</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Available for internships, full-time roles, and selected freelance work.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
