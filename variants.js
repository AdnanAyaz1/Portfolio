// Simple fade up animation
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

// Simple fade in animation
export const fadeIn = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

// Stagger container - parent wraps children
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Stagger item - each child uses this
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
};

// For hero sections with direction-based animation
export const slideIn = (direction = 'up', delay = 0) => ({
  hidden: { 
    opacity: 0, 
    y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
    x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
  },
  show: { 
    opacity: 1, 
    y: 0,
    x: 0,
    transition: { duration: 0.5, delay, ease: 'easeOut' }
  },
});
