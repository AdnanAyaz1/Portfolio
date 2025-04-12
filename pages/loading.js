import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-primary">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="relative w-16 h-16"
      >
        <Image
          src="/circle-star.svg"
          alt="Loading"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-white mt-4"
      >
        Loading amazing content...
      </motion.div>
    </div>
  );
}