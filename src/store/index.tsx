import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import logger from 'redux-logger'

import reducer from './modules'

const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => {
      if (process.env.NODE_ENV !== 'production') {
        return getDefaultMiddleware().concat(logger)
      } else {
        return getDefaultMiddleware()
      }
    },
    devTools: process.env.NODE_ENV !== 'production',
  })

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
})
