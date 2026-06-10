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
  HiChartBar,
  HiStar,
  HiClipboardDocumentList,
  HiShoppingBag,
  HiWrenchScrewdriver,
  HiArrowPath,
  HiCog6Tooth,
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

// Full demo video URL — update this path to your uploaded video
const demoVideo = '/Adnan%20Ayaz\'s%20Portfolio.mp4';
const signupVideo = '/omni-frames/My%20Video.mp4';
const bookingVideo = '/omni-frames/booking.mp4';
const productOrderAdminVideo = '/omni-frames/Product_Order_Admin-highlight.mp4';
const productOrderClientVideo = '/omni-frames/Product_Order_Client-highlight.mp4';
const employeeServicesVideo = '/omni-frames/Employee_Services.mp4';

// Feature screens extracted from the demo video
const features = [
  {
    icon: <HiClipboardDocumentList />,
    title: 'Login & Authentication',
    description:
      'Secure Firebase Auth login with role-based routing. Admins and clients each land on their own tailored dashboard after authentication.',
  },
  {
    icon: <HiChartBar />,
    title: 'Dashboard & Sidebar Navigation',
    description:
      'A unified admin dashboard with sidebar navigation giving instant access to bookings, products, services, employees, and analytics. Real-time revenue and booking stats at a glance.',
  },
  {
    icon: <HiCalendarDays />,
    title: 'Booking Management',
    description:
      'Full booking lifecycle \u2014 create, view, edit, and cancel appointments. Color-coded react-big-calendar with week/day views, employee filtering, and status tracking (Pending, Done, Cancelled).',
  },
  {
    icon: <HiCreditCard />,
    title: 'Invoice & Payment Processing',
    description:
      'Stripe-powered checkout with automated fee calculation (sales tax, Omni fee, card processing). Webhook-verified payments, invoice generation, and refund handling.',
  },
  {
    icon: <HiShoppingBag />,
    title: 'Product & Inventory Management',
    description:
      'Complete product CRUD with table/grid views, search, bulk selection, and Cloudinary image uploads. Track stock levels and manage product details from a single panel.',
  },
  {
    icon: <HiArrowPath />,
    title: 'Update Product Quantities',
    description:
      'Quick-edit stock quantities directly from the inventory view. Real-time Firestore sync ensures all dashboards reflect the latest inventory state.',
  },
  {
    icon: <HiWrenchScrewdriver />,
    title: 'Service Management',
    description:
      'Create and manage services with duration, pricing, and type (At Shop / At Home). Assign services to specific employees and control availability per staff member.',
  },
  {
    icon: <HiStar />,
    title: 'Customer Checkout / Cart',
    description:
      'Customer-facing checkout with service selection, date/time picking, address input for at-home bookings, and order summary with tax/fee breakdown before Stripe payment.',
  },
  {
    icon: <HiCog6Tooth />,
    title: 'Booking Details',
    description:
      'Detailed booking view showing client info, selected services, assigned employee, payment status, and timeline. Supports status updates and action triggers from a single screen.',
  },
  {
    icon: <HiCalendarDays />,
    title: 'Task / Todo Scheduling Calendar',
    description:
      'Interactive calendar for scheduling staff tasks, tracking attendance, and managing off-days. Employees see their own schedule while admins get a full team overview.',
  },
];

