// icons
import {
  FaReact,
  FaNode,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaDocker,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiExpress,
  SiShadcnui,
  SiRedux,
  SiMongoose,
  SiSequelize,
  SiSqlite,
  SiPostman,
  SiAppwrite,
} from "react-icons/si";

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';
import { useState } from 'react';
import Transition from '../../components/Transition';
import { HiArrowUpRight } from 'react-icons/hi2';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend Development',
        icons: [
          <SiNextdotjs />,
          <FaReact />,
          <SiTypescript />,
          <SiTailwindcss />,
          <SiShadcnui />,
          <SiRedux />,
        ],
      },
      {
        title: 'Backend Development',
        icons: [
          <FaNode />,
          <SiExpress />,
          <SiPrisma />,
          <SiMongoose />,
          <SiSequelize />,
        ],
      },
      {
        title: 'Databases',
        icons: [
          <SiMongodb />,
          <SiPostgresql />,
          <SiSqlite />,
          <SiFirebase />,
        ],
      },
      {
        title: 'Tools & Platforms',
        icons: [
          <FaGitAlt />,
          <FaGithub />,
          <FaDocker />,
          <SiPostman />,
          <FaFigma />,
          <SiAppwrite />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Full Stack Developer - Product Box',
        stage: '2025 - Present',
      },
      {
        title: 'Full Stack Developer - Apptex Software Solutions',
        stage: '2024 - 2025',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'BSc in Computer Systems Engineering - UET Peshawar',
        stage: '2020 - 2024',
      }
    ],
  },
  {
    title: 'projects',
    info: [
      {
        title: 'Omni-Connects - Booking & Management Platform',
        stage: '2025',
        link: '/work/omni',
      },
      {
        title: 'Expedient VMS - Multi-Role Vendor Management System',
        stage: '2025',
        link: '/work/expedient',
      },
      {
        title: 'DevFlow - StackOverflow-Like Platform',
        stage: '2023',
        link: '/work/devflow',
      },
      {
        title: 'MotoArena - AI-Powered Car Discovery Platform',
        stage: '2023',
        link: '/work/motoarena',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full bg-primary/30 py-16 sm:py-24 xl:py-32 text-center xl:text-left mb-24'>
      <Transition />
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Building <span className='text-accent'>modern</span> web experiences.
          </motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            Full Stack Developer with 2+ years of experience building responsive, production-grade web applications using Next.js, TypeScript, and Tailwind CSS. Skilled in interactive UI, state management with Redux Toolkit and Zustand, and seamless backend API integration.
          </motion.p>
          {/* counters */}
          <motion.div 
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-2 sm:gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 overflow-x-auto xl:overflow-visible whitespace-nowrap max-w-full px-2 scrollbar-none'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex 
                      ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                      : 'after:w-8 after:bg-white'
                  } cursor-pointer capitalize text-sm sm:text-base xl:text-lg relative after:h-[2px] after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start px-2'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-full sm:max-w-max gap-x-2 md:items-center text-white/60 text-center md:text-left'
                >
                  {item.icons ? (
                    <>
                      {/* title */}
                      <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                      {/* icons */}
                      <div className='flex items-center gap-x-2 md:gap-x-4'>
                        <div className='hidden md:flex'>-</div>
                        <div className='flex gap-x-4'>
                          {item.icons.map((icon, iconIndex) => {
                            return <div key={iconIndex} className='text-2xl text-white'>{icon}</div>;
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    /* title + stage (wraps as a unit) */
                    <div className='font-light'>
                      {item.link ? (
                        <Link
                          href={item.link}
                          className='group inline-flex items-center gap-1 text-white hover:text-accent transition-colors duration-300'
                        >
                          <span className='underline-offset-4 group-hover:underline'>{item.title}</span>
                          <HiArrowUpRight className='text-xs opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300' />
                        </Link>
                      ) : (
                        item.title
                      )}
                      {item.stage && (
                        <span className='whitespace-nowrap'>{' \u2014 '}{item.stage}</span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
