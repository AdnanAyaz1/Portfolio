import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import Transition from '../../components/Transition';
import Circles from '../../components/Circles';
import CaseStudyVideo from '../../components/CaseStudyVideo';

// icons
import {
  HiArrowLeft,
  HiArrowUpRight,
  HiCodeBracketSquare,
  HiSparkles,
  HiArrowTrendingUp,
  HiMagnifyingGlass,
} from 'react-icons/hi2';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiGoogle,
  SiOpenai,
  SiCloudinary,
  SiReacthookform,
} from 'react-icons/si';
import { HiKey, HiPaintBrush } from 'react-icons/hi2';

const features = [
  {
    icon: <HiKey />,
    title: 'Auth & Authorization',
    description:
      'Google OAuth and email/password auth via NextAuth.js, with JWT sessions, password reset via Nodemailer, and route-level role guards.',
  },
  {
    icon: <HiCodeBracketSquare />,
    title: 'Q&A + Rich Text Editor',
    description:
      'Ask and answer questions with the MDX editor, code syntax highlighting via Bright, voting, view tracking, and tag-based organisation.',
  },
  {
    icon: <HiSparkles />,
    title: 'AI Tag Suggestions',
    description:
      'Google Gen AI suggests the most relevant tags for a new question as the user types \u2014 cutting friction from the posting flow.',
  },
  {
    icon: <HiArrowTrendingUp />,
    title: 'Reputation, Bookmarks & Search',
    description:
      'Reputation system tied to votes, bookmark favourite questions, global search with filters, and infinite scroll for feeds.',
  },
];

