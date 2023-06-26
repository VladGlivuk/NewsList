import type { AppProps } from 'next/app';
import { NextPage } from 'next';
//store
import { Provider as StoreProvider } from 'store';
//components
import AppWrapper from 'components/AppWrapper';
//styles
import 'assets/styles/globals.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <StoreProvider>
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  </StoreProvider>
);

export default MyApp;
