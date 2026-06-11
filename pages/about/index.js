// icons
import {
  FaReact,
  FaNode,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaDocker,
  FaTasks,
  FaRegClock,
  FaRobot,
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
  SiRedis,
  SiOpenai,
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
          { icon: <SiNextdotjs />, name: 'Next.js' },
          { icon: <FaReact />, name: 'React' },
          { icon: <SiTypescript />, name: 'TypeScript' },
          { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
          { icon: <SiShadcnui />, name: 'shadcn/ui' },
          { icon: <SiRedux />, name: 'Redux' },
        ],
      },
      {
        title: 'Backend Development',
        icons: [
          { icon: <FaNode />, name: 'Node.js' },
          { icon: <SiExpress />, name: 'Express' },
          { icon: <SiPrisma />, name: 'Prisma' },
          { icon: <SiMongoose />, name: 'Mongoose' },
          { icon: <SiSequelize />, name: 'Sequelize' },
          { icon: <FaTasks />, name: 'Task Scheduling' },
          { icon: <FaRegClock />, name: 'Cron Jobs' },
        ],
      },
      {
        title: 'Databases',
        icons: [
          { icon: <SiMongodb />, name: 'MongoDB' },
          { icon: <SiPostgresql />, name: 'PostgreSQL' },
          { icon: <SiSqlite />, name: 'SQLite' },
          { icon: <SiFirebase />, name: 'Firebase' },
          { icon: <SiRedis />, name: 'Redis' },
        ],
      },
      {
        title: 'AI & Automation',
        icons: [
          { icon: <FaRobot />, name: 'Automation' },
          { icon: <SiOpenai />, name: 'OpenAI' },
        ],
      },
      {
        title: 'Tools & Platforms',
        icons: [
          { icon: <FaGitAlt />, name: 'Git' },
          { icon: <FaGithub />, name: 'GitHub' },
          { icon: <FaDocker />, name: 'Docker' },
          { icon: <SiPostman />, name: 'Postman' },
          { icon: <FaFigma />, name: 'Figma' },
          { icon: <SiAppwrite />, name: 'Appwrite' },
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
    title: 'tools',
    info: [
      {
        title: 'Next.js & React',
        description: 'Production SSR/SSG apps with App Router and React Server Components',
      },
      {
        title: 'TypeScript',
        description: 'End-to-end type safety across the full stack',
      },
      {
        title: 'Tailwind CSS & shadcn/ui',
        description: 'Design-system based, accessible UI development',
      },
      {
        title: 'Node.js & Express',
        description: 'REST APIs, middleware, and scalable backend services',
      },
      {
        title: 'Prisma, Mongoose & Sequelize',
        description: 'Type-safe ORM/ODM layers for SQL and NoSQL databases',
      },
      {
        title: 'Redis & BullMQ',
        description: 'Caching, pub/sub, and reliable background job queues',
      },
      {
        title: 'Cron Jobs',
        description: 'Scheduled tasks and automated recurring workflows',
      },
      {
        title: 'OpenAI Integrations',
        description: 'AI agents, RAG pipelines, and LLM-powered features',
      },
      {
        title: 'Docker',
        description: 'Containerized dev and production environments',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='min-h-full bg-primary/30 pt-20 pb-32 sm:pt-24 sm:pb-40 xl:py-32 text-center xl:text-left mb-24'>
      <Transition />
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 px-4'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-[24px] leading-tight sm:text-[35px] md:text-[54px] md:leading-[1.3] mb-4 font-semibold'
          >
            Building <span className='text-accent'>modern</span> web experiences.
          </motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-xs sm:text-sm md:text-base'
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
            className='flex flex-col w-full xl:max-w-[48%] h-[400px] sm:h-[480px]'
          >
            <div className='flex gap-x-3 sm:gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 overflow-x-auto xl:overflow-visible whitespace-nowrap max-w-full scrollbar-none'>
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${
                      index === itemIndex 
                        ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                        : 'after:w-8 after:bg-white'
                    } cursor-pointer capitalize text-xs sm:text-sm xl:text-lg relative after:h-[2px] after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start px-2 overflow-y-auto scrollbar-none flex-1 min-h-0'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`flex flex-col md:flex-row max-w-full ${item.description ? 'sm:max-w-[520px]' : 'sm:max-w-max'} gap-x-2 md:items-start text-white/60 text-center md:text-left shrink-0`}
                    >
                      {item.icons ? (
                        <>
                          {/* title */}
                          <div className='font-light mb-2 md:mb-0 text-xs sm:text-sm'>{item.title}</div>
                          {/* icons */}
                          <div className='flex items-center gap-x-2 md:gap-x-4'>
                            <div className='hidden md:flex'>-</div>
                            <div className='flex flex-wrap gap-3 sm:gap-4'>
                              {item.icons.map((item, iconIndex) => {
                                return (
                                  <div key={iconIndex} className='relative group/icon'>
                                    <div className='text-xl sm:text-2xl text-white hover:text-accent transition-colors duration-300 cursor-default'>
                                      {item.icon}
                                    </div>
                                <div className='absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-md text-[11px] text-white/80 whitespace-nowrap opacity-0 pointer-events-none group-hover/icon:opacity-100 transition-opacity duration-200 z-50'>
                                  {item.name}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  ) : item.description ? (
                    /* title + description (wraps naturally) */
                    <div className='font-light text-xs sm:text-sm'>
                      <span className='text-white'>{item.title}</span>
                      <span className='text-white/50'>{' \u2014 '}{item.description}</span>
                    </div>
                  ) : (
                    /* title + stage (wraps as a unit) */
                    <div className='font-light text-xs sm:text-sm'>
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
