import React, { FC, ReactNode } from 'react'
import { PageLayout } from '@src/components/layout'
import MenuInfoCard from '@src/components/common/Card/MenuInfoCard'
import { NextPage } from 'next'
import ImageSlider from '@src/components/common/ImageSlider'
import MenuPriceCard from '@src/components/common/Card/MenuPriceCard'
import cx from 'classnames'
import { mobile_left_padding, mobile_x_padding } from '@src/utils/constants'

const Section: FC<{
  title?: string
  removePadding?: boolean
  children: ReactNode
}> = ({ title, removePadding = false, children }) => {
  return (
    <div className={'space-y-2'}>
      {title && <h1 className={cx('text-primary font-bold', mobile_x_padding)}>{title}</h1>}
      <div className={removePadding ? mobile_left_padding : mobile_x_padding}>{children}</div>
    </div>
  )
}

const Index: NextPage = () => {
  return (
    <PageLayout fullWidth>
      <div className="space-y-10">
        <Section>
          <MenuInfoCard
            title="Best seller of the week"
            description="Iced Coffee Sweet Heaven"
            infoUrl="https://google.com"
            image="/coffee.png"
          />
        </Section>
        <Section title={"This week's recommendations"} removePadding>
          <ImageSlider key="main-price">
            <MenuPriceCard menu="Iced Americano" price="2000W" />
            <MenuPriceCard menu="Iced Americano" price="2000W" />
            <MenuPriceCard menu="Iced Americano" price="2000W" />
          </ImageSlider>
        </Section>
        <Section title={"What's in the shop"}>
          <MenuInfoCard
            title="Best seller of the week"
            description="Iced Coffee Sweet Heaven"
            infoUrl="https://google.com"
            image="/coffee.png"
          />
        </Section>
      </div>
    </PageLayout>
  )
}

export default Index
