import { AnyAction, EnhancedStore, MiddlewareArray } from '@reduxjs/toolkit'
import { wrapper } from '@src/store'
import { RootStateType } from '@src/store/modules'
import { GetServerSideProps } from 'next'
import { ThunkMiddleware } from 'redux-thunk'

/**
 * @description
 * export type HomePageProps = {
 * isLoggedIn: auth.isLogin
 * }
 *
 * export const getServerSideProps: GetServerSideProps<HomeProps> = withStoreSSR((store) => {
 *   return async (ctx) => {
 *     const auth = store.getState().auth
 *     return { props: { isLoggedIn: auth.isLogin } }
 *   }
 * })
 * @param callback
 */

const withStoreSSR = (
  callback: (
    store: EnhancedStore<
      RootStateType,
      AnyAction,
      MiddlewareArray<[ThunkMiddleware<any, AnyAction, undefined>, ...any[]]>
    >
  ) => GetServerSideProps<any>
) => {
  return wrapper.getServerSideProps((store) => {
    return callback(store)
  })
}

export default withStoreSSR
