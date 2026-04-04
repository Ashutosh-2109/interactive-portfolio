import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-20 z-10 relative pointer-events-auto pb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl glassmorphism rounded-3xl p-8 md:p-16 text-center border-t border-[rgba(255,255,255,0.1)] shadow-2xl relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0055ff]/10 via-transparent to-transparent pointer-events-none" />

        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-glow">Let's Connect</h2>
        <p className="text-lg md:text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto">
          Currently open for new opportunities and exciting collaborations. If you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <motion.a
            href="mailto:example@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#050510] font-bold tracking-wide hover:bg-[#00ffcc] transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full md:w-auto justify-center"
          >
            <Mail size={20} />
            Say Hello
          </motion.a>

          <motion.a
            href="/resume.pdf" // Placeholder path for resume
            download="Ashutosh_Pandey_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-[#00ffcc] text-[#00ffcc] font-bold tracking-wide hover:bg-[rgba(0,255,204,0.1)] transition-colors w-full md:w-auto justify-center"
          >
            <FileText size={20} />
            Download Resume
          </motion.a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-8">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-3 hover:bg-[rgba(255,255,255,0.05)] rounded-full">
            <Github size={32} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0055ff] transition-colors p-3 hover:bg-[rgba(0,85,255,0.1)] rounded-full">
            <Linkedin size={32} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:example@gmail.com" className="text-slate-400 hover:text-[#00ffcc] transition-colors p-3 hover:bg-[rgba(0,255,204,0.1)] rounded-full">
            <Mail size={32} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </motion.div>
      
      <div className="mt-24 text-slate-500 text-sm">
        Designed and built by <span className="text-[#00ffcc]">Ashutosh Pandey</span>
      </div>
    </section>
  );
}
