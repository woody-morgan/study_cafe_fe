// Todo clear jwt token on client
import { apiValidate } from '@src/core/api/apiAuth'
import { wrapper } from '@src/store'
import { clearUserInfo } from '@src/store/modules/auth'
import { setAuthToken } from '@src/utils/authUtil'
import { GetServerSideProps } from 'next'

const withAuthSSR = (getServerSidePropsFunc?: GetServerSideProps): GetServerSideProps => {
  return wrapper.getServerSideProps((store) => {
    return async (ctx) => {
      const authState = store.getState().auth
      if (authState.isLogin) {
        return await getServerSidePropsFunc?.(ctx)
      } else {
        const token = ctx.req.cookies.jwt
        setAuthToken(token)
        try {
          // Todo get user info and set to store
          await apiValidate()
          return await getServerSidePropsFunc?.(ctx)
        } catch (error) {
          // should clear jwt token on client
          store.dispatch(clearUserInfo())
          return {
            props: {},
            redirect: {
              destination: '/login',
              permanent: false,
            },
          }
        }
      }
    }
  })
}

export default withAuthSSR
