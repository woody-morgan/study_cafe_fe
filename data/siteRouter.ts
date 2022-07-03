import { SVGTypes } from '@src/components/common/Icon/Icon'

export type SiteRouterType = {
  path: string
  name: string
  icon: SVGTypes
}

export const siteRouter: SiteRouterType[] = [
  {
    path: 'https://www.google.com',
    name: 'Home',
    icon: 'home',
  },
  {
    path: 'https://www.google.com',
    name: 'Drink Menu',
    icon: 'coffee',
  },
  {
    path: 'https://www.google.com',
    name: 'Your Order',
    icon: 'receipt',
  },
  {
    path: 'https://www.google.com',
    name: 'Favorites',
    icon: 'heart',
  },
]
