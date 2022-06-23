import { Button } from '@src/components/common'
import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '@src/atom/modal'
import { PageLayout } from '@src/components/layout'

const Index = () => {
  const [modal, setModal] = useRecoilState(modalState)

  return (
    <PageLayout fullWidth>
      <div className="flex flex-col p-32">
        <Button
          onClick={() =>
            setModal({
              name: 'SIGNUP',
              title: 'Sign Up',
            })
          }
        >
          abc
        </Button>
      </div>
    </PageLayout>
  )
}

export default Index
