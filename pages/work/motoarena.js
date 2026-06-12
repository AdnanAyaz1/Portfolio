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
  HiTruck,
  HiCalendarDays,
  HiPhoto,
  HiCog6Tooth,
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
  SiCloudinary,
  SiReacthookform,
  SiFramer,
  SiZod,
  SiReacttable,
} from 'react-icons/si';

const features = [
  {
    icon: <HiTruck />,
    title: 'Car Inventory Management',
    description:
      'Dealers manage full vehicle listings with rich specs, pricing, status (available / reserved / sold), and a TanStack Table admin view with filters and sorting.',
  },
  {
    icon: <HiCalendarDays />,
    title: 'Test Drive Scheduling',
    description:
      'Customers request test drives with date pickers, the dealer approves or reschedules from the admin, and both sides see real-time status updates.',
  },
  {
    icon: <HiPhoto />,
    title: 'Cloudinary Image Pipeline',
    description:
      'Multi-image uploads per car with Cloudinary transformations, signed URLs, and an editorial featured-cars carousel on the home page.',
  },
  {
    icon: <HiCog6Tooth />,
    title: 'Admin Dashboard & RBAC',
    description:
      'Role-based admin dashboard for inventory, reservations, saved cars, and user management \u2014 all behind NextAuth.js route guards.',
  },
];

