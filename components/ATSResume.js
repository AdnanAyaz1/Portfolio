const ATSResume = ({ resumeRef }) => {
  return (
    <div
      ref={resumeRef}
      style={{
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        color: '#1a1a1a',
        lineHeight: 1.55,
        background: '#ffffff',
        padding: '44px 52px',
        maxWidth: '800px',
        fontSize: '12px',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '18px', paddingBottom: '14px', borderBottom: '2.5px solid #1a1a1a' }}>
        <h1 style={{ fontSize: '26px', fontWeight: 800, letterSpacing: '1.5px', margin: '0 0 6px 0', color: '#000', textTransform: 'uppercase' }}>
          Adnan Ayaz Khan
        </h1>
        <div style={{ fontSize: '12.5px', color: '#333', fontWeight: 500, marginBottom: '8px', letterSpacing: '0.3px' }}>
          Full Stack Engineer &bull; Next.js &bull; TypeScript &bull; Node.js &bull; AI Applications
        </div>
        <div style={{ fontSize: '11px', color: '#555', lineHeight: 1.6 }}>
          Pakistan &nbsp;|&nbsp; adnanayaz479@gmail.com &nbsp;|&nbsp; +92 335 9740228
          <br />
          linkedin.com/in/adnan-ayaz-awan &nbsp;|&nbsp; github.com/AdnanAyaz1
        </div>
      </header>

      {/* Summary */}
      <Section title="Professional Summary">
        <p style={{ margin: 0, color: '#333', lineHeight: 1.65, fontSize: '12px' }}>
          Full Stack Engineer with 2+ years shipping production SaaS platforms and AI-powered applications.
          Built multi-agent AI pipelines, client portals, dashboards, and payment systems for healthcare staffing
          and service booking platforms. Specialized in Next.js/TypeScript frontends with React, Redux Toolkit,
          and Firebase backends. Hands-on experience with agentic LLM systems, real-time chat, scheduling,
          and Stripe integrations.
        </p>
      </Section>

      {/* Skills */}
      <Section title="Technical Skills">
        <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '4px 14px', fontSize: '11.5px' }}>
          <SkillLabel text="Frontend" />
          <SkillValue text="Next.js, React.js, TypeScript, JavaScript, Tailwind CSS, Shadcn UI, Redux Toolkit, Zustand" />
          <SkillLabel text="Backend" />
          <SkillValue text="Node.js, Express.js, REST APIs, Prisma ORM, Mongoose, Sequelize, BullMQ, Cron Jobs" />
          <SkillLabel text="Databases" />
          <SkillValue text="PostgreSQL, MongoDB, Redis, SQLite, MySQL, Firestore" />
          <SkillLabel text="AI & Automation" />
          <SkillValue text="Vercel AI SDK, OpenAI APIs, Google Gemini, Groq, Agentic AI Systems, Multi-Agent Pipelines" />
          <SkillLabel text="DevOps" />
          <SkillValue text="Docker, GitHub Actions, CI/CD, PM2, AWS (S3, SES, SQS, EC2)" />
          <SkillLabel text="Tools" />
          <SkillValue text="Git, GitHub, Postman, VS Code, Figma, Firebase, Auth0, Stripe, Cloudinary, Twilio" />
        </div>
      </Section>

      {/* Experience */}
      <Section title="Professional Experience">
        <ExperienceItem
          role="Full Stack Developer"
          company="Product Box"
          location="Peshawar, Pakistan"
          date="Jan 2025 — Present"
          bullets={[
            'Built the main landing page and real-time chatbot for Expedient VMS, a multi-role vendor management system for healthcare staffing agencies.',
            'Developed client and hospital portal dashboards with React Big Calendar for scheduling and timesheet management.',
            'Implemented role-based routing and Auth0 integration across client and hospital portals.',
            'Optimised UI performance with lazy loading and component splitting — improved Lighthouse score from 62 to 91.',
            'Set up Docker environments and GitHub Actions CI/CD pipelines, reducing deploy time from 15 min to 3 min.',
          ]}
          stack="React · Vite · Turborepo · Tailwind CSS · Auth0 · Twilio · React Big Calendar · Chart.js"
        />
        <ExperienceItem
          role="Full Stack Developer"
          company="Apptex Software Solutions"
          location="Peshawar, Pakistan"
          date="2024 — Jan 2025"
          bullets={[
            'Built the client-side interface for Omni Connects including order management, booking system, location handling, and service provider pages.',
            'Developed the dashboard managing services, products, orders, bookings, freelancer and business accounts, subscriptions, and payments.',
            'Integrated Stripe payment processing (checkout, subscriptions, refunds) via Firebase Cloud Functions.',
            'Implemented Redux Toolkit for complex state management across 20+ slices with zero data-sync bugs.',
          ]}
          stack="React 18 · Vite · Redux Toolkit · Zustand · Firebase (Firestore, Auth, Cloud Functions) · Stripe · Google Maps API · Tailwind CSS"
        />
      </Section>

      {/* Projects */}
      <Section title="Selected Projects">
        <ProjectItem
          name="CafePromo AI — Agentic AI Business Intelligence Platform"
          bullets={[
            'Built a 5-agent LLM pipeline (Menu Analyst, Weather Analyst, Strategist, Critic, Synthesizer) that generates daily promotion recommendations for cafes and restaurants.',
            'Implemented a Critic-Strategist revision loop where the Critic agent flags blockers and triggers the Strategist to revise its plan before final output.',
            'Integrated Open-Meteo weather API and Crawlee + Playwright headless browser for competitor web scraping with LLM-based structured data extraction.',
            'Built background job infrastructure with BullMQ workers, Redis queues, and cron scheduling for autonomous daily operation.',
          ]}
          stack="Next.js 16 · TypeScript · React 19 · Vercel AI SDK · Groq · Prisma 7 · PostgreSQL · Redis · BullMQ · Playwright"
        />
        <ProjectItem
          name="Expedient VMS — Multi-Role Vendor Management System"
          url="expedientvms.com"
          bullets={[
            'Built the main landing page and AI chatbot for the vendor management platform.',
            'Developed client and hospital portal dashboards with React Big Calendar for scheduling and timesheet approvals.',
            'Integrated Auth0 for JWT authentication, Twilio Conversations for in-app messaging, and AWS S3 for document uploads.',
          ]}
          stack="React · Vite · Turborepo · Tailwind CSS · Auth0 · Twilio · AWS S3 · Chart.js"
        />
        <ProjectItem
          name="Omni Connects — Booking & Management Platform"
          url="omniconnects.com"
          bullets={[
            'Built the client-side interface handling orders, bookings, location-based shop discovery, and service provider pages.',
            'Developed the dashboard managing services, products, orders, freelancer/business accounts, and subscriptions.',
            'Integrated Stripe payment processing via Firebase Cloud Functions with 99.9% uptime.',
          ]}
          stack="React 18 · Vite · Redux Toolkit · Firebase · Stripe · Google Maps API · Tailwind CSS · Ant Design"
        />
        <ProjectItem
          name="MotoArena — AI-Powered Vehicle Discovery Platform"
          url="ai-moto-arena.vercel.app"
          bullets={[
            'Built the full-stack application with Next.js 15, Prisma, and PostgreSQL for 6 data models.',
            'Implemented NextAuth v5 with Google, GitHub, and Credentials providers.',
            'Integrated Google Gemini 2.5 Flash for AI-based car image identification and search.',
            'Built Cloudinary image pipeline for multi-image uploads and featured-cars carousel.',
          ]}
          stack="Next.js 15 · TypeScript · Prisma 6 · PostgreSQL · NextAuth v5 · Google Gemini · Cloudinary · shadcn/ui"
        />
      </Section>

      {/* Education */}
      <Section title="Education">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div>
            <span style={{ fontWeight: 700, fontSize: '12px', color: '#111' }}>Bachelor of Science — Computer Systems Engineering</span>
            <span style={{ color: '#666', fontSize: '11.5px' }}> &nbsp;|&nbsp; University of Engineering &amp; Technology (UET) Peshawar</span>
          </div>
          <span style={{ color: '#555', fontSize: '11px', whiteSpace: 'nowrap' }}>2020 — 2024</span>
        </div>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '16px' }}>
    <h2
      style={{
        fontSize: '11px',
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '2px',
        color: '#000',
        borderBottom: '1.5px solid #d0d0d0',
        paddingBottom: '4px',
        marginBottom: '10px',
        marginTop: 0,
      }}
    >
      {title}
    </h2>
    {children}
  </div>
);

