import { motion } from 'motion/react';
import { fadeUp, staggerContainer, staggerItem } from '../../variants';

const ProjectFeatures = ({ features, title = 'Key Features', subtitle }) => {
  return (
    <motion.section 
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.1 }}
      className='mb-16 xl:mb-28'
    >
      <motion.div variants={fadeUp} className='text-center mb-10'>
        <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>{title}</div>
        <h2 className='h2'>{features.length} screens. One seamless platform.</h2>
        {subtitle && (
          <p className='text-white/50 mt-3 max-w-xl mx-auto text-sm sm:text-base'>{subtitle}</p>
        )}
      </motion.div>

      <motion.div variants={staggerContainer} className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5'>
        {features.map((feature, i) => (
          <motion.div
            key={i}
            variants={staggerItem}
            className='group bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-accent/40 rounded-2xl p-6 transition-all duration-300'
          >
            <div className='inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 text-accent text-xl mb-4 group-hover:scale-110 transition-transform duration-300'>
              {feature.icon}
            </div>
            <div className='flex items-center gap-2 mb-2'>
              <span className='text-[10px] font-mono text-accent/60 bg-accent/10 px-2 py-0.5 rounded-full'>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className='text-base sm:text-lg font-semibold'>{feature.title}</h3>
            </div>
            <p className='text-white/50 text-sm leading-relaxed'>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectFeatures;
