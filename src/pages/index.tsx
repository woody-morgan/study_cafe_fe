import React, { FC, ReactNode, useEffect } from 'react'
import { NextPage } from 'next'
import { PageLayout } from '@src/components/layout'
import { mobileLeftPadding, mobileXPadding } from '@src/utils/constants'

import Slider from '@src/components/common/Slider'

import NewMenuCard from '@src/components/common/Card/NewMenuCard'
import MenuPriceCard from '@src/components/common/Card/MenuPriceCard'
import MenuInfoCard from '@src/components/common/Card/MenuInfoCard'

import cx from 'classnames'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { layoutInitialState, layoutState } from '@src/atom/layoutAtom'
import { authState } from '@src/atom/authAtom'

const Section: FC<{
  title?: string
  removePadding?: boolean
  children: ReactNode
}> = ({ title, removePadding = false, children }) => {
  return (
    <div className={'space-y-2'}>
      {title && <h1 className={cx('text-primary font-bold', mobileXPadding)}>{title}</h1>}
      <div className={removePadding ? mobileLeftPadding : mobileXPadding}>{children}</div>
    </div>
  )
}

const IndexPage: NextPage = () => {
  const setUserLayoutState = useSetRecoilState(layoutState)
  const userAuthState = useRecoilValue(authState)

  useEffect(() => {
    setUserLayoutState((prev) => ({
      ...prev,
      title: userAuthState.isLoggedIn
        ? `Good day, ${userAuthState.userName}`
        : layoutInitialState.title,
    }))
  }, [userAuthState.isLoggedIn])

  return (
    <PageLayout fullWidth enableYPadding>
      <div className="space-y-10">
        <Section>
          <MenuInfoCard
            title="Best seller of the week"
            description="Iced Coffee Sweet Heaven"
            linkTo="https://google.com"
            image="/coffee.png"
          />
        </Section>
        <Section title={"This week's recommendations"} removePadding>
          <Slider divider="main-price" className="space-x-6">
            <MenuPriceCard menu="Iced Americano" price="2000W" />
            <MenuPriceCard menu="Iced Americano" price="2000W" />
            <MenuPriceCard menu="Iced Americano" price="2000W" />
          </Slider>
        </Section>
        <Section title={"What's in the shop"}>
          <NewMenuCard
            title="Introducing our new lemonade menu"
            description="Try our refreshing lemonade, strawberry lemonade, and orange lemonade"
            linkTo="https://google.com"
            image="/lemonade.png"
          />
        </Section>
      </div>
    </PageLayout>
  )
}

export default IndexPage
