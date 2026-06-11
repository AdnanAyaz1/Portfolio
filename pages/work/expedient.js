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

const features = [
  {
    icon: <HiUsers />,
    title: 'Multi-Role Apps',
    description:
      'Four role-specific applications (admin, client, candidate, vendor) sharing a single design system and code base via the monorepo.',
  },
  {
    icon: <HiCalendarDays />,
    title: 'Orders & Timesheets',
    description:
      'End-to-end order lifecycle, react-big-calendar scheduling, and timesheet approvals with server-side pagination via TanStack Table.',
  },
  {
    icon: <HiChatBubbleLeftRight />,
    title: 'Twilio Messaging',
    description:
      'In-app conversations between clients, vendors, and candidates powered by Twilio Conversations with read state and notifications.',
  },
  {
    icon: <HiCloudArrowUp />,
    title: 'AWS File Storage',
    description:
      'Secure resume, contract, and document uploads on AWS S3 with signed URLs, SES email pipelines, and SQS-backed async jobs.',
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
  { value: 'Live', label: 'In production', sub: 'expedientvms.com' },
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
              <a
                href='https://www.expedientvms.com'
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
              src=''
              poster='/expedient.png'
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
            <div className='text-xs uppercase tracking-[3px] text-accent mb-4'>The Problem</div>
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
            <div className='text-xs uppercase tracking-[3px] text-accent mb-4'>The Solution</div>
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
            <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>Tech Stack</div>
            <h2 className='h2'>Built to scale across teams.</h2>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5'
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
            <h2 className='h2'>What the platform does.</h2>
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
              I led the full-stack development {'\u2014'} from monorepo architecture and role-based
              frontend apps to the Express backend, AWS integrations, and Twilio messaging layer.
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
              Try Expedient VMS in production or jump back to the rest of my work.
            </p>
          </div>
          <div className='flex gap-3'>
            <a
              href='https://www.expedientvms.com'
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

export default Expedient;
