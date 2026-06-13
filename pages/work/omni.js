import Head from 'next/head';
import Transition from '../../components/Transition';
import Circles from '../../components/Circles';
import CaseStudyVideo from '../../components/CaseStudyVideo';
import {
  ProjectHero,
  ProjectOverview,
  ProjectTechStack,
  ProjectFeatures,
  ProjectContributions,
  ProjectResults,
  ProjectCTA,
} from '../../components/work';

import {
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

const demoVideo = '/Adnan%20Ayaz\'s%20Portfolio.mp4';

const features = [
  { icon: <HiClipboardDocumentList />, title: 'Login & Authentication', description: 'Secure Firebase Auth login with role-based routing. Admins and clients each land on their own tailored dashboard after authentication.' },
  { icon: <HiChartBar />, title: 'Dashboard & Sidebar Navigation', description: 'A unified admin dashboard with sidebar navigation giving instant access to bookings, products, services, employees, and analytics. Real-time revenue and booking stats at a glance.' },
  { icon: <HiCalendarDays />, title: 'Booking Management', description: 'Full booking lifecycle \u2014 create, view, edit, and cancel appointments. Color-coded react-big-calendar with week/day views, employee filtering, and status tracking (Pending, Done, Cancelled).' },
  { icon: <HiCreditCard />, title: 'Invoice & Payment Processing', description: 'Stripe-powered checkout with automated fee calculation (sales tax, Omni fee, card processing). Webhook-verified payments, invoice generation, and refund handling.' },
  { icon: <HiShoppingBag />, title: 'Product & Inventory Management', description: 'Complete product CRUD with table/grid views, search, bulk selection, and Cloudinary image uploads. Track stock levels and manage product details from a single panel.' },
  { icon: <HiArrowPath />, title: 'Update Product Quantities', description: 'Quick-edit stock quantities directly from the inventory view. Real-time Firestore sync ensures all dashboards reflect the latest inventory state.' },
  { icon: <HiWrenchScrewdriver />, title: 'Service Management', description: 'Create and manage services with duration, pricing, and type (At Shop / At Home). Assign services to specific employees and control availability per staff member.' },
  { icon: <HiStar />, title: 'Customer Checkout / Cart', description: 'Customer-facing checkout with service selection, date/time picking, address input for at-home bookings, and order summary with tax/fee breakdown before Stripe payment.' },
  { icon: <HiCog6Tooth />, title: 'Booking Details', description: 'Detailed booking view showing client info, selected services, assigned employee, payment status, and timeline. Supports status updates and action triggers from a single screen.' },
  { icon: <HiCalendarDays />, title: 'Task / Todo Scheduling Calendar', description: 'Interactive calendar for scheduling staff tasks, tracking attendance, and managing off-days. Employees see their own schedule while admins get a full team overview.' },
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
      <Head>
        <title>Omni-Connects - Adnan Ayaz | SaaS Booking Platform</title>
        <meta name="description" content="Multi-tenant SaaS platform for salons and barbershops with online bookings, payments, scheduling, and analytics." />
      </Head>
      <Transition />
      <Circles />

      <main className='container mx-auto px-4'>
        <ProjectHero
          title='Omni-Connects'
          subtitle='SaaS Booking & Management for Salons'
          description='A multi-tenant platform that lets independent salons and barbershops accept online bookings, run their day-to-day operations, and grow with built-in payments, scheduling, and analytics \u2014 all in one app.'
          liveUrl='https://www.omniconnects.com'
          year='2025'
          role='Full Stack Developer'
          type='Multi-tenant SaaS'
        >
          <CaseStudyVideo
            src={demoVideo}
            poster='/omni-frames/omni-frame-1.jpg'
            title='Omni-Connects \u2014 product walkthrough'
          />
        </ProjectHero>

        <ProjectOverview
          problem={{ title: 'Independent salons still run on paper and phone calls.', description: 'Small businesses lose bookings to missed calls, juggle staff schedules in spreadsheets, and have no view of revenue, retention, or staff performance. The few tools that exist are clunky, single-role, and built for chains \u2014 not the local owner.' }}
          solution={{ title: 'An all-in-one app with role-based workflows.', description: 'Omni-Connects gives every stakeholder \u2014 customer, employee, manager, and admin \u2014 their own tailored dashboard. Online booking, payments, scheduling, location discovery, and analytics live under a single, real-time platform powered by PostgreSQL and Stripe.' }}
        />

        <ProjectTechStack techs={techStack} />

        <ProjectFeatures features={features} subtitle='Every feature shown in the demo is production code \u2014 no mockups, no placeholders.' />

        <ProjectContributions 
          contributions={contributions}
          description='I led the full-stack development \u2014 from multi-role frontend architecture and real-time booking engine to Stripe payment integration, Firebase Cloud Functions, and the entire e-commerce and community layer.'
        />

        <ProjectResults results={results} />

        <ProjectCTA liveUrl='https://www.omniconnects.com' liveLabel='Visit site' />
      </main>
    </div>
  );
};

export default Omni;
