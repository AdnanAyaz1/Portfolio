import Head from 'next/head';
import Transition from '../../components/Transition';
import Circles from '../../components/Circles';
import CaseStudyVideo from '../../components/CaseStudyVideo';
import { FaReact, FaAws } from 'react-icons/fa';
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
  SiReactquery,
  SiReacthookform,
  SiChartdotjs,
} from 'react-icons/si';

import {
  ProjectHero,
  ProjectOverview,
  ProjectTechStack,
  ProjectFeatures,
  ProjectContributions,
  ProjectResults,
  ProjectCTA,
} from '../../components/work';

const features = [
  {
    icon: <FaReact />,
    title: 'Multi-Role Apps',
    description:
      'Four role-specific applications (admin, client, candidate, vendor) sharing a single design system and code base via the monorepo.',
  },
  {
    icon: <SiVite />,
    title: 'Orders & Timesheets',
    description:
      'End-to-end order lifecycle, react-big-calendar scheduling, and timesheet approvals with server-side pagination via TanStack Table.',
  },
  {
    icon: <SiTwilio />,
    title: 'Twilio Messaging',
    description:
      'In-app conversations between clients, vendors, and candidates powered by Twilio Conversations with read state and notifications.',
  },
  {
    icon: <FaAws />,
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
  { name: 'AWS', icon: <FaAws />, color: 'text-[#FF9900]' },
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
  { value: '3', label: 'Live portals', sub: 'Client, Candidate, Vendor' },
];

const Expedient = () => {
  return (
    <div className='min-h-full bg-primary/30 pt-16 sm:pt-24 xl:pt-32 pb-32 sm:pb-40 xl:pb-56'>
      <Head>
        <title>Expedient VMS - Adnan Ayaz | Vendor Management System</title>
        <meta name="description" content="Multi-role vendor management system with 4 role-specific apps for staffing agencies." />
      </Head>
      <Transition />
      <Circles />

      <main className='container mx-auto px-4'>
        <ProjectHero
          title='Expedient VMS'
          subtitle='Multi-Role Vendor Management System'
          description='A monorepo that powers four role-specific web apps (admin, client, candidate, vendor) on top of one Express + MySQL backend, giving staffing agencies a single source of truth for orders, candidates, timesheets, and documents.'
          year='2025'
          role='Full Stack Developer'
          type='Monorepo / 4 apps'
        >
          <CaseStudyVideo
            src=''
            poster='/expedient.png'
            title='Expedient VMS \u2014 product walkthrough'
          />
        </ProjectHero>

        <ProjectOverview
          problem={{
            title: 'Staffing agencies run on stitched-together tools.',
            description:
              "Recruiting teams juggle separate portals for clients, candidates, vendors, and timesheets \u2014 each with its own login, data model, and reporting. Orders fall through the cracks, timesheet approvals lag, and there is no single view of the business.",
          }}
          solution={{
            title: 'One monorepo. Four role-based apps. One backend.',
            description:
              'A Turbo-repo monorepo where four role-specific React apps (admin, client, candidate, vendor) share one design system and consume a single Express + MySQL API \u2014 keeping data consistent and shipping faster.',
          }}
        />

        <ProjectTechStack techs={techStack} />

        <ProjectFeatures
          features={features}
          subtitle='Every feature shown is production code &mdash; no mockups, no placeholders.'
        />

        <ProjectContributions
          contributions={contributions}
          description='I led the full-stack development \u2014 from monorepo architecture and role-based frontend apps to the Express backend, AWS integrations, and Twilio messaging layer.'
        />

        <ProjectResults results={results} />

        <ProjectCTA liveUrl='https://client.expedientvms.com/auth' liveLabel='Client Portal' />
      </main>
    </div>
  );
};

export default Expedient;
