import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import qs from 'qs'
import type { AppProps } from 'next/app'

import '@src/styles/globals.css'

import { AnimatePresence } from 'framer-motion'

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params)
}

function App({ Component, pageProps, router }: AppProps): JSX.Element {
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
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}

export default App
