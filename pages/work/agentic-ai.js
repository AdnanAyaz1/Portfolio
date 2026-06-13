import { motion } from 'motion/react';
import { slideIn, staggerContainer, staggerItem } from '../../variants';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import Transition from '../../components/Transition';
import Circles from '../../components/Circles';
import ProjectHero from '../../components/work/ProjectHero';
import {
  HiCloud,
  HiEye,
  HiCog6Tooth,
  HiLightBulb,
  HiChartBar,
  HiClock,
  HiSparkles,
  HiKey,
  HiPaintBrush,
  HiServer,
} from 'react-icons/hi2';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiStripe,
  SiOpenai,
  SiRedis,
} from 'react-icons/si';

const ProjectOverview = dynamic(() => import('../../components/work/ProjectOverview'), { ssr: false });
const ProjectTechStack = dynamic(() => import('../../components/work/ProjectTechStack'), { ssr: false });
const ProjectFeatures = dynamic(() => import('../../components/work/ProjectFeatures'), { ssr: false });
const ProjectContributions = dynamic(() => import('../../components/work/ProjectContributions'), { ssr: false });
const ProjectResults = dynamic(() => import('../../components/work/ProjectResults'), { ssr: false });
const ProjectCTA = dynamic(() => import('../../components/work/ProjectCTA'), { ssr: false });
const AgentsSection = dynamic(() => import('../../components/work/AgentsSection'), { ssr: false });

const features = [
  {
    icon: <HiCloud />,
    title: 'Weather Intelligence',
    description:
      'Real-time weather API integration automatically adjusts pricing strategies based on conditions. Hot days trigger cold drink promotions; rainy mornings push hot beverages.',
  },
  {
    icon: <HiEye />,
    title: 'Competitor Tracking',
    description:
      'AI-powered web scraping with Playwright and Crawlee monitors competitor menus and pricing daily, giving you a strategic edge without manual research.',
  },
  {
    icon: <HiCog6Tooth />,
    title: '5-Agent AI Pipeline',
    description:
      'Menu Analyst, Weather Analyst, Strategist, Critic, and Synthesizer agents collaborate using Groq LLMs to produce actionable daily business recommendations.',
  },
  {
    icon: <HiLightBulb />,
    title: 'Smart Decision Engine',
    description:
      'Automated approval system handles small pricing changes autonomously while flagging significant adjustments for human review, keeping you in control.',
  },
  {
    icon: <HiChartBar />,
    title: 'Analytics Dashboard',
    description:
      'Real-time dashboard with weather cards, competitor insights, menu performance metrics, and AI-generated recommendations with confidence scores.',
  },
  {
    icon: <HiClock />,
    title: 'Background Job Queue',
    description:
      'BullMQ-powered job queue handles daily analysis pipelines, competitor scraping, and data processing asynchronously with Redis-backed reliability.',
  },
];

