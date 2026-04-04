import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Code2 } from 'lucide-react';

export default function EducationAndAchievements() {
  return (
    <section id="education" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-20 py-24 z-10 relative pointer-events-auto">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap size={40} className="text-[#0055ff]" />
            <h2 className="text-4xl md:text-5xl font-bold text-glow">Education</h2>
          </div>
          
          <div className="glassmorphism p-8 rounded-3xl relative overflow-hidden group hover:border-[#0055ff]/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0055ff]/10 rounded-full blur-3xl" />
            <h3 className="text-3xl font-bold text-white mb-2">VIT Vellore</h3>
            <p className="text-[#00ffcc] text-lg font-semibold mb-6">B.Tech in Computer Science Engineering (Data Science)</p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-[rgba(255,255,255,0.05)] pb-4">
                <span className="text-slate-400">Duration</span>
                <span className="text-white font-medium">2023 - 2027</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-slate-400">CGPA</span>
                <span className="text-white font-bold bg-[#050510] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)]">9.0</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Award size={40} className="text-[#00ffcc]" />
            <h2 className="text-4xl md:text-5xl font-bold text-glow">Achievements</h2>
          </div>
          
          <div className="space-y-6">
            <div className="glassmorphism p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-[rgba(0,255,204,0.1)] p-3 rounded-full text-[#00ffcc] shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Global Hackathon Winner</h4>
                <p className="text-slate-400 text-sm">Organized by prominent tech communities. Secured 1st position developing an AI solution.</p>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-[rgba(0,85,255,0.1)] p-3 rounded-full text-[#0055ff] shrink-0">
                <Code2 size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Top 5% on LeetCode</h4>
                <p className="text-slate-400 text-sm">Consistently participating in weekly contests with over 500+ algorithmic problems solved.</p>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-[rgba(255,255,255,0.05)] p-3 rounded-full text-white shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">AWS Certified Cloud Practitioner</h4>
                <p className="text-slate-400 text-sm">Demonstrated knowledge in cloud infrastructure and deployment strategies.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
