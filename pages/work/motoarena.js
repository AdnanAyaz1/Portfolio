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
  HiSparkles,
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

// Replace each `videoUrl` with your Cloudinary (or other CDN) URL once uploaded.
// Example Cloudinary URL: https://res.cloudinary.com/<cloud-name>/video/upload/v1234567890/motoarena-walkthrough.mp4
const features = [
  {
    icon: <HiTruck />,
    title: 'Car Inventory Management',
    description:
      'Dealers manage full vehicle listings with rich specs, pricing, status (available / reserved / sold), and a TanStack Table admin view with filters and sorting.',
    videoUrl: '',
    poster: '/thumb1.jpg',
  },
  {
    icon: <HiCalendarDays />,
    title: 'Test Drive Scheduling',
    description:
      'Customers request test drives with date pickers, the dealer approves or reschedules from the admin, and both sides see real-time status updates.',
    videoUrl: '',
    poster: '/thumb2.jpg',
  },
  {
    icon: <HiPhoto />,
    title: 'Cloudinary Image Pipeline',
    description:
      'Multi-image uploads per car with Cloudinary transformations, signed URLs, and an editorial featured-cars carousel on the home page.',
    videoUrl: '',
    poster: '/thumb3.jpg',
  },
  {
    icon: <HiCog6Tooth />,
    title: 'Admin Dashboard & RBAC',
    description:
      'Role-based admin dashboard for inventory, reservations, saved cars, and user management \u2014 all behind NextAuth.js route guards.',
    videoUrl: '',
    poster: '/thumb4.jpg',
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
              MotoArena
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
              src={features[0].videoUrl}
              poster={features[0].poster}
              title='MotoArena \u2014 product walkthrough'
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
              Dealerships still juggle spreadsheets and paper test-drive sheets.
            </h3>
            <p className='text-white/60 leading-relaxed'>
              Inventory, test-drive bookings, and customer follow-ups live in separate tools {'\u2014'}
              so dealers lose leads, customers bounce, and the admin team has no real-time view of
              what is moving on the lot.
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
              One Next.js app for inventory, scheduling, and admin.
            </h3>
            <p className='text-white/60 leading-relaxed'>
              A single Next.js 15 deployment with role-based route groups, Prisma + PostgreSQL on
              the back, Cloudinary for media, and Google Gen AI for smart features {'\u2014'} so
              dealers, customers, and admins all work from the same source of truth.
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
              Modern Next.js, with AI in the loop.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4'
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
            <h2 className='text-3xl sm:text-4xl xl:text-5xl font-semibold'>
              From showroom to scheduling, in one app.
            </h2>
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
            <h2 className='text-3xl sm:text-4xl xl:text-5xl font-semibold'>Shipped end-to-end.</h2>
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
              I can walk you through the Prisma schema, the admin RBAC layer, or the Cloudinary
              image pipeline.
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

export default MotoArena;
