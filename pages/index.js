// components
import Transition from '../components/Transition';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from '../components/Loading';

// Dynamically import the heavy Particles component
const ParticlesContainer = dynamic(() => import('../components/ParticlesContainer'), {
  ssr: false,
  loading: () => <Loading />
});

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

// typewriter effect
const TypewriterComponent = dynamic(() => import('typewriter-effect'), {
  ssr: false
});

const Home = () => {
  return (
    <div className='bg-primary/60 min-h-full relative'>
      <Suspense fallback={<Loading />}>
        <ParticlesContainer />
      </Suspense>
      <div className='relative z-10 min-h-full flex flex-col'>
        {/* text */}
        <div className='w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
          <div className='text-center flex flex-col justify-center pt-16 sm:pt-28 xl:pt-40 xl:text-left container mx-auto px-4 sm:px-6'>
            {/* title */}
            <motion.div
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h1'>
              Hi, I'm{' '}
              <span className='text-accent'>
                <TypewriterComponent
                  options={{
                    strings: [
                      'Adnan Ayaz',
                      'a Full Stack AI Dev',
                      'a Next.js Expert',
                      'a Backend Dev'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50
                  }}
                />
              </span>
            </motion.div>
            {/* subtitle */}
            <motion.p 
              variants={fadeIn('down', 0.3)} 
              initial='hidden' 
              animate='show' 
              exit='hidden'
              className='max-w-[90vw] sm:max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-16 text-xs sm:text-sm md:text-base'>
              Full Stack Next.js Developer with expertise in modern web technologies including TypeScript, Tailwind CSS, and backend systems. Specialized in building scalable and performant web applications.
            </motion.p>
            {/* btns */}
            <div className='flex flex-row items-center gap-3 sm:gap-6 justify-center xl:hidden relative'>
              <ProjectsBtn />
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Adnan_Ayaz_Resume_ATS (2).pdf';
                  link.download = 'Adnan_Ayaz_Resume_ATS.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className='btn rounded-full border border-white/50 px-6 sm:px-8 text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden hover:border-accent group relative cursor-pointer'
              >
                <span className='relative z-10 group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Resume</span>
                <span className='absolute inset-0 bg-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
                <svg className="w-4 h-4 -translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
            <motion.div 
              variants={fadeIn('down', 0.4)} 
              initial='hidden' 
              animate='show' 
              exit='hidden'
              className='hidden xl:flex items-center gap-6'
            >
              <ProjectsBtn />
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Adnan_Ayaz_Resume_ATS (2).pdf';
                  link.download = 'Adnan_Ayaz_Resume_ATS.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className='btn rounded-full border border-white/50 px-8 text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden hover:border-accent group relative cursor-pointer'
              >
                <span className='relative z-10 group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Resume</span>
                <span className='absolute inset-0 bg-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
                <svg className="w-4 h-4 -translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
        {/* avatar - mobile: below text, desktop: absolute bottom right */}
        <motion.div 
          variants={fadeIn('up', 0.5)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='flex justify-center items-end xl:absolute xl:inset-0 xl:justify-end xl:items-end xl:pb-0 xl:pr-[8%] mt-8 xl:mt-0'
        >
          <div className='w-[280px] sm:w-[350px] md:w-[450px] xl:w-[min(737px,90vw)] xl:max-w-[min(737px,90vw)] h-auto xl:h-[min(678px,90vh)]'>
            <Avatar />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
