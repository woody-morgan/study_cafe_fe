import { useRootDispatch } from '@src/hooks'
import { pageTransitionBackward } from '@src/store/modules/layout'
import { useRouter } from 'next/router'

export default function useBackward() {
  const router = useRouter()
  const dispatch = useRootDispatch()

  const handleBackward = async () => {
    dispatch(pageTransitionBackward())
    await router.back()
  }

  return handleBackward
}
