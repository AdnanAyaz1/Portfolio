import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/site-bg.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/circle-star.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <meta name="description" content="Professional portfolio showcasing full-stack development expertise" />
        <meta name="theme-color" content="#131424" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}