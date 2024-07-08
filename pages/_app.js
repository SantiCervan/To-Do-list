import '@/styles/globals.css'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>To-Do List Santiago Cervan</title>
        <meta name="description" content="Una aplicación de lista de tareas construida con React y Next.js" />
        <meta property="og:title" content="To-Do List Santiago Cervan" />
        <meta property="og:description" content="Una aplicación de lista de tareas construida con React y Next.js" />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
