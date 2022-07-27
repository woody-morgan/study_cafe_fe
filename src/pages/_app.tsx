import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import qs from 'qs'
import siteMetadata from 'data/siteMetadata'
import { AnimatePresence } from 'framer-motion'

import type { AppProps } from 'next/app'

import '@src/styles/globals.css'
import ModalContainer from '@src/containers/modal/ModalContainer'
import { PageCommonLayout } from '@src/components/layout'
import { ThemeProvider } from 'next-themes'
import SheetContainer from '@src/containers/sheet/SheetContainer'
import { wrapper } from '@src/store'
import { envConfig } from '@src/core/config/envConfig.js'

axios.defaults.withCredentials = true
axios.defaults.baseURL = envConfig.apiUrl
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params)
}

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
        <PageCommonLayout headerFixed>
          <AnimatePresence initial={false} exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </PageCommonLayout>
        <ModalContainer />
        <SheetContainer />
      </ThemeProvider>
    </>
  )
}

// hoc for recoil root
export default wrapper.withRedux(App)
