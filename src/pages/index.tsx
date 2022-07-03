import React, { FC, ReactNode } from 'react'
import { NextPage } from 'next'
import { PageLayout } from '@src/components/layout'
import { mobileLeftPadding, mobileXPadding } from '@src/utils/constants'

import ImageSlider from '@src/components/common/ImageSlider'

import NewMenuCard from '@src/components/common/Card/NewMenuCard'
import MenuPriceCard from '@src/components/common/Card/MenuPriceCard'
import MenuInfoCard from '@src/components/common/Card/MenuInfoCard'

import cx from 'classnames'

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
          <ImageSlider divider="main-price">
            <MenuPriceCard menu="Iced Americano" price="2000W" />
            <MenuPriceCard menu="Iced Americano" price="2000W" />
            <MenuPriceCard menu="Iced Americano" price="2000W" />
          </ImageSlider>
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
