// icons
import {
  RxPencil2,
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
  RxMobile
} from "react-icons/rx";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode as FreeModeModule, Pagination as PaginationModule } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// data
export const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Full Stack Development',
    description: 'End-to-end web application development using Next.js, Express, and modern databases',
  },
  {
    icon: <RxMobile />,
    title: 'Responsive UI/UX',
    description: 'Modern, mobile-first interfaces built with TypeScript, Tailwind CSS and Shadcn',
  },
  {
    icon: <RxRocket />,
    title: 'API Development',
    description: 'RESTful API design and implementation with Express, Prisma, and efficient database architecture',
  },
  {
    icon: <RxPencil2 />,
    title: 'Database Solutions',
    description: 'Database design and implementation using MongoDB, PostgreSQL, and SQLite with Prisma ORM',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeModeModule, PaginationModule]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-[300px] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] hover:scale-105 transition-all duration-300 ease-in-out'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='flex-1'>
                <div className='mb-2 text-lg group-hover:text-accent transition-colors duration-300'>{item.title}</div>
                <p className='max-w-[350px] leading-normal line-clamp-4'>
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className='text-3xl self-end transform group-hover:translate-x-2 transition-transform duration-300'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