const techStack = [
  { name: 'Next.js 15', icon: <SiNextdotjs />, color: 'text-white' },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-[#3178C6]' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-[#06B6D4]' },
  { name: 'Shadcn UI', icon: <HiPaintBrush />, color: 'text-white' },
  { name: 'Prisma', icon: <SiPrisma />, color: 'text-[#2D3748]' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-[#4169E1]' },
  { name: 'NextAuth', icon: <HiKey />, color: 'text-white' },
  { name: 'Google Gen AI', icon: <SiGoogle />, color: 'text-[#4285F4]' },
  { name: 'OpenAI SDK', icon: <SiOpenai />, color: 'text-[#74AA9C]' },
  { name: 'Cloudinary', icon: <SiCloudinary />, color: 'text-[#3448C5]' },
  { name: 'React Hook Form', icon: <SiReacthookform />, color: 'text-[#EC5990]' },
  { name: 'Zod', icon: <HiMagnifyingGlass />, color: 'text-white' },
];

const contributions = [
  'Architected the full-stack on Next.js 15 with the App Router, TypeScript, and a Shadcn-UI + Tailwind design system.',
  'Modelled the schema in Prisma and wired PostgreSQL relationships for users, questions, answers, votes, tags, and bookmarks.',
  'Implemented NextAuth.js with Google OAuth and email/password credentials, JWT sessions, and password reset via Nodemailer.',
  'Built the Q&A editor on top of MDXEditor with Bright-powered code syntax highlighting, view tracking, and vote toggling.',
  'Integrated Google Gen AI to suggest tags as the user types and OpenAI for in-app help prompts, both server-side via API routes.',
  'Shipped global search, infinite scroll, dark/light mode via next-themes, and image uploads to Cloudinary with signed URLs.',
];

const results = [
  { value: '5', label: 'Core modules', sub: 'Auth, Q&A, Tags, Reputation, Search' },
  { value: '100%', label: 'Type-safe', sub: 'TypeScript + Zod end-to-end' },
  { value: 'Open', label: 'Source', sub: 'Full codebase on GitHub' },
  { value: 'Live', label: 'In production', sub: 'dev-flow-prisma-k1r1.vercel.app' },
];

const DevFlow = () => {
  return (
    <div className='min-h-full bg-primary/30 pt-16 sm:pt-24 xl:pt-32 pb-32 sm:pb-40 xl:pb-56'>
      <Transition />
      <Circles />

      <div className='container mx-auto px-4'>
        {/* back link */}
        <motion.div
          variants={fadeIn('down', 0.1)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='mb-8 xl:mb-12'
        >
          <Link
            href='/about'
            className='inline-flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors duration-300'
          >
            <HiArrowLeft className='text-base' />
            <span>Back to projects</span>
          </Link>
        </motion.div>

        {/* hero */}
        <section className='grid xl:grid-cols-[1.1fr_1fr] gap-8 xl:gap-16 items-center mb-16 xl:mb-28'>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <div className='flex items-center gap-3 text-xs uppercase tracking-[3px] text-accent mb-4'>
              <span className='w-8 h-[1px] bg-accent' />
              <span>Case Study {'\u2014'} 2024</span>
            </div>
            <h1 className='text-[36px] sm:text-[48px] xl:text-[64px] leading-[1.1] font-semibold mb-6'>
              DevFlow
              <span className='block text-accent text-[18px] sm:text-[22px] xl:text-[26px] font-light mt-3'>
                A Q&A Platform for Developers
              </span>
            </h1>
            <p className='text-white/70 max-w-[560px] mb-8'>
              A modern Stack Overflow-style Q&A platform built on Next.js 15, Prisma, and
              PostgreSQL {'\u2014'} with Google Gen AI suggesting tags as you type, code-aware
              rich text, and a reputation system that rewards quality answers.
            </p>
            <div className='flex flex-wrap gap-3'>
              <a
                href='https://dev-flow-prisma-k1r1.vercel.app'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 h-12 rounded-full text-sm tracking-wider transition-all duration-300'
              >
                Visit live site <HiArrowUpRight />
              </a>
              <Link
                href='/about'
                className='inline-flex items-center gap-2 border border-white/20 hover:border-accent hover:text-accent px-6 h-12 rounded-full text-sm tracking-wider transition-all duration-300'
              >
                All projects
              </Link>
            </div>

            {/* meta */}
            <div className='grid grid-cols-3 gap-4 mt-10 max-w-[480px]'>
              <div>
                <div className='text-xs uppercase tracking-[1.5px] text-white/40 mb-1'>Role</div>
                <div className='text-sm font-medium'>Full Stack Developer</div>
              </div>
              <div>
                <div className='text-xs uppercase tracking-[1.5px] text-white/40 mb-1'>Timeline</div>
                <div className='text-sm font-medium'>2024</div>
              </div>
              <div>
                <div className='text-xs uppercase tracking-[1.5px] text-white/40 mb-1'>Type</div>
                <div className='text-sm font-medium'>Q&A SaaS</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <CaseStudyVideo
              src='/DevFlow-highlight.mp4'
              poster='/DEVFLOW.png'
              title='DevFlow \u2014 product walkthrough'
            />
          </motion.div>
        </section>

        {/* overview */}
        <section className='grid md:grid-cols-2 gap-8 mb-16 xl:mb-28'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8'
          >
            <div className='text-xs uppercase tracking-[3px] text-accent mb-4'>The Problem</div>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4'>
              Developer Q&A still feels heavy and slow.
            </h3>
            <p className='text-white/60 leading-relaxed'>
              Existing platforms have bloated UX, weak code rendering, and no help with tagging or
              formatting when posting {'\u2014'} so the first-time experience drops off and quality
              answers get buried.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8'
          >
            <div className='text-xs uppercase tracking-[3px] text-accent mb-4'>The Solution</div>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4'>
              A fast, type-safe Q&A app with AI in the loop.
            </h3>
            <p className='text-white/60 leading-relaxed'>
              Next.js 15 + Prisma + PostgreSQL power a single-tenant experience with rich-text +
              code highlighting, AI-suggested tags, reputation tied to votes, and global search
              with infinite scroll.
            </p>
          </motion.div>
        </section>

        {/* tech stack */}
        <section className='mb-16 xl:mb-28'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='text-center mb-10'
          >
            <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>Tech Stack</div>
            <h2 className='h2'>Type-safe, AI-aware, and ready to ship.</h2>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5'
          >
            {techStack.map((tech, i) => (
              <div
                key={i}
                className='group bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-accent/40 rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300'
              >
                <div className={`text-3xl sm:text-4xl mb-2 ${tech.color}`}>{tech.icon}</div>
                <div className='text-[11px] sm:text-xs text-white/60 group-hover:text-white transition-colors'>
                  {tech.name}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* features */}
        <section className='mb-16 xl:mb-28'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='text-center mb-10'
          >
            <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>Key Features</div>
            <h2 className='h2'>Everything a Q&A app needs, in one place.</h2>
            <p className='text-white/50 mt-3 max-w-xl mx-auto text-sm sm:text-base'>
              Every feature shown is production code &mdash; no mockups, no placeholders.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.1 }}
            className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5'
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeIn('up', 0.15 + i * 0.05)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.1 }}
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
                <p className='text-white/50 text-sm leading-relaxed'>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* my role */}
        <section className='mb-16 xl:mb-28'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='max-w-3xl mb-10'
          >
            <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>My Role</div>
            <h2 className='h2'>What I built.</h2>
            <p className='text-white/60 mt-2'>
              I led the full-stack development {'\u2014'} from schema design and auth architecture to
              AI integration, rich-text editing, and the reputation engine.
            </p>
          </motion.div>

          <motion.ul
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.15 }}
            className='grid md:grid-cols-2 gap-4 sm:gap-6'
          >
            {contributions.map((item, i) => (
              <li
                key={i}
                className='flex gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-5'
              >
                <div className='flex-shrink-0 w-8 h-8 rounded-full bg-accent/15 text-accent flex items-center justify-center text-sm font-semibold'>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className='text-white/70 text-sm sm:text-base leading-relaxed'>{item}</p>
              </li>
            ))}
          </motion.ul>
        </section>

        {/* results */}
        <section className='mb-16 xl:mb-28'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='text-center mb-10'
          >
            <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>Outcomes</div>
            <h2 className='h2'>Shipped and live.</h2>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'
          >
            {results.map((r, i) => (
              <div
                key={i}
                className='bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-6 sm:p-8 text-center'
              >
                <div className='text-4xl sm:text-5xl font-extrabold text-accent mb-2'>{r.value}</div>
                <div className='text-sm uppercase tracking-[1.5px] mb-1'>{r.label}</div>
                <div className='text-xs text-white/50'>{r.sub}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
          className='flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-accent/15 via-accent/5 to-transparent border border-accent/20 rounded-2xl p-6 sm:p-10 mb-24 sm:mb-32 xl:mb-40'
        >
          <div>
            <h3 className='text-xl sm:text-2xl font-semibold mb-2'>Want to see it live?</h3>
            <p className='text-white/60 text-sm sm:text-base'>
              Try DevFlow in production or jump back to the rest of my work.
            </p>
          </div>
          <div className='flex gap-3'>
            <a
              href='https://dev-flow-prisma-k1r1.vercel.app'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 h-12 rounded-full text-sm tracking-wider transition-all duration-300'
            >
              Visit site <HiArrowUpRight />
            </a>
            <Link
              href='/about'
              className='inline-flex items-center gap-2 border border-white/20 hover:border-accent hover:text-accent px-6 h-12 rounded-full text-sm tracking-wider transition-all duration-300'
            >
              All projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DevFlow;
