import { useRootDispatch } from '@src/hooks/useRootState'
import { pageTransitionBackward } from '@src/store/modules/layout'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const useBrowserBackward = () => {
  const router = useRouter()
  const dispatch = useRootDispatch()

  useEffect(() => {
    router.beforePopState(() => {
      dispatch(pageTransitionBackward())
      return true
    })
    return () => {
      router.beforePopState(() => true)
    }
  }, [])
}

export default useBrowserBackward
