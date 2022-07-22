import { useRouter } from 'next/router'
import { useEffect } from 'react'

export function useHandleOnRoutingStart(handleOnLoad: () => void) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', handleOnLoad)
    return () => {
      router.events.off('routeChangeStart', handleOnLoad)
    }
  }, [])
}

export function useHandleOnRoutingFinish(handleOnLoad: () => void) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', handleOnLoad)
    return () => {
      router.events.off('routeChangeComplete', handleOnLoad)
    }
  }, [])
}

export function useHandleOnRoutingError(handleOnLoad: () => void) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeError', handleOnLoad)
    return () => {
      router.events.off('routeChangeError', handleOnLoad)
    }
  }, [])
}