const SkillLabel = ({ text }) => (
  <div style={{ fontWeight: 700, color: '#111', fontSize: '11.5px', paddingTop: '1px' }}>{text}</div>
);

const SkillValue = ({ text }) => (
  <div style={{ color: '#444', fontSize: '11.5px' }}>{text}</div>
);

const ExperienceItem = ({ role, company, location, date, bullets, stack }) => (
  <div style={{ marginBottom: '14px', pageBreakInside: 'avoid' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1px' }}>
      <div>
        <span style={{ fontWeight: 700, fontSize: '12.5px', color: '#111' }}>{role}</span>
        <span style={{ color: '#444', fontSize: '12px' }}> — {company}</span>
      </div>
      <span style={{ color: '#555', fontSize: '11px', whiteSpace: 'nowrap' }}>{date}</span>
    </div>
    <div style={{ color: '#666', fontSize: '10.5px', marginBottom: '4px' }}>{location}</div>
    <ul style={{ margin: '0 0 3px 0', paddingLeft: '15px' }}>
      {bullets.map((b, i) => (
        <li key={i} style={{ color: '#333', fontSize: '11.5px', marginBottom: '2.5px', lineHeight: 1.55 }}>{b}</li>
      ))}
    </ul>
    <div style={{ fontSize: '10.5px', color: '#666', fontStyle: 'italic' }}>Stack: {stack}</div>
  </div>
);

const ProjectItem = ({ name, url, bullets, stack }) => (
  <div style={{ marginBottom: '12px', pageBreakInside: 'avoid' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
      <span style={{ fontWeight: 700, fontSize: '12px', color: '#111' }}>{name}</span>
      {url && <span style={{ color: '#666', fontSize: '10.5px' }}>{url}</span>}
    </div>
    <ul style={{ margin: '2px 0', paddingLeft: '15px' }}>
      {bullets.map((b, i) => (
        <li key={i} style={{ color: '#333', fontSize: '11.5px', marginBottom: '2px', lineHeight: 1.55 }}>{b}</li>
      ))}
    </ul>
    <div style={{ fontSize: '10.5px', color: '#666', fontStyle: 'italic' }}>Stack: {stack}</div>
  </div>
);

export default ATSResume;
