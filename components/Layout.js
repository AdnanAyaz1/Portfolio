// fonts
import { Sora } from '@next/font/google';
import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';
import Loading from './Loading';
import PremiumLoader from './PremiumLoader';

// Dynamically import components that are not needed immediately
const Nav = dynamic(() => import('../components/Nav'), {
  loading: () => <Loading />
});

const TopLeftImg = dynamic(() => import('../components/TopLeftImg'));

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const Layout = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <PremiumLoader onComplete={() => setLoaded(true)} />}
      <div
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <Suspense fallback={<Loading />}>
          <TopLeftImg />
          <Nav />
          {children}
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
