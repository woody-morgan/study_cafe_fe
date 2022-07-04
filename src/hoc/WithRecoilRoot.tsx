import React from 'react'
import { RecoilRoot } from 'recoil'

const withRecoilRoot = (WrappedComponent) => {
  const hocComponent = (props) => {
    return (
      <RecoilRoot>
        <WrappedComponent {...props} />{' '}
      </RecoilRoot>
    )
  }
  return hocComponent
}

export default withRecoilRoot
