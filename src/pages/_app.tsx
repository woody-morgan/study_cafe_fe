import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import type { AppProps } from 'next/app';

import '@src/styles/globals.css';
import ModalContainer from '@src/components/containers/modal/ModalContainer';
import { ThemeProvider } from 'next-themes';
import SheetContainer from '@src/components/containers/sheet/SheetContainer';
import { envConfig } from '@src/core/config/envConfig.js';
import { RecoilRoot } from 'recoil';
import { customAxios } from '@src/core/lib/customAxios';
import { getAuthToken } from '@src/utils/authUtil';
import { siteMetadata } from '@src/core/config/siteMetadata';

customAxios().defaults.headers.common.Authorization = `Bearer ${getAuthToken()}`;

const App: NextPage = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <title>{envConfig.appTitle}</title>
        <link rel="icon" href="/logo.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <RecoilRoot>
          <Component {...pageProps} key={router.route} />
          <ModalContainer />
          <SheetContainer />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
};

// hoc for recoil root
export default App;
