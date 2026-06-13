import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'motion/react';
import { fadeUp } from '../../variants';
import Transition from '../../components/Transition';

const Services = () => {
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
              My services <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              initial='hidden'
              animate='show'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0 px-4'
            >
              I offer a wide range of digital services, from design to development, helping businesses establish their online presence effectively.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            initial='hidden'
            animate='show'
            className='w-full xl:max-w-[65%]'
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
