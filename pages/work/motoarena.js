import Head from 'next/head';
import Transition from '../../components/Transition';
import Circles from '../../components/Circles';
import {
  ProjectHero,
  ProjectOverview,
  ProjectTechStack,
  ProjectFeatures,
  ProjectContributions,
  ProjectResults,
  ProjectCTA,
} from '../../components/work';
import CaseStudyVideo from '../../components/CaseStudyVideo';

import {
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
      <Head>
        <title>MotoArena - Adnan Ayaz | AI-Powered Car Dealership</title>
        <meta name="description" content="AI-powered dealership management platform with inventory, test drives, and admin dashboard." />
      </Head>
      <Transition />
      <Circles />

      <main className='container mx-auto px-4'>
        <ProjectHero
          title='Motoverse'
          subtitle='AI-Powered Car Dealership Platform'
          description='A modern dealership management platform on Next.js 15 that lets dealers manage inventory, customers request test drives, and admins run the show \u2014 with Cloudinary image pipelines and Google Gen AI baked in.'
          liveUrl='https://ai-moto-arena.vercel.app'
          year='2023'
          role='Full Stack Developer'
          type='Dealership SaaS'
        >
          <CaseStudyVideo
            src='/Motoverse/Landing page.mp4'
            poster='/moto.png'
            title='Motoverse \u2014 product walkthrough'
          />
        </ProjectHero>

        <ProjectOverview
          problem={{
            title: 'Dealerships still juggle spreadsheets and paper test-drive sheets.',
            description:
              'Inventory, test-drive bookings, and customer follow-ups live in separate tools \u2014 so dealers lose leads, customers bounce, and the admin team has no real-time view of what is moving on the lot.',
          }}
          solution={{
            title: 'One Next.js app for inventory, scheduling, and admin.',
            description:
              'A single Next.js 15 deployment with role-based route groups, Prisma + PostgreSQL on the back, Cloudinary for media, and Google Gen AI for smart features \u2014 so dealers, customers, and admins all work from the same source of truth.',
          }}
        />

        <ProjectTechStack techs={techStack} />

        <ProjectFeatures
          features={features}
          title='Key Features'
          subtitle='Every feature shown is production code &mdash; no mockups, no placeholders.'
        />

        <ProjectContributions
          contributions={contributions}
          description='I led the full-stack development \u2014 from schema design and auth architecture to Cloudinary image pipelines, AI features, and the admin dashboard.'
        />

        <ProjectResults results={results} />

        <ProjectCTA liveUrl='https://ai-moto-arena.vercel.app' liveLabel='Visit site' />
      </main>
    </div>
  );
};

export default MotoArena;
