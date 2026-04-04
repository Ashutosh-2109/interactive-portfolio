import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Smart Attendance System",
    description: "An AI-powered attendance tracking system utilizing facial recognition. Replaces manual roll calls with automated, highly accurate biometric logging to save instructor time.",
    tech: ["Python", "OpenCV", "TensorFlow", "React"],
    github: "#",
    live: "#"
  },
  {
    title: "Intelligent AI Chatbot",
    description: "A contextual NLP-based chatbot designed to handle customer service queries. It learns from past interactions and provides 24/7 instant support with 90% accuracy.",
    tech: ["Python", "NLTK", "Flask", "React"],
    github: "#",
    live: "#"
  },
  {
    title: "Interactive 3D Portfolio",
    description: "A highly performant portfolio website built with WebGL to showcase interactive 3D assets, smooth transitions, and a premium glassmorphic digital environment.",
    tech: ["React", "Three.js", "Framer Motion", "Tailwind"],
    github: "#",
    live: "https://localhost:5173"
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    whileHover={{ y: -10 }}
    className="group relative glassmorphism rounded-3xl p-8 h-full flex flex-col justify-between overflow-hidden border border-[rgba(255,255,255,0.05)] hover:border-[#00ffcc]/50 transition-colors duration-500"
  >
    {/* Animated background glow on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    <div>
      <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
      <p className="text-slate-300 font-light leading-relaxed mb-6">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((t: string) => (
          <span key={t} className="px-3 py-1 text-xs font-semibold rounded-full bg-[rgba(255,255,255,0.1)] text-[#00ffcc]">
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="flex gap-4 relative z-10">
      <a href={project.github} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
        <Github size={20} />
        <span className="text-sm font-medium">Source</span>
      </a>
      {project.live !== "#" && (
        <a href={project.live} className="flex items-center gap-2 text-[#00ffcc] hover:text-white transition-colors">
          <ExternalLink size={20} />
          <span className="text-sm font-medium">Live Demo</span>
        </a>
      )}
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-20 py-24 z-10 relative pointer-events-auto">
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-glow mb-4 text-center">Featured Work</h2>
          <p className="text-xl text-slate-400 font-light">Proof of skills, not just words.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
