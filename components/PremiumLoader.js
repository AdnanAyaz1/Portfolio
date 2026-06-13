import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const PremiumLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            onComplete?.();
          }, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary"
        >
          {/* subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* glow effect */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(241,48,36,0.08) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* logo / name */}
          <div className="relative z-10 flex flex-col items-center">
            {/* animated lines — GPU-accelerated scaleX */}
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="h-[1px] bg-accent w-[60px] origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.span
                className="text-[10px] uppercase tracking-[6px] text-white/40 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Portfolio
              </motion.span>
              <motion.div
                className="h-[1px] bg-accent w-[60px] origin-right"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              />
            </div>

            {/* name */}
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                Adnan{' '}
                <span className="text-accent">Ayaz</span>
              </motion.h1>
            </motion.div>

            {/* role */}
            <motion.p
              className="text-sm sm:text-base text-white/40 mt-3 tracking-widest uppercase font-light"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Full Stack Developer
            </motion.p>

            {/* progress bar — GPU-accelerated scaleX */}
            <motion.div
              className="mt-10 w-48 sm:w-56"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-white/30 uppercase tracking-widest">Loading</span>
                <span className="text-[10px] text-accent font-mono">
                  {Math.min(Math.round(progress), 100)}%
                </span>
              </div>
              <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          </div>

          {/* bottom corner decoration */}
          <motion.div
            className="absolute bottom-8 left-8 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] text-white/20 uppercase tracking-widest">
              {new Date().getFullYear()}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PremiumLoader;
