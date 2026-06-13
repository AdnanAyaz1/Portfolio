import { motion } from 'motion/react';
import { fadeUp, staggerContainer, staggerItem } from '../../variants';

const ProjectTechStack = ({ techs }) => {
  return (
    <motion.section 
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      className='mb-16 xl:mb-28'
    >
      <motion.div variants={fadeUp} className='text-center mb-10'>
        <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>Tech Stack</div>
        <h2 className='h2'>Built with a modern, production-ready stack.</h2>
      </motion.div>
      <motion.div variants={staggerContainer} className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5'>
        {techs.map((tech, i) => (
          <motion.div
            key={i}
            variants={staggerItem}
            className='group bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-accent/40 rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300'
          >
            <div className={`text-3xl sm:text-4xl mb-2 ${tech.color}`}>{tech.icon}</div>
            <div className='text-[11px] sm:text-xs text-white/60 group-hover:text-white transition-colors'>
              {tech.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectTechStack;
