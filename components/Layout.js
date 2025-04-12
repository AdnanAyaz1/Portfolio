// fonts
import { Sora } from '@next/font/google';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from './Loading';

// Dynamically import components that are not needed immediately
const Nav = dynamic(() => import('../components/Nav'), {
  loading: () => <Loading />
});

const TopLeftImg = dynamic(() => import('../components/TopLeftImg'), {
  ssr: false
});

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Suspense fallback={<Loading />}>
        <TopLeftImg />
        <Nav />
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
