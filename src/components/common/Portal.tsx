import { PortalType } from '@src/core/interface/portal-type'
import React, { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Portal: FC<{
  selectorId: PortalType
  children: React.ReactNode
}> = ({ selectorId, children }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  })

  return mounted ? createPortal(children, document.getElementById(selectorId)) : null
}

export default Portal
