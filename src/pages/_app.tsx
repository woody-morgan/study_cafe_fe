import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import qs from 'qs'
import { AnimatePresence } from 'framer-motion'
import { RecoilRoot } from 'recoil'

import type { AppProps } from 'next/app'

import '@src/styles/globals.css'
import ModalContainer from '@src/containers/modal/ModalContainer'
import { CommonLayout } from '@src/components/layout'
import { ThemeProvider } from 'next-themes'
import siteMetadata from 'data/siteMetadata'
import { NextPage } from 'next'

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params)
}

const App: NextPage = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_TITLE}</title>
        <link rel="icon" href="/logo.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <RecoilRoot>
        <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
          <CommonLayout headerFixed>
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </CommonLayout>
        </ThemeProvider>
        <ModalContainer />
      </RecoilRoot>
    </>
  )
}

export default App
