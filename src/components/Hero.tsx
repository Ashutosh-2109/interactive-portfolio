import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen w-full flex flex-col items-center justify-center pointer-events-none px-4 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center"
      >
        <motion.div 
          className="inline-block px-4 py-1.5 mb-6 rounded-full glassmorphism text-xs font-semibold uppercase tracking-widest text-[#00ffcc]"
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 255, 204, 0.1)' }}
        >
          CSE Student | Data Science Enthusiast | Building Smart Solutions
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-glow">
          <span className="text-white block mb-2">Ashutosh</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffcc] to-[#0055ff]">
            Pandey
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-slate-400 text-lg md:text-xl font-light mb-8">
          I'm a Data Science student passionate about solving real-world problems using machine learning and software development.
        </p>

        <div className="flex gap-4 justify-center pointer-events-auto">
          <motion.button 
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-white text-[#050510] font-semibold tracking-wide hover:bg-[#00ffcc] transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,204,0.5)]"
          >
            View Projects
          </motion.button>
          
          <motion.button 
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-[rgba(255,255,255,0.2)] text-white font-semibold tracking-wide hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300 glassmorphism"
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
