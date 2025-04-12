// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
import { useState } from 'react';

// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Omni - SaaS Platform',
          path: '/thumb1.jpg',
          description: 'Salon service booking and management system with scheduling and Stripe integration'
        },
        {
          title: 'DevFlow',
          path: '/thumb2.jpg',
          description: 'Full-stack StackOverflow clone with Q&A, voting system, and markdown editor'
        },
      ],
    },
    {
      images: [
        {
          title: 'Messenger Clone',
          path: '/thumb3.jpg',
          description: 'Real-time messenger with authentication and chat features using Next.js and pusher'
        },
        {
          title: 'Moto-Arena',
          path: '/thumb4.jpg',
          description: 'AI-powered car marketplace using Next.js, Gemini API, and cloud storage'
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <div>
      {/* slider */}
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='h-[280px] sm:h-[480px]'
      >
        {workSlider.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    >
                      <div className='flex items-center justify-center relative overflow-hidden group'>
                        {/* image */}
                        <img src={image.path} alt={image.title} width={500} height={300} />
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                        {/* title */}
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          <div className='flex flex-col items-start gap-y-2 text-[13px] tracking-[0.2em]'>
                            {/* title */}
                            <div className='delay-100 font-bold text-white'>{image.title}</div>
                            {/* description */}
                            <div className='text-white text-sm'>{image.description}</div>
                            {/* live project button */}
                            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                              {/* title part 1 */}
                              <div className='delay-100'>LIVE</div>
                              {/* title part 2 */}
                              <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                                PROJECT
                              </div>
                              {/* icon */}
                              <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                                <BsArrowRight />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
