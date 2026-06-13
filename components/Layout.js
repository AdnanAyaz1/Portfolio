// fonts
import { Sora } from 'next/font/google';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const TopLeftImg = dynamic(() => import('../components/TopLeftImg'), { ssr: false });
const Nav = dynamic(() => import('../components/Nav'), { ssr: false });
const PremiumLoader = dynamic(() => import('../components/PremiumLoader'), { ssr: false });

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const Layout = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative min-h-screen`}>
        <div className="fixed inset-0 flex items-center justify-center bg-primary z-50">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <>
      {!loaded && <PremiumLoader onComplete={() => setLoaded(true)} />}
      <div
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <TopLeftImg />
        <Nav />
        {children}
      </div>
    </>
  );
};

export default Layout;
