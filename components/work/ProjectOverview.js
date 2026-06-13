import { motion } from 'motion/react';
import { fadeUp, staggerContainer, staggerItem } from '../../variants';

const ProjectOverview = ({ problem, solution }) => {
  return (
    <motion.section 
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      className='grid md:grid-cols-2 gap-8 mb-16 xl:mb-28'
    >
      <motion.div variants={staggerItem} className='bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8'>
        <div className='text-xs uppercase tracking-[2px] text-accent mb-4'>The Problem</div>
        <h3 className='text-xl sm:text-2xl font-semibold mb-4'>{problem.title}</h3>
        <p className='text-white/60 leading-relaxed'>{problem.description}</p>
      </motion.div>

      <motion.div variants={staggerItem} className='bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8'>
        <div className='text-xs uppercase tracking-[2px] text-accent mb-4'>The Solution</div>
        <h3 className='text-xl sm:text-2xl font-semibold mb-4'>{solution.title}</h3>
        <p className='text-white/60 leading-relaxed'>{solution.description}</p>
      </motion.div>
    </motion.section>
  );
};

export default ProjectOverview;
