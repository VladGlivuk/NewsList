import type { AppProps } from 'next/app';
import { NextPage } from 'next';
//components
import AppWrapper from 'components/AppWrapper';
//styles
import 'assets/styles/globals.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <AppWrapper>
    <Component {...pageProps} />
  </AppWrapper>
);

export default MyApp;
