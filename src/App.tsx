import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import ChipNavigation from './components/ChipNavigation';
import Scene from './components/Scene';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EducationAndAchievements from './components/EducationAndAchievements';
import Contact from './components/Contact';
import { useAppStore } from './store';

function App() {
  const phase = useAppStore((state) => state.phase);
  const isPortfolio = phase === 'portfolio';

  return (
    <div className={`relative w-full min-h-screen transition-colors duration-1000 font-sans selection:bg-[#00ffcc] selection:text-[#050510] bg-[#050510] text-slate-100`}>
      <CustomCursor />
      
      {/* 3D Background - Interactive Sequence & Whiteboard */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Scrolling Content - Hidden until interaction completes */}
      <AnimatePresence>
        {isPortfolio && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative z-10 w-full flex flex-col pointer-events-auto"
          >
            {/* Nav appears later */}
            <ChipNavigation />
            
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <EducationAndAchievements />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
