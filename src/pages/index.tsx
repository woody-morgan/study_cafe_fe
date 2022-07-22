import React, { FC, ReactNode } from 'react'
import { NextPage } from 'next'
import { PageLayout } from '@src/components/layout'

import Slider from '@src/components/common/Slider'

import NewMenuCard from '@src/components/common/Card/NewMenuCard'
import MenuPriceCard from '@src/components/common/Card/MenuPriceCard'
import MenuInfoCard from '@src/components/common/Card/MenuInfoCard'

import cx from 'classnames'

const Section: FC<{
  title?: string
  children: ReactNode
  className?: string
}> = ({ title, children, className }) => {
  return (
    <div className={className}>
      {title && <h1 className={cx('text-primary-500 font-bold')}>{title}</h1>}
      <div>{children}</div>
    </div>
  )
}

const IndexPage: NextPage = () => {
  return (
    <PageLayout fullWidth>
      <div className="space-y-4 py-2">
        <Section className="px-side-padding">
          <MenuInfoCard
            title="Best seller of the week"
            description="Iced Coffee Sweet Heaven"
            linkTo="https://google.com"
            image="/coffee.png"
          />
        </Section>
        <Section className="pl-side-padding" title={"This week's recommendations"}>
          <Slider divider="main-price" className="space-x-6">
            <MenuPriceCard menu="Iced Americano" price="2000W" />
            <MenuPriceCard menu="Iced Americano" price="2000W" />
            <MenuPriceCard menu="Iced Americano" price="2000W" />
          </Slider>
        </Section>
        <Section className="px-side-padding" title={"What's in the shop"}>
          <NewMenuCard
            title="Introducing our new lemonade menu"
            description="Try our refreshing lemonade, strawberry lemonade, and orange lemonade"
            linkTo="/"
            image="/lemonade.png"
          />
        </Section>
      </div>
    </PageLayout>
  )
}

export default IndexPage
