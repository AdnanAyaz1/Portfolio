import Link from 'next/link';
import Image from 'next/image';
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
  HiCreditCard,
  HiUserGroup,
  HiMapPin,
  HiChartBar,
  HiStar,
} from 'react-icons/hi2';
import { FaReact } from 'react-icons/fa';
import {
  SiVite,
  SiRedux,
  SiTailwindcss,
  SiPostgresql,
  SiStripe,
  SiGooglemaps,
  SiFramer,
  SiReacthookform,
} from 'react-icons/si';

// Replace each `videoUrl` with your Cloudinary (or other CDN) URL once uploaded.
// Example Cloudinary URL: https://res.cloudinary.com/<cloud-name>/video/upload/v1234567890/omni-walkthrough.mp4
const features = [
  {
    icon: <HiCalendarDays />,
    title: 'Product Walkthrough',
    description:
      'End-to-end tour of the platform: browsing salons, booking an appointment, dashboard, and checkout.',
    videoUrl: '',
    poster: '/thumb1.jpg',
  },
  {
    icon: <HiUserGroup />,
    title: 'Multi-Role Dashboards',
    description:
      'Separate workflows for customers, employees, managers, and admins, each with role-based access and analytics.',
    videoUrl: '',
    poster: '/thumb2.jpg',
  },
  {
    icon: <HiCreditCard />,
    title: 'Stripe Checkout',
    description:
      'Transaction-safe payment flow with deposits, refunds, and provider payouts powered by Stripe.',
    videoUrl: '',
    poster: '/thumb3.jpg',
  },
  {
    icon: <HiMapPin />,
    title: 'Location Discovery',
    description:
      'Geofire-backed search lets users discover nearby salons on Google Maps with live filters.',
    videoUrl: '',
    poster: '/thumb4.jpg',
  },
];

const techStack = [
  { name: 'React', icon: <FaReact />, color: 'text-[#61DAFB]' },
  { name: 'Vite', icon: <SiVite />, color: 'text-[#646CFF]' },
  { name: 'Redux Toolkit', icon: <SiRedux />, color: 'text-[#764ABC]' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-[#06B6D4]' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-[#4169E1]' },
  { name: 'Stripe', icon: <SiStripe />, color: 'text-[#635BFF]' },
  { name: 'Google Maps', icon: <SiGooglemaps />, color: 'text-[#4285F4]' },
  { name: 'Framer Motion', icon: <SiFramer />, color: 'text-[#FF61F6]' },
  { name: 'React Hook Form', icon: <SiReacthookform />, color: 'text-[#EC5990]' },
];

const contributions = [
  'Architected the multi-role frontend (customer / employee / manager / admin) on top of React + Vite with Redux Toolkit and Zustand for cross-slice state.',
  'Built the booking engine with date-range, time-slot, and availability logic synced to PostgreSQL with real-time subscriptions.',
  'Implemented Stripe Checkout with transaction-safe writes, deposits, refunds, and provider payouts.',
  'Integrated Google Maps + Geofire for location-based salon discovery with debounced filters.',
  'Designed the analytics dashboard with Recharts \u2014 revenue, bookings, and staff utilisation views.',
  'Standardised forms with React Hook Form + Yup/Zod and shared, accessible Tailwind components.',
];

const results = [
  { value: '4', label: 'User roles', sub: 'Customer, Employee, Manager, Admin' },
  { value: '100%', label: 'Real-time sync', sub: 'Bookings, calendar, and inventory' },
  { value: 'Live', label: 'In production', sub: 'omniconnects.com' },
];

const Omni = () => {
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
              Omni-Connects
              <span className='block text-accent text-[18px] sm:text-[22px] xl:text-[26px] font-light mt-3'>
                SaaS Booking & Management for Salons
              </span>
            </h1>
            <p className='text-white/70 max-w-[560px] mb-8'>
              A multi-tenant platform that lets independent salons and barbershops accept online
              bookings, run their day-to-day operations, and grow with built-in payments, scheduling,
              and analytics {'\u2014'} all in one app.
            </p>
            <div className='flex flex-wrap gap-3'>
              <a
                href='https://www.omniconnects.com'
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
                <div className='text-sm font-medium'>Multi-tenant SaaS</div>
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
              title='Omni-Connects \u2014 product walkthrough'
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
              Independent salons still run on paper and phone calls.
            </h3>
            <p className='text-white/60 leading-relaxed'>
              Small businesses lose bookings to missed calls, juggle staff schedules in spreadsheets,
              and have no view of revenue, retention, or staff performance. The few tools that exist
              are clunky, single-role, and built for chains {'\u2014'} not the local owner.
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
              An all-in-one app with role-based workflows.
            </h3>
            <p className='text-white/60 leading-relaxed'>
              Omni-Connects gives every stakeholder {'\u2014'} customer, employee, manager, and admin {'\u2014'} their
              own tailored dashboard. Online booking, payments, scheduling, location discovery, and
              analytics live under a single, real-time platform powered by PostgreSQL and Stripe.
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
            <h2 className='h2'>Built with a modern, production-ready stack.</h2>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-3 sm:gap-4'
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

        {/* features with videos */}
        <section className='mb-16 xl:mb-28'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='text-center mb-10'
          >
            <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>Key Features</div>
            <h2 className='h2'>A closer look at the experience.</h2>
          </motion.div>

          <div className='flex flex-col gap-12 xl:gap-20'>
            {features.slice(1).map((feature, i) => {
              const reverse = i % 2 === 1;
              return (
                <motion.div
                  key={i}
                  variants={fadeIn(reverse ? 'left' : 'right', 0.2)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true, amount: 0.25 }}
                  className={`grid xl:grid-cols-2 gap-6 xl:gap-12 items-center ${
                    reverse ? 'xl:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <CaseStudyVideo
                    src={feature.videoUrl}
                    poster={feature.poster}
                    title={feature.title}
                  />
                  <div>
                    <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent text-2xl mb-4'>
                      {feature.icon}
                    </div>
                    <h3 className='text-2xl sm:text-3xl font-semibold mb-4'>{feature.title}</h3>
                    <p className='text-white/60 leading-relaxed max-w-[520px]'>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
              I led the frontend architecture and shipped the bulk of the user-facing surface,
              collaborating with the backend team on the PostgreSQL/Stripe integrations.
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
            className='grid sm:grid-cols-3 gap-4 sm:gap-6'
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
              Try Omni-Connects in production or jump back to the rest of my work.
            </p>
          </div>
          <div className='flex gap-3'>
            <a
              href='https://www.omniconnects.com'
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

export default Omni;
