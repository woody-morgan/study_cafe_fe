import React, { FC } from 'react'
import { ImageWrapper } from '..'
import CardWrapper from './CardWrapper'

type CardProps = {
  menu: string
  price: string
}

const MenuPriceCard: FC<CardProps> = ({ menu, price }) => {
  return (
    <CardWrapper className="relative w-40 h-[13rem] overflow-hidden">
      <div className="relative w-full h-full -z-0">
        <ImageWrapper
          bgFilter="bg-gradient-to-b from-transparent via-transparent to-primary"
          src="/coffee.png"
          alt="coffee"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-3 space-y-4 absolute bottom-0 left-0 flex flex-col justify-end text-secondary font-bold text-xs">
        <span>{menu}</span>
        <span>{price}</span>
      </div>
    </CardWrapper>
  )
}

export default MenuPriceCard
