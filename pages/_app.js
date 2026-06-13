import '../styles/globals.css';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { AnimatePresence, motion, LazyMotion, domAnimation } from 'motion/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <LazyMotion features={domAnimation}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='min-h-full sm:h-full'>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </LazyMotion>
  );
}

export default MyApp;
