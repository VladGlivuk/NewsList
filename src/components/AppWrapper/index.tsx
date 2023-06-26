import { FC, ReactNode } from 'react';
import Head from 'next/head';
//components
import Header from './Header';
import Footer from './Footer';

type AppWrapperProps = {
  children: ReactNode;
};

const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  return (
    <div className='flex flex-col w-full h-screen'>
      <Head>
        <title>News List</title>
        <link rel='icon' href='/favicon.png' />
        <meta charSet="utf-8" />
        <meta name="keywords" content="news, news-list, read news" />
        <meta name='description' content='application for reading news' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppWrapper;
