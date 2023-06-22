import { NextPage } from 'next';
import Head from 'next/head';

export const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>News List</title>
        <meta name='description' content='Application for reading news' />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <div>News List</div>
    </>
  );
};

export default Home;
