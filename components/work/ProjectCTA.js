import Link from 'next/link';
import { motion } from 'motion/react';
import { fadeUp } from '../../variants';
import { HiArrowUpRight } from 'react-icons/hi2';

const ProjectCTA = ({ liveUrl, liveLabel = 'Visit site' }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
      className='flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-accent/15 via-accent/5 to-transparent border border-accent/20 rounded-2xl p-6 sm:p-10 mb-24 sm:mb-32 xl:mb-40'
    >
      <div>
        <h3 className='text-xl sm:text-2xl font-semibold mb-2'>Want to see it live?</h3>
        <p className='text-white/60 text-sm sm:text-base'>
          Check it out or jump back to the rest of my work.
        </p>
      </div>
      <div className='flex gap-3'>
        {liveUrl && (
          <a
            href={liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 h-12 rounded-full text-sm tracking-wider transition-all duration-300'
          >
            {liveLabel} <HiArrowUpRight />
          </a>
        )}
        <Link
          href='/about'
          className='inline-flex items-center gap-2 border border-white/20 hover:border-accent hover:text-accent px-6 h-12 rounded-full text-sm tracking-wider transition-all duration-300'
        >
          All projects
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCTA;