const techStack = [
  { name: 'Next.js 15', icon: <SiNextdotjs />, color: 'text-white' },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-[#3178C6]' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-[#06B6D4]' },
  { name: 'Shadcn UI', icon: <HiPaintBrush />, color: 'text-white' },
  { name: 'Framer Motion', icon: <SiFramer />, color: 'text-[#FF61F6]' },
  { name: 'Prisma', icon: <SiPrisma />, color: 'text-white' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-[#4169E1]' },
  { name: 'NextAuth', icon: <HiKey />, color: 'text-white' },
  { name: 'Cloudinary', icon: <SiCloudinary />, color: 'text-[#3448C5]' },
  { name: 'Google Gen AI', icon: <SiGoogle />, color: 'text-[#4285F4]' },
  { name: 'TanStack Table', icon: <SiReacttable />, color: 'text-[#FF4154]' },
  { name: 'React Hook Form', icon: <SiReacthookform />, color: 'text-[#EC5990]' },
  { name: 'Zod', icon: <SiZod />, color: 'text-[#3E67B1]' },
];

const contributions = [
  'Architected the app on Next.js 15 with the App Router, route groups for (auth), (root), and (admin), and shared server actions for mutations.',
  'Modelled the Prisma schema for users, dealerships, cars, reservations, saved-cars, and roles, with PostgreSQL as the source of truth.',
  'Wired NextAuth.js with credentials + bcrypt, role-based session callbacks, and route-level guards for the admin dashboard.',
  'Built the car inventory module with TanStack Table (sort, filter, paginate) and a multi-step create/edit form with Zod + React Hook Form.',
  'Implemented the test-drive scheduler with react-day-picker, dealer approval flow, and toast-based real-time status updates.',
  'Integrated Cloudinary via next-cloudinary for image uploads, on-the-fly transformations, and the featured-cars homepage carousel.',
];

const results = [
  { value: '4', label: 'Route groups', sub: 'auth, root, admin, api' },
  { value: '100%', label: 'Type-safe', sub: 'TypeScript + Zod end-to-end' },
  { value: 'RBAC', label: 'Built-in', sub: 'Customer, Dealer, Admin roles' },
  { value: 'Live', label: 'In production', sub: 'ai-moto-arena.vercel.app' },
];

const MotoArena = () => {
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
              <span>Case Study {'\u2014'} 2023</span>
            </div>
            <h1 className='text-[36px] sm:text-[48px] xl:text-[64px] leading-[1.1] font-semibold mb-6'>
              Motoverse
              <span className='block text-accent text-[18px] sm:text-[22px] xl:text-[26px] font-light mt-3'>
                AI-Powered Car Dealership Platform
              </span>
            </h1>
            <p className='text-white/70 max-w-[560px] mb-8'>
              A modern dealership management platform on Next.js 15 that lets dealers manage
              inventory, customers request test drives, and admins run the show {'\u2014'} with
              Cloudinary image pipelines and Google Gen AI baked in.
            </p>
            <div className='flex flex-wrap gap-3'>
              <a
                href='https://ai-moto-arena.vercel.app'
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
                <div className='text-sm font-medium'>2023</div>
              </div>
              <div>
                <div className='text-xs uppercase tracking-[1.5px] text-white/40 mb-1'>Type</div>
                <div className='text-sm font-medium'>Dealership SaaS</div>
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
              src='/Motoverse/Landing page.mp4'
              poster='/moto.png'
              title='Motoverse \u2014 product walkthrough'
            />
          </motion.div>
        </section>

        {/* overview — single whileInView wrapper */}
        <motion.section
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
          className='grid md:grid-cols-2 gap-8 mb-16 xl:mb-28'
        >
          <div className='bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8'>
            <div className='text-xs uppercase tracking-[3px] text-accent mb-4'>The Problem</div>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4'>
              Dealerships still juggle spreadsheets and paper test-drive sheets.
            </h3>
            <p className='text-white/60 leading-relaxed'>
              Inventory, test-drive bookings, and customer follow-ups live in separate tools {'\u2014'}
              so dealers lose leads, customers bounce, and the admin team has no real-time view of
              what is moving on the lot.
            </p>
          </div>

          <div className='bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8'>
            <div className='text-xs uppercase tracking-[3px] text-accent mb-4'>The Solution</div>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4'>
              One Next.js app for inventory, scheduling, and admin.
            </h3>
            <p className='text-white/60 leading-relaxed'>
              A single Next.js 15 deployment with role-based route groups, Prisma + PostgreSQL on
              the back, Cloudinary for media, and Google Gen AI for smart features {'\u2014'} so
              dealers, customers, and admins all work from the same source of truth.
            </p>
          </div>
        </motion.section>

        {/* tech stack — single whileInView wrapper */}
        <motion.section
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
          className='mb-16 xl:mb-28'
        >
          <div className='text-center mb-10'>
            <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>Tech Stack</div>
            <h2 className='h2'>Modern Next.js, with AI in the loop.</h2>
          </div>
          <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5'>
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
          </div>
        </motion.section>

        {/* walkthrough — single whileInView wrapper */}
        <motion.section
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.1 }}
          className='mb-16 xl:mb-28'
        >
          <div className='text-center mb-10'>
            <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>Walkthrough</div>
            <h2 className='h2'>See it in action.</h2>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8'>
            {[
              { src: '/Motoverse/Landing page.mp4', title: 'Motoverse \u2014 landing page', label: 'Landing Page' },
              { src: '/Motoverse/AI CAR SEARCH-highlight.mp4', title: 'Motoverse \u2014 AI car search', label: 'AI Car Search' },
              { src: '/Motoverse/CAR FILTERS-highlight.mp4', title: 'Motoverse \u2014 car filters', label: 'Car Filters' },
              { src: '/Motoverse/BOOKING FEATURE-highlight.mp4', title: 'Motoverse \u2014 booking feature', label: 'Booking Feature' },
              { src: '/Motoverse/ADMIN AND AUTH-highlight.mp4', title: 'Motoverse \u2014 admin and auth', label: 'Admin & Auth' },
            ].map((video, i) => (
              <div key={i}>
                <CaseStudyVideo src={video.src} poster='/moto.png' title={video.title} />
                <div className='mt-4 text-center'>
                  <div className='text-sm font-medium'>{video.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* features — single whileInView wrapper */}
        <motion.section
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.1 }}
          className='mb-16 xl:mb-28'
        >
          <div className='text-center mb-10'>
            <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>Key Features</div>
            <h2 className='h2'>From showroom to scheduling, in one app.</h2>
            <p className='text-white/50 mt-3 max-w-xl mx-auto text-sm sm:text-base'>
              Every feature shown is production code &mdash; no mockups, no placeholders.
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5'>
            {features.map((feature, i) => (
              <div
                key={i}
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
              </div>
            ))}
          </div>
        </motion.section>

        {/* my role — single whileInView wrapper */}
        <motion.section
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.1 }}
          className='mb-16 xl:mb-28'
        >
          <div className='max-w-3xl mb-10'>
            <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>My Role</div>
            <h2 className='h2'>What I built.</h2>
            <p className='text-white/60 mt-2'>
              I led the full-stack development {'\u2014'} from schema design and auth architecture to
              Cloudinary image pipelines, AI features, and the admin dashboard.
            </p>
          </div>

          <ul className='grid md:grid-cols-2 gap-4 sm:gap-6'>
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
          </ul>
        </motion.section>

        {/* results — single whileInView wrapper */}
        <motion.section
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
          className='mb-16 xl:mb-28'
        >
          <div className='text-center mb-10'>
            <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>Outcomes</div>
            <h2 className='h2'>Shipped and live.</h2>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
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
          </div>
        </motion.section>

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
              Try Motoverse in production or jump back to the rest of my work.
            </p>
          </div>
          <div className='flex gap-3'>
            <a
              href='https://ai-moto-arena.vercel.app'
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

export default MotoArena;
