import { motion } from 'motion/react';
import { fadeUp, staggerContainer, staggerItem } from '../../variants';

const ProjectContributions = ({ contributions, title = 'My Role', description }) => {
  return (
    <motion.section 
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.1 }}
      className='mb-16 xl:mb-28'
    >
      <motion.div variants={fadeUp} className='max-w-3xl mb-10'>
        <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>{title}</div>
        <h2 className='h2'>What I built.</h2>
        {description && <p className='text-white/60 mt-2'>{description}</p>}
      </motion.div>

      <motion.ul variants={staggerContainer} className='grid md:grid-cols-2 gap-4 sm:gap-6'>
        {contributions.map((item, i) => (
          <motion.li
            key={i}
            variants={staggerItem}
            className='flex gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-5'
          >
            <div className='flex-shrink-0 w-8 h-8 rounded-full bg-accent/15 text-accent flex items-center justify-center text-sm font-semibold'>
              {String(i + 1).padStart(2, '0')}
            </div>
            <p className='text-white/70 text-sm sm:text-base leading-relaxed'>{item}</p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default ProjectContributions;
