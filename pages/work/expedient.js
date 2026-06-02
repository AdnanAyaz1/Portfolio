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
  HiCalendarDays,
  HiChatBubbleLeftRight,
  HiCloudArrowUp,
  HiUsers,
  HiDocumentText,
} from 'react-icons/hi2';
import { FaReact } from 'react-icons/fa';
import {
  SiVite,
  SiTailwindcss,
  SiTurborepo,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiMysql,
  SiAuth0,
  SiTwilio,
  SiAmazonwebservices,
  SiReactquery,
  SiReacthookform,
  SiChartdotjs,
} from 'react-icons/si';

// Replace each `videoUrl` with your Cloudinary (or other CDN) URL once uploaded.
// Example Cloudinary URL: https://res.cloudinary.com/<cloud-name>/video/upload/v1234567890/expedient-walkthrough.mp4
const features = [
  {
    icon: <HiUsers />,
    title: 'Multi-Role Apps',
    description:
      'Four role-specific applications (admin, client, candidate, vendor) sharing a single design system and code base via the monorepo.',
    videoUrl: '',
    poster: '/thumb1.jpg',
  },
  {
    icon: <HiCalendarDays />,
    title: 'Orders & Timesheets',
    description:
      'End-to-end order lifecycle, react-big-calendar scheduling, and timesheet approvals with server-side pagination via TanStack Table.',
    videoUrl: '',
    poster: '/thumb2.jpg',
  },
  {
    icon: <HiChatBubbleLeftRight />,
    title: 'Twilio Messaging',
    description:
      'In-app conversations between clients, vendors, and candidates powered by Twilio Conversations with read state and notifications.',
    videoUrl: '',
    poster: '/thumb3.jpg',
  },
  {
    icon: <HiCloudArrowUp />,
    title: 'AWS File Storage',
    description:
      'Secure resume, contract, and document uploads on AWS S3 with signed URLs, SES email pipelines, and SQS-backed async jobs.',
    videoUrl: '',
    poster: '/thumb4.jpg',
  },
];

