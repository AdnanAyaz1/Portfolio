import { motion } from 'motion/react';
import { fadeUp, staggerContainer, staggerItem } from '../../variants';

const ProjectResults = ({ results, title = 'Outcomes', subtitle = 'Shipped and live.' }) => {
  return (
    <motion.section 
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      className='mb-16 xl:mb-28'
    >
      <motion.div variants={fadeUp} className='text-center mb-10'>
        <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>{title}</div>
        <h2 className='h2'>{subtitle}</h2>
      </motion.div>

      <motion.div variants={staggerContainer} className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
        {results.map((r, i) => (
          <motion.div
            key={i}
            variants={staggerItem}
            className='bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-6 sm:p-8 text-center'
          >
            <div className='text-4xl sm:text-5xl font-extrabold text-accent mb-2'>{r.value}</div>
            <div className='text-sm uppercase tracking-[1.5px] mb-1'>{r.label}</div>
            <div className='text-xs text-white/50'>{r.sub}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectResults;
