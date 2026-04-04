import { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  
  // Use springs for smooth following effect
  const cursorX = useSpring(0, { stiffness: 400, damping: 25 });
  const cursorY = useSpring(0, { stiffness: 400, damping: 25 });

  useEffect(() => {
    // Hide default cursor on mount
    document.documentElement.style.cursor = 'none';

    const updateMousePosition = (e: MouseEvent) => {
      // Center the emoji (approx 32px width/height, so offset by 16)
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.documentElement.style.cursor = 'auto';
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* The AP Cursor */}
      <motion.div
        className="fixed top-0 left-0 text-xl font-bold pointer-events-none z-[100] text-[#00ffcc] drop-shadow-[0_0_8px_rgba(0,255,204,0.8)]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        AP
      </motion.div>
    </>
  );
}
