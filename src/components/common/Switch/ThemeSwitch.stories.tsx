import React from 'react'
import { ComponentMeta } from '@storybook/react'

import ThemeSwitch from './ThemeSwitch'
import { btnStyles } from '@src/utils/constants'

export default {
  title: 'Components/ThemeSwitch',
  component: ThemeSwitch,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof ThemeSwitch>

export const Default = () => {
  return (
    <div className="flex flex-col gap-2">
      <ThemeSwitch />
    </div>
  )
}
