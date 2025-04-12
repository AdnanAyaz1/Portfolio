// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';

// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Alex Thompson',
    position: 'CEO, Apptex Software Solutions',
    message:
      'Adnan demonstrated exceptional skill in developing modern web applications. His work on our SaaS platforms using Next.js and TypeScript was outstanding.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Sarah Chen',
    position: 'Project Lead',
    message:
      'Working with Adnan on the Omni platform was a great experience. His expertise in full-stack development and attention to detail made the project a success.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Mark Williams',
    position: 'Technical Director',
    message:
      'Adnan\'s proficiency with modern web technologies and ability to deliver scalable solutions made him an invaluable team member on our projects.',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      width={100} 
                      height={100}
                      className='rounded-full border-2 border-accent/50'
                    />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest text-accent/70'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-accent/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left italic'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
