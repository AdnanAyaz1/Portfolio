import '../styles/globals.css';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { AnimatePresence, motion, LazyMotion, domAnimation } from 'framer-motion';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <LazyMotion features={domAnimation}>
      <Head>
        <link
          rel="preload"
          href="/fonts/your-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </LazyMotion>
  );
}

export default MyApp;
