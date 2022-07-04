import { useEffect } from 'react'

function UseTimeout(callback: () => void, delay: number) {
  useEffect(() => {
    const timeout = setTimeout(callback, delay)
    return () => {
      clearTimeout(timeout)
    }
  }, [])
}

export default UseTimeout
