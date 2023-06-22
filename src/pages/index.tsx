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

      <div>
        <h1 className='text-4xl font-bold underline'>News List</h1>
      </div>
    </>
  );
};

export default Home;
