import React from 'react'
import { useRouter } from 'next/router'

const SpecPageByID = () => {
  const router = useRouter()
  const { id } = router.query

  return <div>SpecPageByID {id}</div>
}

export default SpecPageByID