const techStack = [
  { name: 'React', icon: <FaReact />, color: 'text-[#61DAFB]' },
  { name: 'Vite', icon: <SiVite />, color: 'text-[#646CFF]' },
  { name: 'Turbo Repo', icon: <SiTurborepo />, color: 'text-[#FF4400]' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-[#06B6D4]' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-[#339933]' },
  { name: 'Express', icon: <SiExpress />, color: 'text-white' },
  { name: 'Sequelize', icon: <SiSequelize />, color: 'text-[#52B0E7]' },
  { name: 'MySQL', icon: <SiMysql />, color: 'text-[#4479A1]' },
  { name: 'Auth0', icon: <SiAuth0 />, color: 'text-[#EB5424]' },
  { name: 'Twilio', icon: <SiTwilio />, color: 'text-[#F22F46]' },
  { name: 'AWS', icon: <SiAmazonwebservices />, color: 'text-[#FF9900]' },
  { name: 'TanStack Query', icon: <SiReactquery />, color: 'text-[#FF4154]' },
  { name: 'TanStack Table', icon: <SiReactquery />, color: 'text-[#FF4154]' },
  { name: 'React Hook Form', icon: <SiReacthookform />, color: 'text-[#EC5990]' },
  { name: 'Chart.js', icon: <SiChartdotjs />, color: 'text-[#FF6384]' },
];

const contributions = [
  'Built the shared monorepo packages (ui, hooks, constants, enums, utils) consumed by all four front-end apps and the Express server.',
  'Architected the candidate and client apps with role-based routing, Auth0 integration, and a single Twilio Paste design system.',
  'Implemented the order management module with TanStack Table server-side pagination, filters, and bulk actions.',
  'Built the timesheet workflow on top of react-big-calendar with approval states, audit trail, and Chart.js reporting.',
  'Wired up AWS S3 for resume and contract uploads with pre-signed URLs, plus SES email templates and SQS async jobs on the server.',
  'Set up the Turbo pipeline so all four apps and the server build, lint, and deploy in parallel from a single command.',
];

const results = [
  { value: '4', label: 'Role-based apps', sub: 'Admin, Client, Candidate, Vendor' },
  { value: '1', label: 'Monorepo', sub: 'Shared packages across web + server' },
  { value: '100%', label: 'Reused UI', sub: 'One design system, zero duplication' },
];

const Expedient = () => {
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
              <span>Case Study {'\u2014'} 2025</span>
            </div>
            <h1 className='text-[36px] sm:text-[48px] xl:text-[64px] leading-[1.1] font-semibold mb-6'>
              Expedient VMS
              <span className='block text-accent text-[18px] sm:text-[22px] xl:text-[26px] font-light mt-3'>
                Multi-Role Vendor Management System
              </span>
            </h1>
            <p className='text-white/70 max-w-[560px] mb-8'>
              A monorepo that powers four role-specific web apps (admin, client, candidate, vendor)
              on top of one Express + MySQL backend, giving staffing agencies a single source of
              truth for orders, candidates, timesheets, and documents.
            </p>
            <div className='flex flex-wrap gap-3'>
              <Link
                href='/about'
                className='inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 h-12 rounded-full text-sm tracking-wider transition-all duration-300'
              >
                All projects <HiArrowUpRight />
              </Link>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 border border-white/20 hover:border-accent hover:text-accent px-6 h-12 rounded-full text-sm tracking-wider transition-all duration-300'
              >
                Get in touch
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
                <div className='text-sm font-medium'>2025</div>
              </div>
              <div>
                <div className='text-xs uppercase tracking-[1.5px] text-white/40 mb-1'>Type</div>
                <div className='text-sm font-medium'>Monorepo / 4 apps</div>
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
              src={features[0].videoUrl}
              poster={features[0].poster}
              title='Expedient VMS \u2014 product walkthrough'
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
            <div className='text-xs uppercase tracking-[2px] text-accent mb-4'>The Problem</div>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4'>
              Staffing agencies run on stitched-together tools.
            </h3>
            <p className='text-white/60 leading-relaxed'>
              Recruiting teams juggle separate portals for clients, candidates, vendors, and
              timesheets {'\u2014'} each with its own login, data model, and reporting. Orders fall
              through the cracks, timesheet approvals lag, and there is no single view of the
              business.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8'
          >
            <div className='text-xs uppercase tracking-[2px] text-accent mb-4'>The Solution</div>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4'>
              One monorepo. Four role-based apps. One backend.
            </h3>
            <p className='text-white/60 leading-relaxed'>
              A Turbo-repo monorepo where four role-specific React apps (admin, client, candidate,
              vendor) share one design system and consume a single Express + MySQL API {'\u2014'}
              keeping data consistent and shipping faster.
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
            <div className='text-xs uppercase tracking-[2px] text-accent mb-3'>Tech Stack</div>
            <h2 className='text-3xl sm:text-4xl xl:text-5xl font-semibold'>
              Built to scale across teams.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4'
          >
            {techStack.map((t) => (
              <div
                key={t.name}
                className='flex flex-col items-center justify-center gap-2 bg-white/[0.03] border border-white/10 rounded-xl py-5 px-2 hover:border-accent/40 transition-colors duration-300'
              >
                <div className={`text-3xl ${t.color}`}>{t.icon}</div>
                <div className='text-[11px] sm:text-xs text-white/70 text-center leading-tight'>
                  {t.name}
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
            <div className='text-xs uppercase tracking-[2px] text-accent mb-3'>Key Features</div>
            <h2 className='text-3xl sm:text-4xl xl:text-5xl font-semibold'>What the platform does.</h2>
          </motion.div>

          <div className='flex flex-col gap-16 xl:gap-24'>
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`grid xl:grid-cols-2 gap-8 xl:gap-16 items-center ${
                  i % 2 === 1 ? 'xl:[&>*:first-child]:order-2' : ''
                }`}
              >
                <motion.div
                  variants={fadeIn(i % 2 === 0 ? 'right' : 'left', 0.2)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className='text-4xl text-accent mb-4'>{f.icon}</div>
                  <h3 className='text-2xl sm:text-3xl font-semibold mb-4'>{f.title}</h3>
                  <p className='text-white/60 leading-relaxed max-w-[520px]'>{f.description}</p>
                </motion.div>

                <motion.div
                  variants={fadeIn(i % 2 === 0 ? 'left' : 'right', 0.3)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <CaseStudyVideo src={f.videoUrl} poster={f.poster} title={f.title} />
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* my role */}
        <section className='mb-16 xl:mb-28'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='text-center mb-10'
          >
            <div className='text-xs uppercase tracking-[2px] text-accent mb-3'>My Role</div>
            <h2 className='text-3xl sm:text-4xl xl:text-5xl font-semibold'>What I built.</h2>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            className='grid md:grid-cols-2 gap-4 sm:gap-6'
          >
            {contributions.map((c, i) => (
              <div
                key={i}
                className='flex gap-4 bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-accent/30 transition-colors duration-300'
              >
                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold flex items-center justify-center'>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className='text-white/70 leading-relaxed text-sm sm:text-base'>{c}</p>
              </div>
            ))}
          </motion.div>
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
            <div className='text-xs uppercase tracking-[2px] text-accent mb-3'>Outcomes</div>
            <h2 className='text-3xl sm:text-4xl xl:text-5xl font-semibold'>Shipped and live.</h2>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            className='grid md:grid-cols-3 gap-4 sm:gap-6'
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
            <h3 className='text-xl sm:text-2xl font-semibold mb-2'>Want the deep dive?</h3>
            <p className='text-white/60 text-sm sm:text-base'>
              I can walk you through the monorepo structure, Auth0 setup, or the order pipeline.
            </p>
          </div>
          <div className='flex gap-3'>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 h-12 rounded-full text-sm tracking-wider transition-all duration-300'
            >
              Get in touch <HiArrowUpRight />
            </Link>
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

export default Expedient;
