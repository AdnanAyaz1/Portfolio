// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from './Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-4 sm:px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-4 sm:py-8'>
          {/* logo */}
          <Link href={'/'}>
            <Image
              src={'/logo.svg'}
              width={160}
              height={35}
              alt=''
              priority={true}
              className='sm:w-[220px] sm:h-[48px]'
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
