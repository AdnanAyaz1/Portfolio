import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'motion/react';
import { slideIn } from '../../variants';

import Transition from '../../components/Transition';
import Circles from '../../components/Circles';
import CaseStudyVideo from '../../components/CaseStudyVideo';

import ProjectHero from '../../components/work/ProjectHero';
import ProjectOverview from '../../components/work/ProjectOverview';
import ProjectTechStack from '../../components/work/ProjectTechStack';
import ProjectFeatures from '../../components/work/ProjectFeatures';
import ProjectContributions from '../../components/work/ProjectContributions';
import ProjectResults from '../../components/work/ProjectResults';
import ProjectCTA from '../../components/work/ProjectCTA';

import {
  HiArrowUpRight,
  HiCodeBracketSquare,
  HiSparkles,
  HiArrowTrendingUp,
  HiMagnifyingGlass,
  HiKey,
  HiPaintBrush,
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
      <Head>
        <title>DevFlow - Adnan Ayaz | AI-Powered Developer Q&A</title>
        <meta name="description" content="A fast, type-safe Q&A app for developers with AI-suggested tags, rich-text editing, and reputation engine." />
      </Head>
      <Transition />
      <Circles />

      <main className='container mx-auto px-4'>
        <motion.div
          variants={slideIn('left', 0.1)}
          initial='hidden'
          animate='show'
          className='mb-8 xl:mb-12'
        >
          <Link
            href='/about'
            className='inline-flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors duration-300'
          >
            Back to projects
          </Link>
        </motion.div>

        <ProjectHero
          title='DevFlow'
          subtitle='A Q&A Platform for Developers'
          description="A modern Stack Overflow-style Q&A platform built on Next.js 15, Prisma, and PostgreSQL \u2014 with Google Gen AI suggesting tags as you type, code-aware rich text, and a reputation system that rewards quality answers."
          liveUrl='https://dev-flow-prisma-k1r1.vercel.app'
          year='2024'
          role='Full Stack Developer'
          type='Q&A SaaS'
        >
          <CaseStudyVideo
            src='/DevFlow-highlight.mp4'
            poster='/DEVFLOW.png'
            title='DevFlow \u2014 product walkthrough'
          />
        </ProjectHero>

        <ProjectOverview
          problem={{
            title: 'Developer Q&A still feels heavy and slow.',
            description:
              "Existing platforms have bloated UX, weak code rendering, and no help with tagging or formatting when posting \u2014 so the first-time experience drops off and quality answers get buried.",
          }}
          solution={{
            title: 'A fast, type-safe Q&A app with AI in the loop.',
            description:
              'Next.js 15 + Prisma + PostgreSQL power a single-tenant experience with rich-text + code highlighting, AI-suggested tags, reputation tied to votes, and global search with infinite scroll.',
          }}
        />

        <ProjectTechStack techs={techStack} />

        <ProjectFeatures
          features={features}
          title='Everything a Q&A app needs, in one place.'
          subtitle='Every feature shown is production code \u2014 no mockups, no placeholders.'
        />

        <ProjectContributions
          contributions={contributions}
          title='What I built.'
          description="I led the full-stack development \u2014 from schema design and auth architecture to AI integration, rich-text editing, and the reputation engine."
        />

        <ProjectResults
          results={results}
          title='Shipped and live.'
        />

        <ProjectCTA
          liveUrl='https://dev-flow-prisma-k1r1.vercel.app'
          liveLabel='Visit site'
        />
      </main>
    </div>
  );
};

export default DevFlow;