const techStack = [
  { name: 'Next.js 16', icon: <SiNextdotjs />, color: 'text-white' },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-[#3178C6]' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-[#06B6D4]' },
  { name: 'Prisma', icon: <SiPrisma />, color: 'text-[#2D3748]' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-[#4169E1]' },
  { name: 'Stripe', icon: <SiStripe />, color: 'text-[#635BFF]' },
  { name: 'Groq LLMs', icon: <SiOpenai />, color: 'text-[#74AA9C]' },
  { name: 'Redis', icon: <SiRedis />, color: 'text-[#DC382D]' },
  { name: 'BullMQ', icon: <HiServer />, color: 'text-white' },
  { name: 'Playwright', icon: <HiCog6Tooth />, color: 'text-[#2EAD33]' },
  { name: 'NextAuth', icon: <HiKey />, color: 'text-white' },
  { name: 'Shadcn UI', icon: <HiPaintBrush />, color: 'text-white' },
];

const contributions = [
  'Architected a multi-agent AI pipeline with 5 specialized LLM agents (Menu Analyst, Weather Analyst, Strategist, Critic, Synthesizer) using Groq models for daily business intelligence.',
  'Built real-time weather integration that triggers automatic pricing strategy adjustments based on weather conditions, time of day, and seasonal patterns.',
  'Implemented AI-powered competitor scraping with Playwright and Crawlee to monitor competitor menus, pricing, and promotions daily.',
  'Designed the Smart Decision Engine with tiered approval workflows: auto-approve small changes, queue significant adjustments for human review.',
  'Created a full dashboard with weather cards, competitor insights, menu performance analytics, and confidence-scored AI recommendations.',
  'Set up BullMQ job queue with Redis for async processing of daily analysis pipelines, competitor scraping, and data synchronization.',
  'Integrated Stripe for subscription billing with tiered pricing plans and checkout flow.',
  'Implemented secure auth with NextAuth, Prisma adapter, and PostgreSQL for multi-tenant data isolation.',
];

const results = [
  { value: '5', label: 'AI Agents', sub: 'Menu, Weather, Strategist, Critic, Synthesizer' },
  { value: '3', label: 'Data Sources', sub: 'Weather API, Competitor Sites, Menu Data' },
  { value: '24/7', label: 'Monitoring', sub: 'Automated daily analysis pipelines' },
  { value: '10x', label: 'Faster', sub: 'Decisions vs manual research' },
];

const AgenticAI = () => {
  return (
    <div className='min-h-full bg-primary/30 pt-16 sm:pt-24 xl:pt-32 pb-32 sm:pb-40 xl:pb-56'>
      <Head>
        <title>Agentic AI - Adnan Ayaz | AI-Powered Business Intelligence</title>
        <meta name="description" content="A SaaS platform using 5 specialized AI agents to analyze weather, competitors, and menu data — delivering daily pricing recommendations for cafe owners." />
      </Head>
      <Transition />
      <Circles />

      <main className='container mx-auto px-4'>
        <ProjectHero
          title='Agentic AI'
          subtitle='AI-Powered Business Intelligence for Cafes'
          description="A SaaS platform that uses 5 specialized AI agents to analyze weather, competitors, and menu data — delivering daily pricing and promotion recommendations that maximize revenue for cafe owners."
          liveUrl='https://multi-agent-cafe-ai.vercel.app/'
          year='2025'
          role='Full Stack Developer'
          type='AI SaaS'
        >
          <div className='relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] aspect-video flex items-center justify-center'>
            <div className='text-center p-8'>
              <HiSparkles className='text-6xl text-accent mx-auto mb-4' />
              <p className='text-white/50 text-sm'>Agentic AI Dashboard Preview</p>
            </div>
          </div>
        </ProjectHero>

        <ProjectOverview
          problem={{
            title: 'Cafe owners make pricing decisions on gut feeling.',
            description:
              "Small cafe businesses lose revenue by not adapting to weather changes, ignoring competitor pricing, and making manual menu adjustments. Existing tools are either too complex or don't leverage AI for intelligent, automated decision-making.",
          }}
          solution={{
            title: 'Multi-agent AI that thinks like a business strategist.',
            description:
              'Five specialized AI agents collaborate to analyze weather forecasts, scrape competitor data, evaluate menu performance, and synthesize actionable daily recommendations — with an approval system that keeps humans in control of significant changes.',
          }}
        />

        <ProjectTechStack techs={techStack} />

        <ProjectFeatures
          features={features}
          title='Key Features'
          subtitle='Every feature is production code — from the AI agents to the real-time dashboard.'
        />

        <ProjectContributions
          contributions={contributions}
          title='My Role'
          description='I led the full-stack development — from multi-agent AI pipeline architecture and real-time data processing to the dashboard UI, payment integration, and deployment.'
        />

        <AgentsSection />

        <ProjectResults
          results={results}
          title='Outcomes'
          subtitle='Intelligent automation, real results.'
        />

        <ProjectCTA
          liveUrl='https://multi-agent-cafe-ai.vercel.app/'
          liveLabel='Visit site'
        />
      </main>
    </div>
  );
};

export default AgenticAI;
