import Link from 'next/link'
import React, { FC } from 'react'
import ImageWrapper from '../../atom/ImageWrapper'
import CardWrapper from '../../atom/Card/CardWrapper'

type MenuCardProps = {
  title: string
  description: string
  linkTo: string
  image: string
}

const MenuInfoCard: FC<MenuCardProps> = ({ title, description, linkTo, image }) => {
  return (
    <CardWrapper linkTo={linkTo}>
      <div className="flex p-4 h-44 justify-between">
        <div className="flex flex-col w-3/5 justify-between text-white">
          <span className="text-sm">{title}</span>
          <h2 className="text-lg font-bold">{description}</h2>
          <Link href={linkTo}>
            <a className="text-sm text-white">More info {'->'}</a>
          </Link>
        </div>
        <div className="relative w-24 h-full">
          <ImageWrapper src={image} alt="coffee" layout="fill" />
        </div>
      </div>
    </CardWrapper>
  )
}

export default MenuInfoCard
