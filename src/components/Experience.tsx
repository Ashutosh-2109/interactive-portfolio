import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Data Science Intern",
    company: "Tech Innovators Inc.",
    duration: "June 2025 - Present",
    description: "Developing machine learning models to analyze user engagement. Improved prediction accuracy by 15%."
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Various Clients",
    duration: "2024 - Present",
    description: "Built and deployed interactive React/Node.js web applications tailored to client specifications, ensuring responsive design and secure database architectures."
  },
  {
    role: "Lead Developer",
    company: "Hackathon Winning Team",
    duration: "Sept 2024",
    description: "Architected a real-time health-monitoring dashboard in 48 hours utilizing WebSockets and Python, securing 1st place among 50 teams."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-20 py-24 z-10 relative pointer-events-auto">
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-glow">
          Experience & Internships
        </h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#0055ff] before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050510] bg-[#00ffcc] shadow-[0_0_15px_#00ffcc] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10" />
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glassmorphism p-6 rounded-2xl hover:border-[#0055ff]/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                  <span className="text-[#00ffcc] text-sm font-semibold">{exp.duration}</span>
                </div>
                <div className="text-slate-300 font-medium mb-4">{exp.company}</div>
                <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
