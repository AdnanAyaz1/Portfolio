import Link from 'next/link';
import { motion } from 'motion/react';
import { slideIn } from '../../variants';
import { HiArrowLeft, HiArrowUpRight } from 'react-icons/hi2';

const ProjectHero = ({ title, subtitle, description, liveUrl, year, role, type, children }) => {
  return (
    <>
      <motion.div
        variants={slideIn('down')}
        initial='hidden'
        animate='show'
        className='mb-8 xl:mb-12'
      >
        <Link
          href='/about'
          className='inline-flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors duration-300'
        >
          <HiArrowLeft className='text-base' />
          <span>Back to projects</span>
        </Link>
      </motion.div>

      <section className='grid xl:grid-cols-[1.1fr_1fr] gap-8 xl:gap-16 items-center mb-16 xl:mb-28'>
        <motion.div
          variants={slideIn('left', 0.1)}
          initial='hidden'
          animate='show'
        >
          <div className='flex items-center gap-3 text-xs uppercase tracking-[3px] text-accent mb-4'>
            <span className='w-8 h-[1px] bg-accent' />
            <span>Case Study {'\u2014'} {year}</span>
          </div>
          <h1 className='text-[36px] sm:text-[48px] xl:text-[64px] leading-[1.1] font-semibold mb-6'>
            {title}
            <span className='block text-accent text-[18px] sm:text-[22px] xl:text-[26px] font-light mt-3'>
              {subtitle}
            </span>
          </h1>
          <p className='text-white/70 max-w-[560px] mb-8'>{description}</p>
          <div className='flex flex-wrap gap-3'>
            {liveUrl && (
              <a
                href={liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 h-12 rounded-full text-sm tracking-wider transition-all duration-300'
              >
                Visit live site <HiArrowUpRight />
              </a>
            )}
            <Link
              href='/about'
              className='inline-flex items-center gap-2 border border-white/20 hover:border-accent hover:text-accent px-6 h-12 rounded-full text-sm tracking-wider transition-all duration-300'
            >
              All projects
            </Link>
          </div>

          <div className='grid grid-cols-3 gap-4 mt-10 max-w-[480px]'>
            <div>
              <div className='text-xs uppercase tracking-[1.5px] text-white/40 mb-1'>Role</div>
              <div className='text-sm font-medium'>{role}</div>
            </div>
            <div>
              <div className='text-xs uppercase tracking-[1.5px] text-white/40 mb-1'>Timeline</div>
              <div className='text-sm font-medium'>{year}</div>
            </div>
            <div>
              <div className='text-xs uppercase tracking-[1.5px] text-white/40 mb-1'>Type</div>
              <div className='text-sm font-medium'>{type}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn('right', 0.2)}
          initial='hidden'
          animate='show'
        >
          {children}
        </motion.div>
      </section>
    </>
  );
};

export default ProjectHero;
