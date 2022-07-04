import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import qs from 'qs'
import siteMetadata from 'data/siteMetadata'
import { useSetRecoilState } from 'recoil'
import { AnimatePresence } from 'framer-motion'

import type { AppProps } from 'next/app'

import '@src/styles/globals.css'
import ModalContainer from '@src/containers/modal/ModalContainer'
import { CommonLayout } from '@src/components/layout'
import { ThemeProvider } from 'next-themes'
import { authSelector } from '@src/atom/authAtom'
import { useTimeout } from '@src/hooks'
import withRecoilRoot from '@src/hoc/WithRecoilRoot'

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params)
}

const App: NextPage = ({ Component, pageProps, router }: AppProps) => {
  const setUserAuthSelector = useSetRecoilState(authSelector)

  // Todo: need add auth checker by router
  // need to care about immutability
  useTimeout(() => {
    setUserAuthSelector((prev) => ({
      ...prev,
      userName: 'John Doe',
      isLoggedIn: true,
      userNotifications: [{ type: 'SUCCESS', id: 1, title: 'test', message: 'test' }],
    }))
  }, 5000)

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
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <CommonLayout headerFixed>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </CommonLayout>
      </ThemeProvider>
      <ModalContainer />
    </>
  )
}

// hoc for recoil root
export default withRecoilRoot(App)
