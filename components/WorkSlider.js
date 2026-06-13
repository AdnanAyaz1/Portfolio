import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { BsArrowRight } from 'react-icons/bs';

const projectsData = {
  "AI Projects": [
    {
      title: 'Agentic AI',
      path: '/agentic-ai.png',
      description: 'Multi-agent AI platform with 5 LLM agents for cafe business intelligence',
      link: '/work/agentic-ai'
    },
  ],
  "Full-stack": [
    {
      title: 'Motoverse',
      path: '/moto.png',
      description: 'AI-powered car marketplace with Gemini API integration',
      link: '/work/motoarena'
    },
    {
      title: 'Omni',
      path: '/omni.png',
      description: 'Multi-role SaaS booking platform with Stripe, Google Maps, and PostgreSQL',
      link: '/work/omni'
    },
    {
      title: 'Expedient',
      path: '/expedient.png',
      description: 'Monorepo vendor management system with 4 role-specific apps and Twilio',
      link: '/work/expedient'
    },
    {
      title: 'DevFlow',
      path: '/DEVFLOW.png',
      description: 'Open-source Q&A platform with AI tag suggestions and reputation system',
      link: '/work/devflow'
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
    <div className="w-full">
      {/* Tabs */}
      <div className="flex justify-center gap-x-4 sm:gap-x-8 mb-8 overflow-x-auto whitespace-nowrap px-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`text-base sm:text-lg font-semibold relative px-3 sm:px-4 py-2 transition-all duration-300
              ${activeTab === category ? 'text-accent' : 'text-white/70 hover:text-white'}
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-accent
              after:transition-all after:duration-300
              ${activeTab === category ? 'after:w-full' : 'after:w-0'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="h-[340px] sm:h-[400px] w-full"
      >
        {projectsData[activeTab].map((project, index) => (
          <SwiperSlide key={index}>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-lg overflow-hidden flex items-center justify-center group h-[300px] sm:h-[340px] block"
            >
              <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                <Image
                  src={project.path}
                  alt={project.title}
                  fill
                  quality={90}
                  placeholder="blur"
                  blurDataURL={project.path}
                  priority={index === 0}
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 p-4">
                  <div className="flex flex-col items-start gap-y-2">
                    <div className="delay-100 font-bold text-white text-lg">{project.title}</div>
                    <div className="text-white text-sm max-w-[300px]">{project.description}</div>
                    <div className="flex items-center gap-x-1.5 text-[11px] tracking-[0.15em] mt-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-300">
                      <span>VIEW PROJECT</span>
                      <BsArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