const techStack = [
  { name: 'React', icon: <FaReact />, color: 'text-[#61DAFB]' },
  { name: 'Vite', icon: <SiVite />, color: 'text-[#646CFF]' },
  { name: 'Redux Toolkit', icon: <SiRedux />, color: 'text-[#764ABC]' },
  { name: 'Zustand', icon: <SiRedux />, color: 'text-[#443E38]' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-[#06B6D4]' },
  { name: 'Firebase', icon: <HiStar />, color: 'text-[#FFCA28]' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-[#4169E1]' },
  { name: 'Stripe', icon: <SiStripe />, color: 'text-[#635BFF]' },
  { name: 'Google Maps', icon: <SiGooglemaps />, color: 'text-[#4285F4]' },
  { name: 'Framer Motion', icon: <SiFramer />, color: 'text-[#FF61F6]' },
  { name: 'React Hook Form', icon: <SiReacthookform />, color: 'text-[#EC5990]' },
];

const contributions = [
  'Built the full admin dashboard with sidebar navigation, role-based routing, and real-time stats using React + Vite with Redux Toolkit and Zustand.',
  'Implemented the booking management system with react-big-calendar (week/day views), color-coded events, employee filtering, and status lifecycle (Pending \u2192 Done \u2192 Cancelled).',
  'Integrated Stripe Checkout with automated fee breakdown (sales tax, platform fee, card processing), webhook verification, invoice generation, and refund handling.',
  'Designed the product & inventory management layer with CRUD, table/grid views, bulk actions, Cloudinary image uploads, and real-time quantity updates.',
  'Built the service management system allowing admins to create services with duration, pricing, type (At Shop / At Home), and per-employee assignment.',
  'Developed the customer checkout flow with service selection, date/time picking, address input for at-home bookings, and order summary with tax/fee calculation.',
  'Created the task/todo scheduling calendar for staff management with attendance tracking, off-day configuration, and team-wide overview for admins.',
  'Architected Firebase Cloud Functions backend handling payment processing, webhook verification, and real-time Firestore sync across all dashboards.',
];

const results = [
  { value: '6', label: 'Demo videos', sub: 'Sign Up, Booking, Products, Orders, Employee, Services' },
  { value: '2', label: 'User roles', sub: 'Admin & Client' },
  { value: '100%', label: 'Real-time sync', sub: 'Bookings, inventory, and calendar via Firestore' },
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
              src={demoVideo}
              poster='/omni-frames/omni-frame-1.jpg'
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

        {/* demo videos */}
        <section className='mb-16 xl:mb-28'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='text-center mb-10'
          >
            <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>Walkthrough</div>
            <h2 className='h2'>See it in action.</h2>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8'>
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.2 }}
            >
              <CaseStudyVideo
                src={demoVideo}
                poster='/omni-frames/omni-frame-1.jpg'
                title='Omni-Connects \u2014 full product demo'
              />
              <div className='mt-4 text-center'>
                <div className='text-sm font-medium'>Full Product Demo</div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.2 }}
            >
              <CaseStudyVideo
                src={signupVideo}
                poster='/omni-frames/omni-frame-2.jpg'
                title='Omni-Connects \u2014 sign up flow'
              />
              <div className='mt-4 text-center'>
                <div className='text-sm font-medium'>Sign Up &amp; Onboarding</div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.2 }}
            >
              <CaseStudyVideo
                src={bookingVideo}
                poster='/omni-frames/omni-frame-3.jpg'
                title='Omni-Connects \u2014 booking process'
              />
              <div className='mt-4 text-center'>
                <div className='text-sm font-medium'>Booking Process</div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.2 }}
            >
              <CaseStudyVideo
                src={productOrderAdminVideo}
                poster='/omni-frames/omni-frame-4.jpg'
                title='Omni-Connects \u2014 product & order management (admin)'
              />
              <div className='mt-4 text-center'>
                <div className='text-sm font-medium'>Product &amp; Orders (Admin)</div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.2 }}
            >
              <CaseStudyVideo
                src={productOrderClientVideo}
                poster='/omni-frames/omni-frame-5.jpg'
                title='Omni-Connects \u2014 product & order management (client)'
              />
              <div className='mt-4 text-center'>
                <div className='text-sm font-medium'>Product &amp; Orders (Client)</div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.2 }}
            >
              <CaseStudyVideo
                src={employeeServicesVideo}
                poster='/omni-frames/omni-frame-1.jpg'
                title='Omni-Connects \u2014 employee & services'
              />
              <div className='mt-4 text-center'>
                <div className='text-sm font-medium'>Employee &amp; Services</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* features grid */}
        <section className='mb-16 xl:mb-28'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='text-center mb-10'
          >
            <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>Key Features</div>
            <h2 className='h2'>10 screens. One seamless platform.</h2>
            <p className='text-white/50 mt-3 max-w-xl mx-auto text-sm sm:text-base'>
              Every feature shown in the demo is production code &mdash; no mockups, no placeholders.
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
              I led the full-stack development \u2014 from multi-role frontend architecture and real-time
              booking engine to Stripe payment integration, Firebase Cloud Functions, and the entire
              e-commerce and community layer.
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
