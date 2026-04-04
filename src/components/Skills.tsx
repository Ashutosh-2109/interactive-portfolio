import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "Java", level: 80 }
    ]
  },
  {
    category: "Tech & Domains",
    items: [
      { name: "Machine Learning", level: 85 },
      { name: "Web Development", level: 75 },
      { name: "DBMS", level: 80 },
      { name: "Operating Systems", level: 70 }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "VS Code", level: 95 }
    ]
  }
];

const SkillBar = ({ name, level, index }: { name: string, level: number, index: number }) => (
  <div className="mb-6">
    <div className="flex justify-between items-end mb-2">
      <span className="text-white font-medium tracking-wide">{name}</span>
      <span className="text-[#00ffcc] text-sm font-semibold">{level}%</span>
    </div>
    <div className="w-full h-2.5 bg-[#030308] rounded-full overflow-hidden border border-[rgba(255,255,255,0.05)]">
      <motion.div 
        className="h-full rounded-full bg-gradient-to-r from-[#0055ff] to-[#00ffcc] relative"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay: 0.1 * index, ease: "easeOut" }}
      >
        {/* Glow effect at the tip of the progress bar */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[4px] opacity-50" />
      </motion.div>
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-20 py-24 z-10 relative pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-glow">
          Technical Arsenal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, catIndex) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              className="glassmorphism p-8 md:p-10 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                {category.category}
              </h3>
              
              <div>
                {category.items.map((skill, index) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
