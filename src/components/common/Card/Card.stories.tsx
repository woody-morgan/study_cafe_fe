import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MenuInfoCard from './MenuInfoCard'
import MenuPriceCard from './MenuPriceCard'

export default {
  title: 'Components/Card',
} as ComponentMeta<typeof MenuInfoCard & typeof MenuPriceCard>

const MenuInfoTemplate: ComponentStory<typeof MenuInfoCard> = (args) => (
  <MenuInfoCard {...args}></MenuInfoCard>
)

export const MenuInfoEX = MenuInfoTemplate.bind({})

MenuInfoEX.args = {
  title: 'Best seller of the Week',
  description: 'Iced Coffee Sweet Heaven',
  infoUrl: 'https://www.google.com',
  image: '/coffee.png',
}

const MenuPriceTemplate: ComponentStory<typeof MenuPriceCard> = (args) => (
  <MenuPriceCard {...args}></MenuPriceCard>
)

export const MenuPriceEx = MenuPriceTemplate.bind({})

MenuPriceEx.args = {
  menu: 'Coffee',
  price: '$1.99',
}
