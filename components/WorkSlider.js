// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination as PaginationModule } from 'swiper/modules';

// icons
import { BsArrowRight } from 'react-icons/bs';

// projects data
const projectsData = {
  "Full-stack": [
    {
      title: 'DevFlow - Q&A Platform',
      path: '/devflow.jpg',
      description: 'Full-stack StackOverflow clone with Q&A, voting system, and markdown editor',
      link: 'https://github.com/AdnanAyaz1/DevFlow_Prisma'
    },
    {
      title: 'MotoArena AI',
      path: '/moto.png',
      description: 'AI-powered car marketplace with Gemini API integration',
      link: 'https://github.com/AdnanAyaz1/MotoArena-AI-CAR-MARKET'
    }
  ],
  "Frontend": [
    {
      title: 'Coffee Lot',
      path: '/coffee.png',
      description: 'Modern coffee shop website with animations and responsive design',
      link: 'https://github.com/AdnanAyaz1/the-coffee-lot'
    },
    {
      title: 'Bistro Cafe Landing',
      path: '/bistro.png',
      description: 'Animated landing page using Next.js, Tailwind, and Framer Motion',
      link: 'https://github.com/AdnanAyaz1/Bistro-Caffe-landing-page'
    },
    {
      title: 'Nike Landing Page',
      path: '/nike.png',
      description: 'Modern landing page with animations and responsive design',
      link: 'https://github.com/AdnanAyaz1/Nike_landingPage'
    }
  ],
  "Backend": [
    {
      title: 'E-commerce Backend',
      path: '/thumb2.jpg',
      description: 'Complete e-commerce solution with cart and payments',
      link: 'https://github.com/AdnanAyaz1/Ecommerce_Backend'
    }
  ]
};

const WorkSlider = () => {
  const [activeTab, setActiveTab] = useState("Full-stack");
  const categories = Object.keys(projectsData);

  return (
    <div className="container mx-auto px-4">
      {/* Tabs */}
      <div className="flex justify-center gap-x-8 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`text-lg font-semibold relative px-4 py-2 transition-all duration-300
              ${activeTab === category ? 'text-accent' : 'text-white/70 hover:text-white'}
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-accent
              after:transition-all after:duration-300
              ${activeTab === category ? 'after:w-full' : 'after:w-0'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData[activeTab].map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg overflow-hidden flex items-center justify-center group h-[300px]"
          >
            <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
              {/* image */}
              <Image
                src={project.path}
                alt={project.title}
                fill
                quality={90}
                priority={index === 0}
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
              {/* content */}
              <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 p-4">
                <div className="flex flex-col items-start gap-y-2">
                  {/* title */}
                  <div className="delay-100 font-bold text-white text-lg">{project.title}</div>
                  {/* description */}
                  <div className="text-white text-sm max-w-[300px]">{project.description}</div>
                  {/* view project button */}
                  <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] mt-4">
                    <span className="delay-100">VIEW</span>
                    <span className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                      PROJECT
                    </span>
                    <BsArrowRight className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WorkSlider;
