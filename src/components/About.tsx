import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-20 py-24 z-10 relative pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full glassmorphism p-8 md:p-14 rounded-3xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ffcc] opacity-5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0055ff] opacity-10 blur-[100px] pointer-events-none" />
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow inline-block">
          About Me
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl text-slate-300 font-light leading-relaxed">
          <p>
            Hello! I'm <strong className="text-white font-medium">Ashutosh Pandey</strong>, a dedicated Computer Science student specializing in Data Science at VIT Vellore.
          </p>
          <p>
            My journey into tech is driven by an deep-seated passion for solving complex, real-world problems. I find my true calling at the intersection of <strong className="text-[#00ffcc] font-medium">machine learning</strong> and <strong className="text-[#0055ff] font-medium">software development</strong>. 
          </p>
          <p>
            Whether it's building predictive models, designing smart AI chatbots, or engineering robust web applications, I love translating data intelligence into seamless, user-centric experiences. I believe technology should not only be smart, but also accessible and impactful.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
