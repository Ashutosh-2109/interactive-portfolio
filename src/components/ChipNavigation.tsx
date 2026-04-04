import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, FolderGit2, User, Mail, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'about', label: 'About', icon: User },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function ChipNavigation() {
  const [activeItem, setActiveItem] = useState('home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glassmorphism rounded-full px-2 py-2 flex items-center gap-2"
      >
        {navItems.map((item) => {
          const isActive = activeItem === item.id;
          const isHovered = hoveredItem === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={clsx(
                'relative flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300',
                isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeChip"
                  className="absolute inset-0 bg-[#00ffcc]/20 border border-[#00ffcc]/30 rounded-full glow"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              
              <Icon size={18} className="relative z-10" />
              
              <AnimatePresence>
                {(isActive || isHovered) && (
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10 font-medium text-sm overflow-hidden whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {isActive && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative z-10"
                >
                  <ChevronRight size={14} className="text-[#00ffcc]" />
                </motion.div>
              )}
            </button>
          );
        })}
      </motion.div>
    </nav>
  );
}
