import Transition from '../components/Transition';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from '../components/Loading';

const ParticlesContainer = dynamic(() => import('../components/ParticlesContainer'), {
  ssr: false,
  loading: () => <Loading />
});

import { motion } from 'motion/react';
import { staggerContainer, slideIn } from '../variants';

const TypewriterComponent = dynamic(() => import('typewriter-effect'), {
  ssr: false
});

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <Head>
        <title>Adnan Ayaz | Full Stack Developer - Next.js & AI Specialist</title>
        <meta name="description" content="Full Stack Next.js Developer specializing in TypeScript, Tailwind CSS, AI integrations, and scalable web applications." />
      </Head>
      <Suspense fallback={<Loading />}>
        <ParticlesContainer />
      </Suspense>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <motion.div 
          variants={staggerContainer}
          initial='hidden'
          animate='show'
          className='text-center flex flex-col justify-center pt-16 sm:pt-28 xl:pt-40 xl:text-left h-full min-h-[100vh] sm:min-h-full pb-20 sm:pb-0 container mx-auto'
        >
          <motion.h1
            variants={slideIn('up')}
            className='h1'
          >
            Hi, I'm{' '}
            <span className='text-accent'>
              <TypewriterComponent
                options={{
                  strings: ['Adnan Ayaz', 'a Full Stack AI Dev', 'a Next.js Expert', 'a Backend Dev'],
                  autoStart: true,
                  loop: true,
                  delay: 50
                }}
              />
            </span>
          </motion.h1>

          <motion.p 
            variants={slideIn('up')}
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            Full Stack Next.js Developer with expertise in modern web technologies including TypeScript, Tailwind CSS, and backend systems. Specialized in building scalable and performant web applications.
          </motion.p>

          <motion.div variants={slideIn('up')} className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center xl:hidden relative'>
            <ProjectsBtn />
            <a
              href='/Adnan_Ayaz_Resume (2).pdf'
              download='Adnan_Ayaz_Resume.pdf'
              className='btn rounded-full border border-white/50 px-6 sm:px-8 text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden hover:border-accent group relative cursor-pointer'
            >
              <span className='relative z-10 group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Resume</span>
              <span className='absolute inset-0 bg-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
              <svg className="w-4 h-4 -translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </motion.div>

          <motion.div variants={slideIn('up')} className='hidden xl:flex items-center gap-6'>
            <ProjectsBtn />
            <a
              href='/Adnan_Ayaz_Resume (2).pdf'
              download='Adnan_Ayaz_Resume.pdf'
              className='btn rounded-full border border-white/50 px-8 text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden hover:border-accent group relative cursor-pointer'
            >
              <span className='relative z-10 group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Resume</span>
              <span className='absolute inset-0 bg-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
              <svg className="w-4 h-4 -translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className='w-full max-w-[1200px] h-full absolute right-0 bottom-0 pointer-events-none overflow-hidden'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        <motion.div 
          variants={slideIn('up', 0.3)}
          initial='hidden'
          animate='show'
          className='w-full h-full max-w-[min(737px,90vw)] max-h-[min(678px,90vh)] absolute bottom-0 right-0 lg:right-[8%]'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
