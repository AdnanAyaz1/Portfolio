import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'motion/react';
import { fadeUp } from '../../variants';
import Transition from '../../components/Transition';

const Work = () => {
  return (
    <div className='min-h-full bg-primary/30 pt-16 sm:pt-24 xl:pt-32 pb-32 sm:pb-40 xl:pb-56'>
      <Transition />
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 
              variants={fadeUp}
              initial='hidden'
              animate='show'
              className='h2 xl:mt-8'
            >
              My work <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              initial='hidden'
              animate='show'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0 px-4'
            >
              These are my personal projects showcasing my skills and passion for development. For potential employers, I can also share my professional work from organizations I've collaborated with. Each project here represents a unique challenge and creative solution.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            initial='hidden'
            animate='show'
            className='w-full xl:max-w-[65%]'
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
